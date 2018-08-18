const Obstacle = require('./Obstacle');
const Player = require('./Player');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;
    this.player = new Player(280, 480, 40, '/assets/images/bunny.png');
    this.lanes = [
      [-1, 2, '/assets/images/bunny.png'],
      [1, 1, '/assets/images/bunny.png'],
      [-1, 2, '/assets/images/car.png'],
      [1, 3, '/assets/images/bunny.png'],
      [-1, 1, '/assets/images/bunny.png'],

      [-1, 3, '/assets/images/bunny.png'],
      [1, 1, '/assets/images/bunny.png'],
      [1, 2, '/assets/images/bunny.png'],
      [-1, 1, '/assets/images/bunny.png'],
      [1, 2, '/assets/images/bunny.png'],

    ];
    this.obstacles = [
      new Obstacle(520, 440, 40, this.lanes[0][2], this.lanes[0][0], this.lanes[0][1]),
      new Obstacle(360, 440, 40, this.lanes[0][2], this.lanes[0][0], this.lanes[0][1]),
      new Obstacle(240, 440, 40, this.lanes[0][2], this.lanes[0][0], this.lanes[0][1]),
      new Obstacle(40, 440, 40, this.lanes[0][2], this.lanes[0][0], this.lanes[0][1]),

      new Obstacle(520, 400, 40, this.lanes[1][2], this.lanes[1][0], this.lanes[1][1]),
      new Obstacle(360, 400, 40, this.lanes[1][2], this.lanes[1][0], this.lanes[1][1]),
      new Obstacle(240, 400, 40, this.lanes[1][2], this.lanes[1][0], this.lanes[1][1]),
      new Obstacle(40, 400, 40, this.lanes[1][2], this.lanes[1][0], this.lanes[1][1]),

      new Obstacle(520, 360, 40, this.lanes[2][2], this.lanes[2][0], this.lanes[2][1]),
      new Obstacle(360, 360, 40, this.lanes[2][2], this.lanes[2][0], this.lanes[2][1]),
      new Obstacle(240, 360, 40, this.lanes[2][2], this.lanes[2][0], this.lanes[2][1]),
      new Obstacle(40, 360, 40, this.lanes[2][2], this.lanes[2][0], this.lanes[2][1]),

      new Obstacle(140, 320, 40, this.lanes[3][2], this.lanes[3][0], this.lanes[3][1]),
      new Obstacle(40, 320, 40, this.lanes[3][2], this.lanes[3][0], this.lanes[3][1]),

      new Obstacle(520, 280, 40, this.lanes[4][2], this.lanes[4][0], this.lanes[4][1]),
      new Obstacle(320, 280, 40, this.lanes[4][2], this.lanes[4][0], this.lanes[4][1]),
      new Obstacle(120, 280, 40, this.lanes[4][2], this.lanes[4][0], this.lanes[4][1]),

      new Obstacle(520, 200, 40, this.lanes[5][2], this.lanes[5][0], this.lanes[5][1]),
      new Obstacle(480, 200, 40, this.lanes[5][2], this.lanes[5][0], this.lanes[5][1]),
      new Obstacle(440, 200, 40, this.lanes[5][2], this.lanes[5][0], this.lanes[5][1]),
      new Obstacle(360, 200, 40, this.lanes[5][2], this.lanes[5][0], this.lanes[5][1]),
      new Obstacle(320, 200, 40, this.lanes[5][2], this.lanes[5][0], this.lanes[5][1]),
      new Obstacle(280, 200, 40, this.lanes[5][2], this.lanes[5][0], this.lanes[5][1]),

      new Obstacle(520, 160, 40, this.lanes[6][2], this.lanes[6][0], this.lanes[6][1]),
      new Obstacle(320, 160, 40, this.lanes[6][2], this.lanes[6][0], this.lanes[6][1]),
      new Obstacle(120, 160, 40, this.lanes[6][2], this.lanes[6][0], this.lanes[6][1]),

      new Obstacle(520, 120, 40, this.lanes[7][2], this.lanes[7][0], this.lanes[7][1]),
      new Obstacle(200, 120, 40, this.lanes[7][2], this.lanes[7][0], this.lanes[7][1]),
    
      new Obstacle(520, 80, 40, this.lanes[8][2], this.lanes[8][0], this.lanes[8][1]),
      new Obstacle(480, 80, 40, this.lanes[8][2], this.lanes[8][0], this.lanes[8][1]),
      new Obstacle(360, 80, 40, this.lanes[8][2], this.lanes[8][0], this.lanes[8][1]),
      new Obstacle(320, 80, 40, this.lanes[8][2], this.lanes[8][0], this.lanes[8][1]),
      new Obstacle(200, 80, 40, this.lanes[8][2], this.lanes[8][0], this.lanes[8][1]),
      new Obstacle(160, 80, 40, this.lanes[8][2], this.lanes[8][0], this.lanes[8][1]),

      new Obstacle(520, 40, 40, this.lanes[9][2], this.lanes[9][0], this.lanes[9][1]),
      new Obstacle(320, 40, 40, this.lanes[9][2], this.lanes[9][0], this.lanes[9][1]),
      new Obstacle(120, 40, 40, this.lanes[9][2], this.lanes[9][0], this.lanes[9][1])
    ];

  }


  //   let y = 50;

  //   for (let i = 1; i <= 5; i++) {
  //     let x = 350;

  //     for (let j = 1; j <= 9; j++) {
  //       let newObstacle = new Obstacle (x, y, 50, 50, 'green', 'black');

  //       if (i % 2) {
  //         if (j % 3 === 0) {
  //           x += 100;
  //         } else {
  //         x += 60;
  //         }
  //       } else {
  //         if (j % 3 === 0) {
  //           x -= 100;
  //         } else {
  //         x -= 60;
  //         }
  //         newObstacle.dx = -1;
  //       }
  //       this.blocks.push(newObstacle);
  //     }
  //     y += 50; 
  //   }
  // }

  // draw one frame of our game
  animate() {
    this.player.draw(this.ctx);
    this.obstacles.forEach( obstacle => {
      this.handleObstacle(obstacle);
      obstacle.draw(this.ctx);
    });
    this.player.draw(this.ctx);
  };


  handleObstacle(obstacle){
    const { canvas } = this.ctx;
    obstacle.move();
  }

  endGame() {
    this.gameOver = true;
  }

  isOver() {
    return this.gameOver;
  }

  togglePause() {
    this.paused = !this.paused;
  }

  handleKeyPress(e) {
    // const direction = {
    //   dx: 0,
    //   dy: 0
    // };


    // player.changeDirection(direction);
  }

}