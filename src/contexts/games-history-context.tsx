import React, { createContext, useState } from "react";
import { GameInfo } from "../models/game.model";

export const GameHistoryContext = createContext<[GameInfo[] | null, React.Dispatch<GameInfo[]>]>([null!, () => null!]);

export function GameHistoryContextProvider(props: { children: JSX.Element }) {
    const [games, setGames] = useState<GameInfo[] | null>([]);

    return (
        <GameHistoryContext.Provider value={[games, setGames]}>
            {props.children}
        </GameHistoryContext.Provider>
    );
}