let board = ['', '', '', '', '', '', '', '', ''];
        let currentPlayer = 'X';
        let gameActive = true;

        function createBoard() {
            const boardElement = document.getElementById('board');
            boardElement.innerHTML = '';
            board.forEach((cell, index) => {
                const cellElement = document.createElement('div');
                cellElement.classList.add('cell');
                cellElement.innerText = cell;
                cellElement.addEventListener('click', () => makeMove(index));
                boardElement.appendChild(cellElement);
            });
        }

        function makeMove(index) {
            if (board[index] === '' && gameActive) {
                board[index] = currentPlayer;
                checkWinner();
                currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
                createBoard();
            }
        }

        function checkWinner() {
            const winPatterns = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8],
                [0, 3, 6], [1, 4, 7], [2, 5, 8],
                [0, 4, 8], [2, 4, 6]
            ];
            winPatterns.forEach(pattern => {
                const [a, b, c] = pattern;
                if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                    gameActive = false;
                    document.getElementById('winner').innerText = `Player ${board[a]} Wins!`;
                }
            });
            if (!board.includes('') && gameActive) {
                document.getElementById('winner').innerText = "It's a Draw!";
                gameActive = false;
            }
        }

        function resetGame() {
            board = ['', '', '', '', '', '', '', '', ''];
            currentPlayer = 'X';
            gameActive = true;
            document.getElementById('winner').innerText = '';
            createBoard();
        }

        createBoard();