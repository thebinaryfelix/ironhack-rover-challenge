const startGameBtn = document.getElementById('start-game-btn');
const board = new Canvas('main-board');

startGameBtn.addEventListener('click', () => {
  board.start();
  if (board.gameStarted) {
    startGameBtn.innerText = 'Stop Game';
    startGameBtn.classList.remove('btn-start');
    startGameBtn.classList.add('btn-stop');
  } else {
    startGameBtn.innerText = 'Start Game';
    startGameBtn.classList.remove('btn-stop');
    startGameBtn.classList.add('btn-start');
  }
})
