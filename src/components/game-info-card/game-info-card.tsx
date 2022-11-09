import { GameInfo } from "../../models/game.model";
import "./game-info-card.scss";

export function GameInfoCard(props: {
    gameInfo: GameInfo
}) {
    const { gameInfo } = props;
    return (
        <div className="game-info">
            <p><span>Date: </span> {gameInfo.date}</p>
            <p><span>Shots: </span> {gameInfo.shots}</p>
            <p><span>Duration: </span> {`${gameInfo.duration.hours} hours, ${gameInfo.duration.minutes} minutes and ${gameInfo.duration.seconds} seconds`}</p>
        </div>
    )
}