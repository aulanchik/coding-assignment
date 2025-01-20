"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const [serverData, setServerData] = useState(null);
  useEffect(() => {
    const fetchServerData = async () => {
      try {
        const response = await fetch("/api/mock");
        const data = await response.json();
        setServerData(data);
      } catch (error) {
        console.error("Failed to fetch server data:", error);
      }
    };

    fetchServerData();
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-2xl font-bold">Minecraft Server List</h1>
        <p className="text-gray-600">
          Below is the JSON data fetched from <code>/api/mock</code>. Use it to
          build the UI.
        </p>
        <pre className="bg-gray-200 text-gray-800 p-4 rounded-lg w-full overflow-auto max-w-4xl text-sm">
          {serverData ? JSON.stringify(serverData, null, 2) : "Loading data..."}
        </pre>
      </main>
    </div>
  );
}
