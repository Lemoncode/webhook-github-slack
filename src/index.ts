import { SLACK_CHANNEL_URL } from "./constants";
import { server } from "./server";

server.post("/webhook", async (c) => {
  const payload = await c.req.json();
  const commit = payload.commits[0] || {};

  await fetch(SLACK_CHANNEL_URL, {
    method: "POST",
    body: JSON.stringify({
      text: `El usuario *${commit.author.name}* ha hecho un commit con el mensaje: *${commit.message}* \n ${commit.url}`,
    }),
    headers: { "Content-Type": "application/json" },
  });

  c.status(204);
  return c.body(null);
});
