"use client";
import { ServerCard, ThemeButton } from './components';
import { useServerData } from './hooks/useServerData';

export default function Home() {
  const { serverData, error, loading } = useServerData();

  if (loading) {
    return (
      <div className="text-center py-8">
        <p role="alert" className="text-gray-700 dark:text-gray-300">
          Loading data...
        </p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-8">
        <p role="alert" className="text-red-600 dark:text-red-400">
          Error: {error}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-white dark:bg-black">
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
          <header className="flex items-center justify-between w-full mb-8">
            <h1 className="text-2xl font-bold text-center text-black dark:text-white flex-1">
              Minecraft Server List
            </h1>
            <div className="flex-shrink-0 ml-4">
              <ThemeButton />
            </div>
          </header>
          <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {serverData?.map((server) => (
              <ServerCard key={server.id} server={server} />
            ))}
          </section>
        </main>
      </div>
    </div>
  );
}
