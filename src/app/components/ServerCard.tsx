import { FC } from "react";
import { ServerData } from "../types";

interface ServerCardProps {
    server: ServerData;
}

const ServerCard: FC<ServerCardProps> = ({ server }) => {
    const { name, players, status, version, type, region, mods } = server;
    const serverMods = mods.join(", ");

    const cardClass =
        status === "online"
            ? "border-green-400 bg-green-50 dark:border-green-600 dark:bg-green-900"
            : "border-red-400 bg-red-50 dark:border-red-600 dark:bg-red-900";

    const badgeClass =
        status === "online"
            ? "border-green-400 bg-green-100 text-green-600 dark:bg-green-700 dark:text-green-200"
            : "border-red-400 bg-red-100 text-red-600 dark:bg-red-700 dark:text-red-200";

    return (
        <div
            className={`p-6 rounded-lg shadow-md border transition-all duration-300 ease-in-out ${cardClass}`}
        >
            <div className="flex items-center justify-between gap-4">
                <h2 className="text-lg font-semibold text-black dark:text-gray-200 truncate">
                    {name}
                </h2>
                <span
                    className={`px-4 py-2 text-xs sm:text-sm font-semibold rounded-full uppercase ${badgeClass}`}
                >
                    {status}
                </span>
            </div>
            <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 text-sm sm:text-md text-gray-700 dark:text-gray-300">
                <div className="space-y-2">
                    <p>
                        <strong>Region:</strong> {region}
                    </p>
                    <p>
                        <strong>Players:</strong> {players}
                    </p>
                </div>
                <div className="space-y-2">
                    <p>
                        <strong>Type:</strong> {type}
                    </p>
                    <p>
                        <strong>Version:</strong> {version}
                    </p>
                </div>
                <div className="col-span-1 md:col-span-2">
                    <p>
                        <strong>Mods:</strong> {serverMods}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ServerCard;
