const Block = require('./Block');

module.exports = class Game {
  constructor(ctx) {
    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;
    this.blocks = [];

    let y = 50;

    for (let i = 1; i <= 5; i++) {
      let x = 350;

      for (let j = 1; j <= 9; j++) {
        let newBlock = new Block (x, y, 50, 50, 'green', 'black');

        if (i % 2) {
          if (j % 3 === 0) {
            x += 100;
          } else {
          x += 60;
          }
        } else {
          if (j % 3 === 0) {
            x -= 100;
          } else {
          x -= 60;
          }
          newBlock.dx = -1;
        }
        this.blocks.push(newBlock);
      }
      y += 50; 
    }
    // console.log(this.blocks);
  }

  // draw one frame of our game
  animate() {
    this.blocks.forEach( block => {
      this.handleBlock(block);
      block.draw(this.ctx);
    })
  };

  handleBlock(block){
    const { canvas } = this.ctx;

    // if (block.isCollidingWithWall(canvas.width, canvas.height)) {
    //   this.endGame();  

      // block.changeDirection({
      //   dx: block.dx * -1,
      //   dy: block.dy * -1
      // });
      // block.move();
    //} else {
      block.move();
    //}
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
    const direction = {
      dx: 0,
      dy: 0
    };

    if (e.key === 'ArrowRight') {
      direction.dx = 1;

    } else if (e.key === 'ArrowLeft') {
      direction.dx = -1;

    } else if (e.key === 'ArrowDown') {
      direction.dy = 1;

    } else if (e.key === 'ArrowUp') {
      direction.dy = -1;
    } 

    this.blocks.forEach( block => block.changeDirection(direction) );
  }

}