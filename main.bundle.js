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
    this.level = 0;
    this.filePath = '/assets/images/';
    this.player = new Player(280, 480, this.filePath + 'bunny.png', 40);
    this.lanes = [{ y: 440, direction: -1, speed: 1, img: this.filePath + 'racecar.png', width: 80 }, { y: 400, direction: 1, speed: .5, img: this.filePath + 'dozer.png', width: 80 }, { y: 360, direction: -1, speed: 1, img: this.filePath + 'car.png', width: 80 }, { y: 320, direction: 1, speed: 1.5, img: this.filePath + 'fastcar.png', width: 80 }, { y: 280, direction: -1, speed: .5, img: this.filePath + 'truck.png', width: 80 }, { y: 200, direction: -1, speed: 1.5, img: this.filePath + 'lane_5_safe.png', width: 120 }, { y: 160, direction: 1, speed: .5, img: this.filePath + 'lane_6.png', width: 120 }, { y: 120, direction: 1, speed: 1, img: this.filePath + 'lane_7.png', width: 240 }, { y: 80, direction: -1, speed: .5, img: this.filePath + 'safeasteroid.png', width: 80 }, { y: 40, direction: 1, speed: 1, img: this.filePath + 'lane_9.png', width: 160 }];
    this.obstacles = [new Obstacle(520, this.lanes[0].y, this.lanes[0].img, this.lanes[0].direction, this.lanes[0].speed, this.lanes[0].width), new Obstacle(360, this.lanes[0].y, this.lanes[0].img, this.lanes[0].direction, this.lanes[0].speed, this.lanes[0].width), new Obstacle(40, this.lanes[0].y, this.lanes[0].img, this.lanes[0].direction, this.lanes[0].speed, this.lanes[0].width), new Obstacle(480, this.lanes[1].y, this.lanes[1].img, this.lanes[1].direction, this.lanes[1].speed, this.lanes[1].width), new Obstacle(280, this.lanes[1].y, this.lanes[1].img, this.lanes[1].direction, this.lanes[1].speed, this.lanes[1].width), new Obstacle(80, this.lanes[1].y, this.lanes[1].img, this.lanes[1].direction, this.lanes[1].speed, this.lanes[1].width), new Obstacle(520, this.lanes[2].y, this.lanes[2].img, this.lanes[2].direction, this.lanes[2].speed, this.lanes[2].width), new Obstacle(360, this.lanes[2].y, this.lanes[2].img, this.lanes[2].direction, this.lanes[2].speed, this.lanes[2].width), new Obstacle(40, this.lanes[2].y, this.lanes[2].img, this.lanes[2].direction, this.lanes[2].speed, this.lanes[2].width), new Obstacle(140, this.lanes[3].y, this.lanes[3].img, this.lanes[3].direction, this.lanes[3].speed, this.lanes[3].width), new Obstacle(40, this.lanes[3].y, this.lanes[3].img, this.lanes[3].direction, this.lanes[3].speed, this.lanes[3].width), new Obstacle(480, this.lanes[4].y, this.lanes[4].img, this.lanes[4].direction, this.lanes[4].speed, this.lanes[4].width), new Obstacle(280, this.lanes[4].y, this.lanes[4].img, this.lanes[4].direction, this.lanes[4].speed, this.lanes[4].width), new Obstacle(80, this.lanes[4].y, this.lanes[4].img, this.lanes[4].direction, this.lanes[4].speed, this.lanes[4].width), new Obstacle(520, this.lanes[5].y, this.lanes[5].img, this.lanes[5].direction, this.lanes[5].speed, this.lanes[5].width), new Obstacle(200, this.lanes[5].y, this.lanes[5].img, this.lanes[5].direction, this.lanes[5].speed, this.lanes[5].width), new Obstacle(520, this.lanes[6].y, this.lanes[6].img, this.lanes[6].direction, this.lanes[6].speed, this.lanes[6].width), new Obstacle(320, this.lanes[6].y, this.lanes[6].img, this.lanes[6].direction, this.lanes[6].speed, this.lanes[6].width), new Obstacle(120, this.lanes[6].y, this.lanes[6].img, this.lanes[6].direction, this.lanes[6].speed, this.lanes[6].width), new Obstacle(520, this.lanes[7].y, this.lanes[7].img, this.lanes[7].direction, this.lanes[7].speed, this.lanes[7].width), new Obstacle(200, this.lanes[7].y, this.lanes[7].img, this.lanes[7].direction, this.lanes[7].speed, this.lanes[7].width), new Obstacle(520, this.lanes[8].y, this.lanes[8].img, this.lanes[8].direction, this.lanes[8].speed, this.lanes[8].width), new Obstacle(200, this.lanes[8].y, this.lanes[8].img, this.lanes[8].direction, this.lanes[8].speed, this.lanes[8].width), new Obstacle(520, this.lanes[9].y, this.lanes[9].img, this.lanes[9].direction, this.lanes[9].speed, this.lanes[9].width), new Obstacle(320, this.lanes[9].y, this.lanes[9].img, this.lanes[9].direction, this.lanes[9].speed, this.lanes[9].width), new Obstacle(120, this.lanes[9].y, this.lanes[9].img, this.lanes[9].direction, this.lanes[9].speed, this.lanes[9].width)];
  }

  _createClass(Game, [{
    key: 'animate',
    value: function animate() {
      var _this = this;

      this.obstacles.forEach(function (obstacle) {
        _this.handleObstacle(obstacle);
        obstacle.draw(_this.ctx);
      });
      this.player.draw(this.ctx);
    }
  }, {
    key: 'handleObstacle',
    value: function handleObstacle(obstacle) {
      var canvas = this.ctx.canvas;

      obstacle.move();
    }
  }, {
    key: 'isOver',
    value: function isOver() {
      return this.gameOver;
    }
  }, {
    key: 'isPaused',
    value: function isPaused() {
      console.log('paused');
    }
  }, {
    key: 'togglePause',
    value: function togglePause() {
      this.paused = !this.paused;
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
    this.dy = 0;
    this.dxv = dxv;
    this.dyv = 1;
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
      } else if (this.x < -80 && this.dx === -1) {
        this.x += 700;
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
        case 'p':
          game.isPaused();
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
var froggerTheme = new Audio('assets/audio/frogger_theme.mp3');
var score = document.querySelector('.score-span');
var gameOverScreen = document.querySelector('.game-over--img');
var bunny = new Image();
bunny.src = '/assets/images/bunny.png';
var spaceBackground = new Image();
spaceBackground.src = '/assets/images/corona_up.png';
var spaceStation = new Image();
spaceStation.src = '/assets/images/lane_goal.png';
var safePath = new Image();
safePath.src = '/assets/images/safepath.png';
var moonBackground = new Image();
moonBackground.src = '/assets/images/lunarrock_s.png';
var bunnyLives = new Image();
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
    adjObstacleSpeed();
    ctx.drawImage(bunny, 260, 0);
    resetBunnyLocation();
  } else {
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

    game.animate();

    if (game.player.x < 0 || game.player.x >= 560) {
      game.player.bunnyDeath();
      if (game.player.lives === 0) {
        game.endGame();
      }
    }

    game.obstacles.forEach(function (obstacle) {
      if (game.player.isCollidingWith(obstacle) && game.player.y >= 280) {
        game.player.bunnyDeath();
      } else if (game.player.y < 240 && game.player.isCollidingWith(obstacle)) {
        game.player.dx = obstacle.dx;
        game.player.dxv = obstacle.dxv;

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
  window.requestAnimationFrame(gameLoop);
}

function restartGame() {
  game.player.lives = 7;
  game.level = 0;
  resetBunnyLocation();
  adjObstacleSpeed();
  gameLoop();
}

function resetBunnyLocation() {
  game.player.x = 280;
  game.player.y = 480;
}

function endGame() {
  froggerTheme.pause();
  game.gameOver = true;
  canvas.classList.add('hide');
  gameOverScreen.classList.remove('hidden');
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
    froggerTheme.play();
  }, 2200);
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

function adjObstacleSpeed() {
  game.obstacles.forEach(function (obs) {
    obs.dxv += game.level * .1;
  });
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

  if (!gameOverScreen.classList.contains('hidden')) {
    gameOverScreen.classList.add('hide');
    canvas.classList.add('unhidden');
    canvas.classList.remove('hide');
    restartGame();
  }
});

retrieveHiScore();

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL0dhbWVQaWVjZS5qcyIsIndlYnBhY2s6Ly8vLi9saWIvT2JzdGFjbGUuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL1BsYXllci5qcyIsIndlYnBhY2s6Ly8vLi9saWIvaW5kZXguanMiXSwibmFtZXMiOlsiT2JzdGFjbGUiLCJyZXF1aXJlIiwiUGxheWVyIiwibW9kdWxlIiwiZXhwb3J0cyIsImN0eCIsInBhdXNlZCIsImdhbWVPdmVyIiwibGV2ZWwiLCJmaWxlUGF0aCIsInBsYXllciIsImxhbmVzIiwieSIsImRpcmVjdGlvbiIsInNwZWVkIiwiaW1nIiwid2lkdGgiLCJvYnN0YWNsZXMiLCJmb3JFYWNoIiwiaGFuZGxlT2JzdGFjbGUiLCJvYnN0YWNsZSIsImRyYXciLCJjYW52YXMiLCJtb3ZlIiwiY29uc29sZSIsImxvZyIsIngiLCJzcmMiLCJkeCIsImR4diIsImhlaWdodCIsImR5IiwiZHl2IiwiaW1hZ2UiLCJJbWFnZSIsImRyYXdJbWFnZSIsIkdhbWVQaWVjZSIsImlzRGVhZCIsImlzUmlkaW5nIiwibGl2ZXMiLCJmYXJ0aGVzdCIsInNjb3JlIiwib2JqZWN0IiwicGxheURlYXRoU291bmQiLCJlIiwicHJldmVudERlZmF1bHQiLCJwbGF5VGhlbWVNdXNpYyIsImtlZXBCdW5ueU9uR3JpZCIsInVzZXJJbnB1dCIsImtleSIsInNjb3JlQ2hlY2siLCJnYW1lIiwiaXNQYXVzZWQiLCJNYXRoIiwicm91bmQiLCJmbG9vciIsImF1ZGlvIiwiQXVkaW8iLCJwbGF5IiwiR2FtZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImdldENvbnRleHQiLCJmcm9nZ2VyVGhlbWUiLCJnYW1lT3ZlclNjcmVlbiIsImJ1bm55Iiwic3BhY2VCYWNrZ3JvdW5kIiwic3BhY2VTdGF0aW9uIiwic2FmZVBhdGgiLCJtb29uQmFja2dyb3VuZCIsImJ1bm55TGl2ZXMiLCJnYW1lTG9vcCIsImVuZEdhbWUiLCJ1cGRhdGVTY29yZSIsImFkak9ic3RhY2xlU3BlZWQiLCJyZXNldEJ1bm55TG9jYXRpb24iLCJjbGVhclJlY3QiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsImkiLCJhbmltYXRlIiwiYnVubnlEZWF0aCIsImlzQ29sbGlkaW5nV2l0aCIsInJpZGUiLCJ3aW5kb3ciLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJyZXN0YXJ0R2FtZSIsInBhdXNlIiwiY2xhc3NMaXN0IiwiYWRkIiwicmVtb3ZlIiwic3RhcnRCdG5Tb3VuZCIsInN0YXJ0VGhlbWVNdXNpYyIsInNldFRpbWVvdXQiLCJpbm5lclRleHQiLCJyZXRyaWV2ZUhpU2NvcmUiLCJoaVNjb3JlIiwiZ2V0TlBhcnNlIiwic3RvcmVIaVNjb3JlIiwiSlNPTiIsInBhcnNlIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInN0cmluZ2lmaWVkIiwic3RyaW5naWZ5Iiwic2V0SXRlbSIsIm9icyIsImFkZEV2ZW50TGlzdGVuZXIiLCJiaW5kIiwiY29udGFpbnMiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FBaUM7QUFDMUUsd0hBQWdILG1CQUFtQixFQUFFO0FBQ3JJO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsbUNBQTJCLDBCQUEwQixFQUFF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RUEsTUFBSSxDQUFDekIsZUFBZXdCLFNBQWYsQ0FBeUJxQixRQUF6QixDQUFrQyxRQUFsQyxDQUFMLEVBQWtEO0FBQ2hEN0MsbUJBQWV3QixTQUFmLENBQXlCQyxHQUF6QixDQUE2QixNQUE3QjtBQUNBbkUsV0FBT2tFLFNBQVAsQ0FBaUJDLEdBQWpCLENBQXFCLFVBQXJCO0FBQ0FuRSxXQUFPa0UsU0FBUCxDQUFpQkUsTUFBakIsQ0FBd0IsTUFBeEI7QUFDQUo7QUFDRDtBQUNGLENBZEQ7O0FBZ0JBUyxrQiIsImZpbGUiOiJtYWluLmJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vbGliL2luZGV4LmpzXCIpO1xuIiwiY29uc3QgT2JzdGFjbGUgPSByZXF1aXJlKCcuL09ic3RhY2xlJyk7XG5jb25zdCBQbGF5ZXIgPSByZXF1aXJlKCcuL1BsYXllcicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEdhbWUge1xuICBjb25zdHJ1Y3RvcihjdHgpIHtcbiAgICB0aGlzLmN0eCA9IGN0eDtcbiAgICB0aGlzLnBhdXNlZCA9IGZhbHNlO1xuICAgIHRoaXMuZ2FtZU92ZXIgPSBmYWxzZTtcbiAgICB0aGlzLmxldmVsID0gMDtcbiAgICB0aGlzLmZpbGVQYXRoID0gJy9hc3NldHMvaW1hZ2VzLyc7XG4gICAgdGhpcy5wbGF5ZXIgPSBuZXcgUGxheWVyKDI4MCwgNDgwLCBgJHt0aGlzLmZpbGVQYXRofWJ1bm55LnBuZ2AsIDQwKTtcbiAgICB0aGlzLmxhbmVzID0gW1xuICAgICAge3k6IDQ0MCwgZGlyZWN0aW9uOiAtMSwgc3BlZWQ6IDEsIGltZzogYCR7dGhpcy5maWxlUGF0aH1yYWNlY2FyLnBuZ2AsIHdpZHRoOiA4MH0sXG4gICAgICB7eTogNDAwLCBkaXJlY3Rpb246IDEsIHNwZWVkOiAuNSwgaW1nOiBgJHt0aGlzLmZpbGVQYXRofWRvemVyLnBuZ2AsIHdpZHRoOiA4MH0sXG4gICAgICB7eTogMzYwLCBkaXJlY3Rpb246IC0xLCBzcGVlZDogMSwgaW1nOiBgJHt0aGlzLmZpbGVQYXRofWNhci5wbmdgLCB3aWR0aDogODB9LFxuICAgICAge3k6IDMyMCwgZGlyZWN0aW9uOiAxLCBzcGVlZDogMS41LCBpbWc6IGAke3RoaXMuZmlsZVBhdGh9ZmFzdGNhci5wbmdgLCB3aWR0aDogODB9LFxuICAgICAge3k6IDI4MCwgZGlyZWN0aW9uOiAtMSwgc3BlZWQ6IC41LCBpbWc6IGAke3RoaXMuZmlsZVBhdGh9dHJ1Y2sucG5nYCwgd2lkdGg6IDgwfSxcbiAgICAgIHt5OiAyMDAsIGRpcmVjdGlvbjogLTEsIHNwZWVkOiAxLjUsIGltZzogYCR7dGhpcy5maWxlUGF0aH1sYW5lXzVfc2FmZS5wbmdgLCB3aWR0aDogMTIwfSxcbiAgICAgIHt5OiAxNjAsIGRpcmVjdGlvbjogMSwgc3BlZWQ6IC41LCBpbWc6IGAke3RoaXMuZmlsZVBhdGh9bGFuZV82LnBuZ2AsIHdpZHRoOiAxMjB9LFxuICAgICAge3k6IDEyMCwgZGlyZWN0aW9uOiAxLCBzcGVlZDogMSwgaW1nOiBgJHt0aGlzLmZpbGVQYXRofWxhbmVfNy5wbmdgLCB3aWR0aDogMjQwfSxcbiAgICAgIHt5OiA4MCwgZGlyZWN0aW9uOiAtMSwgc3BlZWQ6IC41LCBpbWc6IGAke3RoaXMuZmlsZVBhdGh9c2FmZWFzdGVyb2lkLnBuZ2AsIHdpZHRoOiA4MH0sXG4gICAgICB7eTogNDAsIGRpcmVjdGlvbjogMSwgc3BlZWQ6IDEsIGltZzogYCR7dGhpcy5maWxlUGF0aH1sYW5lXzkucG5nYCwgd2lkdGg6IDE2MH1cbiAgICBdO1xuICAgIHRoaXMub2JzdGFjbGVzID0gW1xuICAgICAgbmV3IE9ic3RhY2xlKDUyMCwgdGhpcy5sYW5lc1swXS55LCB0aGlzLmxhbmVzWzBdLmltZywgdGhpcy5sYW5lc1swXS5kaXJlY3Rpb24sIHRoaXMubGFuZXNbMF0uc3BlZWQsIHRoaXMubGFuZXNbMF0ud2lkdGgpLFxuICAgICAgbmV3IE9ic3RhY2xlKDM2MCwgdGhpcy5sYW5lc1swXS55LCB0aGlzLmxhbmVzWzBdLmltZywgdGhpcy5sYW5lc1swXS5kaXJlY3Rpb24sIHRoaXMubGFuZXNbMF0uc3BlZWQsIHRoaXMubGFuZXNbMF0ud2lkdGgpLFxuICAgICAgbmV3IE9ic3RhY2xlKDQwLCB0aGlzLmxhbmVzWzBdLnksIHRoaXMubGFuZXNbMF0uaW1nLCB0aGlzLmxhbmVzWzBdLmRpcmVjdGlvbiwgdGhpcy5sYW5lc1swXS5zcGVlZCwgdGhpcy5sYW5lc1swXS53aWR0aCksXG5cbiAgICAgIG5ldyBPYnN0YWNsZSg0ODAsIHRoaXMubGFuZXNbMV0ueSwgdGhpcy5sYW5lc1sxXS5pbWcsIHRoaXMubGFuZXNbMV0uZGlyZWN0aW9uLCB0aGlzLmxhbmVzWzFdLnNwZWVkLCB0aGlzLmxhbmVzWzFdLndpZHRoKSxcbiAgICAgIG5ldyBPYnN0YWNsZSgyODAsIHRoaXMubGFuZXNbMV0ueSwgdGhpcy5sYW5lc1sxXS5pbWcsIHRoaXMubGFuZXNbMV0uZGlyZWN0aW9uLCB0aGlzLmxhbmVzWzFdLnNwZWVkLCB0aGlzLmxhbmVzWzFdLndpZHRoKSxcbiAgICAgIG5ldyBPYnN0YWNsZSg4MCwgdGhpcy5sYW5lc1sxXS55LCB0aGlzLmxhbmVzWzFdLmltZywgdGhpcy5sYW5lc1sxXS5kaXJlY3Rpb24sIHRoaXMubGFuZXNbMV0uc3BlZWQsIHRoaXMubGFuZXNbMV0ud2lkdGgpLFxuXG4gICAgICBuZXcgT2JzdGFjbGUoNTIwLCB0aGlzLmxhbmVzWzJdLnksIHRoaXMubGFuZXNbMl0uaW1nLCB0aGlzLmxhbmVzWzJdLmRpcmVjdGlvbiwgdGhpcy5sYW5lc1syXS5zcGVlZCwgdGhpcy5sYW5lc1syXS53aWR0aCksXG4gICAgICBuZXcgT2JzdGFjbGUoMzYwLCB0aGlzLmxhbmVzWzJdLnksIHRoaXMubGFuZXNbMl0uaW1nLCB0aGlzLmxhbmVzWzJdLmRpcmVjdGlvbiwgdGhpcy5sYW5lc1syXS5zcGVlZCwgdGhpcy5sYW5lc1syXS53aWR0aCksXG4gICAgICBuZXcgT2JzdGFjbGUoNDAsIHRoaXMubGFuZXNbMl0ueSwgdGhpcy5sYW5lc1syXS5pbWcsIHRoaXMubGFuZXNbMl0uZGlyZWN0aW9uLCB0aGlzLmxhbmVzWzJdLnNwZWVkLCB0aGlzLmxhbmVzWzJdLndpZHRoKSxcblxuICAgICAgbmV3IE9ic3RhY2xlKDE0MCwgdGhpcy5sYW5lc1szXS55LCB0aGlzLmxhbmVzWzNdLmltZywgdGhpcy5sYW5lc1szXS5kaXJlY3Rpb24sIHRoaXMubGFuZXNbM10uc3BlZWQsIHRoaXMubGFuZXNbM10ud2lkdGgpLFxuICAgICAgbmV3IE9ic3RhY2xlKDQwLCB0aGlzLmxhbmVzWzNdLnksIHRoaXMubGFuZXNbM10uaW1nLCB0aGlzLmxhbmVzWzNdLmRpcmVjdGlvbiwgdGhpcy5sYW5lc1szXS5zcGVlZCwgdGhpcy5sYW5lc1szXS53aWR0aCksXG5cbiAgICAgIG5ldyBPYnN0YWNsZSg0ODAsIHRoaXMubGFuZXNbNF0ueSwgdGhpcy5sYW5lc1s0XS5pbWcsIHRoaXMubGFuZXNbNF0uZGlyZWN0aW9uLCB0aGlzLmxhbmVzWzRdLnNwZWVkLCB0aGlzLmxhbmVzWzRdLndpZHRoKSxcbiAgICAgIG5ldyBPYnN0YWNsZSgyODAsIHRoaXMubGFuZXNbNF0ueSwgdGhpcy5sYW5lc1s0XS5pbWcsIHRoaXMubGFuZXNbNF0uZGlyZWN0aW9uLCB0aGlzLmxhbmVzWzRdLnNwZWVkLCB0aGlzLmxhbmVzWzRdLndpZHRoKSxcbiAgICAgIG5ldyBPYnN0YWNsZSg4MCwgdGhpcy5sYW5lc1s0XS55LCB0aGlzLmxhbmVzWzRdLmltZywgdGhpcy5sYW5lc1s0XS5kaXJlY3Rpb24sIHRoaXMubGFuZXNbNF0uc3BlZWQsIHRoaXMubGFuZXNbNF0ud2lkdGgpLFxuXG4gICAgICBuZXcgT2JzdGFjbGUoNTIwLCB0aGlzLmxhbmVzWzVdLnksIHRoaXMubGFuZXNbNV0uaW1nLCB0aGlzLmxhbmVzWzVdLmRpcmVjdGlvbiwgdGhpcy5sYW5lc1s1XS5zcGVlZCwgdGhpcy5sYW5lc1s1XS53aWR0aCksXG4gICAgICBuZXcgT2JzdGFjbGUoMjAwLCB0aGlzLmxhbmVzWzVdLnksIHRoaXMubGFuZXNbNV0uaW1nLCB0aGlzLmxhbmVzWzVdLmRpcmVjdGlvbiwgdGhpcy5sYW5lc1s1XS5zcGVlZCwgdGhpcy5sYW5lc1s1XS53aWR0aCksXG5cbiAgICAgIG5ldyBPYnN0YWNsZSg1MjAsIHRoaXMubGFuZXNbNl0ueSwgdGhpcy5sYW5lc1s2XS5pbWcsIHRoaXMubGFuZXNbNl0uZGlyZWN0aW9uLCB0aGlzLmxhbmVzWzZdLnNwZWVkLCB0aGlzLmxhbmVzWzZdLndpZHRoKSxcbiAgICAgIG5ldyBPYnN0YWNsZSgzMjAsIHRoaXMubGFuZXNbNl0ueSwgdGhpcy5sYW5lc1s2XS5pbWcsIHRoaXMubGFuZXNbNl0uZGlyZWN0aW9uLCB0aGlzLmxhbmVzWzZdLnNwZWVkLCB0aGlzLmxhbmVzWzZdLndpZHRoKSxcbiAgICAgIG5ldyBPYnN0YWNsZSgxMjAsIHRoaXMubGFuZXNbNl0ueSwgdGhpcy5sYW5lc1s2XS5pbWcsIHRoaXMubGFuZXNbNl0uZGlyZWN0aW9uLCB0aGlzLmxhbmVzWzZdLnNwZWVkLCB0aGlzLmxhbmVzWzZdLndpZHRoKSxcblxuICAgICAgbmV3IE9ic3RhY2xlKDUyMCwgdGhpcy5sYW5lc1s3XS55LCB0aGlzLmxhbmVzWzddLmltZywgdGhpcy5sYW5lc1s3XS5kaXJlY3Rpb24sIHRoaXMubGFuZXNbN10uc3BlZWQsIHRoaXMubGFuZXNbN10ud2lkdGgpLFxuICAgICAgbmV3IE9ic3RhY2xlKDIwMCwgdGhpcy5sYW5lc1s3XS55LCB0aGlzLmxhbmVzWzddLmltZywgdGhpcy5sYW5lc1s3XS5kaXJlY3Rpb24sIHRoaXMubGFuZXNbN10uc3BlZWQsIHRoaXMubGFuZXNbN10ud2lkdGgpLFxuXG4gICAgICBuZXcgT2JzdGFjbGUoNTIwLCB0aGlzLmxhbmVzWzhdLnksIHRoaXMubGFuZXNbOF0uaW1nLCB0aGlzLmxhbmVzWzhdLmRpcmVjdGlvbiwgdGhpcy5sYW5lc1s4XS5zcGVlZCwgdGhpcy5sYW5lc1s4XS53aWR0aCksXG4gICAgICBuZXcgT2JzdGFjbGUoMjAwLCB0aGlzLmxhbmVzWzhdLnksIHRoaXMubGFuZXNbOF0uaW1nLCB0aGlzLmxhbmVzWzhdLmRpcmVjdGlvbiwgdGhpcy5sYW5lc1s4XS5zcGVlZCwgdGhpcy5sYW5lc1s4XS53aWR0aCksXG5cbiAgICAgIG5ldyBPYnN0YWNsZSg1MjAsIHRoaXMubGFuZXNbOV0ueSwgdGhpcy5sYW5lc1s5XS5pbWcsIHRoaXMubGFuZXNbOV0uZGlyZWN0aW9uLCB0aGlzLmxhbmVzWzldLnNwZWVkLCB0aGlzLmxhbmVzWzldLndpZHRoKSxcbiAgICAgIG5ldyBPYnN0YWNsZSgzMjAsIHRoaXMubGFuZXNbOV0ueSwgdGhpcy5sYW5lc1s5XS5pbWcsIHRoaXMubGFuZXNbOV0uZGlyZWN0aW9uLCB0aGlzLmxhbmVzWzldLnNwZWVkLCB0aGlzLmxhbmVzWzldLndpZHRoKSxcbiAgICAgIG5ldyBPYnN0YWNsZSgxMjAsIHRoaXMubGFuZXNbOV0ueSwgdGhpcy5sYW5lc1s5XS5pbWcsIHRoaXMubGFuZXNbOV0uZGlyZWN0aW9uLCB0aGlzLmxhbmVzWzldLnNwZWVkLCB0aGlzLmxhbmVzWzldLndpZHRoKSxcbiAgICBdO1xuICB9XG5cbiAgYW5pbWF0ZSgpIHtcbiAgICB0aGlzLm9ic3RhY2xlcy5mb3JFYWNoKCBvYnN0YWNsZSA9PiB7XG4gICAgICB0aGlzLmhhbmRsZU9ic3RhY2xlKG9ic3RhY2xlKTtcbiAgICAgIG9ic3RhY2xlLmRyYXcodGhpcy5jdHgpO1xuICAgIH0pO1xuICAgIHRoaXMucGxheWVyLmRyYXcodGhpcy5jdHgpO1xuICB9XG5cbiAgaGFuZGxlT2JzdGFjbGUob2JzdGFjbGUpe1xuICAgIGNvbnN0IHsgY2FudmFzIH0gPSB0aGlzLmN0eDtcbiAgICBvYnN0YWNsZS5tb3ZlKCk7XG4gIH1cblxuICBpc092ZXIoKSB7XG4gICAgcmV0dXJuIHRoaXMuZ2FtZU92ZXI7XG4gIH1cblxuICBpc1BhdXNlZCgpIHtcbiAgICBjb25zb2xlLmxvZygncGF1c2VkJylcbiAgfVxuXG4gIHRvZ2dsZVBhdXNlKCkge1xuICAgIHRoaXMucGF1c2VkID0gIXRoaXMucGF1c2VkO1xuICB9XG59IiwibW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBzcmMsIGR4LCBkeHYsIHdpZHRoKSB7XG4gICAgdGhpcy54ID0geDtcbiAgICB0aGlzLnkgPSB5O1xuICAgIHRoaXMuaGVpZ2h0ID0gNDA7XG4gICAgdGhpcy53aWR0aCA9IHdpZHRoO1xuICAgIHRoaXMuc3JjID0gc3JjXG4gICAgdGhpcy5keCA9IGR4O1xuICAgIHRoaXMuZHkgPSAwO1xuICAgIHRoaXMuZHh2ID0gZHh2O1xuICAgIHRoaXMuZHl2ID0gMTtcbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgY29uc3QgeyB4LCB5LCBoZWlnaHQsIHdpZHRoLCBzcmMgfSA9IHRoaXM7XG4gICAgY29uc3QgaW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgICBpbWFnZS5zcmMgPSBzcmM7XG4gICAgY3R4LmRyYXdJbWFnZShpbWFnZSwgeCwgeSk7XG4gIH1cbn1cbiIsImNvbnN0IEdhbWVQaWVjZSA9IHJlcXVpcmUoJy4vR2FtZVBpZWNlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgT2JzdGFjbGUgZXh0ZW5kcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBzcmMsIGR4LCBkeHYsIHdpZHRoKSB7XG4gICAgc3VwZXIoeCwgeSwgc3JjLCBkeCwgZHh2LCB3aWR0aCk7XG4gIH0gXG5cbiAgbW92ZSgpIHtcbiAgICB0aGlzLnggKz0gdGhpcy5keCAqIHRoaXMuZHh2O1xuICAgIGlmICh0aGlzLnggPiA1NjAgJiYgdGhpcy5keCA9PT0gMSkge1xuICAgICAgdGhpcy54IC09IDkwMDtcbiAgICB9XG4gICAgZWxzZSBpZiAodGhpcy54IDwgLTgwICYmIHRoaXMuZHggPT09IC0xKSB7XG4gICAgICB0aGlzLnggKz0gNzAwO1xuICAgIH1cbiAgfVxuXG4gIGRyYXcoY3R4KSB7XG4gICAgc3VwZXIuZHJhdyhjdHgpO1xuICB9XG59IiwiY29uc3QgR2FtZVBpZWNlID0gcmVxdWlyZSgnLi9HYW1lUGllY2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBQbGF5ZXIgZXh0ZW5kcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBzcmMpIHtcbiAgICBzdXBlcih4LCB5LCBzcmMpO1xuICAgIHRoaXMud2lkdGggPSA0MDtcbiAgICB0aGlzLmlzRGVhZCA9IGZhbHNlO1xuICAgIHRoaXMuaXNSaWRpbmcgPSBmYWxzZTtcbiAgICB0aGlzLmxpdmVzID0gNztcbiAgICB0aGlzLmR4ID0gMDtcbiAgICB0aGlzLmR4diA9IDA7XG4gICAgdGhpcy5mYXJ0aGVzdCA9IDQ4MDtcbiAgICB0aGlzLnNjb3JlID0gMDtcbiAgfSBcblxuICBpc0NvbGxpZGluZ1dpdGgob2JqZWN0KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMueCA8IG9iamVjdC54ICsgb2JqZWN0LndpZHRoICYmIFxuICAgICAgdGhpcy54ICsgdGhpcy53aWR0aCA+IG9iamVjdC54ICYmXG4gICAgICB0aGlzLnkgPCBvYmplY3QueSArIG9iamVjdC5oZWlnaHQgJiZcbiAgICAgIHRoaXMueSArIHRoaXMuaGVpZ2h0ID4gb2JqZWN0LnlcbiAgICApO1xuICB9XG5cbiAgcmlkZSgpIHtcbiAgICB0aGlzLnggKz0gdGhpcy5keCAqIHRoaXMuZHh2O1xuICB9XG5cbiAgYnVubnlEZWF0aCgpIHtcbiAgICB0aGlzLmxpdmVzLS07XG4gICAgdGhpcy54ID0gMjgwOyBcbiAgICB0aGlzLnkgPSA0ODA7XG4gICAgdGhpcy5wbGF5RGVhdGhTb3VuZCgpO1xuICAgIHRoaXMuZmFydGhlc3QgPSA0ODA7XG4gIH1cblxuICBzY29yZUNoZWNrKCkge1xuICAgIGlmICh0aGlzLmZhcnRoZXN0ID4gdGhpcy55KSB7XG4gICAgICB0aGlzLmZhcnRoZXN0ID0gdGhpcy55O1xuICAgICAgdGhpcy5zY29yZSArPSAxMDtcbiAgICB9XG4gIH1cblxuICBtb3ZlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgdGhpcy5pc1JpZGluZyA9IGZhbHNlO1xuICAgIHRoaXMucGxheVRoZW1lTXVzaWMoKTtcbiAgICB0aGlzLmtlZXBCdW5ueU9uR3JpZCgpO1xuXG4gICAgbGV0IHVzZXJJbnB1dCA9IGUua2V5O1xuICAgIHN3aXRjaCh1c2VySW5wdXQpe1xuICAgICAgY2FzZSAnQXJyb3dSaWdodCc6IFxuICAgICAgICBpZiAodGhpcy54IDwgNTIwKSB7IFxuICAgICAgICB0aGlzLnggKz0gNDA7IFxuICAgICAgICB9IFxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0Fycm93TGVmdCc6IFxuICAgICAgICBpZiAodGhpcy54ID49IDQwKSB7IFxuICAgICAgICB0aGlzLnggLT0gNDA7IFxuICAgICAgICB9IFxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgJ0Fycm93RG93bic6IFxuICAgICAgICBpZiAodGhpcy55IDw9IDQ0MCkgeyBcbiAgICAgICAgdGhpcy55ICs9IDQwOyBcbiAgICAgICAgfSBcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlICdBcnJvd1VwJzogXG4gICAgICAgIGlmICh0aGlzLnkgPiA0MCAmJiB0aGlzLnkgPCA1MjAgfHwgXG4gICAgICAgICAgICB0aGlzLnggPj0gMjQwICYmIHRoaXMueCA8PSAzMjApIHsgXG4gICAgICAgIHRoaXMueSAtPSA0MDsgXG4gICAgICAgIHRoaXMuc2NvcmVDaGVjaygpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrOyBcbiAgICAgIGNhc2UgJ3AnOiBnYW1lLmlzUGF1c2VkKCk7XG4gICAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIGtlZXBCdW5ueU9uR3JpZCgpIHtcbiAgICBpZiAodGhpcy54ICUgNDApIHtcbiAgICAgIHRoaXMueCA9IChNYXRoLnJvdW5kKCh0aGlzLnggJSA0MCkgLyA0MCkgKyBNYXRoLmZsb29yKHRoaXMueCAvIDQwKSkgKiA0MDtcbiAgICB9XG4gIH1cblxuICBwbGF5RGVhdGhTb3VuZCgpIHtcbiAgICBsZXQgYXVkaW8gPSBuZXcgQXVkaW8oJ2Fzc2V0cy9hdWRpby9zb3VuZC1mcm9nZ2VyLXNxdWFzaC53YXYnKTtcbiAgICBhdWRpby5wbGF5KCk7XG4gIH1cblxuICBwbGF5VGhlbWVNdXNpYygpIHtcbiAgICBsZXQgYXVkaW8gPSBuZXcgQXVkaW8oJ2Fzc2V0cy9hdWRpby9zb3VuZC1mcm9nZ2VyLWhvcC53YXYnKTtcbiAgICBhdWRpby5wbGF5KCk7XG4gIH1cbn0iLCJjb25zdCBHYW1lID0gcmVxdWlyZSgnLi9HYW1lJyk7XG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZ2FtZScpO1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5jb25zdCBnYW1lID0gbmV3IEdhbWUoY3R4KTtcbmNvbnN0IGZyb2dnZXJUaGVtZSA9IG5ldyBBdWRpbygnYXNzZXRzL2F1ZGlvL2Zyb2dnZXJfdGhlbWUubXAzJyk7XG5jb25zdCBzY29yZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zY29yZS1zcGFuJyk7XG5jb25zdCBnYW1lT3ZlclNjcmVlbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5nYW1lLW92ZXItLWltZycpXG5jb25zdCBidW5ueSA9IG5ldyBJbWFnZSgpO1xuYnVubnkuc3JjID0gJy9hc3NldHMvaW1hZ2VzL2J1bm55LnBuZyc7XG5jb25zdCBzcGFjZUJhY2tncm91bmQgPSBuZXcgSW1hZ2UoKTtcbnNwYWNlQmFja2dyb3VuZC5zcmMgPSAnL2Fzc2V0cy9pbWFnZXMvY29yb25hX3VwLnBuZyc7XG5jb25zdCBzcGFjZVN0YXRpb24gPSBuZXcgSW1hZ2UoKTtcbnNwYWNlU3RhdGlvbi5zcmMgPSAnL2Fzc2V0cy9pbWFnZXMvbGFuZV9nb2FsLnBuZyc7XG5jb25zdCBzYWZlUGF0aCA9IG5ldyBJbWFnZSgpO1xuc2FmZVBhdGguc3JjID0gJy9hc3NldHMvaW1hZ2VzL3NhZmVwYXRoLnBuZyc7XG5jb25zdCBtb29uQmFja2dyb3VuZCA9IG5ldyBJbWFnZSgpO1xubW9vbkJhY2tncm91bmQuc3JjID0gJy9hc3NldHMvaW1hZ2VzL2x1bmFycm9ja19zLnBuZyc7XG5jb25zdCBidW5ueUxpdmVzID0gbmV3IEltYWdlKCk7XG5idW5ueUxpdmVzLnNyYyA9ICcvYXNzZXRzL2ltYWdlcy9idW5ueV9saXZlcy5wbmcnO1xuXG5mdW5jdGlvbiBnYW1lTG9vcCgpIHtcbiAgaWYgKGdhbWUucGxheWVyLmxpdmVzID09PSAwKSB7XG4gICAgZW5kR2FtZSgpO1xuICAgIHJldHVybjtcbiAgfVxuICBpZiAoZ2FtZS5wbGF5ZXIueSA9PT0gMCkge1xuICAgIGdhbWUubGV2ZWwrKztcbiAgICBnYW1lLnBsYXllci5mYXJ0aGVzdCA9IDQ4MDtcbiAgICBnYW1lLnBsYXllci5zY29yZSArPSA1MDtcbiAgICB1cGRhdGVTY29yZSgpO1xuICAgIGFkak9ic3RhY2xlU3BlZWQoKTtcbiAgICBjdHguZHJhd0ltYWdlKGJ1bm55LCAyNjAsIDApXG4gICAgcmVzZXRCdW5ueUxvY2F0aW9uKCk7ICBcbiBcbiAgfSBlbHNlIHtcbiAgICBjdHguY2xlYXJSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgY3R4LmZpbGxTdHlsZSA9ICdibGFjayc7XG4gICAgY3R4LmZpbGxSZWN0KDAsIDUyMCwgNTYwLCA0MCk7XG4gICAgY3R4LmRyYXdJbWFnZShtb29uQmFja2dyb3VuZCwgMCwgMjgwKTsgICAgXG4gICAgY3R4LmRyYXdJbWFnZShzcGFjZVN0YXRpb24sIDAsIDApO1xuICAgIGN0eC5kcmF3SW1hZ2Uoc3BhY2VCYWNrZ3JvdW5kLCAwLCA0MCk7XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE0OyBpKyspIHtcbiAgICAgIGN0eC5kcmF3SW1hZ2Uoc2FmZVBhdGgsIGkgKiA0MCwgMjQwKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IDE0OyBpKyspIHtcbiAgICAgIGN0eC5kcmF3SW1hZ2Uoc2FmZVBhdGgsIGkgKiA0MCwgNDgwKTtcbiAgICB9XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWUucGxheWVyLmxpdmVzIC0gMTsgaSsrKSB7XG4gICAgICBjdHguZHJhd0ltYWdlKGJ1bm55TGl2ZXMsIGkgKiAzMCwgNTMwKTtcbiAgICB9XG5cbiAgICBnYW1lLmFuaW1hdGUoKTtcblxuICAgIGlmIChnYW1lLnBsYXllci54IDwgMCB8fCBnYW1lLnBsYXllci54ID49IDU2MCkge1xuICAgICAgZ2FtZS5wbGF5ZXIuYnVubnlEZWF0aCgpO1xuICAgICAgaWYgKGdhbWUucGxheWVyLmxpdmVzID09PSAwKSB7XG4gICAgICAgIGdhbWUuZW5kR2FtZSgpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGdhbWUub2JzdGFjbGVzLmZvckVhY2goIG9ic3RhY2xlID0+IHtcbiAgICAgIGlmIChnYW1lLnBsYXllci5pc0NvbGxpZGluZ1dpdGgob2JzdGFjbGUpICYmIGdhbWUucGxheWVyLnkgPj0gMjgwKSB7XG4gICAgICAgICAgZ2FtZS5wbGF5ZXIuYnVubnlEZWF0aCgpO1xuICAgICAgfVxuICAgICAgZWxzZSBpZiAoZ2FtZS5wbGF5ZXIueSA8IDI0MCAmJiBnYW1lLnBsYXllci5pc0NvbGxpZGluZ1dpdGgob2JzdGFjbGUpKSB7XG4gICAgICAgICAgZ2FtZS5wbGF5ZXIuZHggPSBvYnN0YWNsZS5keFxuICAgICAgICAgIGdhbWUucGxheWVyLmR4diA9IG9ic3RhY2xlLmR4dlxuXG4gICAgICAgICAgZ2FtZS5wbGF5ZXIuaXNSaWRpbmcgPSB0cnVlO1xuICAgICAgICAgIGdhbWUucGxheWVyLnJpZGUoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICBpZiAoZ2FtZS5wbGF5ZXIuaXNSaWRpbmcgPT09IGZhbHNlICYmIGdhbWUucGxheWVyLnkgPCAyNDAgJiYgZ2FtZS5wbGF5ZXIueSA+IDApIHtcbiAgICAgIGdhbWUucGxheWVyLmJ1bm55RGVhdGgoKTtcbiAgICAgIGlmIChnYW1lLnBsYXllci5saXZlcyA9PT0gMCkge1xuICAgICAgICBnYW1lLmVuZEdhbWUoKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcClcbn1cblxuZnVuY3Rpb24gcmVzdGFydEdhbWUoKSB7XG4gIGdhbWUucGxheWVyLmxpdmVzID0gNztcbiAgZ2FtZS5sZXZlbCA9IDA7XG4gIHJlc2V0QnVubnlMb2NhdGlvbigpO1xuICBhZGpPYnN0YWNsZVNwZWVkKCk7XG4gIGdhbWVMb29wKClcbn1cblxuZnVuY3Rpb24gcmVzZXRCdW5ueUxvY2F0aW9uKCkge1xuICBnYW1lLnBsYXllci54ID0gMjgwOyBcbiAgZ2FtZS5wbGF5ZXIueSA9IDQ4MDsgXG59XG5cbmZ1bmN0aW9uIGVuZEdhbWUoKSB7XG4gIGZyb2dnZXJUaGVtZS5wYXVzZSgpO1xuICBnYW1lLmdhbWVPdmVyID0gdHJ1ZTtcbiAgY2FudmFzLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgZ2FtZU92ZXJTY3JlZW4uY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC1idG4nKS5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgZ2FtZS5wbGF5ZXIuc2NvcmUgPSAwO1xuICB1cGRhdGVTY29yZSgpO1xufVxuXG5mdW5jdGlvbiBzdGFydEJ0blNvdW5kKCkge1xuICBsZXQgYXVkaW8gPSBuZXcgQXVkaW8oJ2Fzc2V0cy9hdWRpby9zb3VuZC1mcm9nZ2VyLWNvaW4taW4ud2F2Jyk7XG4gIGF1ZGlvLnBsYXkoKTtcbn1cblxuZnVuY3Rpb24gc3RhcnRUaGVtZU11c2ljKCkge1xuICBzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xuICAgIGZyb2dnZXJUaGVtZS5wbGF5KCk7IFxuICB9LCAyMjAwKTtcbn1cblxuZnVuY3Rpb24gdXBkYXRlU2NvcmUoKSB7XG4gIHNjb3JlLmlubmVyVGV4dCA9IGdhbWUucGxheWVyLnNjb3JlO1xuICByZXRyaWV2ZUhpU2NvcmUoKTtcbn1cblxuZnVuY3Rpb24gcmV0cmlldmVIaVNjb3JlKCkge1xuICBsZXQgaGlTY29yZSA9IGdldE5QYXJzZSgpIHx8IDA7XG4gIGlmIChnYW1lLnBsYXllci5zY29yZSA+IGhpU2NvcmUpIHtcbiAgICBoaVNjb3JlID0gZ2FtZS5wbGF5ZXIuc2NvcmU7XG4gIH1cbiAgc3RvcmVIaVNjb3JlKGhpU2NvcmUpO1xuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGktc2NvcmUtc3BhbicpLmlubmVyVGV4dCA9IGhpU2NvcmU7XG59XG5cbmZ1bmN0aW9uIGdldE5QYXJzZSgpIHtcbiAgcmV0dXJuIEpTT04ucGFyc2UobG9jYWxTdG9yYWdlLmdldEl0ZW0oJ3Njb3JlJykpO1xufVxuXG5mdW5jdGlvbiBzdG9yZUhpU2NvcmUoc2NvcmUpIHtcbiAgdmFyIHN0cmluZ2lmaWVkID0gSlNPTi5zdHJpbmdpZnkoc2NvcmUpO1xuICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbSgnc2NvcmUnLCBzdHJpbmdpZmllZCk7XG59XG5cbmZ1bmN0aW9uIGFkak9ic3RhY2xlU3BlZWQoKSB7XG4gIGdhbWUub2JzdGFjbGVzLmZvckVhY2goIG9icyA9PiB7XG4gICAgb2JzLmR4diArPSAoZ2FtZS5sZXZlbCAqIC4xKTtcbiAgfSk7XG59XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCBnYW1lLnBsYXllci5tb3ZlLmJpbmQoZ2FtZS5wbGF5ZXIpKTtcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB1cGRhdGVTY29yZSk7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC1idG4nKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICBnYW1lTG9vcCgpO1xuICBzdGFydEJ0blNvdW5kKCk7XG4gIHN0YXJ0VGhlbWVNdXNpYygpOyBcbiAgdGhpcy5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgY2FudmFzLmNsYXNzTGlzdC5hZGQoJ3VuaGlkZGVuJyk7XG4gIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zdGFydC1zY3JlZW4tLWltZycpLmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpO1xuXG4gIGlmICghZ2FtZU92ZXJTY3JlZW4uY2xhc3NMaXN0LmNvbnRhaW5zKCdoaWRkZW4nKSkge1xuICAgIGdhbWVPdmVyU2NyZWVuLmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICBjYW52YXMuY2xhc3NMaXN0LmFkZCgndW5oaWRkZW4nKTtcbiAgICBjYW52YXMuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICAgIHJlc3RhcnRHYW1lKCk7XG4gIH1cbn0pO1xuXG5yZXRyaWV2ZUhpU2NvcmUoKTsiXSwic291cmNlUm9vdCI6IiJ9