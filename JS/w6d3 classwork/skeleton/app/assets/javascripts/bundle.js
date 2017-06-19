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
	  $('button.follow-toggle').each( (idx, el) => new FollowToggle(el) );
	  $('nav.users-search').each( (idx, search) => new UsersSearch(search));
	  $('form.tweet-compose').each( (i, form) => new TweetCompose(form));
	})


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	const APIUtil = __webpack_require__(2);
	
	
	class FollowToggle {
	  constructor(el, options) {
	    this.$el = $(el);
	    this.userId = this.$el.data("user-id") || options.userId;
	    this.followState = this.$el.data("initial-follow-state") || options.followState;
	    this.render();
	    this.$el.on("click", this.handleClick.bind(this));
	
	  }
	
	  handleClick() {
	    const followToggle = this;
	    event.preventDefault();
	
	    if (this.followState === "unfollowed") {
	      this.followState = "following";
	      this.render();
	      APIUtil.followUser(this.userId).then(() => {
	          followToggle.followState = "followed";
	          followToggle.render();
	        });
	
	    } else if (this.followState === "followed"){
	      //delete request
	      this.followState = "unfollowing";
	      this.render();
	      APIUtil.unfollowUser(this.userId).then(() => {
	          followToggle.followState = "unfollowed";
	          followToggle.render();
	        });
	    }
	  }
	
	  render() {
	    switch(this.followState){
	      case "followed":
	        this.$el.prop("disabled", false);
	        this.$el.html("Unfollow!");
	        break;
	      case "unfollowed":
	        this.$el.prop("disabled", false);
	        this.$el.html("Follow!");
	        break;
	      case "following":
	        this.$el.prop("disabled", true);
	        this.$el.html("Following...");
	        break;
	      case "unfollowing":
	        this.$el.prop("disabled", true);
	        this.$el.html("Unfollowing...");
	        break;
	    }
	  }
	}
	
	module.exports = FollowToggle;


/***/ },
/* 2 */
/***/ function(module, exports) {

	const APIUtil = {
	
	  followUser: id => APIUtil.changeFollowStatus(id, "POST"),
	
	  unfollowUser: id => APIUtil.changeFollowStatus(id, "DELETE"),
	
	  changeFollowStatus: (id, method) => (
	    $.ajax({
	      url: `/users/${id}/follow`,
	      dataType: "json",
	      method
	    })
	  ),
	
	  searchUsers: query => (
	    $.ajax({
	      url: "/users/search",
	      dataType: "JSON",
	      method: "GET",
	      data: { query }
	    })
	  ),
	
	  createTweet: data => {
	    $.ajax({
	      url: "/tweets",
	      dataType: "json",
	      method: "POST",
	      data
	    })
	  }
	};
	
	module.exports = APIUtil;


/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	const APIUtil = __webpack_require__(2);
	const FollowToggle = __webpack_require__(1);
	
	class UsersSearch {
	  constructor(el) {
	    this.$el = $(el);
	    this.$input = this.$el.find("input[name=username]");
	    this.$ul = this.$el.find(".users");
	
	    this.$input.on("input", this.handleInput.bind(this));
	  }
	
	  handleInput(event) {
	    if (this.$input.val() === "") {
	      this.renderResults([]);
	      return;
	    }
	    APIUtil.searchUsers(this.$input.val())
	      // .then(users => console.log(users));
	      .then(users => this.renderResults(users));
	  }
	
	  renderResults(users) {
	    this.$ul.empty();
	
	    for (let i = 0; i < users.length; i++) {
	      let user = users[i];
	
	      let $a = $("<a></a>");
	      $a.text(user.username);
	      $a.attr("href", `/users/${user.id}`);
	
	      let $followToggle = $("<button></button>");
	      new FollowToggle($followToggle, {
	        userId: user.id,
	        followState: user.followed ? "followed" : "unfollowed"
	      });
	
	      let $li = $("<li></li>");
	      $li.append($a);
	      $li.append($followToggle);
	
	      this.$ul.append($li);
	    }
	  }
	}
	
	module.exports = UsersSearch;


/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	const APIUtil = __webpack_require__(2);
	
	class TweetCompose {
	  constructor(el) {
	    //install submit event handler
	    this.$el = $(el);
	    //this "finds" the information iside the textarea
	    //I don't know what there are two \\ before the brackets
	    this.$input = this.$el.find("textarea[name=tweet\\[content\\]]");
	    //basically, on("input") fires off this function whenever there is
	    //something added to the textarea
	    this.$input.on("input", this.handleInput.bind(this));
	
	    //"find" within the element the class "mentioned users"
	    this.$mentionedUsersDiv = this.$el.find(".mentioned-users");
	
	    this.$el.find("a.add-mentioned-user").on(
	      "click", this.addMentionedUser.bind(this));
	    this.$mentionedUsersDiv.on(
	      "click", "a.remove-mentioned-user", this.removeMentionedUser.bind(this));
	
	    this.$el.on("submit", this.submit.bind(this));
	  }
	
	  addMentionedUser(event) {
	    event.preventDefault();
	
	    const $mentionedUserSelect = $(this.$mentionedUserDiv.find("script").html());
	    this.$mentionedUsersDiv.find("ul").append($mentionedUserSelect);
	    return false;
	  }
	
	  handleInput() {
	    const inputLength = this.$input.val().length;
	    this.$el.find(".char-left").text(`${140 - inputLength} characters left`)
	  }
	
	  submit(event) {
	    //uses serialize JSON to build JSON from the form contents
	    event.preventDefault();
	    const data = this.$el.serializeJSON();
	
	    //find the input of the form and disable it
	    this.$el.find(":input").prop("disabled", true);
	
	    APIUtil.createTweet(data).then(tweet => this.handleSuccess(tweet));
	  }
	
	  handleSuccess(data) {
	    const $tweetsUl = $(this.$el.data("tweets-ul"));
	    $tweetsUl.trigger("insert-tweet", data);
	
	    this.clearInput();
	  }
	
	  removeMentionedUser(event) {
	    event.preventDefault();
	    $(event.currentTarget).parent().remove();
	  }
	}
	
	module.exports = TweetCompose;


/***/ }
/******/ ]);
//# sourceMappingURL=bundle.js.map