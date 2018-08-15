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

/***/ "./lib/Block.js":
/*!**********************!*\
  !*** ./lib/Block.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _get = function get(object, property, receiver) { if (object === null) object = Function.prototype; var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var GamePiece = __webpack_require__(/*! ./GamePiece */ "./lib/GamePiece.js");

// extend GamePiece class
module.exports = function (_GamePiece) {
  _inherits(Block, _GamePiece);

  function Block(x, y, height, width, color, borderColor) {
    _classCallCheck(this, Block);

    var _this = _possibleConstructorReturn(this, (Block.__proto__ || Object.getPrototypeOf(Block)).call(this, x, y, height, width, color));
    // invoke parent class constructor


    _this.borderColor = borderColor;
    return _this;
  }

  _createClass(Block, [{
    key: 'draw',
    value: function draw(ctx) {
      var x = this.x,
          y = this.y,
          height = this.height,
          width = this.width,
          borderColor = this.borderColor;

      // call parent class draw function

      _get(Block.prototype.__proto__ || Object.getPrototypeOf(Block.prototype), 'draw', this).call(this, ctx);

      // draw block border
      ctx.strokeStyle = borderColor;
      ctx.strokeRect(x, y, width, height);
    }
  }]);

  return Block;
}(GamePiece);

/***/ }),

/***/ "./lib/Game.js":
/*!*********************!*\
  !*** ./lib/Game.js ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Block = __webpack_require__(/*! ./Block */ "./lib/Block.js");

module.exports = function () {
  function Game(ctx) {
    _classCallCheck(this, Game);

    this.ctx = ctx;
    this.paused = false;
    this.gameOver = false;

    this.blocks = [new Block(50, 50, 10, 10, 'red', 'black')];
  }

  // draw one frame of our game


  _createClass(Game, [{
    key: 'animate',
    value: function animate() {
      var _this = this;

      var canvas = this.ctx.canvas;


      this.blocks.forEach(function (block) {

        if (block.isCollidingWithWall(canvas.width, canvas.height)) {
          _this.endGame();
        } else {
          block.move();
        }

        block.draw(_this.ctx);
      });
    }
  }, {
    key: 'endGame',
    value: function endGame() {
      this.gameOver = true;
    }
  }, {
    key: 'isOver',
    value: function isOver() {
      return this.gameOver;
    }
  }, {
    key: 'togglePause',
    value: function togglePause() {
      this.paused = !this.paused;
    }
  }, {
    key: 'handleKeyPress',
    value: function handleKeyPress(e) {
      var direction = {
        dx: 0,
        dy: 0
      };

      if (e.key === 'ArrowRight') {
        direction.dx = 1;
      } else if (e.key === 'ArrowLeft') {
        direction.dx = -1;
      } else if (e.key === 'ArrowDown') {
        direction.dy = 1;
      } else if (e.key === 'ArrowUp') {
        direction.dy = -1;
      }

      this.blocks.forEach(function (block) {
        return block.changeDirection(direction);
      });
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
  function GamePiece(x, y, height, width, color) {
    _classCallCheck(this, GamePiece);

    this.x = x;
    this.y = y;
    this.height = height;
    this.width = width;
    this.color = color;
    this.dx = 1;
    this.dy = 0;
    this.dxv = 1;
    this.dyv = 1;
  }

  _createClass(GamePiece, [{
    key: "isCollidingWith",
    value: function isCollidingWith(object) {
      return this.x < object.x + object.width && this.x + this.width > object.x && this.y < object.y + object.height && this.y + this.height > object.y;
    }
  }, {
    key: "isCollidingWithWall",
    value: function isCollidingWithWall(canvasWidth, canvasHeight) {
      return this.x < 0 || this.x + this.width > canvasWidth || this.y < 0 || this.y + this.height > canvasHeight;
    }
  }, {
    key: "draw",
    value: function draw(ctx) {
      var x = this.x,
          y = this.y,
          height = this.height,
          width = this.width,
          color = this.color;


      ctx.fillStyle = color;
      ctx.fillRect(x, y, width, height);
    }
  }, {
    key: "move",
    value: function move() {
      this.x += this.dx * this.dxv;
      this.y += this.dy * this.dyv;
    }
  }, {
    key: "changeDirection",
    value: function changeDirection(direction) {
      this.dx = direction.dx;
      this.dy = direction.dy;
    }
  }]);

  return GamePiece;
}();

/***/ }),

/***/ "./lib/index.js":
/*!**********************!*\
  !*** ./lib/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Game = __webpack_require__(/*! ./Game */ "./lib/Game.js");

var canvas = document.querySelector('#game');
var ctx = canvas.getContext('2d');
var game = new Game(ctx);

// Start animation loop
window.requestAnimationFrame(gameLoop);

function gameLoop() {

  if (game.isOver()) {
    console.log('Game Over');
  } else {
    // clear previous frame
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // draw this frame
    game.animate();
  }

  // prepare to draw next frame
  window.requestAnimationFrame(gameLoop);
}

// Add key press event handler
document.addEventListener('keydown', handleKeyPress);

function handleKeyPress(e) {
  game.handleKeyPress(e);
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL0Jsb2NrLmpzIiwid2VicGFjazovLy8uL2xpYi9HYW1lLmpzIiwid2VicGFjazovLy8uL2xpYi9HYW1lUGllY2UuanMiLCJ3ZWJwYWNrOi8vLy4vbGliL2luZGV4LmpzIl0sIm5hbWVzIjpbIkdhbWVQaWVjZSIsInJlcXVpcmUiLCJtb2R1bGUiLCJleHBvcnRzIiwieCIsInkiLCJoZWlnaHQiLCJ3aWR0aCIsImNvbG9yIiwiYm9yZGVyQ29sb3IiLCJjdHgiLCJzdHJva2VTdHlsZSIsInN0cm9rZVJlY3QiLCJCbG9jayIsInBhdXNlZCIsImdhbWVPdmVyIiwiYmxvY2tzIiwiY2FudmFzIiwiZm9yRWFjaCIsImJsb2NrIiwiaXNDb2xsaWRpbmdXaXRoV2FsbCIsImVuZEdhbWUiLCJtb3ZlIiwiZHJhdyIsImUiLCJkaXJlY3Rpb24iLCJkeCIsImR5Iiwia2V5IiwiY2hhbmdlRGlyZWN0aW9uIiwiZHh2IiwiZHl2Iiwib2JqZWN0IiwiY2FudmFzV2lkdGgiLCJjYW52YXNIZWlnaHQiLCJmaWxsU3R5bGUiLCJmaWxsUmVjdCIsIkdhbWUiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJnZXRDb250ZXh0IiwiZ2FtZSIsIndpbmRvdyIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImdhbWVMb29wIiwiaXNPdmVyIiwiY29uc29sZSIsImxvZyIsImNsZWFyUmVjdCIsImFuaW1hdGUiLCJhZGRFdmVudExpc3RlbmVyIiwiaGFuZGxlS2V5UHJlc3MiXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFD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QUtJLEdBQXpCO0FBQ0Q7QUF6Q0g7QUFBQTtBQUFBLG9DQTJDa0JOLFNBM0NsQixFQTJDNkI7QUFDekIsV0FBS0MsRUFBTCxHQUFVRCxVQUFVQyxFQUFwQjtBQUNBLFdBQUtDLEVBQUwsR0FBVUYsVUFBVUUsRUFBcEI7QUFDRDtBQTlDSDs7QUFBQTtBQUFBLEk7Ozs7Ozs7Ozs7Ozs7O0FDQUEsSUFBTVUsT0FBTyxtQkFBQXBDLENBQVEsNkJBQVIsQ0FBYjs7QUFFQSxJQUFNZ0IsU0FBU3FCLFNBQVNDLGFBQVQsQ0FBdUIsT0FBdkIsQ0FBZjtBQUNBLElBQU03QixNQUFNTyxPQUFPdUIsVUFBUCxDQUFrQixJQUFsQixDQUFaO0FBQ0EsSUFBTUMsT0FBTyxJQUFJSixJQUFKLENBQVMzQixHQUFULENBQWI7O0FBRUE7QUFDQWdDLE9BQU9DLHFCQUFQLENBQTZCQyxRQUE3Qjs7QUFFQSxTQUFTQSxRQUFULEdBQXFCOztBQUVuQixNQUFJSCxLQUFLSSxNQUFMLEVBQUosRUFBbUI7QUFDakJDLFlBQVFDLEdBQVIsQ0FBWSxXQUFaO0FBRUQsR0FIRCxNQUdPO0FBQ0w7QUFDQXJDLFFBQUlzQyxTQUFKLENBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQi9CLE9BQU9WLEtBQTNCLEVBQWtDVSxPQUFPWCxNQUF6Qzs7QUFFQTtBQUNBbUMsU0FBS1EsT0FBTDtBQUNEOztBQUVEO0FBQ0FQLFNBQU9DLHFCQUFQLENBQTZCQyxRQUE3QjtBQUNEOztBQUVEO0FBQ0FOLFNBQVNZLGdCQUFULENBQTBCLFNBQTFCLEVBQXFDQyxjQUFyQzs7QUFFQSxTQUFTQSxjQUFULENBQXdCM0IsQ0FBeEIsRUFBMkI7QUFDekJpQixPQUFLVSxjQUFMLENBQW9CM0IsQ0FBcEI7QUFDRCxDIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9saWIvaW5kZXguanNcIik7XG4iLCJjb25zdCBHYW1lUGllY2UgPSByZXF1aXJlKCcuL0dhbWVQaWVjZScpO1xuXG4vLyBleHRlbmQgR2FtZVBpZWNlIGNsYXNzXG5tb2R1bGUuZXhwb3J0cyA9IGNsYXNzIEJsb2NrIGV4dGVuZHMgR2FtZVBpZWNlIHtcbiAgY29uc3RydWN0b3IoeCwgeSwgaGVpZ2h0LCB3aWR0aCwgY29sb3IsIGJvcmRlckNvbG9yKSB7XG4gICAgLy8gaW52b2tlIHBhcmVudCBjbGFzcyBjb25zdHJ1Y3RvclxuICAgIHN1cGVyKHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yKTtcblxuICAgIHRoaXMuYm9yZGVyQ29sb3IgPSBib3JkZXJDb2xvcjtcbiAgfSBcblxuICBkcmF3KGN0eCkge1xuICAgIGNvbnN0IHt4LCB5LCBoZWlnaHQsIHdpZHRoLCBib3JkZXJDb2xvciB9ID0gdGhpcztcblxuICAgIC8vIGNhbGwgcGFyZW50IGNsYXNzIGRyYXcgZnVuY3Rpb25cbiAgICBzdXBlci5kcmF3KGN0eCk7XG5cbiAgICAvLyBkcmF3IGJsb2NrIGJvcmRlclxuICAgIGN0eC5zdHJva2VTdHlsZSA9IGJvcmRlckNvbG9yO1xuICAgIGN0eC5zdHJva2VSZWN0KHgsIHksIHdpZHRoLCBoZWlnaHQpO1xuICB9XG59IiwiY29uc3QgQmxvY2sgPSByZXF1aXJlKCcuL0Jsb2NrJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gY2xhc3MgR2FtZSB7XG4gIGNvbnN0cnVjdG9yKGN0eCkge1xuICAgIHRoaXMuY3R4ID0gY3R4O1xuICAgIHRoaXMucGF1c2VkID0gZmFsc2U7XG4gICAgdGhpcy5nYW1lT3ZlciA9IGZhbHNlO1xuXG4gICAgdGhpcy5ibG9ja3MgPSBbXG4gICAgICBuZXcgQmxvY2soNTAsIDUwLCAxMCwgMTAsICdyZWQnLCAnYmxhY2snKVxuICAgIF07XG4gIH1cblxuICAvLyBkcmF3IG9uZSBmcmFtZSBvZiBvdXIgZ2FtZVxuICBhbmltYXRlKCkge1xuICAgIGNvbnN0IHsgY2FudmFzIH0gPSB0aGlzLmN0eDtcblxuICAgIHRoaXMuYmxvY2tzLmZvckVhY2goIGJsb2NrID0+IHtcblxuICAgICAgaWYgKGJsb2NrLmlzQ29sbGlkaW5nV2l0aFdhbGwoY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KSkge1xuICAgICAgICB0aGlzLmVuZEdhbWUoKTsgIFxuXG4gICAgICB9IGVsc2Uge1xuICAgICAgICBibG9jay5tb3ZlKCk7XG4gICAgICB9XG4gICAgICBcbiAgICAgIGJsb2NrLmRyYXcodGhpcy5jdHgpO1xuICAgIH0pXG4gIH1cblxuICBlbmRHYW1lKCkge1xuICAgIHRoaXMuZ2FtZU92ZXIgPSB0cnVlO1xuICB9XG5cbiAgaXNPdmVyKCkge1xuICAgIHJldHVybiB0aGlzLmdhbWVPdmVyO1xuICB9XG5cbiAgdG9nZ2xlUGF1c2UoKSB7XG4gICAgdGhpcy5wYXVzZWQgPSAhdGhpcy5wYXVzZWQ7XG4gIH1cblxuICBoYW5kbGVLZXlQcmVzcyhlKSB7XG4gICAgY29uc3QgZGlyZWN0aW9uID0ge1xuICAgICAgZHg6IDAsXG4gICAgICBkeTogMFxuICAgIH07XG5cbiAgICBpZiAoZS5rZXkgPT09ICdBcnJvd1JpZ2h0Jykge1xuICAgICAgZGlyZWN0aW9uLmR4ID0gMTtcblxuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdBcnJvd0xlZnQnKSB7XG4gICAgICBkaXJlY3Rpb24uZHggPSAtMTtcblxuICAgIH0gZWxzZSBpZiAoZS5rZXkgPT09ICdBcnJvd0Rvd24nKSB7XG4gICAgICBkaXJlY3Rpb24uZHkgPSAxO1xuXG4gICAgfSBlbHNlIGlmIChlLmtleSA9PT0gJ0Fycm93VXAnKSB7XG4gICAgICBkaXJlY3Rpb24uZHkgPSAtMTtcbiAgICB9IFxuXG4gICAgdGhpcy5ibG9ja3MuZm9yRWFjaCggYmxvY2sgPT4gYmxvY2suY2hhbmdlRGlyZWN0aW9uKGRpcmVjdGlvbikgKTtcbiAgfVxuXG59IiwibW9kdWxlLmV4cG9ydHMgPSBjbGFzcyBHYW1lUGllY2Uge1xuICBjb25zdHJ1Y3Rvcih4LCB5LCBoZWlnaHQsIHdpZHRoLCBjb2xvcikge1xuICAgIHRoaXMueCA9IHg7XG4gICAgdGhpcy55ID0geTtcbiAgICB0aGlzLmhlaWdodCA9IGhlaWdodDtcbiAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gICAgdGhpcy5jb2xvciA9IGNvbG9yO1xuICAgIHRoaXMuZHggPSAxO1xuICAgIHRoaXMuZHkgPSAwO1xuICAgIHRoaXMuZHh2ID0gMTtcbiAgICB0aGlzLmR5diA9IDE7XG4gIH1cblxuICBpc0NvbGxpZGluZ1dpdGgob2JqZWN0KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMueCA8IG9iamVjdC54ICsgb2JqZWN0LndpZHRoICYmIFxuICAgICAgdGhpcy54ICsgdGhpcy53aWR0aCA+IG9iamVjdC54ICYmXG4gICAgICB0aGlzLnkgPCBvYmplY3QueSArIG9iamVjdC5oZWlnaHQgJiZcbiAgICAgIHRoaXMueSArIHRoaXMuaGVpZ2h0ID4gb2JqZWN0LnlcbiAgICApO1xuICB9XG5cbiAgaXNDb2xsaWRpbmdXaXRoV2FsbChjYW52YXNXaWR0aCwgY2FudmFzSGVpZ2h0KSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMueCA8IDAgfHxcbiAgICAgIHRoaXMueCArIHRoaXMud2lkdGggPiBjYW52YXNXaWR0aCB8fFxuICAgICAgdGhpcy55IDwgMCB8fCBcbiAgICAgIHRoaXMueSArIHRoaXMuaGVpZ2h0ID4gY2FudmFzSGVpZ2h0XG4gICAgKVxuICB9XG5cbiAgZHJhdyhjdHgpIHtcbiAgICBjb25zdCB7IHgsIHksIGhlaWdodCwgd2lkdGgsIGNvbG9yIH0gPSB0aGlzO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IGNvbG9yO1xuICAgIGN0eC5maWxsUmVjdCh4LCB5LCB3aWR0aCwgaGVpZ2h0KTtcbiAgfVxuXG4gIG1vdmUoKSB7XG4gICAgdGhpcy54ICs9IHRoaXMuZHggKiB0aGlzLmR4djtcbiAgICB0aGlzLnkgKz0gdGhpcy5keSAqIHRoaXMuZHl2O1xuICB9XG5cbiAgY2hhbmdlRGlyZWN0aW9uKGRpcmVjdGlvbikge1xuICAgIHRoaXMuZHggPSBkaXJlY3Rpb24uZHg7XG4gICAgdGhpcy5keSA9IGRpcmVjdGlvbi5keTtcbiAgfVxuXG59IiwiY29uc3QgR2FtZSA9IHJlcXVpcmUoJy4vR2FtZScpO1xuXG5jb25zdCBjYW52YXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZ2FtZScpO1xuY29uc3QgY3R4ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XG5jb25zdCBnYW1lID0gbmV3IEdhbWUoY3R4KTtcblxuLy8gU3RhcnQgYW5pbWF0aW9uIGxvb3BcbndpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoZ2FtZUxvb3ApO1xuXG5mdW5jdGlvbiBnYW1lTG9vcCAoKSB7XG5cbiAgaWYgKGdhbWUuaXNPdmVyKCkpIHtcbiAgICBjb25zb2xlLmxvZygnR2FtZSBPdmVyJyk7XG5cbiAgfSBlbHNlIHtcbiAgICAvLyBjbGVhciBwcmV2aW91cyBmcmFtZVxuICAgIGN0eC5jbGVhclJlY3QoMCwgMCwgY2FudmFzLndpZHRoLCBjYW52YXMuaGVpZ2h0KTtcblxuICAgIC8vIGRyYXcgdGhpcyBmcmFtZVxuICAgIGdhbWUuYW5pbWF0ZSgpO1xuICB9XG5cbiAgLy8gcHJlcGFyZSB0byBkcmF3IG5leHQgZnJhbWVcbiAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZShnYW1lTG9vcClcbn1cblxuLy8gQWRkIGtleSBwcmVzcyBldmVudCBoYW5kbGVyXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgaGFuZGxlS2V5UHJlc3MpO1xuXG5mdW5jdGlvbiBoYW5kbGVLZXlQcmVzcyhlKSB7XG4gIGdhbWUuaGFuZGxlS2V5UHJlc3MoZSk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9