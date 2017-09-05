/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
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
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	const FollowToggle = __webpack_require__(1);
	const UsersSearch = __webpack_require__(3);
	const TweetCompose = __webpack_require__(4);
	
	$(function() {
	  // el is NOT a jquery object
	  $('button.follow-toggle').each( (index, el) => new FollowToggle(el, {}));
	  $('nav.users-search').each( (idx, el) => new UsersSearch(el));
	  $('form.tweet-compose').each( (idx, el) => new TweetCompose(el));
	});


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	const APIUtil = __webpack_require__(2);
	
	class FollowToggle {
	  constructor(el, options) {
	    this.$el = $(el);
	    this.userId = this.$el.data('user-id') || options.userId;
	    this.followState = (this.$el.data('initial-follow-state') || options.followState)
	    this.render();
	    this.$el.on('click', this.handleClick.bind(this))
	  }
	
	  handleClick(event) {
	    const followToggle = this;
	    event.preventDefault();
	
	    if(this.followState == "followed") {
	      this.followState = 'unfollowing...';
	      this.render();
	      APIUtil.unfollowUser(this.userId).then(() => {
	        followToggle.followState = 'unfollowed';
	        followToggle.render();
	      });
	    } else if (this.followState == "unfollowed") {
	      this.followState = 'following...'
	      this.render();
	      APIUtil.followUser(this.userId).then(() => {
	        followToggle.followState = 'followed';
	        followToggle.render();
	      });
	    }
	  }
	
	  render() {
	    switch(this.followState){
	      case 'followed':
	        this.$el.prop('disabled', false);
	        this.$el.html("Unfollow!");
	        break;
	      case 'unfollowed':
	        this.$el.prop('disabled', false);
	        this.$el.html("Follow!");
	        break;
	      case 'unfollowing...':
	        this.$el.prop('disabled', true);
	        this.$el.html("Unfollowing...");
	      case 'following...':
	        this.$el.prop('disabled', true);
	        this.$el.html('Following...')
	    }
	  }
	}
	
	module.exports = FollowToggle;


/***/ },
/* 2 */
/***/ function(module, exports) {

	const APIUtil = {
	
	  followUser: id => APIUtil.changeFollowStatus(id, 'POST'),
	
	  unfollowUser: id => APIUtil.changeFollowStatus(id, "DELETE"),
	
	  changeFollowStatus:  (id, method) => (
	    $.ajax({
	      url: `/users/${id}/follow`,
	      dataType: 'json',
	      method
	    })
	  ),
	
	  searchUsers: query => (
	    $.ajax({
	      url: '/users/search',
	      method: "get",
	      data: { query },
	      dataType: 'json'
	    })
	  ),
	
	  createTweet: tweet => (
	    $.ajax({
	      url: '/tweets',
	      method: 'POST',
	      data: { tweet },
	      dataType: 'json'
	    })
	  )
	}
	
	module.exports = APIUtil;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	//transport the while object
	const APIUtil = __webpack_require__(2);
	const FollowToggle = __webpack_require__(1);
	
	class UsersSearch {
	  constructor(el) {
	    this.$el = $(el);
	    this.$input = this.$el.find('input[name=username]');
	    this.$ul = this.$el.find('ul.users');
	
	    this.$input.on('input', this.handleChange.bind(this));
	  }
	
	  handleChange(event) {
	    if (this.$input.val() === "") {
	      this.render([]);
	      return;
	    }
	
	    APIUtil.searchUsers(this.$input.val())
	      .then(users => this.render(users));
	  }
	
	  render(users) {
	    debugger;
	    this.$ul.empty();
	    users.forEach( user => {
	      let $a = $('<a></a>');
	      $a.text(user.username);
	      $a.attr('href', `/users/${user.id}`);
	
	      let $followToggle = $('<button></button>');
	      new FollowToggle($followToggle, {
	        userId: user.id,
	        followState: user.followed ? 'followed' : 'unfollowed'
	      })
	      let $li = $('<li></li>');
	      $li.append($a);
	      $li.append($followToggle);
	
	      this.$ul.append($li);
	
	    })
	  }
	}
	
	module.exports = UsersSearch;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	const APIUtil = __webpack_require__(2);
	
	class TweetCompose {
	  constructor(el) {
	    this.$el = $(el);
	    this.$textarea = this.$el.find("textarea");
	    this.$mention = this.$el.find("select");
	    const TweetCompose = this;
	    this.$el.on('submit', TweetCompose.submitFunction.bind(this));
	    this.$textarea.on('keyup', TweetCompose.maxChar.bind(this));
	    $('a.add-mentioned-user').on('click', this.addMentionedUser.bind(this));
	    $('div.mentioned-users').on('click', "a.remove-mentioned-user", function(e) {
	      TweetCompose.removeMentionedUser.call(this, e)
	    });
	  }
	  //
	  submitFunction(event) {
	    let that = this;
	    event.preventDefault();
	    let tweet = this.$el.serializeJSON().tweet;
	    this.$el.find(':input').prop('disabled', true);
	    APIUtil.createTweet(tweet)
	      .then( res => {
	        that.handleSuccess.call(that, res)
	      })
	  }
	
	  handleSuccess(res) {
	    // this.clearInput();
	    this.$el.find(':input').prop('disabled', false);
	    console.log(res);
	    let mentioned_users = ""
	
	    res.mentions.forEach( (mentioned_user) => {
	      mentioned_users += `<li><a href="/users/${mentioned_user.user_id}">${mentioned_user.user.username}</a></li>`
	    })
	    let $li = $(`<li>${res.content} -- <a href="/user/${res.user_id}">${res.user.username}</a> -- ${res.created_at}<ul>${mentioned_users}</ul></li>`);
	    this.clearInput.call(this);
	    $('#feed').prepend($li);
	
	  }
	
	  clearInput() {
	    this.$textarea.val("");
	    this.$mention.val(0);
	    $('.char-left').text("");
	    $('div.mentioned-users').empty();
	  }
	
	  maxChar(event) {
	    let characters = this.$textarea.val().length;
	    $('.char-left').text((140 - characters).toString() + " characters left");
	  }
	
	  addMentionedUser(e) {
	    e.preventDefault();
	    let script = $("script.select-mentions").html();
	    $('div.mentioned-users').append(script);
	    return false;
	  }
	
	  removeMentionedUser(e) {
	    e.preventDefault();
	    $(this).parent().remove();
	  }
	}
	
	module.exports = TweetCompose;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map