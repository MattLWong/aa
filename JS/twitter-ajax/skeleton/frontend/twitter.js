var FollowToggle = require('./follow_toggle.js');
var UsersSearch = require('./users_search.js');
var TweetCompose = require('./tweet_compose.js');
var InfiniteTweets = require('./infinite_tweets.js');

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
