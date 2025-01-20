"use client";
import { useEffect, useState } from "react";
import { ServerCard } from './components';
import { ServerData } from './types';

export default function Home() {
  const [serverData, setServerData] = useState<ServerData[] | null>(null);

  useEffect(() => {
    const fetchServerData = async (): Promise<ServerData[]> => {
      const response = await fetch("/api/mock");
      if (!response.ok) throw new Error("Failed to fetch server data");
      return response.json();
    };

    fetchServerData()
      .then((data) => setServerData(data))
      .catch((error) => console.error("Error fetching server data:", error));
  }, []);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <header className="flex items-center justify-around mb-8">
          <h1 className="text-2xl font-bold text-center text-black dark:text-white flex-1">
            Minecraft Server List
          </h1>
        </header>
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {serverData ? (
            serverData.map((server) => (
              <ServerCard key={server.id} server={server} />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </section>
      </main>
    </div>
  );
}
