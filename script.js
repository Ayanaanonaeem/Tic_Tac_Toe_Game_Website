let gameBoard = [];
let currentPlayer = 'X';
let gameOver = false;

// Initialize the game board
for (let i = 0; i < 9; i++) {
    gameBoard.push('');
    document.getElementById(`cell-${i}`).addEventListener('click', () => {
        if (!gameOver && gameBoard[i] === '') {
            gameBoard[i] = currentPlayer;
            document.getElementById(`cell-${i}`).innerHTML = currentPlayer;
            document.getElementById(`cell-${i}`).classList.add(currentPlayer.toLowerCase());
            checkWin();
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    });
}

// Check for a win
function checkWin() {
    const winConditions = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for (let i = 0; i < winConditions.length; i++) {
        const condition = winConditions[i];
        if (gameBoard[condition[0]] === gameBoard[condition[1]] && gameBoard[condition[1]] === gameBoard[condition[2]] && gameBoard[condition[0]] !== '') {
            gameOver = true;
            alert(`Player ${gameBoard[condition[0]]} wins!`);
            return;
        }
    }

    // Check for a draw
    if (!gameBoard.includes('')) {
        gameOver = true;
        alert('It\'s a draw!');
    }
}