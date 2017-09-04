const FollowToggle = require('./follow_toggle');

$(function() {
  $('button.follow-toggle').each( (index, el) => new FollowToggle(el, {}));
});
