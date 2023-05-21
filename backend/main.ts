import { WebSocketServer } from "https://deno.land/x/websocket@v0.1.4/mod.ts";

const wss = new WebSocketServer(8080);

wss.on("connection", (client) => {
  client.on("message", (message) => {
    Array.from(wss.clients)
      .filter((c) => c !== client)
      .forEach((c) => c.send(message));
  });
});
