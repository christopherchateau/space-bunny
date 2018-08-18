const Obstacle = require('./Obstacle');
const Player = require('./Player');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;
    this.player = new Player()
    this.lanes = [
      [-1, 2, 'sprite-name'],
      [1, 1, 'sprite-name'],
      [-1, 2, 'sprite-name'],
      [1, 3, 'sprite-name'],
      [-1, 1, 'sprite-name'],

      [-1, 3, 'sprite-name'],
      [1, 1, 'sprite-name'],
      [1, 2, 'sprite-name'],
      [-1, 1, 'sprite-name'],
      [1, 2, 'sprite-name'],

    ];
    this.obstacles = [
       // new Obstacle()
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
    this.obstacles.forEach( obstacle => {
      this.handleObstacle(obstacle);
      obstacle.draw(this.ctx);
    });
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