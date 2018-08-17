const Game = require('./Game');

const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const game = new Game(ctx);

document.querySelector('.start-btn').addEventListener('click', function() {
  var audio = new Audio('assets/audio/start.wav');
  audio.play();
  this.classList.add('hidden');
});


// Start animation loop
window.requestAnimationFrame(gameLoop);

function gameLoop () {

  if (game.isOver()) {
    console.log('Game Over');

  } else {
    // clear previous frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'black';
    ctx.fillRect(0, 650, 700, 50);
    ctx.fillRect(0, 350, 700, 250);

    ctx.fillStyle = '#a200f8';
    ctx.fillRect(0, 600, 700, 50);
    ctx.fillRect(0, 300, 700, 50);


    ctx.fillStyle = '#25e200';
    ctx.fillRect(0, 0, 700, 50);

    ctx.fillStyle = '#000051';
    ctx.fillRect(0, 50, 700, 250);

    // draw this frame
    game.animate();
  }

  // prepare to draw next frame
  window.requestAnimationFrame(gameLoop)
}

// Add key press event handler
document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(e) {
  game.handleKeyPress(e);
}
