import ChatRoom from "./components/ChatRoom";

const username = prompt("Enter a username") || "Anonymous";

export default function App() {
  return (
    <>
      <div className="overflow-hidden w-screen h-screen bg-slate-700 text-white">
        <ChatRoom username={username} />
      </div>
    </>
  );
}
