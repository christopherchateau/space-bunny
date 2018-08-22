const Game = require('./Game');
const canvas = document.querySelector('.game');
const ctx = canvas.getContext('2d');
const game = new Game(ctx);
const eyeOfTheTiger = new Audio('./assets/audio/eye-of-the-tiger.mp3');
const score = document.querySelector('.score-span');
const gameOverScreen = document.querySelector('.game-over--img');
const bunny = new Image();
const spaceBackground = new Image();
const spaceStation = new Image();
const safePath = new Image();
const moonBackground = new Image();
const bunnyLives = new Image();

bunny.src = './assets/images/bunny.png';
spaceBackground.src = './assets/images/corona_up.png';
spaceStation.src = './assets/images/lane_goal.png';
safePath.src = './assets/images/safepath.png';
moonBackground.src = './assets/images/lunarrock_s.png';
bunnyLives.src = './assets/images/bunny_lives.png';

function gameLoop() {
  if (game.player.lives === 0) {
    endGame();
    return;
  }
  if (game.player.y === 0) {
    bunnyReachesGoal(); 
  } else {
    drawBackground();
    drawSafePaths();
    drawBunnyLivesIcons();
    game.animate();

    if (game.player.x < 0 || game.player.x >= 560) {
      game.player.bunnyDeath();
    }
    game.obstacles.forEach( obstacle => {
      if (game.player.isCollidingWith(obstacle) && game.player.y >= 280) {
        game.player.bunnyDeath();
      } else if (game.player.y < 240 && game.player.isCollidingWith(obstacle)) {
        rideAsteriod(obstacle);
      }
    });

    if (game.player.isRiding === false && game.player.y < 240 && game.player.y > 0) {
      game.player.bunnyDeath();
    }
  }
  window.requestAnimationFrame(gameLoop);
}

function drawBackground() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = 'black';
  ctx.fillRect(0, 520, 560, 40);
  ctx.drawImage(moonBackground, 0, 280);    
  ctx.drawImage(spaceStation, 0, 0);
  ctx.drawImage(spaceBackground, 0, 40);
}

function drawSafePaths() {
  for (let i = 0; i < 14; i++) {
    ctx.drawImage(safePath, i * 40, 240);
  }

  for (let i = 0; i < 14; i++) {
    ctx.drawImage(safePath, i * 40, 480);
  }
}

function drawBunnyLivesIcons() {
  for (let i = 0; i < game.player.lives - 1; i++) {
    ctx.drawImage(bunnyLives, i * 30, 530);
  }
}

function bunnyReachesGoal() {
  game.player.score += 50;
  levelUp();
  playWinJingle();
  updateScore();
  displayLevelUpText();
  increaseObstacleSpeed();
  ctx.drawImage(bunny, 260, 0);
  resetBunnyLocation();
}

function levelUp() {
  game.level++;
  game.player.farthest = 480;
}

function rideAsteriod(obstacle) {
  game.player.dx = obstacle.dx;
  game.player.dxv = obstacle.dxv;
  game.player.isRiding = true;
  game.player.ride();
}

function restartGame() {
  game.player.lives = 7;
  game.player.isDead = false;
  resetBunnyLocation();
  resetObstacleSpeed();
  game.level = 1;
  gameLoop();
}

function resetBunnyLocation() {
  game.player.x = 280; 
  game.player.y = 480; 
}

function endGame() {
  eyeOfTheTiger.pause();
  game.player.isDead = true; 
  canvas.classList.add('hide');
  gameOverScreen.classList.remove('hide');
  document.querySelector('.start-btn').classList.remove('hidden');
  game.player.score = 0;
  updateScore();
}

function startBtnSound() {
  let audio = new Audio('./assets/audio/sound-frogger-coin-in.wav');
  audio.play();
}

function startThemeMusic() {
  setTimeout(function() {
    eyeOfTheTiger.volume = .3;
    eyeOfTheTiger.play(); 
  }, 1800);
}

function playWinJingle() {
  let audio = new Audio('./assets/audio/win-jingle.wav');
  audio.volume = .5;
  audio.play();
}

function updateScore() {
  score.innerText = game.player.score;
  retrieveHiScore();
}

function retrieveHiScore() {
  let hiScore = getNParse() || 0;
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

function increaseObstacleSpeed() {
  game.obstacles.forEach( obstacle => {
    obstacle.dxv += .3;
  });
}

function resetObstacleSpeed() {
  game.obstacles.forEach( obstacle => {
    obstacle.dxv -= ((game.level - 1) * .3);
  });
}

function displayLevelUpText() {
  let level = document.querySelector('.level');
  document.querySelector('.level-span').innerText = game.level;
  level.classList.remove('hide');
  setTimeout(function() {
    level.classList.add('hide');
  }, 3000);
}

function deathScreenToggle() {
  gameOverScreen.classList.add('hide');
  canvas.classList.add('unhidden');
  canvas.classList.remove('hide'); 
}

document.addEventListener('keydown', game.player.move.bind(game.player));
document.addEventListener('keydown', updateScore);

document.querySelector('.start-btn').addEventListener('click', function() {
  gameLoop();
  startBtnSound();
  startThemeMusic(); 
  this.classList.add('hidden');
  canvas.classList.add('unhidden');
  document.querySelector('.start-screen--img').classList.add('hidden');

  if (!gameOverScreen.classList.contains('hide')) {
    deathScreenToggle();
    restartGame();
  }
});

eyeOfTheTiger.addEventListener('ended', function() {
  this.currentTime = 0;
  this.play();
}, false);

retrieveHiScore();