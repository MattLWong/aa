var APIUtil = require("./api_util.js");
var FollowToggle = require('./follow_toggle.js');


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
