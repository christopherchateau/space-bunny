const Obstacle = require('./Obstacle');
const Player = require('./Player');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;
    this.player = new Player(280, 480, '/assets/images/bunny.png', 40);
    this.lanes = [
      {direction: -1, speed: 2, img: '/assets/images/racecar.png', width: 80, score: false},
      {direction: 1, speed: 1, img: '/assets/images/dozer.png', width: 80, score: false},
      {direction: -1, speed: 2, img: '/assets/images/car.png', width: 80, score: false},
      {direction: 1, speed: 3, img: '/assets/images/fastcar.png', width: 80, score: false},
      {direction: -1, speed: 1, img: '/assets/images/truck.png', width: 80, score: false},
      {direction: -1, speed: 3, img: '/assets/images/lane_5_safe.png', width: 120, score: false},
      {direction: 1, speed: 1, img: '/assets/images/lane_6.png', width: 120, score: false},
      {direction: 1, speed: 2, img: '/assets/images/lane_7.png', width: 240, score: false},
      {direction: -1, speed: 1, img: '/assets/images/safeasteroid.png', width: 80, score: false},
      {direction: 1, speed: 2, img: '/assets/images/lane_9.png', width: 160, score: false}
    ];
    this.obstacles = [

      new Obstacle(520, 440, this.lanes[0].img, this.lanes[0].direction, this.lanes[0].speed, this.lanes[0].width),
      new Obstacle(360, 440, this.lanes[0].img, this.lanes[0].direction, this.lanes[0].speed, this.lanes[0].width),
      new Obstacle(40, 440, this.lanes[0].img, this.lanes[0].direction, this.lanes[0].speed, this.lanes[0].width),

      new Obstacle(480, 400, this.lanes[1].img, this.lanes[1].direction, this.lanes[1].speed, this.lanes[1].width),
      new Obstacle(280, 400, this.lanes[1].img, this.lanes[1].direction, this.lanes[1].speed, this.lanes[1].width),
      new Obstacle(80, 400, this.lanes[1].img, this.lanes[1].direction, this.lanes[1].speed, this.lanes[1].width),

      new Obstacle(520, 360, this.lanes[2].img, this.lanes[2].direction, this.lanes[2].speed, this.lanes[2].width),
      new Obstacle(360, 360, this.lanes[2].img, this.lanes[2].direction, this.lanes[2].speed, this.lanes[2].width),
      new Obstacle(40, 360, this.lanes[2].img, this.lanes[2].direction, this.lanes[2].speed, this.lanes[2].width),

      new Obstacle(140, 320, this.lanes[3].img, this.lanes[3].direction, this.lanes[3].speed, this.lanes[3].width),
      new Obstacle(40, 320, this.lanes[3].img, this.lanes[3].direction, this.lanes[3].speed, this.lanes[3].width),

      new Obstacle(480, 280, this.lanes[4].img, this.lanes[4].direction, this.lanes[4].speed, this.lanes[4].width),
      new Obstacle(280, 280, this.lanes[4].img, this.lanes[4].direction, this.lanes[4].speed, this.lanes[4].width),
      new Obstacle(80, 280, this.lanes[4].img, this.lanes[4].direction, this.lanes[4].speed, this.lanes[4].width),

      new Obstacle(520, 200, this.lanes[5].img, this.lanes[5].direction, this.lanes[5].speed, this.lanes[5].width),
      new Obstacle(200, 200, this.lanes[5].img, this.lanes[5].direction, this.lanes[5].speed, this.lanes[5].width),

      new Obstacle(520, 160, this.lanes[6].img, this.lanes[6].direction, this.lanes[6].speed, this.lanes[6].width),
      new Obstacle(320, 160, this.lanes[6].img, this.lanes[6].direction, this.lanes[6].speed, this.lanes[6].width),
      new Obstacle(120, 160, this.lanes[6].img, this.lanes[6].direction, this.lanes[6].speed, this.lanes[6].width),

      new Obstacle(520, 120, this.lanes[7].img, this.lanes[7].direction, this.lanes[7].speed, this.lanes[7].width),
      new Obstacle(200, 120, this.lanes[7].img, this.lanes[7].direction, this.lanes[7].speed, this.lanes[7].width),

      new Obstacle(520, 80, this.lanes[8].img, this.lanes[8].direction, this.lanes[8].speed, this.lanes[8].width),
      new Obstacle(200, 80, this.lanes[8].img, this.lanes[8].direction, this.lanes[8].speed, this.lanes[8].width),

      new Obstacle(520, 40, this.lanes[9].img, this.lanes[9].direction, this.lanes[9].speed, this.lanes[9].width),
      new Obstacle(320, 40, this.lanes[9].img, this.lanes[9].direction, this.lanes[9].speed, this.lanes[9].width),
      new Obstacle(120, 40, this.lanes[9].img, this.lanes[9].direction, this.lanes[9].speed, this.lanes[9].width),
    ];
  }

  animate() {
    this.obstacles.forEach( obstacle => {
      this.handleObstacle(obstacle);
      obstacle.draw(this.ctx);
    });
    this.player.draw(this.ctx);
  }

  handleObstacle(obstacle){
    const { canvas } = this.ctx;
    obstacle.move();
  }

  isOver() {
    return this.gameOver;
  }

  togglePause() {
    this.paused = !this.paused;
  }
}