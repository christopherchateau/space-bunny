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
    this.farthest = 480;
    this.score = 0;
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
    this.playDeathSound();
    this.farthest = 480;
  }

  scoreCheck() {
    if (this.farthest > this.y) {
      this.farthest = this.y;
      this.score += 10;
    }
  }

  move(e) {
    e.preventDefault();
    this.isRiding = false;
    this.playThemeMusic();
    this.keepBunnyOnGrid();

    let userInput = e.key;
    switch(userInput){
      case 'ArrowRight': 
        if (this.x < 520) { 
        this.x += 40; 
        } 
        break;
      case 'ArrowLeft': 
        if (this.x >= 40) { 
        this.x -= 40; 
        } 
        break;
      case 'ArrowDown': 
        if (this.y <= 440) { 
        this.y += 40; 
        } 
        break;
      case 'ArrowUp': 
        if (this.y > 40 && this.y < 520 || 
            this.x >= 240 && this.x <= 320) { 
        this.y -= 40; 
        this.scoreCheck();
        }
        break; 
    }
  }

  keepBunnyOnGrid() {
    if (this.x % 40) {
      this.x = (Math.round((this.x % 40) / 40) + Math.floor(this.x / 40)) * 40;
    }
  }

  playDeathSound() {
    let audio = new Audio('assets/audio/sound-frogger-squash.wav');
    audio.play();
  }

  playThemeMusic() {
    let audio = new Audio('assets/audio/sound-frogger-hop.wav');
    audio.play();
  }
}