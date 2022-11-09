import { useState } from "react";
import "./square.scss";

export function Square(props: {
    value: number
    countStrike: () => void
    winGame: () => void
}) {
    const [reveal, setReveal] = useState(false)
    const { value, countStrike, winGame } = props;


    return (
        <div className="square-wrapper" onClick={() => {
            if (value) {
                winGame()
            }
            setReveal(true)
            countStrike()
        }}>
            <div className="square-value">{reveal ? (value ? "X" : "0") : ""}</div>
        </div>
    )
}