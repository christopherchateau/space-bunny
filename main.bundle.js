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
    this.gameOver = false;
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
      this.playThemeMusic();
      this.keepBunnyOnGrid();

      var userInput = e.key;

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
    key: 'playThemeMusic',
    value: function playThemeMusic() {
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

  for (var i = 0; i < 14; i++) {
    ctx.drawImage(safePath, i * 40, 240);
  }

  for (var _i = 0; _i < 14; _i++) {
    ctx.drawImage(safePath, _i * 40, 480);
  }

  for (var _i2 = 0; _i2 < game.player.lives - 1; _i2++) {
    ctx.drawImage(bunnyLives, _i2 * 30, 530);
  }
}

function bunnyReachesGoal() {
  game.level++;
  game.player.farthest = 480;
  game.player.score += 50;
  playWinJingle();
  updateScore();
  displayLevelUp();
  increaseObstacleSpeed();
  ctx.drawImage(bunny, 260, 0);
  resetBunnyLocation();
}

function rideAsteriod(obstacle) {
  game.player.dx = obstacle.dx;
  game.player.dxv = obstacle.dxv;
  game.player.isRiding = true;
  game.player.ride();
}

function restartGame() {
  game.player.lives = 7;
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
  game.gameOver = true;
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
    eyeOfTheTiger.volume = .4;
    eyeOfTheTiger.play();
  }, 1800);
}

function playWinJingle() {
  var audio = new Audio('assets/audio/win-jingle.wav');
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

function displayLevelUp() {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWVQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvT2JzdGFjbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL1BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXguanMiXSwibmFtZXMiOlsiT2JzdGFjbGUiLCJyZXF1aXJlIiwiUGxheWVyIiwibW9kdWxlIiwiZXhwb3J0cyIsImN0eCIsInBhdXNlZCIsImdhbWVPdmVyIiwibGV2ZWwiLCJmaWxlUGF0aCIsInBsYXllciIsImxhbmVzIiwieSIsImRpcmVjdGlvbiIsInNwZWVkIiwiaW1nIiwid2lkdGgiLCJvYnN0YWNsZXMiLCJmb3JFYWNoIiwib2JzdGFjbGUiLCJtb3ZlIiwiZHJhdyIsIngiLCJzcmMiLCJkeCIsImR4diIsImhlaWdodCIsImltYWdlIiwiSW1hZ2UiLCJkcmF3SW1hZ2UiLCJHYW1lUGllY2UiLCJpc0RlYWQiLCJpc1JpZGluZyIsImxpdmVzIiwiZmFydGhlc3QiLCJzY29yZSIsIm9iamVjdCIsInBsYXlEZWF0aFNvdW5kIiwiZSIsInByZXZlbnREZWZhdWx0IiwicGxheVRoZW1lTXVzaWMiLCJrZWVwQnVubnlPbkdyaWQiLCJ1c2VySW5wdXQiLCJrZXkiLCJzY29yZUNoZWNrIiwiTWF0aCIsInJvdW5kIiwiZmxvb3IiLCJhdWRpbyIsIkF1ZGlvIiwicGxheSIsIkdhbWUiLCJjYW52YXMiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRDb250ZXh0IiwiZ2FtZSIsImV5ZU9mVGhlVGlnZXIiLCJnYW1lT3ZlclNjcmVlbiIsImJ1bm55Iiwic3BhY2VCYWNrZ3JvdW5kIiwic3BhY2VTdGF0aW9uIiwic2FmZVBhdGgiLCJtb29uQmFja2dyb3VuZCIsImJ1bm55TGl2ZXMiLCJnYW1lTG9vcCIsImVuZEdhbWUiLCJidW5ueVJlYWNoZXNHb2FsIiwiZHJhd0JhY2tncm91bmQiLCJhbmltYXRlIiwiYnVubnlEZWF0aCIsImlzQ29sbGlkaW5nV2l0aCIsInJpZGVBc3RlcmlvZCIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImNsZWFyUmVjdCIsImZpbGxTdHlsZSIsImZpbGxSZWN0IiwiaSIsInBsYXlXaW5KaW5nbGUiLCJ1cGRhdGVTY29yZSIsImRpc3BsYXlMZXZlbFVwIiwiaW5jcmVhc2VPYnN0YWNsZVNwZWVkIiwicmVzZXRCdW5ueUxvY2F0aW9uIiwicmlkZSIsInJlc3RhcnRHYW1lIiwicmVzZXRPYnN0YWNsZVNwZWVkIiwicGF1c2UiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJzdGFydEJ0blNvdW5kIiwic3RhcnRUaGVtZU11c2ljIiwic2V0VGltZW91dCIsInZvbHVtZSIsImlubmVyVGV4dCIsInJldHJpZXZlSGlTY29yZSIsImhpU2NvcmUiLCJnZXROUGFyc2UiLCJzdG9yZUhpU2NvcmUiLCJKU09OIiwicGFyc2UiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic3RyaW5naWZpZWQiLCJzdHJpbmdpZnkiLCJzZXRJdGVtIiwiZGVhdGhTY3JlZW5Ub2dnbGUiLCJhZGRFdmVudExpc3RlbmVyIiwiYmluZCIsImNvbnRhaW5zIiwiY3VycmVudFRpbWUiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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cUNwRCxLQUFLOUMsTUFBTCxDQUFZVSxJQUFaLENBQWlCeUYsSUFBakIsQ0FBc0JyRCxLQUFLOUMsTUFBM0IsQ0FBckM7QUFDQTJDLFNBQVN1RCxnQkFBVCxDQUEwQixTQUExQixFQUFxQzVCLFdBQXJDOztBQUVBM0IsU0FBU0MsYUFBVCxDQUF1QixZQUF2QixFQUFxQ3NELGdCQUFyQyxDQUFzRCxPQUF0RCxFQUErRCxZQUFXO0FBQ3hFM0M7QUFDQTBCO0FBQ0FDO0FBQ0EsT0FBS0osU0FBTCxDQUFlQyxHQUFmLENBQW1CLFFBQW5CO0FBQ0FyQyxTQUFPb0MsU0FBUCxDQUFpQkMsR0FBakIsQ0FBcUIsVUFBckI7QUFDQXBDLFdBQVNDLGFBQVQsQ0FBdUIsb0JBQXZCLEVBQTZDa0MsU0FBN0MsQ0FBdURDLEdBQXZELENBQTJELFFBQTNEOztBQUVBLE1BQUksQ0FBQy9CLGVBQWU4QixTQUFmLENBQXlCc0IsUUFBekIsQ0FBa0MsTUFBbEMsQ0FBTCxFQUFnRDtBQUM5Q0g7QUFDQXRCO0FBQ0Q7QUFDRixDQVpEOztBQWNBNUIsY0FBY21ELGdCQUFkLENBQStCLE9BQS9CLEVBQXdDLFlBQVc7QUFDakQsT0FBS0csV0FBTCxHQUFtQixDQUFuQjtBQUNBLE9BQUs3RCxJQUFMO0FBQ0QsQ0FIRCxFQUdHLEtBSEg7O0FBS0E4QyxrQiIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbGliL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgT2JzdGFjbGUgPSByZXF1aXJlKCcuL09ic3RhY2xlJyk7XG5jb25zdCBQbGF5ZXIgPSByZXF1aXJlKCcuL1BsYXllcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcihjdHgpIHtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICB0aGlzLmxldmVsID0gMTtcbiAgICB0aGlzLmZpbGVQYXRoID0gJy9hc3NldHMvaW1hZ2VzLyc7XG4gICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKDI4MCwgNDgwLCBgJHt0aGlzLmZpbGVQYXRofWJ1bm55LnBuZ2ApO1xuICAgIHRoaXMubGFuZXMgPSBbXG4gICAgICB7eTogNDQwLCBkaXJlY3Rpb246IC0xLCBzcGVlZDogMSwgaW1nOiBgJHt0aGlzLmZpbGVQYXRofXJhY2VjYXIucG5nYCwgd2lkdGg6IDgwfSxcbiAgICAgIHt5OiA0MDAsIGRpcmVjdGlvbjogMSwgc3BlZWQ6IC41LCBpbWc6IGAke3RoaXMuZmlsZVBhdGh9ZG96ZXIucG5nYCwgd2lkdGg6IDgwfSxcbiAgICAgIHt5OiAzNjAsIGRpcmVjdGlvbjogLTEsIHNwZWVkOiAxLCBpbWc6IGAke3RoaXMuZmlsZVBhdGh9Y2FyLnBuZ2AsIHdpZHRoOiA4MH0sXG4gICAgICB7eTogMzIwLCBkaXJlY3Rpb246IDEsIHNwZWVkOiAxLjUsIGltZzogYCR7dGhpcy5maWxlUGF0aH1mYXN0Y2FyLnBuZ2AsIHdpZHRoOiA4MH0sXG4gICAgICB7eTogMjgwLCBkaXJlY3Rpb246IC0xLCBzcGVlZDogLjUsIGltZzogYCR7dGhpcy5maWxlUGF0aH10cnVjay5wbmdgLCB3aWR0aDogODB9LFxuICAgICAge3k6IDIwMCwgZGlyZWN0aW9uOiAtMSwgc3BlZWQ6IDEuNSwgaW1nOiBgJHt0aGlzLmZpbGVQYXRofWxhbmVfNV9zYWZlLnBuZ2AsIHdpZHRoOiAxMjB9LFxuICAgICAge3k6IDE2MCwgZGlyZWN0aW9uOiAxLCBzcGVlZDogLjUsIGltZzogYCR7dGhpcy5maWxlUGF0aH1sYW5lXzYucG5nYCwgd2lkdGg6IDEyMH0sXG4gICAgICB7eTogMTIwLCBkaXJlY3Rpb246IDEsIHNwZWVkOiAxLCBpbWc6IGAke3RoaXMuZmlsZVBhdGh9bGFuZV83LnBuZ2AsIHdpZHRoOiAyNDB9LFxuICAgICAge3k6IDgwLCBkaXJlY3Rpb246IC0xLCBzcGVlZDogLjUsIGltZzogYCR7dGhpcy5maWxlUGF0aH1zYWZlYXN0ZXJvaWQucG5nYCwgd2lkdGg6IDgwfSxcbiAgICAgIHt5OiA0MCwgZGlyZWN0aW9uOiAxLCBzcGVlZDogMSwgaW1nOiBgJHt0aGlzLmZpbGVQYXRofWxhbmVfOS5wbmdgLCB3aWR0aDogMTYwfVxuICAgIF07XG4gICAgdGhpcy5vYnN0YWNsZXMgPSBbXG4gICAgICBuZXcgT2JzdGFjbGUoNTIwLCB0aGlzLmxhbmVzWzBdLnksIHRoaXMubGFuZXNbMF0uaW1nLCB0aGlzLmxhbmVzWzBdLmRpcmVjdGlvbiwgdGhpcy5sYW5lc1swXS5zcGVlZCwgdGhpcy5sYW5lc1swXS53aWR0aCksXG4gICAgICBuZXcgT2JzdGFjbGUoMzYwLCB0aGlzLmxhbmVzWzBdLnksIHRoaXMubGFuZXNbMF0uaW1nLCB0aGlzLmxhbmVzWzBdLmRpcmVjdGlvbiwgdGhpcy5sYW5lc1swXS5zcGVlZCwgdGhpcy5sYW5lc1swXS53aWR0aCksXG4gICAgICBuZXcgT2JzdGFjbGUoNDAsIHRoaXMubGFuZXNbMF0ueSwgdGhpcy5sYW5lc1swXS5pbWcsIHRoaXMubGFuZXNbMF0uZGlyZWN0aW9uLCB0aGlzLmxhbmVzWzBdLnNwZWVkLCB0aGlzLmxhbmVzWzBdLndpZHRoKSxcblxuICAgICAgbmV3IE9ic3RhY2xlKDQ4MCwgdGhpcy5sYW5lc1sxXS55LCB0aGlzLmxhbmVzWzFdLmltZywgdGhpcy5sYW5lc1sxXS5kaXJlY3Rpb24sIHRoaXMubGFuZXNbMV0uc3BlZWQsIHRoaXMubGFuZXNbMV0ud2lkdGgpLFxuICAgICAgbmV3IE9ic3RhY2xlKDI4MCwgdGhpcy5sYW5lc1sxXS55LCB0aGlzLmxhbmVzWzFdLmltZywgdGhpcy5sYW5lc1sxXS5kaXJlY3Rpb24sIHRoaXMubGFuZXNbMV0uc3BlZWQsIHRoaXMubGFuZXNbMV0ud2lkdGgpLFxuICAgICAgbmV3IE9ic3RhY2xlKDgwLCB0aGlzLmxhbmVzWzFdLnksIHRoaXMubGFuZXNbMV0uaW1nLCB0aGlzLmxhbmVzWzFdLmRpcmVjdGlvbiwgdGhpcy5sYW5lc1sxXS5zcGVlZCwgdGhpcy5sYW5lc1sxXS53aWR0aCksXG5cbiAgICAgIG5ldyBPYnN0YWNsZSg1MjAsIHRoaXMubGFuZXNbMl0ueSwgdGhpcy5sYW5lc1syXS5pbWcsIHRoaXMubGFuZXNbMl0uZGlyZWN0aW9uLCB0aGlzLmxhbmVzWzJdLnNwZWVkLCB0aGlzLmxhbmVzWzJdLndpZHRoKSxcbiAgICAgIG5ldyBPYnN0YWNsZSgzNjAsIHRoaXMubGFuZXNbMl0ueSwgdGhpcy5sYW5lc1syXS5pbWcsIHRoaXMubGFuZXNbMl0uZGlyZWN0aW9uLCB0aGlzLmxhbmVzWzJdLnNwZWVkLCB0aGlzLmxhbmVzWzJdLndpZHRoKSxcbiAgICAgIG5ldyBPYnN0YWNsZSg0MCwgdGhpcy5sYW5lc1syXS55LCB0aGlzLmxhbmVzWzJdLmltZywgdGhpcy5sYW5lc1syXS5kaXJlY3Rpb24sIHRoaXMubGFuZXNbMl0uc3BlZWQsIHRoaXMubGFuZXNbMl0ud2lkdGgpLFxuXG4gICAgICBuZXcgT2JzdGFjbGUoMTQwLCB0aGlzLmxhbmVzWzNdLnksIHRoaXMubGFuZXNbM10uaW1nLCB0aGlzLmxhbmVzWzNdLmRpcmVjdGlvbiwgdGhpcy5sYW5lc1szXS5zcGVlZCwgdGhpcy5sYW5lc1szXS53aWR0aCksXG4gICAgICBuZXcgT2JzdGFjbGUoNDAsIHRoaXMubGFuZXNbM10ueSwgdGhpcy5sYW5lc1szXS5pbWcsIHRoaXMubGFuZXNbM10uZGlyZWN0aW9uLCB0aGlzLmxhbmVzWzNdLnNwZWVkLCB0aGlzLmxhbmVzWzNdLndpZHRoKSxcblxuICAgICAgbmV3IE9ic3RhY2xlKDQ4MCwgdGhpcy5sYW5lc1s0XS55LCB0aGlzLmxhbmVzWzRdLmltZywgdGhpcy5sYW5lc1s0XS5kaXJlY3Rpb24sIHRoaXMubGFuZXNbNF0uc3BlZWQsIHRoaXMubGFuZXNbNF0ud2lkdGgpLFxuICAgICAgbmV3IE9ic3RhY2xlKDI4MCwgdGhpcy5sYW5lc1s0XS55LCB0aGlzLmxhbmVzWzRdLmltZywgdGhpcy5sYW5lc1s0XS5kaXJlY3Rpb24sIHRoaXMubGFuZXNbNF0uc3BlZWQsIHRoaXMubGFuZXNbNF0ud2lkdGgpLFxuICAgICAgbmV3IE9ic3RhY2xlKDgwLCB0aGlzLmxhbmVzWzRdLnksIHRoaXMubGFuZXNbNF0uaW1nLCB0aGlzLmxhbmVzWzRdLmRpcmVjdGlvbiwgdGhpcy5sYW5lc1s0XS5zcGVlZCwgdGhpcy5sYW5lc1s0XS53aWR0aCksXG5cbiAgICAgIG5ldyBPYnN0YWNsZSg1MjAsIHRoaXMubGFuZXNbNV0ueSwgdGhpcy5sYW5lc1s1XS5pbWcsIHRoaXMubGFuZXNbNV0uZGlyZWN0aW9uLCB0aGlzLmxhbmVzWzVdLnNwZWVkLCB0aGlzLmxhbmVzWzVdLndpZHRoKSxcbiAgICAgIG5ldyBPYnN0YWNsZSgyMDAsIHRoaXMubGFuZXNbNV0ueSwgdGhpcy5sYW5lc1s1XS5pbWcsIHRoaXMubGFuZXNbNV0uZGlyZWN0aW9uLCB0aGlzLmxhbmVzWzVdLnNwZWVkLCB0aGlzLmxhbmVzWzVdLndpZHRoKSxcblxuICAgICAgbmV3IE9ic3RhY2xlKDUyMCwgdGhpcy5sYW5lc1s2XS55LCB0aGlzLmxhbmVzWzZdLmltZywgdGhpcy5sYW5lc1s2XS5kaXJlY3Rpb24sIHRoaXMubGFuZXNbNl0uc3BlZWQsIHRoaXMubGFuZXNbNl0ud2lkdGgpLFxuICAgICAgbmV3IE9ic3RhY2xlKDMyMCwgdGhpcy5sYW5lc1s2XS55LCB0aGlzLmxhbmVzWzZdLmltZywgdGhpcy5sYW5lc1s2XS5kaXJlY3Rpb24sIHRoaXMubGFuZXNbNl0uc3BlZWQsIHRoaXMubGFuZXNbNl0ud2lkdGgpLFxuICAgICAgbmV3IE9ic3RhY2xlKDEyMCwgdGhpcy5sYW5lc1s2XS55LCB0aGlzLmxhbmVzWzZdLmltZywgdGhpcy5sYW5lc1s2XS5kaXJlY3Rpb24sIHRoaXMubGFuZXNbNl0uc3BlZWQsIHRoaXMubGFuZXNbNl0ud2lkdGgpLFxuXG4gICAgICBuZXcgT2JzdGFjbGUoNTIwLCB0aGlzLmxhbmVzWzddLnksIHRoaXMubGFuZXNbN10uaW1nLCB0aGlzLmxhbmVzWzddLmRpcmVjdGlvbiwgdGhpcy5sYW5lc1s3XS5zcGVlZCwgdGhpcy5sYW5lc1s3XS53aWR0aCksXG4gICAgICBuZXcgT2JzdGFjbGUoMjAwLCB0aGlzLmxhbmVzWzddLnksIHRoaXMubGFuZXNbN10uaW1nLCB0aGlzLmxhbmVzWzddLmRpcmVjdGlvbiwgdGhpcy5sYW5lc1s3XS5zcGVlZCwgdGhpcy5sYW5lc1s3XS53aWR0aCksXG5cbiAgICAgIG5ldyBPYnN0YWNsZSg1MjAsIHRoaXMubGFuZXNbOF0ueSwgdGhpcy5sYW5lc1s4XS5pbWcsIHRoaXMubGFuZXNbOF0uZGlyZWN0aW9uLCB0aGlzLmxhbmVzWzhdLnNwZWVkLCB0aGlzLmxhbmVzWzhdLndpZHRoKSxcbiAgICAgIG5ldyBPYnN0YWNsZSgyMDAsIHRoaXMubGFuZXNbOF0ueSwgdGhpcy5sYW5lc1s4XS5pbWcsIHRoaXMubGFuZXNbOF0uZGlyZWN0aW9uLCB0aGlzLmxhbmVzWzhdLnNwZWVkLCB0aGlzLmxhbmVzWzhdLndpZHRoKSxcblxuICAgICAgbmV3IE9ic3RhY2xlKDUyMCwgdGhpcy5sYW5lc1s5XS55LCB0aGlzLmxhbmVzWzldLmltZywgdGhpcy5sYW5lc1s5XS5kaXJlY3Rpb24sIHRoaXMubGFuZXNbOV0uc3BlZWQsIHRoaXMubGFuZXNbOV0ud2lkdGgpLFxuICAgICAgbmV3IE9ic3RhY2xlKDMyMCwgdGhpcy5sYW5lc1s5XS55LCB0aGlzLmxhbmVzWzldLmltZywgdGhpcy5sYW5lc1s5XS5kaXJlY3Rpb24sIHRoaXMubGFuZXNbOV0uc3BlZWQsIHRoaXMubGFuZXNbOV0ud2lkdGgpLFxuICAgICAgbmV3IE9ic3RhY2xlKDEyMCwgdGhpcy5sYW5lc1s5XS55LCB0aGlzLmxhbmVzWzldLmltZywgdGhpcy5sYW5lc1s5XS5kaXJlY3Rpb24sIHRoaXMubGFuZXNbOV0uc3BlZWQsIHRoaXMubGFuZXNbOV0ud2lkdGgpLFxuICAgIF07XG4gIH1cblxuICBhbmltYXRlKCkge1xuICAgIHRoaXMub2JzdGFjbGVzLmZvckVhY2goIG9ic3RhY2xlID0+IHtcbiAgICAgIG9ic3RhY2xlLm1vdmUoKTtcbiAgICAgIG9ic3RhY2xlLmRyYXcodGhpcy5jdHgpO1xuICAgIH0pO1xuICAgIHRoaXMucGxheWVyLmRyYXcodGhpcy5jdHgpO1xuICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBzcmMsIGR4LCBkeHYsIHdpZHRoKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuaGVpZ2h0ID0gNDA7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuc3JjID0gc3JjO1xuICAgIHRoaXMuZHggPSBkeDtcbiAgICB0aGlzLmR4diA9IGR4djtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgY29uc3QgeyB4LCB5LCBoZWlnaHQsIHdpZHRoLCBzcmMgfSA9IHRoaXM7XG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZS5zcmMgPSBzcmM7XG4gICAgY3R4LmRyYXdJbWFnZShpbWFnZSwgeCwgeSk7XG4gIH1cbn0iLCJjb25zdCBHYW1lUGllY2UgPSByZXF1aXJlKCcuL0dhbWVQaWVjZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIE9ic3RhY2xlIGV4dGVuZHMgR2FtZVBpZWNlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgc3JjLCBkeCwgZHh2LCB3aWR0aCkge1xuICAgIHN1cGVyKHgsIHksIHNyYywgZHgsIGR4diwgd2lkdGgpO1xuICB9IFxuXG4gIG1vdmUoKSB7XG4gICAgdGhpcy54ICs9IHRoaXMuZHggKiB0aGlzLmR4djtcbiAgICBpZiAodGhpcy54ID4gNTYwICYmIHRoaXMuZHggPT09IDEpIHtcbiAgICAgIHRoaXMueCAtPSA5MDA7XG4gICAgfSBlbHNlIGlmICh0aGlzLnggPCAtMTYwICYmIHRoaXMuZHggPT09IC0xKSB7XG4gICAgICB0aGlzLnggKz0gODAwO1xuICAgIH1cbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgc3VwZXIuZHJhdyhjdHgpO1xuICB9XG59IiwiY29uc3QgR2FtZVBpZWNlID0gcmVxdWlyZSgnLi9HYW1lUGllY2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBzcmMpIHtcbiAgICBzdXBlcih4LCB5LCBzcmMpO1xuICAgIHRoaXMud2lkdGggPSA0MDtcbiAgICB0aGlzLmlzRGVhZCA9IGZhbHNlO1xuICAgIHRoaXMuaXNSaWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmxpdmVzID0gNztcbiAgICB0aGlzLmR4ID0gMDtcbiAgICB0aGlzLmR4diA9IDA7XG4gICAgdGhpcy5mYXJ0aGVzdCA9IDQ4MDtcbiAgICB0aGlzLnNjb3JlID0gMDtcbiAgfSBcblxuICBpc0NvbGxpZGluZ1dpdGgob2JqZWN0KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMueCA8IG9iamVjdC54ICsgb2JqZWN0LndpZHRoICYmIFxuICAgICAgdGhpcy54ICsgdGhpcy53aWR0aCA+IG9iamVjdC54ICYmXG4gICAgICB0aGlzLnkgPCBvYmplY3QueSArIG9iamVjdC5oZWlnaHQgJiZcbiAgICAgIHRoaXMueSArIHRoaXMuaGVpZ2h0ID4gb2JqZWN0LnlcbiAgICApO1xuICB9XG5cbiAgcmlkZSgpIHtcbiAgICB0aGlzLnggKz0gdGhpcy5keCAqIHRoaXMuZHh2O1xuICB9XG5cbiAgYnVubnlEZWF0aCgpIHtcbiAgICB0aGlzLmxpdmVzLS07XG4gICAgdGhpcy54ID0gMjgwOyBcbiAgICB0aGlzLnkgPSA0ODA7XG4gICAgdGhpcy5wbGF5RGVhdGhTb3VuZCgpO1xuICAgIHRoaXMuZmFydGhlc3QgPSA0ODA7XG4gIH1cblxuICBzY29yZUNoZWNrKCkge1xuICAgIGlmICh0aGlzLmZhcnRoZXN0ID4gdGhpcy55KSB7XG4gICAgICB0aGlzLmZhcnRoZXN0ID0gdGhpcy55O1xuICAgICAgdGhpcy5zY29yZSArPSAxMDtcbiAgICB9XG4gIH1cblxuICBtb3ZlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5pc1JpZGluZyA9IGZhbHNlO1xuICAgIHRoaXMucGxheVRoZW1lTXVzaWMoKTtcbiAgICB0aGlzLmtlZXBCdW5ueU9uR3JpZCgpO1xuXG4gICAgbGV0IHVzZXJJbnB1dCA9IGUua2V5O1xuICAgIFxuICAgIHN3aXRjaCAodXNlcklucHV0KXtcbiAgICAgIGNhc2UgJ0Fycm93UmlnaHQnOiBcbiAgICAgICAgaWYgKHRoaXMueCA8IDUyMCkgeyBcbiAgICAgICAgdGhpcy54ICs9IDQwOyBcbiAgICAgICAgfSBcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdBcnJvd0xlZnQnOiBcbiAgICAgICAgaWYgKHRoaXMueCA+PSA0MCkgeyBcbiAgICAgICAgdGhpcy54IC09IDQwOyBcbiAgICAgICAgfSBcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdBcnJvd0Rvd24nOiBcbiAgICAgICAgaWYgKHRoaXMueSA8PSA0NDApIHsgXG4gICAgICAgIHRoaXMueSArPSA0MDsgXG4gICAgICAgIH0gXG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSAnQXJyb3dVcCc6IFxuICAgICAgICBpZiAodGhpcy55ID4gNDAgJiYgdGhpcy55IDwgNTIwIHx8IFxuICAgICAgICAgICAgdGhpcy54ID49IDI0MCAmJiB0aGlzLnggPD0gMzIwKSB7IFxuICAgICAgICB0aGlzLnkgLT0gNDA7IFxuICAgICAgICB0aGlzLnNjb3JlQ2hlY2soKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhazsgXG4gICAgfVxuICB9XG5cbiAga2VlcEJ1bm55T25HcmlkKCkge1xuICAgIGlmICh0aGlzLnggJSA0MCkge1xuICAgICAgdGhpcy54ID0gKE1hdGgucm91bmQoKHRoaXMueCAlIDQwKSAvIDQwKSArIE1hdGguZmxvb3IodGhpcy54IC8gNDApKSAqIDQwO1xuICAgIH1cbiAgfVxuXG4gIHBsYXlEZWF0aFNvdW5kKCkge1xuICAgIGxldCBhdWRpbyA9IG5ldyBBdWRpbygnYXNzZXRzL2F1ZGlvL3NvdW5kLWZyb2dnZXItc3F1YXNoLndhdicpO1xuICAgIGF1ZGlvLnBsYXkoKTtcbiAgfVxuXG4gIHBsYXlUaGVtZU11c2ljKCkge1xuICAgIGxldCBhdWRpbyA9IG5ldyBBdWRpbygnYXNzZXRzL2F1ZGlvL3NvdW5kLWZyb2dnZXItaG9wLndhdicpO1xuICAgIGF1ZGlvLnBsYXkoKTtcbiAgfVxufSIsImNvbnN0IEdhbWUgPSByZXF1aXJlKCcuL0dhbWUnKTtcbmNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lJyk7XG5jb25zdCBjdHggPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbmNvbnN0IGdhbWUgPSBuZXcgR2FtZShjdHgpO1xuY29uc3QgZXllT2ZUaGVUaWdlciA9IG5ldyBBdWRpbygnYXNzZXRzL2F1ZGlvL2V5ZS1vZi10aGUtdGlnZXIubXAzJyk7XG5jb25zdCBzY29yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZS1zcGFuJyk7XG5jb25zdCBnYW1lT3ZlclNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLW92ZXItLWltZycpO1xuY29uc3QgYnVubnkgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IHNwYWNlQmFja2dyb3VuZCA9IG5ldyBJbWFnZSgpO1xuY29uc3Qgc3BhY2VTdGF0aW9uID0gbmV3IEltYWdlKCk7XG5jb25zdCBzYWZlUGF0aCA9IG5ldyBJbWFnZSgpO1xuY29uc3QgbW9vbkJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKTtcbmNvbnN0IGJ1bm55TGl2ZXMgPSBuZXcgSW1hZ2UoKTtcblxuYnVubnkuc3JjID0gJy9hc3NldHMvaW1hZ2VzL2J1bm55LnBuZyc7XG5zcGFjZUJhY2tncm91bmQuc3JjID0gJy9hc3NldHMvaW1hZ2VzL2Nvcm9uYV91cC5wbmcnO1xuc3BhY2VTdGF0aW9uLnNyYyA9ICcvYXNzZXRzL2ltYWdlcy9sYW5lX2dvYWwucG5nJztcbnNhZmVQYXRoLnNyYyA9ICcvYXNzZXRzL2ltYWdlcy9zYWZlcGF0aC5wbmcnO1xubW9vbkJhY2tncm91bmQuc3JjID0gJy9hc3NldHMvaW1hZ2VzL2x1bmFycm9ja19zLnBuZyc7XG5idW5ueUxpdmVzLnNyYyA9ICcvYXNzZXRzL2ltYWdlcy9idW5ueV9saXZlcy5wbmcnO1xuXG5mdW5jdGlvbiBnYW1lTG9vcCgpIHtcbiAgaWYgKGdhbWUucGxheWVyLmxpdmVzID09PSAwKSB7XG4gICAgZW5kR2FtZSgpO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoZ2FtZS5wbGF5ZXIueSA9PT0gMCkge1xuICAgIGJ1bm55UmVhY2hlc0dvYWwoKTsgXG4gIH0gZWxzZSB7XG4gICAgZHJhd0JhY2tncm91bmQoKTtcbiAgICBnYW1lLmFuaW1hdGUoKTtcblxuICAgIGlmIChnYW1lLnBsYXllci54IDwgMCB8fCBnYW1lLnBsYXllci54ID49IDU2MCkge1xuICAgICAgZ2FtZS5wbGF5ZXIuYnVubnlEZWF0aCgpO1xuICAgIH1cbiAgICBnYW1lLm9ic3RhY2xlcy5mb3JFYWNoKCBvYnN0YWNsZSA9PiB7XG4gICAgICBpZiAoZ2FtZS5wbGF5ZXIuaXNDb2xsaWRpbmdXaXRoKG9ic3RhY2xlKSAmJiBnYW1lLnBsYXllci55ID49IDI4MCkge1xuICAgICAgICBnYW1lLnBsYXllci5idW5ueURlYXRoKCk7XG4gICAgICB9IGVsc2UgaWYgKGdhbWUucGxheWVyLnkgPCAyNDAgJiYgZ2FtZS5wbGF5ZXIuaXNDb2xsaWRpbmdXaXRoKG9ic3RhY2xlKSkge1xuICAgICAgICByaWRlQXN0ZXJpb2Qob2JzdGFjbGUpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gICAgaWYgKGdhbWUucGxheWVyLmlzUmlkaW5nID09PSBmYWxzZSAmJiBnYW1lLnBsYXllci55IDwgMjQwICYmIGdhbWUucGxheWVyLnkgPiAwKSB7XG4gICAgICBnYW1lLnBsYXllci5idW5ueURlYXRoKCk7XG4gICAgfVxuICB9XG4gIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xufVxuXG5mdW5jdGlvbiBkcmF3QmFja2dyb3VuZCgpIHtcbiAgY3R4LmNsZWFyUmVjdCgwLCAwLCBjYW52YXMud2lkdGgsIGNhbnZhcy5oZWlnaHQpO1xuICBjdHguZmlsbFN0eWxlID0gJ2JsYWNrJztcbiAgY3R4LmZpbGxSZWN0KDAsIDUyMCwgNTYwLCA0MCk7XG4gIGN0eC5kcmF3SW1hZ2UobW9vbkJhY2tncm91bmQsIDAsIDI4MCk7ICAgIFxuICBjdHguZHJhd0ltYWdlKHNwYWNlU3RhdGlvbiwgMCwgMCk7XG4gIGN0eC5kcmF3SW1hZ2Uoc3BhY2VCYWNrZ3JvdW5kLCAwLCA0MCk7XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNDsgaSsrKSB7XG4gICAgY3R4LmRyYXdJbWFnZShzYWZlUGF0aCwgaSAqIDQwLCAyNDApO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCAxNDsgaSsrKSB7XG4gICAgY3R4LmRyYXdJbWFnZShzYWZlUGF0aCwgaSAqIDQwLCA0ODApO1xuICB9XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lLnBsYXllci5saXZlcyAtIDE7IGkrKykge1xuICAgIGN0eC5kcmF3SW1hZ2UoYnVubnlMaXZlcywgaSAqIDMwLCA1MzApO1xuICB9XG59XG5cbmZ1bmN0aW9uIGJ1bm55UmVhY2hlc0dvYWwoKSB7XG4gIGdhbWUubGV2ZWwrKztcbiAgZ2FtZS5wbGF5ZXIuZmFydGhlc3QgPSA0ODA7XG4gIGdhbWUucGxheWVyLnNjb3JlICs9IDUwO1xuICBwbGF5V2luSmluZ2xlKCk7XG4gIHVwZGF0ZVNjb3JlKCk7XG4gIGRpc3BsYXlMZXZlbFVwKCk7XG4gIGluY3JlYXNlT2JzdGFjbGVTcGVlZCgpO1xuICBjdHguZHJhd0ltYWdlKGJ1bm55LCAyNjAsIDApO1xuICByZXNldEJ1bm55TG9jYXRpb24oKTsgXG59XG5cbmZ1bmN0aW9uIHJpZGVBc3RlcmlvZChvYnN0YWNsZSkge1xuICBnYW1lLnBsYXllci5keCA9IG9ic3RhY2xlLmR4O1xuICBnYW1lLnBsYXllci5keHYgPSBvYnN0YWNsZS5keHY7XG4gIGdhbWUucGxheWVyLmlzUmlkaW5nID0gdHJ1ZTtcbiAgZ2FtZS5wbGF5ZXIucmlkZSgpO1xufVxuXG5mdW5jdGlvbiByZXN0YXJ0R2FtZSgpIHtcbiAgZ2FtZS5wbGF5ZXIubGl2ZXMgPSA3O1xuICByZXNldEJ1bm55TG9jYXRpb24oKTtcbiAgcmVzZXRPYnN0YWNsZVNwZWVkKCk7XG4gIGdhbWUubGV2ZWwgPSAxO1xuICBnYW1lTG9vcCgpO1xufVxuXG5mdW5jdGlvbiByZXNldEJ1bm55TG9jYXRpb24oKSB7XG4gIGdhbWUucGxheWVyLnggPSAyODA7IFxuICBnYW1lLnBsYXllci55ID0gNDgwOyBcbn1cblxuZnVuY3Rpb24gZW5kR2FtZSgpIHtcbiAgZXllT2ZUaGVUaWdlci5wYXVzZSgpO1xuICBnYW1lLmdhbWVPdmVyID0gdHJ1ZTtcbiAgY2FudmFzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgZ2FtZU92ZXJTY3JlZW4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQtYnRuJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIGdhbWUucGxheWVyLnNjb3JlID0gMDtcbiAgdXBkYXRlU2NvcmUoKTtcbn1cblxuZnVuY3Rpb24gc3RhcnRCdG5Tb3VuZCgpIHtcbiAgbGV0IGF1ZGlvID0gbmV3IEF1ZGlvKCdhc3NldHMvYXVkaW8vc291bmQtZnJvZ2dlci1jb2luLWluLndhdicpO1xuICBhdWRpby5wbGF5KCk7XG59XG5cbmZ1bmN0aW9uIHN0YXJ0VGhlbWVNdXNpYygpIHtcbiAgc2V0VGltZW91dChmdW5jdGlvbigpIHtcbiAgICBleWVPZlRoZVRpZ2VyLnZvbHVtZSA9IC40O1xuICAgIGV5ZU9mVGhlVGlnZXIucGxheSgpOyBcbiAgfSwgMTgwMCk7XG59XG5cbmZ1bmN0aW9uIHBsYXlXaW5KaW5nbGUoKSB7XG4gIGxldCBhdWRpbyA9IG5ldyBBdWRpbygnYXNzZXRzL2F1ZGlvL3dpbi1qaW5nbGUud2F2Jyk7XG4gIGF1ZGlvLnBsYXkoKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlU2NvcmUoKSB7XG4gIHNjb3JlLmlubmVyVGV4dCA9IGdhbWUucGxheWVyLnNjb3JlO1xuICByZXRyaWV2ZUhpU2NvcmUoKTtcbn1cblxuZnVuY3Rpb24gcmV0cmlldmVIaVNjb3JlKCkge1xuICBsZXQgaGlTY29yZSA9IGdldE5QYXJzZSgpIHx8IDA7XG4gIGlmIChnYW1lLnBsYXllci5zY29yZSA+IGhpU2NvcmUpIHtcbiAgICBoaVNjb3JlID0gZ2FtZS5wbGF5ZXIuc2NvcmU7XG4gIH1cbiAgc3RvcmVIaVNjb3JlKGhpU2NvcmUpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGktc2NvcmUtc3BhbicpLmlubmVyVGV4dCA9IGhpU2NvcmU7XG59XG5cbmZ1bmN0aW9uIGdldE5QYXJzZSgpIHtcbiAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Njb3JlJykpO1xufVxuXG5mdW5jdGlvbiBzdG9yZUhpU2NvcmUoc2NvcmUpIHtcbiAgdmFyIHN0cmluZ2lmaWVkID0gSlNPTi5zdHJpbmdpZnkoc2NvcmUpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2NvcmUnLCBzdHJpbmdpZmllZCk7XG59XG5cbmZ1bmN0aW9uIGluY3JlYXNlT2JzdGFjbGVTcGVlZCgpIHtcbiAgZ2FtZS5vYnN0YWNsZXMuZm9yRWFjaCggb2JzdGFjbGUgPT4ge1xuICAgIG9ic3RhY2xlLmR4diArPSAuMztcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIHJlc2V0T2JzdGFjbGVTcGVlZCgpIHtcbiAgZ2FtZS5vYnN0YWNsZXMuZm9yRWFjaCggb2JzdGFjbGUgPT4ge1xuICAgIG9ic3RhY2xlLmR4diAtPSAoKGdhbWUubGV2ZWwgLSAxKSAqIC4zKTtcbiAgfSk7XG59XG5cbmZ1bmN0aW9uIGRpc3BsYXlMZXZlbFVwKCkge1xuICBsZXQgbGV2ZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGV2ZWwnKTtcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmxldmVsLXNwYW4nKS5pbm5lclRleHQgPSBnYW1lLmxldmVsO1xuICBsZXZlbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gIHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XG4gICAgbGV2ZWwuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICB9LCAzMDAwKTtcbn1cblxuZnVuY3Rpb24gZGVhdGhTY3JlZW5Ub2dnbGUoKSB7XG4gIGdhbWVPdmVyU2NyZWVuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgY2FudmFzLmNsYXNzTGlzdC5hZGQoJ3VuaGlkZGVuJyk7XG4gIGNhbnZhcy5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7IFxufVxuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgZ2FtZS5wbGF5ZXIubW92ZS5iaW5kKGdhbWUucGxheWVyKSk7XG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdXBkYXRlU2NvcmUpO1xuXG5kb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQtYnRuJykuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgZ2FtZUxvb3AoKTtcbiAgc3RhcnRCdG5Tb3VuZCgpO1xuICBzdGFydFRoZW1lTXVzaWMoKTsgXG4gIHRoaXMuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gIGNhbnZhcy5jbGFzc0xpc3QuYWRkKCd1bmhpZGRlbicpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc3RhcnQtc2NyZWVuLS1pbWcnKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcblxuICBpZiAoIWdhbWVPdmVyU2NyZWVuLmNsYXNzTGlzdC5jb250YWlucygnaGlkZScpKSB7XG4gICAgZGVhdGhTY3JlZW5Ub2dnbGUoKTtcbiAgICByZXN0YXJ0R2FtZSgpO1xuICB9XG59KTtcblxuZXllT2ZUaGVUaWdlci5hZGRFdmVudExpc3RlbmVyKCdlbmRlZCcsIGZ1bmN0aW9uKCkge1xuICB0aGlzLmN1cnJlbnRUaW1lID0gMDtcbiAgdGhpcy5wbGF5KCk7XG59LCBmYWxzZSk7XG5cbnJldHJpZXZlSGlTY29yZSgpOyJdLCJzb3VyY2VSb290IjoiIn0=