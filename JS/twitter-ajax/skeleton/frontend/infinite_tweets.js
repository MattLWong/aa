const APIUtil = require('./api_util');

function InfiniteTweets($el) {
  this.$el = $el;
  this.$fetchMore = this.$el.find('.fetch-more');
  this.$ul = $el.find('ul');
  this.max_created_at = null;
  this.$fetchMore.on('click', this.fetchTweets.bind(this));
}

InfiniteTweets.prototype.fetchTweets = function (e) {
  e.preventDefault();
  if (this.max_created_at == null) {
    APIUtil.fetchTweets(null).then( (response) => {
      this.insertTweets(response);
    });
  } else {
    APIUtil.fetchTweets(this.max_created_at).then( (response) => {
      this.insertTweets(response);
    });
  }

};

InfiniteTweets.prototype.insertTweets = function (response) {
  for (let i=0; i < response.length; i++) {
    let $li = $('<li>');
    $li.text(`${response[i].user.username} -- ${response[i].content} -- ${response[i].created_at}`);
    this.$ul.append($li);
  }
  this.max_created_at = response[response.length - 1].created_at;
};

module.exports = InfiniteTweets;
