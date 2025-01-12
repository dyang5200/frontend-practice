import { useState } from 'react';
import './styles.css';

// 0 1 2
// 3 4 5
// 6 7 8

export default function TicTacToe() {
    const [message, setMessage] = useState('Hello World!');
    // Keep track of whose turn it is, 'X' or 'O'
    const [turn, setTurn] = useState('X');
    // Array to represent the board, 'X' or 'O' or null
    const [board, setBoard] = useState(Array(9).fill(null));
    const [isOver, setIsOver] = useState(false);

    function handleClick(event) {
        const i = event.target.tabIndex;
        // Can't click if this square is already taken
        if (board[i]) {
            return;
        }

        const newBoard = board;
        newBoard[i] = turn;
        setBoard(newBoard);
        setTurn(turn === 'X' ? 'O' : 'X');

        // Check for draw case
        // Check for winner
    }


    return (
        <div>
            <div className='message'>
                {isOver ? ("Winning Message") : ("Player " + turn + "'s turn")}
            </div>
            <div className='grid-container'>
                {board.map((_, index) => {
                    return (
                        <div className='grid-item' tabIndex={index} onClick={handleClick}>
                            {board[index]}
                        </div>
                    )
                })}
            </div>
        </div>
    );
}

// function Square({ index, mark }) {
//     function handleClick() {
//         console.log("handle")
//     }

//     return (
//         <div className='grid-item' tabIndex={index} onClick={handleClick}>
//             {mark}
//         </div>
//     )
// }
