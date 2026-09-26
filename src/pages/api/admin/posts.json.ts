import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";
import { getCollection } from "astro:content";

export const prerender = false;

const REPO = "goul4rt/aniimo-blog";
const BRANCH = "main";
const GH_API = "https://api.github.com";

function autorizado(usuario: { id: string } | undefined) {
	if (!usuario) return false;
	return env.ADMIN_DISCORD_IDS.split(",").map((s) => s.trim()).includes(usuario.id);
}

function ghHeaders() {
	return {
		authorization: `Bearer ${env.ADMIN_GITHUB_PAT}`,
		accept: "application/vnd.github+json",
		"x-github-api-version": "2022-11-28",
		"user-agent": "aniimo-blog-admin",
	};
}

// Só letras/números/hífen, sem acento — evita quebrar a URL do post.
function slugify(s: string) {
	return s
		.normalize("NFD")
		.replace(/[̀-ͯ]/g, "")
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/^-+|-+$/g, "");
}

function yamlString(s: string) {
	return `"${s.replace(/\\/g, "\\\\").replace(/"/g, '\\"')}"`;
}

function frontmatter(p: {
	title: string; description: string; category: string; image: string; tags: string[]; published: string; author: string;
}) {
	const linhas = [
		"---",
		`title: ${yamlString(p.title)}`,
		`published: ${p.published}`,
		`description: ${yamlString(p.description)}`,
		`author: ${yamlString(p.author)}`,
		`category: ${yamlString(p.category)}`,
	];
	if (p.image) linhas.push(`image: ${yamlString(p.image)}`);
	if (p.tags.length) linhas.push(`tags: [${p.tags.map(yamlString).join(", ")}]`);
	linhas.push("---", "");
	return linhas.join("\n");
}

export const GET: APIRoute = async ({ session }) => {
	if (!autorizado(await session!.get("usuario"))) return Response.json({ erro: "Sem acesso." }, { status: 403 });
	const posts = await getCollection("posts");
	return Response.json(
		posts
			.map((p) => ({ slug: p.id, title: p.data.title, published: p.data.published }))
			.sort((a, b) => +b.published - +a.published),
	);
};

export const POST: APIRoute = async ({ request, session }) => {
	const usuario = await session!.get("usuario");
	if (!autorizado(usuario)) return Response.json({ erro: "Sem acesso." }, { status: 401 });

	const corpo = await request.json().catch(() => null) as {
		slug?: unknown; title?: unknown; description?: unknown; category?: unknown;
		image?: unknown; tags?: unknown; published?: unknown; body?: unknown;
	} | null;

	const title = typeof corpo?.title === "string" ? corpo.title.trim() : "";
	const body = typeof corpo?.body === "string" ? corpo.body.trim() : "";
	if (!title || !body) return Response.json({ erro: "Título e conteúdo são obrigatórios." }, { status: 400 });

	const slugInformado = typeof corpo?.slug === "string" ? corpo.slug.trim() : "";
	const slug = slugify(slugInformado || title);
	if (!slug) return Response.json({ erro: "Slug inválido." }, { status: 400 });

	const published = typeof corpo?.published === "string" && corpo.published ? corpo.published : new Date().toISOString().slice(0, 10);
	const tags = typeof corpo?.tags === "string"
		? corpo.tags.split(",").map((t) => t.trim()).filter(Boolean)
		: [];

	const conteudo = frontmatter({
		title,
		description: typeof corpo?.description === "string" ? corpo.description.trim() : "",
		category: typeof corpo?.category === "string" && corpo.category.trim() ? corpo.category.trim() : "Guias",
		image: typeof corpo?.image === "string" ? corpo.image.trim() : "",
		tags,
		published,
		author: usuario!.login,
	}) + body + "\n";

	const path = `src/content/posts/${slug}.md`;

	// Se o arquivo já existe (edição), precisa do sha atual pra sobrescrever.
	const atual = await fetch(`${GH_API}/repos/${REPO}/contents/${path}?ref=${BRANCH}`, { headers: ghHeaders() });
	const sha = atual.ok ? ((await atual.json()) as { sha: string }).sha : undefined;

	const commit = await fetch(`${GH_API}/repos/${REPO}/contents/${path}`, {
		method: "PUT",
		headers: ghHeaders(),
		body: JSON.stringify({
			message: `${sha ? "Atualiza" : "Cria"} post: ${title}`,
			content: Buffer.from(conteudo, "utf-8").toString("base64"),
			branch: BRANCH,
			sha,
		}),
	});

	if (!commit.ok) {
		const erro = await commit.text();
		return Response.json({ erro: `GitHub: ${erro.slice(0, 300)}` }, { status: 502 });
	}

	return Response.json({ slug, publicado: true }, { status: sha ? 200 : 201 });
};

export const DELETE: APIRoute = async ({ session, url }) => {
	const usuario = await session!.get("usuario");
	if (!autorizado(usuario)) return Response.json({ erro: "Sem acesso." }, { status: 401 });

	const slug = url.searchParams.get("slug");
	if (!slug) return Response.json({ erro: "Slug obrigatório." }, { status: 400 });
	const path = `src/content/posts/${slug}.md`;

	const atual = await fetch(`${GH_API}/repos/${REPO}/contents/${path}?ref=${BRANCH}`, { headers: ghHeaders() });
	if (!atual.ok) return Response.json({ erro: "Post não encontrado." }, { status: 404 });
	const { sha } = (await atual.json()) as { sha: string };

	const del = await fetch(`${GH_API}/repos/${REPO}/contents/${path}`, {
		method: "DELETE",
		headers: ghHeaders(),
		body: JSON.stringify({ message: `Apaga post: ${slug}`, branch: BRANCH, sha }),
	});
	if (!del.ok) return Response.json({ erro: "Não deu pra apagar." }, { status: 502 });
	return new Response(null, { status: 204 });
};
