import type { Message as IMessage } from "../../types";

interface Props extends IMessage {
  className: string;
}

export default function Message({ username, content, isMe, className }: Props) {
  return (
    <div
      className={`${className} break-all shadow-lg rounded p-2 ${
        isMe
          ? "bg-violet-600 shadow-violet-600/50"
          : "bg-gray-600 shadow-gray-600/50"
      }`}
    >
      {isMe || <h3 className="text-xs">{username}</h3>}
      <span>{content}</span>
    </div>
  );
}
