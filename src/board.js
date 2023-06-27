import React from "react";
import Square from "./square";


function Board({isXnext,squares,onPlay}) {


    function handleClick(i) {
        if (squares[i] || calculateWinner(squares)) {
            return;
        }
        const nextSquares = squares.slice();
        if (isXnext) {
            nextSquares[i] = "X";
        }
        else {
            nextSquares[i] = "O";
        }
        onPlay(nextSquares);
    }

    let winner=calculateWinner(squares);
    let status;
    if(winner){
        status=winner + "Won!!!";
    }
    else{
        status="Next move"+(isXnext ? "X":"O");
    }



    return (
        <div>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square value={squares[0]} squareClick={() => handleClick(0)} />
                <Square value={squares[1]} squareClick={() => handleClick(1)} />
                <Square value={squares[2]} squareClick={() => handleClick(2)} />
            </div>
            <div className="board-row">
                <Square value={squares[3]} squareClick={() => handleClick(3)} />
                <Square value={squares[4]} squareClick={() => handleClick(4)} />
                <Square value={squares[5]} squareClick={() => handleClick(5)} />
            </div>
            <div className="board-row">
                <Square value={squares[6]} squareClick={() => handleClick(6)} />
                <Square value={squares[7]} squareClick={() => handleClick(7)} />
                <Square value={squares[8]} squareClick={() => handleClick(8)} />
            </div>
        </div>
    )
}


function calculateWinner(squares) {
    const lines = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    for (let i = 0; i < lines.length; i++) {
        const [x, y, z] = lines[i];
        if (squares[x] && squares[x] === squares[y] && squares[x] === squares[z]) {
            return squares[x];
        }
    }
    return null;
}

export default Board;