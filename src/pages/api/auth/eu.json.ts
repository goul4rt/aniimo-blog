import type { APIRoute } from "astro";

export const prerender = false;

export const GET: APIRoute = async ({ session }) => Response.json((await session!.get("usuario")) ?? null);
