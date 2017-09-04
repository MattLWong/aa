const FollowToggle = require('./follow_toggle');
const UsersSearch = require('./users_search');
const TweetCompose = require('./tweet_compose');

$(function() {
  // el is NOT a jquery object
  $('button.follow-toggle').each( (index, el) => new FollowToggle(el, {}));
  $('nav.users-search').each( (idx, el) => new UsersSearch(el));
  $('form.tweet-compose').each( (idx, el) => new TweetCompose(el));
});
