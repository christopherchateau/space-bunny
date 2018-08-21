const Game = require('./Game');
// const player = require('./Player');

const canvas = document.querySelector('#game');
const ctx = canvas.getContext('2d');
const game = new Game(ctx);

const spaceBackground = new Image();
spaceBackground.src = '/assets/images/corona_up.png';
const spaceStation = new Image();
spaceStation.src = '/assets/images/lane_goal.png';
const safePath = new Image();
safePath.src = '/assets/images/safepath.png';
const moonBackground = new Image();
moonBackground.src = '/assets/images/lunarrock_s.png';
const bunnyLives = new Image();
bunnyLives.src = '/assets/images/bunny.png';

document.querySelector('.start-btn').addEventListener('click', function() {
  let audio = new Audio('assets/audio/sound-frogger-coin-in.wav');
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
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'black';
    ctx.fillRect(0, 520, 560, 40);
    ctx.drawImage(moonBackground, 0, 280);    
    ctx.drawImage(spaceStation, 0, 0);
    ctx.drawImage(spaceBackground, 0, 40);

    for (let i = 0; i < 14; i++) {
      ctx.drawImage(safePath, i * 40, 240);
    }

    for (let i = 0; i < 14; i++) {
      ctx.drawImage(safePath, i * 40, 480);
    }

    for (let i = 0; i < game.player.lives; i++) {
      ctx.drawImage(bunnyLives, i * 40, 520);
    }

    game.animate();

    if (game.player.x <= 0 || game.player.x >= 560) {
      game.player.bunnyDeath();
    }

    game.obstacles.forEach( obstacle => {
      if (game.player.isCollidingWith(obstacle) && game.player.y >= 280) {
          game.player.bunnyDeath();
      }
      else if (game.player.y < 240) {

        if (game.player.isCollidingWith(obstacle)) {
          game.player.dx = obstacle.dx
          game.player.dxv = obstacle.dxv
          game.player.isRiding = true;
          game.player.ride();
        } else if (game.player.isCollidingWith(obstacle) === false) {
          game.player.bunnyDeath();
          // game.player.bunnyDeath();
        }
      }
    })
  }

  // prepare to draw next frame
  window.requestAnimationFrame(gameLoop)
}

// Add key press event handler
document.addEventListener('keydown', game.player.move.bind(game.player));

// function handleKeyPress(e) {
//   player.changeDirection(e);
// }
