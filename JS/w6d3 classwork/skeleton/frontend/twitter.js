const FollowToggle = require('./follow_toggle');
const UsersSearch = require('./users_search');
const TweetCompose = require('./tweet_compose');

$(function() {
  $('button.follow-toggle').each( (idx, el) => new FollowToggle(el) );
  $('nav.users-search').each( (idx, search) => new UsersSearch(search));
  $('form.tweet-compose').each( (i, form) => new TweetCompose(form));
})
