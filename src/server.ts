import { serve } from "@hono/node-server";
import { Hono } from "hono";

export const server = new Hono();

const port = Number(process.env.PORT) || 3000;
serve({ fetch: server.fetch, port }, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
