import { useEffect, useRef, useState } from "react";
import Message from "./UI/message";
import useMessage from "../customHooks/useMessage";
import ws from "../chat";

interface Props {
  username: string;
}

export default function ChatRoom({ username }: Props) {
  const { message, messages, setMessage, setMessages, sendMessage } =
    useMessage(username);

  const divRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    ws.onmessage = async (event) => {
      const content = await event.data.text();
      const msg = { isMe: false, ...JSON.parse(content) };
      setMessages([...messages, msg]);
    };

    divRef.current?.scrollIntoView();
  }, [messages]);


  useEffect(() => {
    divRef.current?.scrollIntoView();
  }, [message]);

  return (
    <>
      <div className="flex flex-col h-[calc(100%-50px)] overflow-auto gap-1 p-2">
        {messages.map(({ username, content, isMe }, i) => (
          <Message
            className={isMe ? "self-end" : "self-start"}
            key={i}
            isMe={isMe}
            username={username}
            content={content}
          />
        ))}
        <div ref={divRef} />
      </div>

      <form
        className="h-[50px] flex gap-3 justify-around absolute bottom-0 w-full bg-gray-800 p-1"
        onSubmit={sendMessage}
      >
        <input
          className="bg-transparent p-1 w-full outline-none"
          placeholder="Write a message"
          type="text"
          value={message}
          onChange={(el) => setMessage(el.target.value)}
        />

        <button
          className="bg-violet-600 shadow shadow-violet-600/50 px-4 uppercase font-medium tracking-widest"
          type="submit"
        >
          Send
        </button>
      </form>
    </>
  );
}
