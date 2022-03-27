import type { Message } from "../types";
import { FormEvent, useState } from "react";
import ws from "../chat";

export default function useMessage(username: Message["username"]) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [message, setMessage] = useState("");

  function sendMessage(e: FormEvent) {
    e.preventDefault();
		if (!message) return;

    const msg = { username, content: message };

    ws.send(JSON.stringify(msg));
    setMessages([...messages, { ...msg, isMe: true }]);
    setMessage("");
  }

  return { message, messages, setMessage, setMessages, sendMessage };
}
