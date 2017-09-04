const APIUtil = require('./api_util');

class TweetCompose {
  constructor(el) {
    this.$el = $(el);
    this.$textarea = this.$el.find("textarea");
    this.$mention = this.$el.find("select");
    const TweetCompose = this;
    this.$el.on('submit', TweetCompose.submitFunction.bind(this));
    this.$textarea.on('keyup', TweetCompose.maxChar.bind(this));
  }
  //
  submitFunction(event) {
    let that = this;
    event.preventDefault();
    let tweet = this.$el.serializeJSON().tweet;
    this.$el.find(':input').prop('disabled', true);
    APIUtil.createTweet(tweet)
      .then( res => {
        console.log(res);
        that.handleSuccess.call(that, res)
      })
  }

  handleSuccess(res) {
    // this.clearInput();
    this.$el.find(':input').prop('disabled', false);
    console.log(res);
    let mentioned_users = res.mentions.map( (mentioned_user) => `<li>${mentioned_user.user.username}</li>`)
    let $li = $(`<li>${res.content} -- <a href="/user/${res.user_id}">${res.user.username}</a> -- ${res.created_at}<ul>${mentioned_users}</ul></li>`);
    this.clearInput.call(this);
    $('#feed').prepend($li);

  }

  clearInput() {
    this.$textarea.val("");
    this.$mention.val(0);
    $('.char-left').text("");
  }

  maxChar(event) {
    let characters = this.$textarea.val().length;
    $('.char-left').text((140 - characters).toString() + " characters left");
  }
}

module.exports = TweetCompose;
