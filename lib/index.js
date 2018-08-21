const Game = require('./Game');

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
bunnyLives.src = '/assets/images/bunny_lives.png';

document.querySelector('.start-btn').addEventListener('click', function() {
  let audio = new Audio('assets/audio/sound-frogger-coin-in.wav');
  audio.play();
  this.classList.add('hidden');
  canvas.classList.add('unhidden');
});

// window.requestAnimationFrame(gameLoop);

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

    for (let i = 0; i < game.player.lives - 1; i++) {
      ctx.drawImage(bunnyLives, i * 30, 530);
    }

    game.animate();

    if (game.player.x < 0 || game.player.x >= 560) {
      game.player.bunnyDeath();
      if (game.player.lives === 0) {
        game.endGame();
      }
    }

    game.obstacles.forEach( obstacle => {
      if (game.player.isCollidingWith(obstacle) && game.player.y >= 280) {
          game.player.bunnyDeath();
          if (game.player.lives === 0) {
            game.endGame();
          }
      }
      else if (game.player.y < 240 && game.player.isCollidingWith(obstacle)) {
          game.player.dx = obstacle.dx
          game.player.dxv = obstacle.dxv

          game.player.isRiding = true;
          game.player.ride();
        }
      });

    if (game.player.isRiding === false && game.player.y < 240) {
      game.player.bunnyDeath();
      if (game.player.lives === 0) {
        game.endGame();
      }
    }
  }
  window.requestAnimationFrame(gameLoop)
}

document.addEventListener('keydown', game.player.move.bind(game.player));

gameLoop()
