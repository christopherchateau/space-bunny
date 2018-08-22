const Obstacle = require('./Obstacle');
const Player = require('./Player');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.level = 1;
    this.filePath = '/assets/images/';
    this.player = new Player(280, 480, `${this.filePath}bunny.png`);
    this.lanes = [
      {y: 440, direction: -1, speed: 1, img: `${this.filePath}racecar.png`, width: 80},
      {y: 400, direction: 1, speed: .5, img: `${this.filePath}dozer.png`, width: 80},
      {y: 360, direction: -1, speed: 1, img: `${this.filePath}car.png`, width: 80},
      {y: 320, direction: 1, speed: 1.5, img: `${this.filePath}fastcar.png`, width: 80},
      {y: 280, direction: -1, speed: .5, img: `${this.filePath}truck.png`, width: 80},
      {y: 200, direction: -1, speed: 1.5, img: `${this.filePath}lane_5_safe.png`, width: 120},
      {y: 160, direction: 1, speed: .5, img: `${this.filePath}lane_6.png`, width: 120},
      {y: 120, direction: 1, speed: 1, img: `${this.filePath}lane_7.png`, width: 240},
      {y: 80, direction: -1, speed: .5, img: `${this.filePath}safeasteroid.png`, width: 80},
      {y: 40, direction: 1, speed: 1, img: `${this.filePath}lane_9.png`, width: 160}
    ];
    this.obstacles = [
      new Obstacle(520, this.lanes[0].y, this.lanes[0].img, this.lanes[0].direction, this.lanes[0].speed, this.lanes[0].width),
      new Obstacle(360, this.lanes[0].y, this.lanes[0].img, this.lanes[0].direction, this.lanes[0].speed, this.lanes[0].width),
      new Obstacle(40, this.lanes[0].y, this.lanes[0].img, this.lanes[0].direction, this.lanes[0].speed, this.lanes[0].width),

      new Obstacle(480, this.lanes[1].y, this.lanes[1].img, this.lanes[1].direction, this.lanes[1].speed, this.lanes[1].width),
      new Obstacle(280, this.lanes[1].y, this.lanes[1].img, this.lanes[1].direction, this.lanes[1].speed, this.lanes[1].width),
      new Obstacle(80, this.lanes[1].y, this.lanes[1].img, this.lanes[1].direction, this.lanes[1].speed, this.lanes[1].width),

      new Obstacle(520, this.lanes[2].y, this.lanes[2].img, this.lanes[2].direction, this.lanes[2].speed, this.lanes[2].width),
      new Obstacle(360, this.lanes[2].y, this.lanes[2].img, this.lanes[2].direction, this.lanes[2].speed, this.lanes[2].width),
      new Obstacle(40, this.lanes[2].y, this.lanes[2].img, this.lanes[2].direction, this.lanes[2].speed, this.lanes[2].width),

      new Obstacle(140, this.lanes[3].y, this.lanes[3].img, this.lanes[3].direction, this.lanes[3].speed, this.lanes[3].width),
      new Obstacle(40, this.lanes[3].y, this.lanes[3].img, this.lanes[3].direction, this.lanes[3].speed, this.lanes[3].width),

      new Obstacle(480, this.lanes[4].y, this.lanes[4].img, this.lanes[4].direction, this.lanes[4].speed, this.lanes[4].width),
      new Obstacle(280, this.lanes[4].y, this.lanes[4].img, this.lanes[4].direction, this.lanes[4].speed, this.lanes[4].width),
      new Obstacle(80, this.lanes[4].y, this.lanes[4].img, this.lanes[4].direction, this.lanes[4].speed, this.lanes[4].width),

      new Obstacle(520, this.lanes[5].y, this.lanes[5].img, this.lanes[5].direction, this.lanes[5].speed, this.lanes[5].width),
      new Obstacle(200, this.lanes[5].y, this.lanes[5].img, this.lanes[5].direction, this.lanes[5].speed, this.lanes[5].width),

      new Obstacle(520, this.lanes[6].y, this.lanes[6].img, this.lanes[6].direction, this.lanes[6].speed, this.lanes[6].width),
      new Obstacle(320, this.lanes[6].y, this.lanes[6].img, this.lanes[6].direction, this.lanes[6].speed, this.lanes[6].width),
      new Obstacle(120, this.lanes[6].y, this.lanes[6].img, this.lanes[6].direction, this.lanes[6].speed, this.lanes[6].width),

      new Obstacle(520, this.lanes[7].y, this.lanes[7].img, this.lanes[7].direction, this.lanes[7].speed, this.lanes[7].width),
      new Obstacle(200, this.lanes[7].y, this.lanes[7].img, this.lanes[7].direction, this.lanes[7].speed, this.lanes[7].width),

      new Obstacle(520, this.lanes[8].y, this.lanes[8].img, this.lanes[8].direction, this.lanes[8].speed, this.lanes[8].width),
      new Obstacle(200, this.lanes[8].y, this.lanes[8].img, this.lanes[8].direction, this.lanes[8].speed, this.lanes[8].width),

      new Obstacle(520, this.lanes[9].y, this.lanes[9].img, this.lanes[9].direction, this.lanes[9].speed, this.lanes[9].width),
      new Obstacle(320, this.lanes[9].y, this.lanes[9].img, this.lanes[9].direction, this.lanes[9].speed, this.lanes[9].width),
      new Obstacle(120, this.lanes[9].y, this.lanes[9].img, this.lanes[9].direction, this.lanes[9].speed, this.lanes[9].width),
    ];
  }

  animate() {
    this.obstacles.forEach( obstacle => {
      obstacle.move();
      obstacle.draw(this.ctx);
    });
    this.player.draw(this.ctx);
  }
}