import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";

export const prerender = false;

// Discord só gera avatar CDN quando o usuário tem um; sem isso, cai num dos 6 avatares padrão.
const avatarUrl = (id: string, avatar: string | null) =>
	avatar ? `https://cdn.discordapp.com/avatars/${id}/${avatar}.png` : `https://cdn.discordapp.com/embed/avatars/${Number(BigInt(id) >> 22n) % 6}.png`;

export const GET: APIRoute = async ({ redirect, session, url }) => {
	const code = url.searchParams.get("code");
	const state = url.searchParams.get("state");
	const salvo = await session!.get("oauthState");
	session!.delete("oauthState");
	if (!code || !state || !salvo || state !== salvo.valor) return redirect("/?erro=login");

	const token = await fetch("https://discord.com/api/oauth2/token", {
		method: "POST",
		headers: { "content-type": "application/x-www-form-urlencoded" },
		body: new URLSearchParams({
			client_id: env.DISCORD_CLIENT_ID,
			client_secret: env.DISCORD_CLIENT_SECRET,
			grant_type: "authorization_code",
			code,
			redirect_uri: new URL("/api/auth/callback", url).href,
		}),
	}).then((r) => r.json<{ access_token?: string }>());
	if (!token.access_token) return redirect("/?erro=login");

	const perfil = await fetch("https://discord.com/api/users/@me", {
		headers: { authorization: `Bearer ${token.access_token}` },
	}).then((r) => r.json<{ id: string; username: string; avatar: string | null }>());

	session!.set("usuario", { id: perfil.id, login: perfil.username, avatar: avatarUrl(perfil.id, perfil.avatar) });
	return redirect(salvo.voltar);
};
