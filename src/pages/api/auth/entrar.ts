import type { APIRoute } from "astro";
import { env } from "cloudflare:workers";

export const prerender = false;

export const GET: APIRoute = ({ redirect, session, url }) => {
	const valor = crypto.randomUUID();
	const voltar = url.searchParams.get("voltar") || "/";
	session!.set("oauthState", { valor, voltar });

	const destino = new URL("https://discord.com/oauth2/authorize");
	destino.searchParams.set("client_id", env.DISCORD_CLIENT_ID);
	destino.searchParams.set("redirect_uri", new URL("/api/auth/callback", url).href);
	destino.searchParams.set("response_type", "code");
	destino.searchParams.set("scope", "identify");
	destino.searchParams.set("state", valor);
	return redirect(destino.href);
};
