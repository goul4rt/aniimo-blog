import type { APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = ({ redirect, session, url }) => {
	session!.destroy();
	return redirect(url.searchParams.get("voltar") || "/");
};
