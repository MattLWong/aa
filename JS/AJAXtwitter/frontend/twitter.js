const FollowToggle = require('./follow_toggle');
const UsersSearch = require('./users_search');
const TweetCompose = require('./tweet_compose');
const InfiniteTweets = require('./infinite_tweets');

$(function() {
  // el is NOT a jquery object
  $('button.follow-toggle').each( (index, el) => new FollowToggle(el, {}));
  $('nav.users-search').each( (idx, el) => new UsersSearch(el));
  $('form.tweet-compose').each( (idx, el) => new TweetCompose(el));
  $('div.infinite-tweets').each( (idx, el) => new InfiniteTweets(el));
});
