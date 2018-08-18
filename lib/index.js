const Game = require('./Game');
// const player = require('./Player');

const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const game = new Game(ctx);

document.querySelector('.start-btn').addEventListener('click', function() {
  var audio = new Audio('assets/audio/sound-frogger-coin-in.wav');
  audio.play();
  this.classList.add('hidden');
  canvas.classList.add('unhidden');
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
    ctx.fillRect(0, 520, 560, 40);
    ctx.fillRect(0, 280, 560, 250);

    ctx.fillStyle = '#a200f8';
    ctx.fillRect(0, 480, 560, 40);
    ctx.fillRect(0, 240, 560, 40);


    ctx.fillStyle = '#25e200';
    ctx.fillRect(0, 0, 560, 40);

    ctx.fillStyle = '#000051';
    ctx.fillRect(0, 40, 560, 200);

    // draw this frame
    game.animate();
  }

  // prepare to draw next frame
  window.requestAnimationFrame(gameLoop)
}

// Add key press event handler
document.addEventListener('keydown', game.player.changeDirection);

// function handleKeyPress(e) {
//   player.changeDirection(e);
// }
