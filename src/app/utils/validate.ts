import { ServerData } from "../types"

const validate = (data: ServerData[]) => {
    return data.map((server) => {
        const [currentPlayers] = server.players.split("/").map(Number);

        if (server.status === "offline" && currentPlayers > 0) {
            return {
                ...server,
                players: "0/0",
            };
        }
        return server;
    });
};

export default validate;
