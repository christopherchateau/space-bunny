const Game = require('./Game');

const canvas = document.querySelector('.game');
const ctx = canvas.getContext('2d');
const game = new Game(ctx);
const froggerTheme = new Audio('assets/audio/frogger_theme.mp3');

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

function gameLoop() {
  if (game.player.lives === 0) {
    endGame();
    return;

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
    game.keepScore();

    if (game.player.x < 0 || game.player.x >= 560) {
      game.player.bunnyDeath();
      if (game.player.lives === 0) {
        game.endGame();
      }
    }

    game.obstacles.forEach( obstacle => {
      if (game.player.isCollidingWith(obstacle) && game.player.y >= 280) {
          game.player.bunnyDeath();
      }
      else if (game.player.y < 240 && game.player.isCollidingWith(obstacle)) {
          game.player.dx = obstacle.dx
          game.player.dxv = obstacle.dxv

          game.player.isRiding = true;
          game.player.ride();
        }
      });

    if (game.player.isRiding === false && game.player.y < 240 && game.player > 0) {
      game.player.bunnyDeath();
      if (game.player.lives === 0) {
        game.endGame();
      }
    }
  }
  window.requestAnimationFrame(gameLoop)
}

function restartGame() {
  console.log('asdf')
  game.player.lives = 7;
  game.player.x = 280; 
  game.player.y = 480;
  gameLoop()
}

function endGame() {
  froggerTheme.pause();

  canvas.classList.add('hide');
  document.querySelector('.game-over--img').classList.remove('hidden');
  document.querySelector('.game-over--img').classList.add('block');
  document.querySelector('.start-btn').classList.remove('hidden');
}

function startBtnSound() {
  let audio = new Audio('assets/audio/sound-frogger-coin-in.wav');
  audio.play();
}

function startThemeMusic() {
  setTimeout(function() {
    froggerTheme.play(); 
  }, 2200);
}

document.querySelector('.start-btn').addEventListener('click', function() {
  let gameOverScreen = document.querySelector('.game-over--img');
  startBtnSound();
  startThemeMusic(); 

  this.classList.add('hidden');
  canvas.classList.add('unhidden');
  document.querySelector('.start-screen--img').classList.add('hidden');
  if (!gameOverScreen.classList.contains('hidden')) {
    gameOverScreen.classList.add('hidden');
    canvas.classList.add('unhidden');
    canvas.classList.remove('hide')
    restartGame();
  }
});

document.addEventListener('keydown', game.player.move.bind(game.player));
// document.addEventListener('keydown', game.keepScore.bind(game.player))

gameLoop();