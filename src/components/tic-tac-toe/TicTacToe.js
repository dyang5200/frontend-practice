import { useState } from 'react';
import './styles.css';

// 0 1 2
// 3 4 5
// 6 7 8

const size = 3;
const winning_combinations = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

export default function TicTacToe() {
    // Keep track of whose turn it is, 'X' or 'O'
    const [turn, setTurn] = useState('X');
    // Array to represent the board, 'X' or 'O' or null
    const [board, setBoard] = useState(Array(size * size).fill(null));

    // Array of all X indices on the board
    const [xPositions, setXPositions] = useState(new Set());
    // Array of all O indices on the board
    const [oPositions, setOPositions] = useState(new Set());

    const [winner, setWinner] = useState();
    const [isOver, setIsOver] = useState(false);

    function handleClick(index) {
        // Can't click if this square is already taken
        if (board[index]) {
            return;
        }

        const newBoard = board;
        newBoard[index] = turn;
        setBoard(newBoard);
        checkWinner(index);
        setTurn(turn === 'X' ? 'O' : 'X');
    }

    function checkWinner(index) {
        const isX = turn === "X";
        let newPositions = isX ? xPositions : oPositions;
        newPositions.add(index);
        isX ? setXPositions(newPositions) : setOPositions(newPositions);

        // Board filled
        if (xPositions.size + oPositions.size === board.length) {
            setIsOver(true);
        }

        for (let i = 0; i < winning_combinations.length; i++) {
            let marksCount = 0;
            for (let j = 0; j < winning_combinations.length; j++) {
                if (!newPositions.has(winning_combinations[i][j])) {
                    break;
                }
                marksCount++;
                if (marksCount === size) {
                    setWinner(turn);
                    setIsOver(true);
                    break;
                }
            }
        }
    }

    function handleReset() {
        setTurn('X');
        setBoard(Array(size * size).fill(null));
        setXPositions(new Set());
        setOPositions(new Set());
        setIsOver(false);
        setWinner(null);
    }


    return (
        <div>
            <div className='message'>
                {isOver ? ((winner ? ("Player " + winner + " wins!") : "Draw")) : ("Player " + turn + "'s turn")}
            </div>
            <div className='grid-container'>
                {board.map((_, index) => {
                    return (
                        <div className='grid-item' tabIndex={index} onClick={() => handleClick(index)}>
                            {board[index]}
                        </div>
                    )
                })}
            </div>
            <button onClick={() => handleReset()}> Reset </button>
        </div>
    );
}
