import React, { createContext, useState } from "react";
import { GameInfo } from "../models/game.model";

export const GameHistoryContext = createContext<[GameInfo[], React.Dispatch<GameInfo[]>]>([[], () => {}]);

export function GameHistoryContextProvider(props: { children: JSX.Element }) {
    const [games, setGames] = useState<GameInfo[]>([]);

    return (
        <GameHistoryContext.Provider value={[games, setGames]}>
            {props.children}
        </GameHistoryContext.Provider>
    );
}