/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./lib/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/Game.js":
/*!*********************!*\
  !*** ./lib/Game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Obstacle = __webpack_require__(/*! ./Obstacle */ "./lib/Obstacle.js");
var Player = __webpack_require__(/*! ./Player */ "./lib/Player.js");

module.exports = function () {
  function Game(ctx) {
    _classCallCheck(this, Game);

    this.ctx = ctx;
    this.paused = false;
    this.level = 1;
    this.filePath = '/assets/images/';
    this.player = new Player(280, 480, this.filePath + 'bunny.png');
    this.lanes = [{ y: 440, direction: -1, speed: 1, img: this.filePath + 'racecar.png', width: 80 }, { y: 400, direction: 1, speed: .5, img: this.filePath + 'dozer.png', width: 80 }, { y: 360, direction: -1, speed: 1, img: this.filePath + 'car.png', width: 80 }, { y: 320, direction: 1, speed: 1.5, img: this.filePath + 'fastcar.png', width: 80 }, { y: 280, direction: -1, speed: .5, img: this.filePath + 'truck.png', width: 80 }, { y: 200, direction: -1, speed: 1.5, img: this.filePath + 'lane_5_safe.png', width: 120 }, { y: 160, direction: 1, speed: .5, img: this.filePath + 'lane_6.png', width: 120 }, { y: 120, direction: 1, speed: 1, img: this.filePath + 'lane_7.png', width: 240 }, { y: 80, direction: -1, speed: .5, img: this.filePath + 'safeasteroid.png', width: 80 }, { y: 40, direction: 1, speed: 1, img: this.filePath + 'lane_9.png', width: 160 }];
    this.obstacles = [new Obstacle(520, this.lanes[0].y, this.lanes[0].img, this.lanes[0].direction, this.lanes[0].speed, this.lanes[0].width), new Obstacle(360, this.lanes[0].y, this.lanes[0].img, this.lanes[0].direction, this.lanes[0].speed, this.lanes[0].width), new Obstacle(40, this.lanes[0].y, this.lanes[0].img, this.lanes[0].direction, this.lanes[0].speed, this.lanes[0].width), new Obstacle(480, this.lanes[1].y, this.lanes[1].img, this.lanes[1].direction, this.lanes[1].speed, this.lanes[1].width), new Obstacle(280, this.lanes[1].y, this.lanes[1].img, this.lanes[1].direction, this.lanes[1].speed, this.lanes[1].width), new Obstacle(80, this.lanes[1].y, this.lanes[1].img, this.lanes[1].direction, this.lanes[1].speed, this.lanes[1].width), new Obstacle(520, this.lanes[2].y, this.lanes[2].img, this.lanes[2].direction, this.lanes[2].speed, this.lanes[2].width), new Obstacle(360, this.lanes[2].y, this.lanes[2].img, this.lanes[2].direction, this.lanes[2].speed, this.lanes[2].width), new Obstacle(40, this.lanes[2].y, this.lanes[2].img, this.lanes[2].direction, this.lanes[2].speed, this.lanes[2].width), new Obstacle(140, this.lanes[3].y, this.lanes[3].img, this.lanes[3].direction, this.lanes[3].speed, this.lanes[3].width), new Obstacle(40, this.lanes[3].y, this.lanes[3].img, this.lanes[3].direction, this.lanes[3].speed, this.lanes[3].width), new Obstacle(480, this.lanes[4].y, this.lanes[4].img, this.lanes[4].direction, this.lanes[4].speed, this.lanes[4].width), new Obstacle(280, this.lanes[4].y, this.lanes[4].img, this.lanes[4].direction, this.lanes[4].speed, this.lanes[4].width), new Obstacle(80, this.lanes[4].y, this.lanes[4].img, this.lanes[4].direction, this.lanes[4].speed, this.lanes[4].width), new Obstacle(520, this.lanes[5].y, this.lanes[5].img, this.lanes[5].direction, this.lanes[5].speed, this.lanes[5].width), new Obstacle(200, this.lanes[5].y, this.lanes[5].img, this.lanes[5].direction, this.lanes[5].speed, this.lanes[5].width), new Obstacle(520, this.lanes[6].y, this.lanes[6].img, this.lanes[6].direction, this.lanes[6].speed, this.lanes[6].width), new Obstacle(320, this.lanes[6].y, this.lanes[6].img, this.lanes[6].direction, this.lanes[6].speed, this.lanes[6].width), new Obstacle(120, this.lanes[6].y, this.lanes[6].img, this.lanes[6].direction, this.lanes[6].speed, this.lanes[6].width), new Obstacle(520, this.lanes[7].y, this.lanes[7].img, this.lanes[7].direction, this.lanes[7].speed, this.lanes[7].width), new Obstacle(200, this.lanes[7].y, this.lanes[7].img, this.lanes[7].direction, this.lanes[7].speed, this.lanes[7].width), new Obstacle(520, this.lanes[8].y, this.lanes[8].img, this.lanes[8].direction, this.lanes[8].speed, this.lanes[8].width), new Obstacle(200, this.lanes[8].y, this.lanes[8].img, this.lanes[8].direction, this.lanes[8].speed, this.lanes[8].width), new Obstacle(520, this.lanes[9].y, this.lanes[9].img, this.lanes[9].direction, this.lanes[9].speed, this.lanes[9].width), new Obstacle(320, this.lanes[9].y, this.lanes[9].img, this.lanes[9].direction, this.lanes[9].speed, this.lanes[9].width), new Obstacle(120, this.lanes[9].y, this.lanes[9].img, this.lanes[9].direction, this.lanes[9].speed, this.lanes[9].width)];
  }

  _createClass(Game, [{
    key: 'animate',
    value: function animate() {
      var _this = this;

      this.obstacles.forEach(function (obstacle) {
        obstacle.move();
        obstacle.draw(_this.ctx);
      });
      this.player.draw(this.ctx);
    }
  }]);

  return Game;
}();

/***/ }),

/***/ "./lib/GamePiece.js":
/*!**************************!*\
  !*** ./lib/GamePiece.js ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

module.exports = function () {
  function GamePiece(x, y, src, dx, dxv, width) {
    _classCallCheck(this, GamePiece);

    this.x = x;
    this.y = y;
    this.height = 40;
    this.width = width;
    this.src = src;
    this.dx = dx;
    this.dxv = dxv;
  }

  _createClass(GamePiece, [{
    key: "draw",
    value: function draw(ctx) {
      var x = this.x,
          y = this.y,
          height = this.height,
          width = this.width,
          src = this.src;

      var image = new Image();
      image.src = src;
      ctx.drawImage(image, x, y);
    }
  }]);

  return GamePiece;
}();

/***/ }),

/***/ "./lib/Obstacle.js":
/*!*************************!*\
  !*** ./lib/Obstacle.js ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GamePiece = __webpack_require__(/*! ./GamePiece */ "./lib/GamePiece.js");

module.exports = function (_GamePiece) {
  _inherits(Obstacle, _GamePiece);

  function Obstacle(x, y, src, dx, dxv, width) {
    _classCallCheck(this, Obstacle);

    return _possibleConstructorReturn(this, (Obstacle.__proto__ || Object.getPrototypeOf(Obstacle)).call(this, x, y, src, dx, dxv, width));
  }

  _createClass(Obstacle, [{
    key: 'move',
    value: function move() {
      this.x += this.dx * this.dxv;
      if (this.x > 560 && this.dx === 1) {
        this.x -= 900;
      } else if (this.x < -160 && this.dx === -1) {
        this.x += 800;
      }
    }
  }, {
    key: 'draw',
    value: function draw(ctx) {
      _get(Obstacle.prototype.__proto__ || Object.getPrototypeOf(Obstacle.prototype), 'draw', this).call(this, ctx);
    }
  }]);

  return Obstacle;
}(GamePiece);

/***/ }),

/***/ "./lib/Player.js":
/*!***********************!*\
  !*** ./lib/Player.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GamePiece = __webpack_require__(/*! ./GamePiece */ "./lib/GamePiece.js");

module.exports = function (_GamePiece) {
  _inherits(Player, _GamePiece);

  function Player(x, y, src) {
    _classCallCheck(this, Player);

    var _this = _possibleConstructorReturn(this, (Player.__proto__ || Object.getPrototypeOf(Player)).call(this, x, y, src));

    _this.width = 40;
    _this.isDead = false;
    _this.isRiding = false;
    _this.lives = 7;
    _this.dx = 0;
    _this.dxv = 0;
    _this.farthest = 480;
    _this.score = 0;
    return _this;
  }

  _createClass(Player, [{
    key: 'isCollidingWith',
    value: function isCollidingWith(object) {
      return this.x < object.x + object.width && this.x + this.width > object.x && this.y < object.y + object.height && this.y + this.height > object.y;
    }
  }, {
    key: 'ride',
    value: function ride() {
      this.x += this.dx * this.dxv;
    }
  }, {
    key: 'bunnyDeath',
    value: function bunnyDeath() {
      this.lives--;
      this.x = 280;
      this.y = 480;
      this.playDeathSound();
      this.farthest = 480;
    }
  }, {
    key: 'scoreCheck',
    value: function scoreCheck() {
      if (this.farthest > this.y) {
        this.farthest = this.y;
        this.score += 10;
      }
    }
  }, {
    key: 'move',
    value: function move(e) {
      e.preventDefault();
      this.isRiding = false;
      this.keepBunnyOnGrid();
      var userInput = e.key;

      if (this.isDead === false) {
        this.playHopSound();

        switch (userInput) {
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
            if (this.y > 40 && this.y < 520 || this.x >= 240 && this.x <= 320) {
              this.y -= 40;
              this.scoreCheck();
            }
            break;
        }
      }
    }
  }, {
    key: 'keepBunnyOnGrid',
    value: function keepBunnyOnGrid() {
      if (this.x % 40) {
        this.x = (Math.round(this.x % 40 / 40) + Math.floor(this.x / 40)) * 40;
      }
    }
  }, {
    key: 'playDeathSound',
    value: function playDeathSound() {
      var audio = new Audio('assets/audio/sound-frogger-squash.wav');
      audio.play();
    }
  }, {
    key: 'playHopSound',
    value: function playHopSound() {
      var audio = new Audio('assets/audio/sound-frogger-hop.wav');
      audio.play();
    }
  }]);

  return Player;
}(GamePiece);

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Game = __webpack_require__(/*! ./Game */ "./lib/Game.js");
var canvas = document.querySelector('.game');
var ctx = canvas.getContext('2d');
var game = new Game(ctx);
var eyeOfTheTiger = new Audio('assets/audio/eye-of-the-tiger.mp3');
var score = document.querySelector('.score-span');
var gameOverScreen = document.querySelector('.game-over--img');
var bunny = new Image();
var spaceBackground = new Image();
var spaceStation = new Image();
var safePath = new Image();
var moonBackground = new Image();
var bunnyLives = new Image();

bunny.src = '/assets/images/bunny.png';
spaceBackground.src = '/assets/images/corona_up.png';
spaceStation.src = '/assets/images/lane_goal.png';
safePath.src = '/assets/images/safepath.png';
moonBackground.src = '/assets/images/lunarrock_s.png';
bunnyLives.src = '/assets/images/bunny_lives.png';

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
    game.obstacles.forEach(function (obstacle) {
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
  for (var i = 0; i < 14; i++) {
    ctx.drawImage(safePath, i * 40, 240);
  }

  for (var _i = 0; _i < 14; _i++) {
    ctx.drawImage(safePath, _i * 40, 480);
  }
}

function drawBunnyLivesIcons() {
  for (var i = 0; i < game.player.lives - 1; i++) {
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
  var audio = new Audio('assets/audio/sound-frogger-coin-in.wav');
  audio.play();
}

function startThemeMusic() {
  setTimeout(function () {
    eyeOfTheTiger.volume = .3;
    eyeOfTheTiger.play();
  }, 1800);
}

function playWinJingle() {
  var audio = new Audio('assets/audio/win-jingle.wav');
  audio.volume = .5;
  audio.play();
}

function updateScore() {
  score.innerText = game.player.score;
  retrieveHiScore();
}

function retrieveHiScore() {
  var hiScore = getNParse() || 0;
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
  game.obstacles.forEach(function (obstacle) {
    obstacle.dxv += .3;
  });
}

function resetObstacleSpeed() {
  game.obstacles.forEach(function (obstacle) {
    obstacle.dxv -= (game.level - 1) * .3;
  });
}

function displayLevelUpText() {
  var level = document.querySelector('.level');
  document.querySelector('.level-span').innerText = game.level;
  level.classList.remove('hide');
  setTimeout(function () {
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

document.querySelector('.start-btn').addEventListener('click', function () {
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

eyeOfTheTiger.addEventListener('ended', function () {
  this.currentTime = 0;
  this.play();
}, false);

retrieveHiScore();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWVQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvT2JzdGFjbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL1BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXguanMiXSwibmFtZXMiOlsiT2JzdGFjbGUiLCJyZXF1aXJlIiwiUGxheWVyIiwibW9kdWxlIiwiZXhwb3J0cyIsImN0eCIsInBhdXNlZCIsImxldmVsIiwiZmlsZVBhdGgiLCJwbGF5ZXIiLCJsYW5lcyIsInkiLCJkaXJlY3Rpb24iLCJzcGVlZCIsImltZyIsIndpZHRoIiwib2JzdGFjbGVzIiwiZm9yRWFjaCIsIm9ic3RhY2xlIiwibW92ZSIsImRyYXciLCJ4Iiwic3JjIiwiZHgiLCJkeHYiLCJoZWlnaHQiLCJpbWFnZSIsIkltYWdlIiwiZHJhd0ltYWdlIiwiR2FtZVBpZWNlIiwiaXNEZWFkIiwiaXNSaWRpbmciLCJsaXZlcyIsImZhcnRoZXN0Iiwic2NvcmUiLCJvYmplY3QiLCJwbGF5RGVhdGhTb3VuZCIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImtlZXBCdW5ueU9uR3JpZCIsInVzZXJJbnB1dCIsImtleSIsInBsYXlIb3BTb3VuZCIsInNjb3JlQ2hlY2siLCJNYXRoIiwicm91bmQiLCJmbG9vciIsImF1ZGlvIiwiQXVkaW8iLCJwbGF5IiwiR2FtZSIsImNhbnZhcyIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldENvbnRleHQiLCJnYW1lIiwiZXllT2ZUaGVUaWdlciIsImdhbWVPdmVyU2NyZWVuIiwiYnVubnkiLCJzcGFjZUJhY2tncm91bmQiLCJzcGFjZVN0YXRpb24iLCJzYWZlUGF0aCIsIm1vb25CYWNrZ3JvdW5kIiwiYnVubnlMaXZlcyIsImdhbWVMb29wIiwiZW5kR2FtZSIsImJ1bm55UmVhY2hlc0dvYWwiLCJkcmF3QmFja2dyb3VuZCIsImRyYXdTYWZlUGF0aHMiLCJkcmF3QnVubnlMaXZlc0ljb25zIiwiYW5pbWF0ZSIsImJ1bm55RGVhdGgiLCJpc0NvbGxpZGluZ1dpdGgiLCJyaWRlQXN0ZXJpb2QiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJjbGVhclJlY3QiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImkiLCJsZXZlbFVwIiwicGxheVdpbkppbmdsZSIsInVwZGF0ZVNjb3JlIiwiZGlzcGxheUxldmVsVXBUZXh0IiwiaW5jcmVhc2VPYnN0YWNsZVNwZWVkIiwicmVzZXRCdW5ueUxvY2F0aW9uIiwicmlkZSIsInJlc3RhcnRHYW1lIiwicmVzZXRPYnN0YWNsZVNwZWVkIiwicGF1c2UiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJzdGFydEJ0blNvdW5kIiwic3RhcnRUaGVtZU11c2ljIiwic2V0VGltZW91dCIsInZvbHVtZSIsImlubmVyVGV4dCIsInJldHJpZXZlSGlTY29yZSIsImhpU2NvcmUiLCJnZXROUGFyc2UiLCJzdG9yZUhpU2NvcmUiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic3RyaW5naWZpZWQiLCJzdHJpbmdpZnkiLCJzZXRJdGVtIiwiZGVhdGhTY3JlZW5Ub2dnbGUiLCJhZGRFdmVudExpc3RlbmVyIiwiYmluZCIsImNvbnRhaW5zIiwiY3VycmVudFRpbWUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FB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QyxDQUFoQyxFQUFtQyxLQUFLRCxLQUFMLENBQVcsQ0FBWCxFQUFjSSxHQUFqRCxFQUFzRCxLQUFLSixLQUFMLENBQVcsQ0FBWCxFQUFjRSxTQUFwRSxFQUErRSxLQUFLRixLQUFMLENBQVcsQ0FBWCxFQUFjRyxLQUE3RixFQUFvRyxLQUFLSCxLQUFMLENBQVcsQ0FBWCxFQUFjSyxLQUFsSCxDQTVCZSxFQThCZixJQUFJZixRQUFKLENBQWEsR0FBYixFQUFrQixLQUFLVSxLQUFMLENBQVcsQ0FBWCxFQUFjQyxDQUFoQyxFQUFtQyxLQUFLRCxLQUFMLENBQVcsQ0FBWCxFQUFjSSxHQUFqRCxFQUFzRCxLQUFLSixLQUFMLENBQVcsQ0FBWCxFQUFjRSxTQUFwRSxFQUErRSxLQUFLRixLQUFMLENBQVcsQ0FBWCxFQUFjRyxLQUE3RixFQUFvRyxLQUFLSCxLQUFMLENBQVcsQ0FBWCxFQUFjSyxLQUFsSCxDQTlCZSxFQStCZixJQUFJZixRQUFKLENBQWEsR0FBYixFQUFrQixLQUFLVSxLQUFMLENBQVcsQ0FBWCxFQUFjQyxDQUFoQyxFQUFtQyxLQUFLRCxLQUFMLENBQVcsQ0FBWCxFQUFjSSxHQUFqRCxFQUFzRCxLQUFLSixLQUFMLENBQVcsQ0FBWCxFQUFjRSxTQUFwRSxFQUErRSxLQUFLRixLQUFMLENBQVcsQ0FBWCxFQUFjRyxLQUE3RixFQUFvRyxLQUFLSCxLQUFMLENBQVcsQ0FBWCxFQUFjSyxLQUFsSCxDQS9CZSxFQWlDZixJQUFJZixRQUFKLENBQWEsR0FBYixFQUFrQixLQUFLVSxLQUFMLENBQVcsQ0FBWCxFQUFjQyxDQUFoQyxFQUFtQyxLQUFLRCxLQUFMLENBQVcsQ0FBWCxFQUFjSSxHQUFqRCxFQUFzRCxLQUFLSixLQUFMLENBQVcsQ0FBWCxFQUFjRSxTQUFwRSxFQUErRSxLQUFLRixLQUFMLENBQVcsQ0FBWCxFQUFjRyxLQUE3RixFQUFvRyxLQUFLSCxLQUFMLENBQVcsQ0FBWCxFQUFjSyxLQUFsSCxDQWpDZSxFQWtDZixJQUFJZixRQUFKLENBQWEsR0FBYixFQUFrQixLQUFLVSxLQUFMLENB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O0FBQ0QsR0FGRCxFQUVHLElBRkg7QUFHRDs7QUFFRCxTQUFTa0IsaUJBQVQsR0FBNkI7QUFDM0JwRCxpQkFBZWlDLFNBQWYsQ0FBeUJDLEdBQXpCLENBQTZCLE1BQTdCO0FBQ0F4QyxTQUFPdUMsU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsVUFBckI7QUFDQXhDLFNBQU91QyxTQUFQLENBQWlCRSxNQUFqQixDQUF3QixNQUF4QjtBQUNEOztBQUVEeEMsU0FBUzBELGdCQUFULENBQTBCLFNBQTFCLEVBQXFDdkQsS0FBSzlDLE1BQUwsQ0FBWVUsSUFBWixDQUFpQjRGLElBQWpCLENBQXNCeEQsS0FBSzlDLE1BQTNCLENBQXJDO0FBQ0EyQyxTQUFTMEQsZ0JBQVQsQ0FBMEIsU0FBMUIsRUFBcUM1QixXQUFyQzs7QUFFQTlCLFNBQVNDLGFBQVQsQ0FBdUIsWUFBdkIsRUFBcUN5RCxnQkFBckMsQ0FBc0QsT0FBdEQsRUFBK0QsWUFBVztBQUN4RTlDO0FBQ0E2QjtBQUNBQztBQUNBLE9BQUtKLFNBQUwsQ0FBZUMsR0FBZixDQUFtQixRQUFuQjtBQUNBeEMsU0FBT3VDLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLFVBQXJCO0FBQ0F2QyxXQUFTQyxhQUFULENBQXVCLG9CQUF2QixFQUE2Q3FDLFNBQTdDLENBQXVEQyxHQUF2RCxDQUEyRCxRQUEzRDs7QUFFQSxNQUFJLENBQUNsQyxlQUFlaUMsU0FBZixDQUF5QnNCLFFBQXpCLENBQWtDLE1BQWxDLENBQUwsRUFBZ0Q7QUFDOUNIO0FBQ0F0QjtBQUNEO0FBQ0YsQ0FaRDs7QUFjQS9CLGNBQWNzRCxnQkFBZCxDQUErQixPQUEvQixFQUF3QyxZQUFXO0FBQ2pELE9BQUtHLFdBQUwsR0FBbUIsQ0FBbkI7QUFDQSxPQUFLaEUsSUFBTDtBQUNELENBSEQsRUFHRyxLQUhIOztBQUtBaUQsa0IiLCJmaWxlIjoibWFpbi5idW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL2xpYi9pbmRleC5qc1wiKTtcbiIsImNvbnN0IE9ic3RhY2xlID0gcmVxdWlyZSgnLi9PYnN0YWNsZScpO1xuY29uc3QgUGxheWVyID0gcmVxdWlyZSgnLi9QbGF5ZXInKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBHYW1lIHtcbiAgY29uc3RydWN0b3IoY3R4KSB7XG4gICAgdGhpcy5jdHggPSBjdHg7XG4gICAgdGhpcy5wYXVzZWQgPSBmYWxzZTtcbiAgICB0aGlzLmxldmVsID0gMTtcbiAgICB0aGlzLmZpbGVQYXRoID0gJy9hc3NldHMvaW1hZ2VzLyc7XG4gICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKDI4MCwgNDgwLCBgJHt0aGlzLmZpbGVQYXRofWJ1bm55LnBuZ2ApO1xuICAgIHRoaXMubGFuZXMgPSBbXG4gICAgICB7eTogNDQwLCBkaXJlY3Rpb246IC0xLCBzcGVlZDogMSwgaW1nOiBgJHt0aGlzLmZpbGVQYXRofXJhY2VjYXIucG5nYCwgd2lkdGg6IDgwfSxcbiAgICAgIHt5OiA0MDAsIGRpcmVjdGlvbjogMSwgc3BlZWQ6IC41LCBpbWc6IGAke3RoaXMuZmlsZVBhdGh9ZG96ZXIucG5nYCwgd2lkdGg6IDgwfSxcbiAgICAgIHt5OiAzNjAsIGRpcmVjdGlvbjogLTEsIHNwZWVkOiAxLCBpbWc6IGAke3RoaXMuZmlsZVBhdGh9Y2FyLnBuZ2AsIHdpZHRoOiA4MH0sXG4gICAgICB7eTogMzIwLCBkaXJlY3Rpb246IDEsIHNwZWVkOiAxLjUsIGltZzogYCR7dGhpcy5maWxlUGF0aH1mYXN0Y2FyLnBuZ2AsIHdpZHRoOiA4MH0sXG4gICAgICB7eTogMjgwLCBkaXJlY3Rpb246IC0xLCBzcGVlZDogLjUsIGltZzogYCR7dGhpcy5maWxlUGF0aH10cnVjay5wbmdgLCB3aWR0aDogODB9LFxuICAgICAge3k6IDIwMCwgZGlyZWN0aW9uOiAtMSwgc3BlZWQ6IDEuNSwgaW1nOiBgJHt0aGlzLmZpbGVQYXRofWxhbmVfNV9zYWZlLnBuZ2AsIHdpZHRoOiAxMjB9LFxuICAgICAge3k6IDE2MCwgZGlyZWN0aW9uOiAxLCBzcGVlZDogLjUsIGltZzogYCR7dGhpcy5maWxlUGF0aH1sYW5lXzYucG5nYCwgd2lkdGg6IDEyMH0sXG4gICAgICB7eTogMTIwLCBkaXJlY3Rpb246IDEsIHNwZWVkOiAxLCBpbWc6IGAke3RoaXMuZmlsZVBhdGh9bGFuZV83LnBuZ2AsIHdpZHRoOiAyNDB9LFxuICAgICAge3k6IDgwLCBkaXJlY3Rpb246IC0xLCBzcGVlZDogLjUsIGltZzogYCR7dGhpcy5maWxlUGF0aH1zYWZlYXN0ZXJvaWQucG5nYCwgd2lkdGg6IDgwfSxcbiAgICAgIHt5OiA0MCwgZGlyZWN0aW9uOiAxLCBzcGVlZDogMSwgaW1nOiBgJHt0aGlzLmZpbGVQYXRofWxhbmVfOS5wbmdgLCB3aWR0aDogMTYwfVxuICAgIF07XG4gICAgdGhpcy5vYnN0YWNsZXMgPSBbXG4gICAgICBuZXcgT2JzdGFjbGUoNTIwLCB0aGlzLmxhbmVzWzBdLnksIHRoaXMubGFuZXNbMF0uaW1nLCB0aGlzLmxhbmVzWzBdLmRpcmVjdGlvbiwgdGhpcy5sYW5lc1swXS5zcGVlZCwgdGhpcy5sYW5lc1swXS53aWR0aCksXG4gICAgICBuZXcgT2JzdGFjbGUoMzYwLCB0aGlzLmxhbmVzWzBdLnksIHRoaXMubGFuZXNbMF0uaW1nLCB0aGlzLmxhbmVzWzBdLmRpcmVjdGlvbiwgdGhpcy5sYW5lc1swXS5zcGVlZCwgdGhpcy5sYW5lc1swXS53aWR0aCksXG4gICAgICBuZXcgT2JzdGFjbGUoNDAsIHRoaXMubGFuZXNbMF0ueSwgdGhpcy5sYW5lc1swXS5pbWcsIHRoaXMubGFuZXNbMF0uZGlyZWN0aW9uLCB0aGlzLmxhbmVzWzBdLnNwZWVkLCB0aGlzLmxhbmVzWzBdLndpZHRoKSxcblxuICAgICAgbmV3IE9ic3RhY2xlKDQ4MCwgdGhpcy5sYW5lc1sxXS55LCB0aGlzLmxhbmVzWzFdLmltZywgdGhpcy5sYW5lc1sxXS5kaXJlY3Rpb24sIHRoaXMubGFuZXNbMV0uc3BlZWQsIHRoaXMubGFuZXNbMV0ud2lkdGgpLFxuICAgICAgbmV3IE9ic3RhY2xlKDI4MCwgdGhpcy5sYW5lc1sxXS55LCB0aGlzLmxhbmVzWzFdLmltZywgdGhpcy5sYW5lc1sxXS5kaXJlY3Rpb24sIHRoaXMubGFuZXNbMV0uc3BlZWQsIHRoaXMubGFuZXNbMV0ud2lkdGgpLFxuICAgICAgbmV3IE9ic3RhY2xlKDgwLCB0aGlzLmxhbmVzWzFdLnksIHRoaXMubGFuZXNbMV0uaW1nLCB0aGlzLmxhbmVzWzFdLmRpcmVjdGlvbiwgdGhpcy5sYW5lc1sxXS5zcGVlZCwgdGhpcy5sYW5lc1sxXS53aWR0aCksXG5cbiAgICAgIG5ldyBPYnN0YWNsZSg1MjAsIHRoaXMubGFuZXNbMl0ueSwgdGhpcy5sYW5lc1syXS5pbWcsIHRoaXMubGFuZXNbMl0uZGlyZWN0aW9uLCB0aGlzLmxhbmVzWzJdLnNwZWVkLCB0aGlzLmxhbmVzWzJdLndpZHRoKSxcbiAgICAgIG5ldyBPYnN0YWNsZSgzNjAsIHRoaXMubGFuZXNbMl0ueSwgdGhpcy5sYW5lc1syXS5pbWcsIHRoaXMubGFuZXNbMl0uZGlyZWN0aW9uLCB0aGlzLmxhbmVzWzJdLnNwZWVkLCB0aGlzLmxhbmVzWzJdLndpZHRoKSxcbiAgICAgIG5ldyBPYnN0YWNsZSg0MCwgdGhpcy5sYW5lc1syXS55LCB0aGlzLmxhbmVzWzJdLmltZywgdGhpcy5sYW5lc1syXS5kaXJlY3Rpb24sIHRoaXMubGFuZXNbMl0uc3BlZWQsIHRoaXMubGFuZXNbMl0ud2lkdGgpLFxuXG4gICAgICBuZXcgT2JzdGFjbGUoMTQwLCB0aGlzLmxhbmVzWzNdLnksIHRoaXMubGFuZXNbM10uaW1nLCB0aGlzLmxhbmVzWzNdLmRpcmVjdGlvbiwgdGhpcy5sYW5lc1szXS5zcGVlZCwgdGhpcy5sYW5lc1szXS53aWR0aCksXG4gICAgICBuZXcgT2JzdGFjbGUoNDAsIHRoaXMubGFuZXNbM10ueSwgdGhpcy5sYW5lc1szXS5pbWcsIHRoaXMubGFuZXNbM10uZGlyZWN0aW9uLCB0aGlzLmxhbmVzWzNdLnNwZWVkLCB0aGlzLmxhbmVzWzNdLndpZHRoKSxcblxuICAgICAgbmV3IE9ic3RhY2xlKDQ4MCwgdGhpcy5sYW5lc1s0XS55LCB0aGlzLmxhbmVzWzRdLmltZywgdGhpcy5sYW5lc1s0XS5kaXJlY3Rpb24sIHRoaXMubGFuZXNbNF0uc3BlZWQsIHRoaXMubGFuZXNbNF0ud2lkdGgpLFxuICAgICAgbmV3IE9ic3RhY2xlKDI4MCwgdGhpcy5sYW5lc1s0XS55LCB0aGlzLmxhbmVzWzRdLmltZywgdGhpcy5sYW5lc1s0XS5kaXJlY3Rpb24sIHRoaXMubGFuZXNbNF0uc3BlZWQsIHRoaXMubGFuZXNbNF0ud2lkdGgpLFxuICAgICAgbmV3IE9ic3RhY2xlKDgwLCB0aGlzLmxhbmVzWzRdLnksIHRoaXMubGFuZXNbNF0uaW1nLCB0aGlzLmxhbmVzWzRdLmRpcmVjdGlvbiwgdGhpcy5sYW5lc1s0XS5zcGVlZCwgdGhpcy5sYW5lc1s0XS53aWR0aCksXG5cbiAgICAgIG5ldyBPYnN0YWNsZSg1MjAsIHRoaXMubGFuZXNbNV0ueSwgdGhpcy5sYW5lc1s1XS5pbWcsIHRoaXMubGFuZXNbNV0uZGlyZWN0aW9uLCB0aGlzLmxhbmVzWzVdLnNwZWVkLCB0aGlzLmxhbmVzWzVdLndpZHRoKSxcbiAgICAgIG5ldyBPYnN0YWNsZSgyMDAsIHRoaXMubGFuZXNbNV0ueSwgdGhpcy5sYW5lc1s1XS5pbWcsIHRoaXMubGFuZXNbNV0uZGlyZWN0aW9uLCB0aGlzLmxhbmVzWzVdLnNwZWVkLCB0aGlzLmxhbmVzWzVdLndpZHRoKSxcblxuICAgICAgbmV3IE9ic3RhY2xlKDUyMCwgdGhpcy5sYW5lc1s2XS55LCB0aGlzLmxhbmVzWzZdLmltZywgdGhpcy5sYW5lc1s2XS5kaXJlY3Rpb24sIHRoaXMubGFuZXNbNl0uc3BlZWQsIHRoaXMubGFuZXNbNl0ud2lkdGgpLFxuICAgICAgbmV3IE9ic3RhY2xlKDMyMCwgdGhpcy5sYW5lc1s2XS55LCB0aGlzLmxhbmVzWzZdLmltZywgdGhpcy5sYW5lc1s2XS5kaXJlY3Rpb24sIHRoaXMubGFuZXNbNl0uc3BlZWQsIHRoaXMubGFuZXNbNl0ud2lkdGgpLFxuICAgICAgbmV3IE9ic3RhY2xlKDEyMCwgdGhpcy5sYW5lc1s2XS55LCB0aGlzLmxhbmVzWzZdLmltZywgdGhpcy5sYW5lc1s2XS5kaXJlY3Rpb24sIHRoaXMubGFuZXNbNl0uc3BlZWQsIHRoaXMubGFuZXNbNl0ud2lkdGgpLFxuXG4gICAgICBuZXcgT2JzdGFjbGUoNTIwLCB0aGlzLmxhbmVzWzddLnksIHRoaXMubGFuZXNbN10uaW1nLCB0aGlzLmxhbmVzWzddLmRpcmVjdGlvbiwgdGhpcy5sYW5lc1s3XS5zcGVlZCwgdGhpcy5sYW5lc1s3XS53aWR0aCksXG4gICAgICBuZXcgT2JzdGFjbGUoMjAwLCB0aGlzLmxhbmVzWzddLnksIHRoaXMubGFuZXNbN10uaW1nLCB0aGlzLmxhbmVzWzddLmRpcmVjdGlvbiwgdGhpcy5sYW5lc1s3XS5zcGVlZCwgdGhpcy5sYW5lc1s3XS53aWR0aCksXG5cbiAgICAgIG5ldyBPYnN0YWNsZSg1MjAsIHRoaXMubGFuZXNbOF0ueSwgdGhpcy5sYW5lc1s4XS5pbWcsIHRoaXMubGFuZXNbOF0uZGlyZWN0aW9uLCB0aGlzLmxhbmVzWzhdLnNwZWVkLCB0aGlzLmxhbmVzWzhdLndpZHRoKSxcbiAgICAgIG5ldyBPYnN0YWNsZSgyMDAsIHRoaXMubGFuZXNbOF0ueSwgdGhpcy5sYW5lc1s4XS5pbWcsIHRoaXMubGFuZXNbOF0uZGlyZWN0aW9uLCB0aGlzLmxhbmVzWzhdLnNwZWVkLCB0aGlzLmxhbmVzWzhdLndpZHRoKSxcblxuICAgICAgbmV3IE9ic3RhY2xlKDUyMCwgdGhpcy5sYW5lc1s5XS55LCB0aGlzLmxhbmVzWzldLmltZywgdGhpcy5sYW5lc1s5XS5kaXJlY3Rpb24sIHRoaXMubGFuZXNbOV0uc3BlZWQsIHRoaXMubGFuZXNbOV0ud2lkdGgpLFxuICAgICAgbmV3IE9ic3RhY2xlKDMyMCwgdGhpcy5sYW5lc1s5XS55LCB0aGlzLmxhbmVzWzldLmltZywgdGhpcy5sYW5lc1s5XS5kaXJlY3Rpb24sIHRoaXMubGFuZXNbOV0uc3BlZWQsIHRoaXMubGFuZXNbOV0ud2lkdGgpLFxuICAgICAgbmV3IE9ic3RhY2xlKDEyMCwgdGhpcy5sYW5lc1s5XS55LCB0aGlzLmxhbmVzWzldLmltZywgdGhpcy5sYW5lc1s5XS5kaXJlY3Rpb24sIHRoaXMubGFuZXNbOV0uc3BlZWQsIHRoaXMubGFuZXNbOV0ud2lkdGgpLFxuICAgIF07XG4gIH1cblxuICBhbmltYXRlKCkge1xuICAgIHRoaXMub2JzdGFjbGVzLmZvckVhY2goIG9ic3RhY2xlID0+IHtcbiAgICAgIG9ic3RhY2xlLm1vdmUoKTtcbiAgICAgIG9ic3RhY2xlLmRyYXcodGhpcy5jdHgpO1xuICAgIH0pO1xuICAgIHRoaXMucGxheWVyLmRyYXcodGhpcy5jdHgpO1xuICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBzcmMsIGR4LCBkeHYsIHdpZHRoKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuaGVpZ2h0ID0gNDA7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuc3JjID0gc3JjO1xuICAgIHRoaXMuZHggPSBkeDtcbiAgICB0aGlzLmR4diA9IGR4djtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgY29uc3QgeyB4LCB5LCBoZWlnaHQsIHdpZHRoLCBzcmMgfSA9IHRoaXM7XG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZS5zcmMgPSBzcmM7XG4gICAgY3R4LmRyYXdJbWFnZShpbWFnZSwgeCwgeSk7XG4gIH1cbn0iLCJjb25zdCBHYW1lUGllY2UgPSByZXF1aXJlKCcuL0dhbWVQaWVjZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIE9ic3RhY2xlIGV4dGVuZHMgR2FtZVBpZWNlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgc3JjLCBkeCwgZHh2LCB3aWR0aCkge1xuICAgIHN1cGVyKHgsIHksIHNyYywgZHgsIGR4diwgd2lkdGgpO1xuICB9IFxuXG4gIG1vdmUoKSB7XG4gICAgdGhpcy54ICs9IHRoaXMuZHggKiB0aGlzLmR4djtcbiAgICBpZiAodGhpcy54ID4gNTYwICYmIHRoaXMuZHggPT09IDEpIHtcbiAgICAgIHRoaXMueCAtPSA5MDA7XG4gICAgfSBlbHNlIGlmICh0aGlzLnggPCAtMTYwICYmIHRoaXMuZHggPT09IC0xKSB7XG4gICAgICB0aGlzLnggKz0gODAwO1xuICAgIH1cbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgc3VwZXIuZHJhdyhjdHgpO1xuICB9XG59IiwiY29uc3QgR2FtZVBpZWNlID0gcmVxdWlyZSgnLi9HYW1lUGllY2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBzcmMpIHtcbiAgICBzdXBlcih4LCB5LCBzcmMpO1xuICAgIHRoaXMud2lkdGggPSA0MDtcbiAgICB0aGlzLmlzRGVhZCA9IGZhbHNlO1xuICAgIHRoaXMuaXNSaWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmxpdmVzID0gNztcbiAgICB0aGlzLmR4ID0gMDtcbiAgICB0aGlzLmR4diA9IDA7XG4gICAgdGhpcy5mYXJ0aGVzdCA9IDQ4MDtcbiAgICB0aGlzLnNjb3JlID0gMDtcbiAgfSBcblxuICBpc0NvbGxpZGluZ1dpdGgob2JqZWN0KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMueCA8IG9iamVjdC54ICsgb2JqZWN0LndpZHRoICYmIFxuICAgICAgdGhpcy54ICsgdGhpcy53aWR0aCA+IG9iamVjdC54ICYmXG4gICAgICB0aGlzLnkgPCBvYmplY3QueSArIG9iamVjdC5oZWlnaHQgJiZcbiAgICAgIHRoaXMueSArIHRoaXMuaGVpZ2h0ID4gb2JqZWN0LnlcbiAgICApO1xuICB9XG5cbiAgcmlkZSgpIHtcbiAgICB0aGlzLnggKz0gdGhpcy5keCAqIHRoaXMuZHh2O1xuICB9XG5cbiAgYnVubnlEZWF0aCgpIHtcbiAgICB0aGlzLmxpdmVzLS07XG4gICAgdGhpcy54ID0gMjgwOyBcbiAgICB0aGlzLnkgPSA0ODA7XG4gICAgdGhpcy5wbGF5RGVhdGhTb3VuZCgpO1xuICAgIHRoaXMuZmFydGhlc3QgPSA0ODA7XG4gIH1cblxuICBzY29yZUNoZWNrKCkge1xuICAgIGlmICh0aGlzLmZhcnRoZXN0ID4gdGhpcy55KSB7XG4gICAgICB0aGlzLmZhcnRoZXN0ID0gdGhpcy55O1xuICAgICAgdGhpcy5zY29yZSArPSAxMDtcbiAgICB9XG4gIH1cblxuICBtb3ZlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5pc1JpZGluZyA9IGZhbHNlO1xuICAgIHRoaXMua2VlcEJ1bm55T25HcmlkKCk7XG4gICAgbGV0IHVzZXJJbnB1dCA9IGUua2V5O1xuXG4gICAgaWYgKHRoaXMuaXNEZWFkID09PSBmYWxzZSkgeyBcbiAgICB0aGlzLnBsYXlIb3BTb3VuZCgpO1xuXG4gICAgICBzd2l0Y2ggKHVzZXJJbnB1dCl7XG4gICAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOiBcbiAgICAgICAgICBpZiAodGhpcy54IDwgNTIwKSB7IFxuICAgICAgICAgIHRoaXMueCArPSA0MDsgXG4gICAgICAgICAgfSBcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQXJyb3dMZWZ0JzogXG4gICAgICAgICAgaWYgKHRoaXMueCA+PSA0MCkgeyBcbiAgICAgICAgICB0aGlzLnggLT0gNDA7IFxuICAgICAgICAgIH0gXG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgJ0Fycm93RG93bic6IFxuICAgICAgICAgIGlmICh0aGlzLnkgPD0gNDQwKSB7IFxuICAgICAgICAgIHRoaXMueSArPSA0MDsgXG4gICAgICAgICAgfSBcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnQXJyb3dVcCc6IFxuICAgICAgICAgIGlmICh0aGlzLnkgPiA0MCAmJiB0aGlzLnkgPCA1MjAgfHwgXG4gICAgICAgICAgICAgIHRoaXMueCA+PSAyNDAgJiYgdGhpcy54IDw9IDMyMCkgeyBcbiAgICAgICAgICAgIHRoaXMueSAtPSA0MDtcbiAgICAgICAgICAgIHRoaXMuc2NvcmVDaGVjaygpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhazsgXG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAga2VlcEJ1bm55T25HcmlkKCkge1xuICAgIGlmICh0aGlzLnggJSA0MCkge1xuICAgICAgdGhpcy54ID0gKE1hdGgucm91bmQoKHRoaXMueCAlIDQwKSAvIDQwKSArIE1hdGguZmxvb3IodGhpcy54IC8gNDApKSAqIDQwO1xuICAgIH1cbiAgfVxuXG4gIHBsYXlEZWF0aFNvdW5kKCkge1xuICAgIGxldCBhdWRpbyA9IG5ldyBBdWRpbygnYXNzZXRzL2F1ZGlvL3NvdW5kLWZyb2dnZXItc3F1YXNoLndhdicpO1xuICAgIGF1ZGlvLnBsYXkoKTtcbiAgfVxuXG4gIHBsYXlIb3BTb3VuZCgpIHtcbiAgICBsZXQgYXVkaW8gPSBuZXcgQXVkaW8oJ2Fzc2V0cy9hdWRpby9zb3VuZC1mcm9nZ2VyLWhvcC53YXYnKTtcbiAgICBhdWRpby5wbGF5KCk7XG4gIH1cbn0iLCJjb25zdCBHYW1lID0gcmVxdWlyZSgnLi9HYW1lJyk7XG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZScpO1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5jb25zdCBnYW1lID0gbmV3IEdhbWUoY3R4KTtcbmNvbnN0IGV5ZU9mVGhlVGlnZXIgPSBuZXcgQXVkaW8oJ2Fzc2V0cy9hdWRpby9leWUtb2YtdGhlLXRpZ2VyLm1wMycpO1xuY29uc3Qgc2NvcmUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2NvcmUtc3BhbicpO1xuY29uc3QgZ2FtZU92ZXJTY3JlZW4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZS1vdmVyLS1pbWcnKTtcbmNvbnN0IGJ1bm55ID0gbmV3IEltYWdlKCk7XG5jb25zdCBzcGFjZUJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IHNwYWNlU3RhdGlvbiA9IG5ldyBJbWFnZSgpO1xuY29uc3Qgc2FmZVBhdGggPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IG1vb25CYWNrZ3JvdW5kID0gbmV3IEltYWdlKCk7XG5jb25zdCBidW5ueUxpdmVzID0gbmV3IEltYWdlKCk7XG5cbmJ1bm55LnNyYyA9ICcvYXNzZXRzL2ltYWdlcy9idW5ueS5wbmcnO1xuc3BhY2VCYWNrZ3JvdW5kLnNyYyA9ICcvYXNzZXRzL2ltYWdlcy9jb3JvbmFfdXAucG5nJztcbnNwYWNlU3RhdGlvbi5zcmMgPSAnL2Fzc2V0cy9pbWFnZXMvbGFuZV9nb2FsLnBuZyc7XG5zYWZlUGF0aC5zcmMgPSAnL2Fzc2V0cy9pbWFnZXMvc2FmZXBhdGgucG5nJztcbm1vb25CYWNrZ3JvdW5kLnNyYyA9ICcvYXNzZXRzL2ltYWdlcy9sdW5hcnJvY2tfcy5wbmcnO1xuYnVubnlMaXZlcy5zcmMgPSAnL2Fzc2V0cy9pbWFnZXMvYnVubnlfbGl2ZXMucG5nJztcblxuZnVuY3Rpb24gZ2FtZUxvb3AoKSB7XG4gIGlmIChnYW1lLnBsYXllci5saXZlcyA9PT0gMCkge1xuICAgIGVuZEdhbWUoKTtcbiAgICByZXR1cm47XG4gIH1cbiAgaWYgKGdhbWUucGxheWVyLnkgPT09IDApIHtcbiAgICBidW5ueVJlYWNoZXNHb2FsKCk7IFxuICB9IGVsc2Uge1xuICAgIGRyYXdCYWNrZ3JvdW5kKCk7XG4gICAgZHJhd1NhZmVQYXRocygpO1xuICAgIGRyYXdCdW5ueUxpdmVzSWNvbnMoKTtcbiAgICBnYW1lLmFuaW1hdGUoKTtcblxuICAgIGlmIChnYW1lLnBsYXllci54IDwgMCB8fCBnYW1lLnBsYXllci54ID49IDU2MCkge1xuICAgICAgZ2FtZS5wbGF5ZXIuYnVubnlEZWF0aCgpO1xuICAgIH1cbiAgICBnYW1lLm9ic3RhY2xlcy5mb3JFYWNoKCBvYnN0YWNsZSA9PiB7XG4gICAgICBpZiAoZ2FtZS5wbGF5ZXIuaXNDb2xsaWRpbmdXaXRoKG9ic3RhY2xlKSAmJiBnYW1lLnBsYXllci55ID49IDI4MCkge1xuICAgICAgICBnYW1lLnBsYXllci5idW5ueURlYXRoKCk7XG4gICAgICB9IGVsc2UgaWYgKGdhbWUucGxheWVyLnkgPCAyNDAgJiYgZ2FtZS5wbGF5ZXIuaXNDb2xsaWRpbmdXaXRoKG9ic3RhY2xlKSkge1xuICAgICAgICByaWRlQXN0ZXJpb2Qob2JzdGFjbGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGdhbWUucGxheWVyLmlzUmlkaW5nID09PSBmYWxzZSAmJiBnYW1lLnBsYXllci55IDwgMjQwICYmIGdhbWUucGxheWVyLnkgPiAwKSB7XG4gICAgICBnYW1lLnBsYXllci5idW5ueURlYXRoKCk7XG4gICAgfVxuICB9XG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xufVxuXG5mdW5jdGlvbiBkcmF3QmFja2dyb3VuZCgpIHtcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICBjdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgY3R4LmZpbGxSZWN0KDAsIDUyMCwgNTYwLCA0MCk7XG4gIGN0eC5kcmF3SW1hZ2UobW9vbkJhY2tncm91bmQsIDAsIDI4MCk7ICAgIFxuICBjdHguZHJhd0ltYWdlKHNwYWNlU3RhdGlvbiwgMCwgMCk7XG4gIGN0eC5kcmF3SW1hZ2Uoc3BhY2VCYWNrZ3JvdW5kLCAwLCA0MCk7XG59XG5cbmZ1bmN0aW9uIGRyYXdTYWZlUGF0aHMoKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTQ7IGkrKykge1xuICAgIGN0eC5kcmF3SW1hZ2Uoc2FmZVBhdGgsIGkgKiA0MCwgMjQwKTtcbiAgfVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgMTQ7IGkrKykge1xuICAgIGN0eC5kcmF3SW1hZ2Uoc2FmZVBhdGgsIGkgKiA0MCwgNDgwKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkcmF3QnVubnlMaXZlc0ljb25zKCkge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWUucGxheWVyLmxpdmVzIC0gMTsgaSsrKSB7XG4gICAgY3R4LmRyYXdJbWFnZShidW5ueUxpdmVzLCBpICogMzAsIDUzMCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gYnVubnlSZWFjaGVzR29hbCgpIHtcbiAgZ2FtZS5wbGF5ZXIuc2NvcmUgKz0gNTA7XG4gIGxldmVsVXAoKTtcbiAgcGxheVdpbkppbmdsZSgpO1xuICB1cGRhdGVTY29yZSgpO1xuICBkaXNwbGF5TGV2ZWxVcFRleHQoKTtcbiAgaW5jcmVhc2VPYnN0YWNsZVNwZWVkKCk7XG4gIGN0eC5kcmF3SW1hZ2UoYnVubnksIDI2MCwgMCk7XG4gIHJlc2V0QnVubnlMb2NhdGlvbigpO1xufVxuXG5mdW5jdGlvbiBsZXZlbFVwKCkge1xuICBnYW1lLmxldmVsKys7XG4gIGdhbWUucGxheWVyLmZhcnRoZXN0ID0gNDgwO1xufVxuXG5mdW5jdGlvbiByaWRlQXN0ZXJpb2Qob2JzdGFjbGUpIHtcbiAgZ2FtZS5wbGF5ZXIuZHggPSBvYnN0YWNsZS5keDtcbiAgZ2FtZS5wbGF5ZXIuZHh2ID0gb2JzdGFjbGUuZHh2O1xuICBnYW1lLnBsYXllci5pc1JpZGluZyA9IHRydWU7XG4gIGdhbWUucGxheWVyLnJpZGUoKTtcbn1cblxuZnVuY3Rpb24gcmVzdGFydEdhbWUoKSB7XG4gIGdhbWUucGxheWVyLmxpdmVzID0gNztcbiAgZ2FtZS5wbGF5ZXIuaXNEZWFkID0gZmFsc2U7XG4gIHJlc2V0QnVubnlMb2NhdGlvbigpO1xuICByZXNldE9ic3RhY2xlU3BlZWQoKTtcbiAgZ2FtZS5sZXZlbCA9IDE7XG4gIGdhbWVMb29wKCk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0QnVubnlMb2NhdGlvbigpIHtcbiAgZ2FtZS5wbGF5ZXIueCA9IDI4MDsgXG4gIGdhbWUucGxheWVyLnkgPSA0ODA7IFxufVxuXG5mdW5jdGlvbiBlbmRHYW1lKCkge1xuICBleWVPZlRoZVRpZ2VyLnBhdXNlKCk7XG4gIGdhbWUucGxheWVyLmlzRGVhZCA9IHRydWU7IFxuICBjYW52YXMuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICBnYW1lT3ZlclNjcmVlbi5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC1idG4nKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgZ2FtZS5wbGF5ZXIuc2NvcmUgPSAwO1xuICB1cGRhdGVTY29yZSgpO1xufVxuXG5mdW5jdGlvbiBzdGFydEJ0blNvdW5kKCkge1xuICBsZXQgYXVkaW8gPSBuZXcgQXVkaW8oJ2Fzc2V0cy9hdWRpby9zb3VuZC1mcm9nZ2VyLWNvaW4taW4ud2F2Jyk7XG4gIGF1ZGlvLnBsYXkoKTtcbn1cblxuZnVuY3Rpb24gc3RhcnRUaGVtZU11c2ljKCkge1xuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIGV5ZU9mVGhlVGlnZXIudm9sdW1lID0gLjM7XG4gICAgZXllT2ZUaGVUaWdlci5wbGF5KCk7IFxuICB9LCAxODAwKTtcbn1cblxuZnVuY3Rpb24gcGxheVdpbkppbmdsZSgpIHtcbiAgbGV0IGF1ZGlvID0gbmV3IEF1ZGlvKCdhc3NldHMvYXVkaW8vd2luLWppbmdsZS53YXYnKTtcbiAgYXVkaW8udm9sdW1lID0gLjU7XG4gIGF1ZGlvLnBsYXkoKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlU2NvcmUoKSB7XG4gIHNjb3JlLmlubmVyVGV4dCA9IGdhbWUucGxheWVyLnNjb3JlO1xuICByZXRyaWV2ZUhpU2NvcmUoKTtcbn1cblxuZnVuY3Rpb24gcmV0cmlldmVIaVNjb3JlKCkge1xuICBsZXQgaGlTY29yZSA9IGdldE5QYXJzZSgpIHx8IDA7XG4gIGlmIChnYW1lLnBsYXllci5zY29yZSA+IGhpU2NvcmUpIHtcbiAgICBoaVNjb3JlID0gZ2FtZS5wbGF5ZXIuc2NvcmU7XG4gIH1cbiAgc3RvcmVIaVNjb3JlKGhpU2NvcmUpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGktc2NvcmUtc3BhbicpLmlubmVyVGV4dCA9IGhpU2NvcmU7XG59XG5cbmZ1bmN0aW9uIGdldE5QYXJzZSgpIHtcbiAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Njb3JlJykpO1xufVxuXG5mdW5jdGlvbiBzdG9yZUhpU2NvcmUoc2NvcmUpIHtcbiAgdmFyIHN0cmluZ2lmaWVkID0gSlNPTi5zdHJpbmdpZnkoc2NvcmUpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2NvcmUnLCBzdHJpbmdpZmllZCk7XG59XG5cbmZ1bmN0aW9uIGluY3JlYXNlT2JzdGFjbGVTcGVlZCgpIHtcbiAgZ2FtZS5vYnN0YWNsZXMuZm9yRWFjaCggb2JzdGFjbGUgPT4ge1xuICAgIG9ic3RhY2xlLmR4diArPSAuMztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0T2JzdGFjbGVTcGVlZCgpIHtcbiAgZ2FtZS5vYnN0YWNsZXMuZm9yRWFjaCggb2JzdGFjbGUgPT4ge1xuICAgIG9ic3RhY2xlLmR4diAtPSAoKGdhbWUubGV2ZWwgLSAxKSAqIC4zKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlMZXZlbFVwVGV4dCgpIHtcbiAgbGV0IGxldmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxldmVsJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZXZlbC1zcGFuJykuaW5uZXJUZXh0ID0gZ2FtZS5sZXZlbDtcbiAgbGV2ZWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIGxldmVsLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgfSwgMzAwMCk7XG59XG5cbmZ1bmN0aW9uIGRlYXRoU2NyZWVuVG9nZ2xlKCkge1xuICBnYW1lT3ZlclNjcmVlbi5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gIGNhbnZhcy5jbGFzc0xpc3QuYWRkKCd1bmhpZGRlbicpO1xuICBjYW52YXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpOyBcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIGdhbWUucGxheWVyLm1vdmUuYmluZChnYW1lLnBsYXllcikpO1xuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigna2V5ZG93bicsIHVwZGF0ZVNjb3JlKTtcblxuZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0LWJ0bicpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gIGdhbWVMb29wKCk7XG4gIHN0YXJ0QnRuU291bmQoKTtcbiAgc3RhcnRUaGVtZU11c2ljKCk7IFxuICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuICBjYW52YXMuY2xhc3NMaXN0LmFkZCgndW5oaWRkZW4nKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnN0YXJ0LXNjcmVlbi0taW1nJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG5cbiAgaWYgKCFnYW1lT3ZlclNjcmVlbi5jbGFzc0xpc3QuY29udGFpbnMoJ2hpZGUnKSkge1xuICAgIGRlYXRoU2NyZWVuVG9nZ2xlKCk7XG4gICAgcmVzdGFydEdhbWUoKTtcbiAgfVxufSk7XG5cbmV5ZU9mVGhlVGlnZXIuYWRkRXZlbnRMaXN0ZW5lcignZW5kZWQnLCBmdW5jdGlvbigpIHtcbiAgdGhpcy5jdXJyZW50VGltZSA9IDA7XG4gIHRoaXMucGxheSgpO1xufSwgZmFsc2UpO1xuXG5yZXRyaWV2ZUhpU2NvcmUoKTsiXSwic291cmNlUm9vdCI6IiJ9