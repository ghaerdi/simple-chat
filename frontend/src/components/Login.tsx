import { FormEvent } from "react";
import useUsername from "../customHooks/useUsername";

interface Props {
  username: string;
  saveUsername: (e: FormEvent) => void;
  setUsername: (u: string) => void;
}

export default function Login({ saveUsername, setUsername }: Props) {
  return (
    <div className="absolute bg-gray-900 w-screen h-screen backdrop-blur-md">
      <form>
        <input placeholder="Type a username" />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}
