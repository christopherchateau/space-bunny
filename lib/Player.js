const GamePiece = require('./GamePiece');

// extend GamePiece class
module.exports = class Player extends GamePiece {
  constructor(x, y, src) {
    // invoke parent class constructor
    super(x, y, src);
    this.direction = 'up';
    this.width = 40;
    this.isDead = false;
    this.isRiding = false;
    this.dx = 0;
    this.dxv = 0;
  } 

  draw(ctx) {
    super.draw(ctx);
  }

  isCollidingWith(object) {
    // console.log(object.x, object.y, this.width, this.height)
    return (
      this.x < object.x + object.width && 
      this.x + this.width > object.x &&
      this.y < object.y + object.height &&
      this.y + this.height > object.y
    );
  }

  // isCollidingWithWall(canvasWidth, canvasHeight) {
  //   return (
  //     this.x < 0 ||
  //     this.x + this.width > canvasWidth 
  //     // this.y < 0 || 
  //     // this.y + this.height > canvasHeight
  //   )
  // }

  ride() {
    this.x += this.dx * this.dxv;
      // console.log('dieeeeee')
    if (this.x <= 0 || this.x >= 560) {
    }
  }

  move(e) {
    e.preventDefault();
    let audio = new Audio('assets/audio/sound-frogger-hop.wav');
  audio.play();

    if (this.x % 40) {
      this.x = (Math.round((this.x % 40) / 40) + Math.floor(this.x / 40)) * 40;
    }

    let userInput = e.key;
    switch(userInput){
      case 'ArrowRight': 
        if (this.x < 520) { 
        this.x += 40; 
        this.direction = 'right'
        } 
        break;
      case 'ArrowLeft': 
        if (this.x >= 40) { 
        this.x -= 40; 
        this.direction = 'left'
        } 
        break;
      case 'ArrowDown': 
        if (this.y <= 440) { 
        this.y += 40; 
        this.direction = 'down'
        } 
        break;
      case 'ArrowUp': 
        if (this.y > 0) { 
        this.y -= 40; 
        this.direction = 'up'
        } 
        break;
    }
  }
}