/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {var Dog = __webpack_require__(1),
	    Cat = __webpack_require__(4);

	window.Dog = Dog;
	global.Cat = Cat;

	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	var Animal = __webpack_require__(2);
	var inherit = __webpack_require__(3);

	function Dog(name) {
	  Animal.call(this, name);
	}

	inherit(Animal, Dog);

	Dog.prototype.woof = function(){
	  console.log(`Woof! I am ${this.name}`);
	}

	module.exports = Dog;


/***/ },
/* 2 */
/***/ function(module, exports) {

	function Animal(name) {
	  this.name = name;
	}

	Animal.prototype.eat = function() {
	  console.log("I love to eat");
	}

	module.exports = Animal;


/***/ },
/* 3 */
/***/ function(module, exports) {

	var inherit = function(parent, child) {
	  var Surrogate = function(){}
	  Surrogate.prototype = parent.prototype;
	  child.prototype = new Surrogate();
	  child.prototype.constructor = child;
	}

	module.exports = inherit;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var Animal = __webpack_require__(2);
	var inherit = __webpack_require__(3);

	function Cat(name) {
	  Animal.call(this, name);
	}

	inherit(Animal, Cat);

	Cat.prototype.meow = function(){
	  console.log("Meow! I am " + this.name);
	}

	module.exports = Cat;


/***/ }
/******/ ]);
