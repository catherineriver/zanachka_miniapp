import React, { useState } from "react";

export function IndexPage() {
  const [threads, setThreads] = useState<string[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [input, setInput] = useState("");
  const [mode, setMode] = useState<"have" | "wishlist">("have");

  const handleAdd = () => {
    if (!input) return;
    if (mode === "have") setThreads([...threads, input]);
    else setWishlist([...wishlist, input]);
    setInput("");
  };

  return (
    <div style={{ padding: 16 }}>
      <h2>Мои нити</h2>
      <div>
        <button onClick={() => setMode("have")}>У меня есть</button>
        <button onClick={() => setMode("wishlist")}>Хочу купить</button>
      </div>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Номер нити"
      />
      <button onClick={handleAdd}>Добавить</button>

      <ul>
        {(mode === "have" ? threads : wishlist).map((item, idx) => (
          <li key={idx}>Madeira {item}</li>
        ))}
      </ul>
    </div>
  );
}