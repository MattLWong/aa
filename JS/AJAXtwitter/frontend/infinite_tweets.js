const APIUtil = require('./api_util');

const _ = require('lodash');

class InfiniteTweets {
  constructor(el) {
    this.$el = $(el);
    this.$a = this.$el.find("a.fetch-more")
    this.maxCreatedAt = null;
    this.$a.on("click", this.fetchTweets.bind(this, event));
    APIUtil.fetchTweets()
      .then(res => this.insertTweets.call(this, res))
    this.$el.on('insert-tweet', this.insertTweet.bind(this));
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

  insertTweet(event, data) {
    // const tmpl = _.template(this.$el.find('script').html());
    // this.$el.find('ul#feed').prepend(tmpl({
    //   tweets: [data]
    // }));
    debugger;
    $('ul#feed').prepend(`<li>${data.content} -- <a href="/users/data.user_id">${data.user.username}</a> -- ${data.created_at}</li>`)

    if (!this.lastCreatedAt) {
      this.lastCreatedAt = data.created_at;
    }
  }
}

module.exports = InfiniteTweets;
