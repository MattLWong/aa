var APIUtil = require("./api_util.js");

const UsersSearch = function($el) {
  this.$el = $el;
  this.$input = $el.find('input[type=text]');
  this.$ul = $el.find('ul');
  this.$input.on('input', function(e) {
    e.preventDefault();
    APIUtil.searchUsers(this.$input.val()).then(() => {
      debugger;
    });
  }.bind(this));
};

UsersSearch.prototype.updateSearchList = function (message) {
};

module.exports = UsersSearch;
