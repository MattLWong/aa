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
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
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
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var FollowToggle = __webpack_require__(1);
var UsersSearch = __webpack_require__(3);

$(function() {
  $.each($('.follow-toggle'), function(index, button) {
    new FollowToggle($(button));
  });
  $.each($('.users-search'), function(index, search) {
    new UsersSearch($(search));
  });
});


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

const APIUtil = __webpack_require__(2);

const FollowToggle = function($el) {
  this.$el = $el;
  this.userId = $el.data('user-id');
  this.followState = $el.data("initial-follow-state");
  this.render(this.followState);
  this.$el.on("click", this.handleClick.bind(this));
};

FollowToggle.prototype.render = function (followState) {
  const newState = followState ? "Unfollow" : "Follow";
  this.$el.text(newState);
};

FollowToggle.prototype.handleClick = function (event) {
  event.preventDefault();
  switch (this.followState) {
    case false:
      APIUtil.followUser(this.userId).then(() => {
          this.toggleState();
        });
      break;
    case true:
      APIUtil.unfollowUser(this.userId).then(() => {
          this.toggleState();
        });
      break;
  }

};

FollowToggle.prototype.toggleState = function () {
  this.followState = !this.followState;
  this.render(this.followState);
};

module.exports = FollowToggle;


/***/ }),
/* 2 */
/***/ (function(module, exports) {

const APIUtil = {
  followUser: id => {
    return $.ajax({
      dataType: 'json',
      method: "POST",
      url: `/users/${id}/follow`
    });
  },

  unfollowUser: id => {
    return $.ajax({
      dataType: 'json',
      method: "DELETE",
      url: `/users/${id}/follow`
    });
  },

  searchUsers: (queryVal, success) => {
    return $.ajax({
      dataType: 'json',
      method: "GET",
      url: '/users/search',
      data: queryVal
    });
  }

};

module.exports = APIUtil;


    // this.toggleState();


/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var APIUtil = __webpack_require__(2);

const UsersSearch = function($el) {
  this.$el = $el;
  this.$input = $el.find('input[type=text]');
  this.$ul = $el.find('ul');
  this.$input.on('input', function(e) {
    e.preventDefault();
    APIUtil.searchUsers(this.$input.val()).then(() => {
      debugger;
    });
  }.bind(this));
};

UsersSearch.prototype.updateSearchList = function (message) {
};

module.exports = UsersSearch;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map