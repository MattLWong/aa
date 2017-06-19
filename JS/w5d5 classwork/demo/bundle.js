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

	var Cat = __webpack_require__(1),
	    Dog = __webpack_require__(2)

	var c = new Cat("Maria");
	c.meow();

	var d = new Dog("Luke");
	d.woof();


/***/ },
/* 1 */
/***/ function(module, exports) {

	var Cat = function(name) {
	  this.name = name;
	};

	Cat.prototype.meow = function() {
	  console.log("meow, I am " + this.name);
	}

	module.exports = Cat;


/***/ },
/* 2 */
/***/ function(module, exports) {

	var Dog = function(name) {
	  this.name = name;
	};

	Dog.prototype.woof = function() {
	  console.log("woof, I am " + this.name);
	}

	module.exports = Dog;


/***/ }
/******/ ]);