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
    this.$ul.empty();
    users.forEach( user => {
      this.$ul.append(`<li><a href="/users/${user.id}">${user.username}</a></li>`);
      this.$ul.append(
        <button>
        </button>
      )
    })
  }
}

module.exports = UsersSearch;
