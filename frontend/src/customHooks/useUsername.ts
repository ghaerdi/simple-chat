import { FormEvent, useState } from "react";

export default function useUsername() {
  const [username, setUsername] = useState(
    localStorage.getItem("username") || ""
  );

  function saveUsername(e: FormEvent) {
    e.preventDefault();

    localStorage.setItem("username", username);
  }

  return { username, setUsername, saveUsername };
}
