const Obstacle = require('./Obstacle');
const Player = require('./Player');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;
    this.player = new Player(280, 480, '/assets/images/bunny.png', 40);
    this.lanes = [
      [-1, 2, '/assets/images/racecar.png', 80],
      [1, 1, '/assets/images/dozer.png', 80],
      [-1, 2, '/assets/images/car.png', 80],
      [1, 3, '/assets/images/fastcar.png', 80],
      [-1, 1, '/assets/images/truck.png', 80],

      [-1, 3, '/assets/images/safeasteroid.png', 120],
      [1, 1, '/assets/images/stableasteroid.png', 120],
      [1, 2, '/assets/images/stableasteroid.png', 240],
      [-1, 1, '/assets/images/safeasteroid.png', 80],
      [1, 2, '/assets/images/stableasteroid.png', 160],

    ];
    this.obstacles = [
      new Obstacle(520, 440, this.lanes[0][2], this.lanes[0][0], this.lanes[0][1]),
      new Obstacle(360, 440, this.lanes[0][2], this.lanes[0][0], this.lanes[0][1]),
      new Obstacle(240, 440, this.lanes[0][2], this.lanes[0][0], this.lanes[0][1]),
      new Obstacle(40, 440, this.lanes[0][2], this.lanes[0][0], this.lanes[0][1]),

      new Obstacle(520, 400, this.lanes[1][2], this.lanes[1][0], this.lanes[1][1]),
      new Obstacle(360, 400, this.lanes[1][2], this.lanes[1][0], this.lanes[1][1]),
      new Obstacle(240, 400, this.lanes[1][2], this.lanes[1][0], this.lanes[1][1]),

      new Obstacle(520, 360, this.lanes[2][2], this.lanes[2][0], this.lanes[2][1]),
      new Obstacle(360, 360, this.lanes[2][2], this.lanes[2][0], this.lanes[2][1]),
      new Obstacle(240, 360, this.lanes[2][2], this.lanes[2][0], this.lanes[2][1]),
      new Obstacle(40, 360, this.lanes[2][2], this.lanes[2][0], this.lanes[2][1]),

      new Obstacle(140, 320, this.lanes[3][2], this.lanes[3][0], this.lanes[3][1]),
      new Obstacle(40, 320, this.lanes[3][2], this.lanes[3][0], this.lanes[3][1]),

      new Obstacle(520, 280, this.lanes[4][2], this.lanes[4][0], this.lanes[4][1]),
      new Obstacle(320, 280, this.lanes[4][2], this.lanes[4][0], this.lanes[4][1]),
      new Obstacle(120, 280, this.lanes[4][2], this.lanes[4][0], this.lanes[4][1]),

      new Obstacle(520, 200, this.lanes[5][2], this.lanes[5][0], this.lanes[5][1], this.lanes[5][3]),
      // new Obstacle(320, 200, this.lanes[5][2], this.lanes[5][0], this.lanes[5][1], this.lanes[5][3]),
      // new Obstacle(200, 200, this.lanes[5][2], this.lanes[5][0], this.lanes[5][1], this.lanes[5][3]),
      // new Obstacle(360, 200, this.lanes[5][2], this.lanes[5][0], this.lanes[5][1]),
      // new Obstacle(320, 200, this.lanes[5][2], this.lanes[5][0], this.lanes[5][1]),
      // new Obstacle(280, 200, this.lanes[5][2], this.lanes[5][0], this.lanes[5][1]),

      new Obstacle(520, 160, this.lanes[6][2], this.lanes[6][0], this.lanes[6][1]),
      new Obstacle(320, 160, this.lanes[6][2], this.lanes[6][0], this.lanes[6][1]),
      new Obstacle(120, 160, this.lanes[6][2], this.lanes[6][0], this.lanes[6][1]),

      new Obstacle(520, 120, this.lanes[7][2], this.lanes[7][0], this.lanes[7][1]),
      new Obstacle(200, 120, this.lanes[7][2], this.lanes[7][0], this.lanes[7][1]),
    
      new Obstacle(520, 80, this.lanes[8][2], this.lanes[8][0], this.lanes[8][1]),
      new Obstacle(460, 80, this.lanes[8][2], this.lanes[8][0], this.lanes[8][1]),
      // new Obstacle(360, 80, this.lanes[8][2], this.lanes[8][0], this.lanes[8][1]),
      // new Obstacle(320, 80, this.lanes[8][2], this.lanes[8][0], this.lanes[8][1]),
      new Obstacle(200, 80, this.lanes[8][2], this.lanes[8][0], this.lanes[8][1]),
      new Obstacle(140, 80, this.lanes[8][2], this.lanes[8][0], this.lanes[8][1]),

      new Obstacle(520, 40, this.lanes[9][2], this.lanes[9][0], this.lanes[9][1]),
      new Obstacle(320, 40, this.lanes[9][2], this.lanes[9][0], this.lanes[9][1]),
      new Obstacle(120, 40, this.lanes[9][2], this.lanes[9][0], this.lanes[9][1])
    ];

  }


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

}