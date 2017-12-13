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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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

  searchUsers: (queryVal, cb) => {
    return $.ajax({
      dataType: 'json',
      method: "GET",
      url: '/users/search',
      data: {query: queryVal},
      success: function(response) {
        cb(response);
      }
    });
  },

  createTweet: (data) => {
    return $.ajax({
      dataType: 'json',
      method: 'POST',
      url: '/tweets',
      data
    });
  },

  fetchTweets: (max_created_at) => {
    if (max_created_at == null) {
      return $.ajax({
        dataType: 'json',
        method: "GET",
        url: '/feed'
      });
    } else {
      return $.ajax({
        dataType: 'json',
        method: "GET",
        url: '/feed',
        data: {max_created_at: max_created_at}
      });
    }
  }
};

module.exports = APIUtil;


    // this.toggleState();


/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var FollowToggle = __webpack_require__(2);
var UsersSearch = __webpack_require__(3);
var TweetCompose = __webpack_require__(4);
var InfiniteTweets = __webpack_require__(5);

$(function() {
  $.each($('.follow-toggle'), function(index, button) {
    new FollowToggle($(button));
  });
  $.each($('.users-search'), function(index, search) {
    new UsersSearch($(search));
  });
  $.each($('.tweet-compose'), function(index, search) {
    new TweetCompose($(search));
  });
  $.each($('.infinite-tweets'), function(index, search) {
    new InfiniteTweets($(search));
  });
});


/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

const APIUtil = __webpack_require__(0);

const FollowToggle = function($el, options) {
  this.$el = $el;
  this.userId = $el.data('user-id') || options.userId;
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
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var APIUtil = __webpack_require__(0);
var FollowToggle = __webpack_require__(2);


const UsersSearch = function($el) {
  this.$el = $el;
  this.$input = $el.find('input[type=text]');
  this.$ul = $el.find('ul');
  this.$input.on('input', this.handleInput.bind(this));
};

UsersSearch.prototype.handleInput = function (event) {
  event.preventDefault();
  APIUtil.searchUsers(this.$input.val(), this.appendMessage.bind(this));
};

UsersSearch.prototype.appendMessage = function (response) {
  this.removeData();
  for(let i = 0; i < response.length; i++) {
    let $li = $('<li>').text(response[i].username);
    let $button = $(`<button class="follow-toggle" data-user-id=${response[i].id} data-initial-follow-state=${response[i].followed}>`);
    $li.append($button);
    this.$ul.append($li);
  }
  $.each($('.follow-toggle'), function(index, button) {
    new FollowToggle($(button));
  });
};

UsersSearch.prototype.removeData = function () {
  this.$ul.find("li").remove();
  this.$ul.find("button").remove();
};


module.exports = UsersSearch;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

const APIUtil = __webpack_require__(0);

function TweetCompose($el) {
  this.$el = $el;
  this.$textarea = this.$el.find('textarea');
  this.$charLeft = $el.find('.chars-left');
  this.$addMentionedUser = $el.find('.add-mentioned-user');
  this.$mentionedUsers = this.$el.find('.mentioned-users');
  window.$el = this.$el;

  this.$el.on('submit', this.handleSubmit.bind(this));
  this.$textarea.on('input', this.handleCharsLeft.bind(this));
  this.$addMentionedUser.on('click', this.insertMention.bind(this));
  this.$mentionedUsers.on('click', 'span', this.removeMention.bind(this));
}

TweetCompose.prototype.handleSubmit = function (event) {
  event.preventDefault();
  const data = this.$el.serializeArray();
  APIUtil.createTweet(data).then( (response) => {
    this.addTweet(response);
    this.clearInputs();
    this.$el.find('input').prop("disabled", false);
    this.$charLeft.text("");
  });
  this.$el.find('input').prop("disabled", true);
};

TweetCompose.prototype.addTweet = function (response) {
  let $li = $("<li>").text(`${response.content} -- ${response.user.username} -- ${response.created_at}`);
  $('#feed').prepend($li);
};

TweetCompose.prototype.clearInputs = function () {
  this.$el.find('textarea').val("");
  this.$el.find('select').val("");
  this.$el.find('label.mention').remove();
};

TweetCompose.prototype.handleCharsLeft = function (event) {
  event.preventDefault;
  let charactersLeft = 140 - this.$textarea.val().length;
  this.$charLeft.text(charactersLeft);
};

TweetCompose.prototype.insertMention = function (e) {
  e.preventDefault();

  let $p  = $("<label class='mention'>Mention</label>");
  let $select = $('<select name="tweet[mentioned_user_ids][]"></select>');
  $select.append($('<option></option>'));
  for(let i = 0; i < window.users.length; i++) {
    let $user = $(`<option value="${window.users[i].id}">${window.users[i].username}</option>`);
    $select.append($user);
  }
  $p.append($select);
  $p.append('<span class="remove-mentioned-user">X</span>');
  this.$mentionedUsers.append($p);
};

TweetCompose.prototype.removeMention = function (e) {
  e.preventDefault();
  $(e.target).parent().remove();
};

module.exports = TweetCompose;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

const APIUtil = __webpack_require__(0);

function InfiniteTweets($el) {
  this.$el = $el;
  this.$fetchMore = this.$el.find('.fetch-more');
  this.$ul = $el.find('ul');
  this.max_created_at = null;
  this.$fetchMore.on('click', this.fetchTweets.bind(this));
}

InfiniteTweets.prototype.fetchTweets = function (e) {
  e.preventDefault();
  if (this.max_created_at == null) {
    APIUtil.fetchTweets(null).then( (response) => {
      this.insertTweets(response);
    });
  } else {
    APIUtil.fetchTweets(this.max_created_at).then( (response) => {
      this.insertTweets(response);
    });
  }

};

InfiniteTweets.prototype.insertTweets = function (response) {
  for (let i=0; i < response.length; i++) {
    let $li = $('<li>');
    $li.text(`${response[i].user.username} -- ${response[i].content} -- ${response[i].created_at}`);
    this.$ul.append($li);
  }
  this.max_created_at = response[response.length - 1].created_at;
};

module.exports = InfiniteTweets;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map