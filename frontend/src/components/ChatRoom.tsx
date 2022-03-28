import { useEffect, useRef } from "react";
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
    <div className="h-[inherit] grid grid-rows-[50px_auto_50px] ">
      <header className="flex items-center justify-between h-14 w-screen bg-gray-900/75 backdrop-blur-md px-5">
        <h1 className="text-md uppercase tracking-wider">Welcome {username}</h1>
        <a
          href="https://github.com/ghaerdi/simple-chat"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/src/icons/github.svg"
            height={25}
            width={25}
            alt="github icon"
          />
        </a>
      </header>

      <div className="overflow-y-auto">
        <div className="min-h-full h-auto flex flex-col justify-end gap-1 p-2">
          {messages.map(({ username, content, isMe }, i) => (
            <Message
              className={`${isMe ? "self-end" : "self-start"}`}
              key={i}
              isMe={isMe}
              username={username}
              content={content}
            />
          ))}
          <div ref={divRef} />
        </div>
      </div>

      <form
        className="flex gap-3 justify-around w-full bg-gray-800 p-1"
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
    </div>
  );
}
