import { useContext, useId, useMemo, useState } from "react";
import { GameHistoryContext } from "../../contexts/games-history-context";
import { useCountdown } from "../../hooks/useCountdown";
import { getRandomData } from "../../uitls";
import { GameInfoCard } from "../game-info-card/game-info-card";
import { Square } from "../square/square";
import "./board.scss";

export function Board() {
    const id = useId()
    const [startGame, setStartGame] = useState(false)
    const [winGame, setWinGame] = useState(false)
    const [strikes, setStrikes] = useState(0)
    const [games, setGames] = useContext(GameHistoryContext)
    const [gameTime, setGameTime] = useState({
        begin: new Date(),
        end: new Date()
    })

    const [hours, minutes, seconds] = useCountdown(gameTime.begin, gameTime.end)
    // eslint-disable-next-line react-hooks/exhaustive-deps
    const data = useMemo(() => getRandomData(5), [startGame])
    const gameHistory = useMemo(() => games.sort((a, b) => b.shots - a.shots), [games]);

    const handlePlayAgain = () => {
        setStartGame(false)
        setWinGame(false)
        setStrikes(0)
        setGames([...games!, {
            date: `${gameTime.begin.toLocaleDateString()}, ${gameTime.begin.toLocaleTimeString()}`,
            shots: strikes,
            duration: {
                hours: hours,
                minutes: minutes,
                seconds: seconds
            }
        }])
    }

    const handleStartGame = () => {
        setStartGame(true)
        setGameTime({ ...gameTime, begin: new Date() })
    }

    const handleWinGame = () => {
        setWinGame(true)
        setGameTime({ ...gameTime, end: new Date() })
    }

    return (
        <>
            <h2>Airplanes battlefield</h2>
            <div className="board">
                <div className="left-side">
                    {winGame && <h1> Game Over. You WIN !!!</h1>}
                    {winGame && <h4>Strikes: {strikes}</h4>}
                    {startGame && data.map((row, index) => (
                        <div className="board-row" key={`${id}-r${index}`}>
                            {row.map((el, elementIndex) =>
                                <Square
                                    value={el}
                                    key={`${id}-c${elementIndex}`}
                                    winGame={handleWinGame}
                                    countStrike={() => setStrikes(strikes + 1)} />)
                            }
                        </div>
                    ))}
                    {!startGame && <button className="button" onClick={handleStartGame}>Start Game</button>}
                    {winGame && <button className="button" onClick={handlePlayAgain}>Play Again</button>}
                </div>
                {gameHistory.length ? <div className="right-side">
                    <h3>Game History</h3>
                    <div className="cards">
                        {gameHistory.map((el) => <GameInfoCard key={`${el.date} - ${el.duration.seconds}`} gameInfo={el} />)}
                    </div>
                </div> : <></>}
            </div>
        </>
    )
}