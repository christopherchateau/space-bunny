const GamePiece = require('./GamePiece');

module.exports = class Player extends GamePiece {
  constructor(x, y, src) {
    super(x, y, src);
    this.width = 40;
    this.isDead = false;
    this.isRiding = false;
    this.lives = 7;
    this.dx = 0;
    this.dxv = 0;
  } 

  isCollidingWith(object) {
    return (
      this.x < object.x + object.width && 
      this.x + this.width > object.x &&
      this.y < object.y + object.height &&
      this.y + this.height > object.y
    );
  }

  ride() {
    this.x += this.dx * this.dxv;
  }

  bunnyDeath() {
    this.lives--;
    this.x = 280; 
    this.y = 480;
    let audio = new Audio('assets/audio/sound-frogger-squash.wav');
  audio.play();
  }

  move(e) {
    this.isRiding = false;
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