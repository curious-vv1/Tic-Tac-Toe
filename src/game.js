import React, { useState } from "react";
import Board from "./board";


function Game() {

    const [xIsNext, setXisNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const currentSquares = history[history.length - 1];


    function handlePlay(nextSquares) {
        setHistory([...history, nextSquares]);
        setXisNext(!xIsNext);

    }



    return (
        <div className="game">
            <div className="game-board">
                <Board isXnext={xIsNext} squares={currentSquares} onPlay={handlePlay} />
            </div>
            <div className="game-info">
                <ol>{/*TODO*/}</ol>
            </div>
        </div>
    );
}


export default Game;