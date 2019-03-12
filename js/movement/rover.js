class Rover {
  constructor(name, board) {
    this.name = name;
    this.board = board;
    this.width = 30;
    this.height = 30;
    this.positionIncrement = 10;
    
    // SIGA AS INSTRUÇÕES COMENTADAS A SEGUIR
    
    // Rover inicia na posição 'N'
    this.dir;
    // 'pos' é um Array, onde a posição [0] representará a coordenada X e [1] a coordenada Y
    this.pos = [];
  }

  // Complete a função de virar o rover para a esquerda
  turnLeft() {
    // *** Escreva o código nas linhas abaixo
    
    


    // ***
    return 'turnLeft() was called!';
  }

  // Complete a função de virar o rover para a direita
  turnRight() {
    // *** Escreva o código nas linhas abaixo
    
    


    // ***
    return 'turnRight() was called!'; 
  }

  // Para mover o rover com as funções abaixo, pode ser útil usar a propriedade 'positionIncrement'

  // Complete a função para mover o rover para frente
  moveForward() {
    // *** Escreva o código nas linhas abaixo
    
    


    // ***
    return 'moveForward() was called!'
  }

  // Complete a função para mover o rover para trás
  moveBackwards() {
    // *** Escreva o código nas linhas abaixo
    
    


    // ***
    return 'moveBackwards() was called!';
  }

  // Que tal trocar o quadrado verde por algo mais divertido?
  // Olhar a documentação é sempre bom: 
  // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
  drawRover() {
    this.board.ctx.fillStyle = 'green';
    this.board.ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
  }
}