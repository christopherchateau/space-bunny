const Obstacle = require('./Obstacle');
const Player = require('./Player');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;
    this.player = new Player(280, 480, '/assets/images/bunny.png', 40);
    this.lanes = [
      [-1, 2, '/assets/images/racecar.png'],
      [1, 1, '/assets/images/dozer.png'],
      [-1, 2, '/assets/images/car.png'],
      [1, 3, '/assets/images/fastcar.png'],
      [-1, 1, '/assets/images/truck.png'],

      [-1, 3, '/assets/images/lane_5_safe.png'],
      [1, 1, '/assets/images/lane_6.png'],
      [1, 2, '/assets/images/lane_7.png'],
      [-1, 1, '/assets/images/safeasteroid.png'],
      [1, 2, '/assets/images/lane_9.png'],

    ];
    this.obstacles = [
      new Obstacle(520, 440, this.lanes[0][2], this.lanes[0][0], this.lanes[0][1], 80),
      new Obstacle(360, 440, this.lanes[0][2], this.lanes[0][0], this.lanes[0][1], 80),
      new Obstacle(40, 440, this.lanes[0][2], this.lanes[0][0], this.lanes[0][1], 80),

      new Obstacle(480, 400, this.lanes[1][2], this.lanes[1][0], this.lanes[1][1], 80),
      new Obstacle(280, 400, this.lanes[1][2], this.lanes[1][0], this.lanes[1][1], 80),
      new Obstacle(80, 400, this.lanes[1][2], this.lanes[1][0], this.lanes[1][1], 80),

      new Obstacle(520, 360, this.lanes[2][2], this.lanes[2][0], this.lanes[2][1], 80),
      new Obstacle(360, 360, this.lanes[2][2], this.lanes[2][0], this.lanes[2][1], 80),
      new Obstacle(40, 360, this.lanes[2][2], this.lanes[2][0], this.lanes[2][1], 80),

      new Obstacle(140, 320, this.lanes[3][2], this.lanes[3][0], this.lanes[3][1], 80),
      new Obstacle(40, 320, this.lanes[3][2], this.lanes[3][0], this.lanes[3][1], 80),

      new Obstacle(480, 280, this.lanes[4][2], this.lanes[4][0], this.lanes[4][1], 80),
      new Obstacle(280, 280, this.lanes[4][2], this.lanes[4][0], this.lanes[4][1], 80),
      new Obstacle(80, 280, this.lanes[4][2], this.lanes[4][0], this.lanes[4][1], 80),

      new Obstacle(520, 200, this.lanes[5][2], this.lanes[5][0], this.lanes[5][1], 120),
      new Obstacle(200, 200, this.lanes[5][2], this.lanes[5][0], this.lanes[5][1], 120),

      new Obstacle(520, 160, this.lanes[6][2], this.lanes[6][0], this.lanes[6][1], 120),
      new Obstacle(320, 160, this.lanes[6][2], this.lanes[6][0], this.lanes[6][1], 120),
      new Obstacle(120, 160, this.lanes[6][2], this.lanes[6][0], this.lanes[6][1], 120),

      new Obstacle(520, 120, this.lanes[7][2], this.lanes[7][0], this.lanes[7][1], 240),
      new Obstacle(200, 120, this.lanes[7][2], this.lanes[7][0], this.lanes[7][1], 240),
    
      new Obstacle(520, 80, this.lanes[8][2], this.lanes[8][0], this.lanes[8][1], 80),
      new Obstacle(200, 80, this.lanes[8][2], this.lanes[8][0], this.lanes[8][1], 80),

      new Obstacle(520, 40, this.lanes[9][2], this.lanes[9][0], this.lanes[9][1], 160),
      new Obstacle(320, 40, this.lanes[9][2], this.lanes[9][0], this.lanes[9][1], 160),
      new Obstacle(120, 40, this.lanes[9][2], this.lanes[9][0], this.lanes[9][1], 160)
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