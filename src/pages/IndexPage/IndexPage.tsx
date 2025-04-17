import { useState } from "react";
import WebApp from "@twa-dev/sdk";

export function IndexPage() {
  const [threads, setThreads] = useState<string[]>([]);
  const [wishlist, setWishlist] = useState<string[]>([]);
  const [brand, setBrand] = useState("");
  const [number, setNumber] = useState("");
  const [mode, setMode] = useState<"have" | "wishlist">("have");

  const tg = WebApp;

  const handleAdd = () => {
    if (!brand || !number) return;
  
    const payload = {
      brand: brand.toUpperCase(),
      number,
      in_stock: mode === "have",
    };
  
    tg.sendData(JSON.stringify(payload));
    tg.close();
  };

  return (
    <div style={{ padding: 16 }}>
      <h2>Мои нити</h2>
      <div>
        <button onClick={() => setMode("have")}>У меня есть</button>
        <button onClick={() => setMode("wishlist")}>Хочу купить</button>
      </div>

      <input
        value={brand}
        onChange={(e) => setBrand(e.target.value)}
        placeholder="Бренд (например, DMC)"
      />
      <input
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        placeholder="Номер нити"
      />
      <button onClick={handleAdd}>Добавить</button>

      <ul>
        {(mode === "have" ? threads : wishlist).map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    </div>
  );
}