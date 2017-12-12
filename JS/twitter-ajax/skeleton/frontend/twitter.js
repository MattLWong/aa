var FollowToggle = require('./follow_toggle.js');
var UsersSearch = require('./users_search.js');

$(function() {
  $.each($('.follow-toggle'), function(index, button) {
    new FollowToggle($(button));
  });
  $.each($('.users-search'), function(index, search) {
    new UsersSearch($(search));
  });
});
