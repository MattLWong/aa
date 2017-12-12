const APIUtil = require('./api_util.js');

const FollowToggle = function($el) {
  this.$el = $el;
  this.userId = $el.data('user-id');
  this.followState = $el.data("initial-follow-state");
  this.render(this.followState);
  this.$el.on("click", this.handleClick.bind(this));
};

FollowToggle.prototype.render = function (followState) {
  const newState = followState ? "Unfollow" : "Follow";
  this.$el.text(newState);
};

FollowToggle.prototype.handleClick = function (event) {
  event.preventDefault();
  switch (this.followState) {
    case false:
      APIUtil.followUser(this.userId).then(() => {
          this.toggleState();
        });
      break;
    case true:
      APIUtil.unfollowUser(this.userId).then(() => {
          this.toggleState();
        });
      break;
  }

};

FollowToggle.prototype.toggleState = function () {
  this.followState = !this.followState;
  this.render(this.followState);
};

module.exports = FollowToggle;
