const APIUtil = require('./api_util');

class InfiniteTweets {
  constructor(el) {
    this.$el = $(el);
    this.$a = this.$el.find("a.fetch-more")
    this.maxCreatedAt = null;
    this.$a.on("click", this.fetchTweets.bind(this, event));
    APIUtil.fetchTweets()
      .then(res => this.insertTweets.call(this, res))
  }

  fetchTweets(event) {
    event.preventDefault();
    if (this.maxCreatedAt == null) {
      APIUtil.fetchTweets()
        .then(res => this.insertTweets.call(this, res))
    } else {
      APIUtil.fetchTweets(this.maxCreatedAt)
        .then(res => this.insertTweets.call(this, res))
    }

  }

  insertTweets(res) {
    res.forEach( (tweet) => {
      $('ul#feed').append(`<li data-created=${tweet.created_at}>${tweet.content} -- <a href="/users/${tweet.user_id}">${tweet.user.username}</a> -- ${tweet.created_at}</li>`);
    })
    this.maxCreatedAt = $('ul#feed li').last().attr('data-created')
    if (res.length < 20) {
      $('a.fetch-more').text("No more tweets")
    }
  }
}

module.exports = InfiniteTweets;
