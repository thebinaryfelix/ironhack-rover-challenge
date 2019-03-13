class Rover {
  constructor(name, board) {
    this.name = name;
    this.board = board;
    this.width = 30;
    this.height = 30;
    this.pos = [this.x, this.y];
    this.positionIncrement = 10;
    
    // SIGA AS INSTRUÇÕES COMENTADAS A SEGUIR
    
    // Rover inicia na posição 'N'
    this.dir;
    
    // Crie duas propriedades: x e y que receberão as posições iniciais do rover.
    // Lembre-se de usar 'this' antes das propriedades
    // ***


    // *** Crie aqui a propriedade travelLog para armazenar as posições por onde o rover esteve
  }

  // Complete a função de virar o rover para a esquerda
  turnLeft() {
    // *** Escreva o código nas linhas abaixo
    
    


    return 'turnLeft() was called!';
  }

  // Complete a função de virar o rover para a direita
  turnRight() {
    // *** Escreva o código nas linhas abaixo
    
    


    return 'turnRight() was called!'; 
  }

  // Para mover o rover com as funções abaixo, pode ser útil usar a propriedade 'positionIncrement'
  // Ao invés de incrementar a posição de 1 em 1 unidade

  // Complete a função para mover o rover para frente
  moveForward() {
    // *** Escreva o código nas linhas abaixo
    
    


    return 'moveForward() was called!'
  }

  // Complete a função para mover o rover para trás
  moveBackwards() {
    // *** Escreva o código nas linhas abaixo
    
    


    return 'moveBackwards() was called!';
  }

  // Este método deve verificar se o rover chegou à borda do canvas
  checkBoardLimits() {
    // Sobre o Canvas:
    // - Tem tamanho 500px x 500px
    // - O canto superior esquerdo é a posição [0, 0] e o inferior direito [500, 500]
    // Sobre o Rover:
    // - O tamanho do rover (quadrado verde) é de 30px x 30px
    // - O canto superior esquerdo é a posição [0, 0] e o inferior direito [30, 30]

    // retorne true caso o rover tenha atingido alguma borda.
  }

  // Que tal trocar o quadrado verde por algo mais divertido?
  // Olhar a documentação é sempre bom: 
  // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/drawImage
  drawRover() {
    this.board.ctx.fillStyle = 'green';
    this.board.ctx.fillRect(this.pos[0], this.pos[1], this.width, this.height);
  }
}