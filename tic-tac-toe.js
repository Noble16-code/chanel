const canvas = document.createElement('canvas');
document.body.appendChild(canvas);
canvas.width = 300;
canvas.height = 300;

const ctx = canvas.getContext('2d');
const CELL_SIZE = 100;
const LINE_COLOR = '#000';
const FONT_SIZE = 50;
const font = `${FONT_SIZE}px Arial`;

let board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
let players = ['X', 'O'];
let currentPlayer = 0;

function drawGrid() {
    ctx.strokeStyle = LINE_COLOR;
    ctx.lineWidth = 2;
    for (let i = 1; i < 3; i++) {
        ctx.moveTo(i * CELL_SIZE, 0);
        ctx.lineTo(i * CELL_SIZE, 300);
        ctx.stroke();
        ctx.moveTo(0, i * CELL_SIZE);
        ctx.lineTo(300, i * CELL_SIZE);
        ctx.stroke();
    }
}

function printBoard() {
    ctx.font = font;
    ctx.fillStyle = LINE_COLOR;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            const text = board[i][j];
            ctx.fillText(text, j * CELL_SIZE + CELL_SIZE / 4, i * CELL_SIZE + 3 * CELL_SIZE / 4);
        }
    }
}

function checkWinner(player) {
    for (let i = 0; i < 3; i++) {
        if (board[i].every(cell => cell === player)) return true;
        if (board.every(row => row[i] === player)) return true;
    }
    if (board[0][0] === player && board[1][1] === player && board[2][2] === player) return true;
    if (board[0][2] === player && board[1][1] === player && board[2][0] === player) return true;
    return false;
}

function isBoardFull() {
    return board.every(row => row.every(cell => cell !== ' '));
}

canvas.addEventListener('click', (event) => {
    const x = event.offsetX;
    const y = event.offsetY;
    const row = Math.floor(y / CELL_SIZE);
    const col = Math.floor(x / CELL_SIZE);

    if (board[row][col] === ' ') {
        board[row][col] = players[currentPlayer];
        if (checkWinner(players[currentPlayer])) {
            alert("Chanel Wins. You're always right ma'am");
            resetGame();
        } else if (isBoardFull()) {
            alert("Chanel Wins. You're always right ma'am");
            resetGame();
        } else {
            currentPlayer = 1 - currentPlayer;
        }
    }
    render();
});

function resetGame() {
    board = [[' ', ' ', ' '], [' ', ' ', ' '], [' ', ' ', ' ']];
    currentPlayer = 0;
}

function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawGrid();
    printBoard();
}

render();
