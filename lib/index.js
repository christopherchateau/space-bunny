const Game = require('./Game');

const canvas = document.querySelector('.game');
const ctx = canvas.getContext('2d');
const game = new Game(ctx);
const froggerTheme = new Audio('assets/audio/frogger_theme.mp3');
const score = document.querySelector('.score-span');

const bunny = new Image();
bunny.src = '/assets/images/bunny.png';
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
  }
  if (game.player.y === 0) {
    game.level++;
    game.player.farthest = 480;
    game.player.score += 50;
    updateScore();
    game.obstacles.forEach( obs => {
      obs.dxv += (game.level * .05);
    });
    ctx.drawImage(bunny, 260, 0)
    resetBunnyLocation();  
 
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
      }
      else if (game.player.y < 240 && game.player.isCollidingWith(obstacle)) {
          game.player.dx = obstacle.dx
          game.player.dxv = obstacle.dxv

          game.player.isRiding = true;
          game.player.ride();
        }
      });

    if (game.player.isRiding === false && game.player.y < 240 && game.player.y > 0) {
      game.player.bunnyDeath();
      if (game.player.lives === 0) {
        game.endGame();
      }
    }
  }
  window.requestAnimationFrame(gameLoop)
}

function restartGame() {
  resetBunnyLocation();
  game.player.lives = 7;
  gameLoop()
}

function resetBunnyLocation() {
  game.player.x = 280; 
  game.player.y = 480; 
}

function endGame() {
  froggerTheme.pause();
  game.gameOver = true;
  canvas.classList.add('hide');
  document.querySelector('.game-over--img').classList.remove('hidden');
  document.querySelector('.game-over--img').classList.add('block');
  document.querySelector('.start-btn').classList.remove('hidden');
  game.player.score = 0;
  updateScore();
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

function updateScore() {
  score.innerText = game.player.score;
  retrieveHiScore();
}

function retrieveHiScore() {
  let hiScore = 0;
  var objKeys = Object.keys(localStorage);
  if (objKeys.some( key => key === 'score')) {
    hiScore = getNParse();
  }
  if (game.player.score > hiScore) {
    hiScore = game.player.score;
  }
  storeHiScore(hiScore);
  document.querySelector('.hi-score-span').innerText = hiScore;
}

function getNParse() {
  return JSON.parse(localStorage.getItem('score'));
}

function storeHiScore(score) {
  var stringified = JSON.stringify(score);
  localStorage.setItem('score', stringified);
}

document.addEventListener('keydown', game.player.move.bind(game.player));
document.addEventListener('keydown', updateScore);
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

gameLoop();
retrieveHiScore();