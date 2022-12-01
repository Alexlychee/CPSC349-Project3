
let board = document.getElementsByClassName('tile');
const All_Possible_Wins = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const player1 = 'O';
const player2 = 'X';
let turn = 0;

for(let i = 0; i < board.length; i++) {
    board[i].addEventListener('click', (e) => {
        if (turn == 0) {
            board[i].textContent = 'O';
            turn += 1;
        }
        else {
            board[i].textContent = 'X';
            turn -= 1;
        }
    })
}




