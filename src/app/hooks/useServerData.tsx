import { useState, useEffect } from "react";
import { ServerData } from "../types";
import { validate } from "../utils";

export const useServerData = () => {
    const [serverData, setServerData] = useState<ServerData[] | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchServerData = async () => {
            try {
                const response = await fetch("/api/mock");
                if (!response.ok) {
                    throw new Error("Failed to fetch server data");
                }
                const data = await response.json();
                setServerData(validate(data));
            } catch (err: any) {
                setError(err.message || "An unknown error occurred");
            } finally {
                setLoading(false);
            }
        };

        fetchServerData();
    }, []);

    return { serverData, error, loading };
};
