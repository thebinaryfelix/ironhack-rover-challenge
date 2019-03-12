class Canvas {
  constructor(boardID) {
    this.canvas = document.getElementById(boardID);
    this.ctx = this.canvas.getContext('2d');
    this.gameStarted = false;
    this.gameInteval;
    this.roverNameHolder = document.getElementById('rover-name');
    this.roverDirHolder = document.getElementById('rover-direction');
    this.roverPosHolder = document.getElementById('rover-position');
    this.rover = new Rover('IronRover', this);
  }

  clearBoard() {
    this.ctx.clearRect(0, 0, 500, 500);
  }

  drawElements() {
    this.rover.drawRover();
  }

  updateRoverInfo() {
    this.roverNameHolder.innerText = this.rover.name;
    this.roverDirHolder.innerText = this.rover.dir;
    this.roverPosHolder.innerText = `X: ${this.rover.pos[0]} Y: ${this.rover.pos[1]}`;
  }

  updateBoard() {
    this.drawElements();
    this.updateRoverInfo();
  }

  start() {
    this.gameStarted = (this.gameStarted) ? false : true;
    if (this.gameStarted) {
      this.gameInteval = setInterval(() => {
        this.clearBoard();
        this.updateBoard();
      }, 10);
    } else {
      clearInterval(this.gameInteval);
    }
  }
}