//transport the while object
const APIUtil = require('./api_util');
const FollowToggle = require('./follow_toggle');

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
