import { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (client) => {
  client.on("message", (msg, isBinary) => {
		const message = isBinary ? msg.toString() : msg;

    [...wss.clients]
      .filter((c) => c !== client)
      .forEach((c) => c.send(message));
  });
});
