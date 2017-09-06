const APIUtil = require('./api_util');

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

    var $target = $('html,body');
    $target.animate({scrollTop: $target.height()});
  }

  insertTweets(res) {
    res.forEach( (tweet) => {
      $('ul#feed').append(`<li data-created=${tweet.created_at}>${tweet.content} -- <a href="/users/${tweet.user_id}">${tweet.user.username}</a> -- ${tweet.created_at}</li>`);
      if (tweet.mentions.length > 0) {
        let mentions = "";
        tweet.mentions.map( (mention) => ( mentions += `<li><a href='/users/${mention.user_id}''>${mention.user.username}</a></li>`) );
        $('ul#feed').append(`<ul class='mentions'>${mentions}</ul>`)
      }
    })
    this.maxCreatedAt = $('ul#feed li').last().attr('data-created')
    if (res.length < 20) {
      $('a.fetch-more').text("No more tweets")
    }
  }

  insertTweet(event, data) {
    if (data.mentions.length > 0) {
      let mentions = "";
      data.mentions.forEach( (mention) => ( mentions += `<li><a href='/users/${mention.user_id}''>${mention.user.username}</a></li>`) );
      $('ul#feed').prepend(`<ul class='mentions'>${mentions}</ul>`)
    }
    $('ul#feed').prepend(`<li>${data.content} -- <a href="/users/${data.user_id}">${data.user.username}</a> -- ${data.created_at}</li>`)

    if (!this.lastCreatedAt) {
      this.lastCreatedAt = data.created_at;
    }
  }
}

module.exports = InfiniteTweets;
