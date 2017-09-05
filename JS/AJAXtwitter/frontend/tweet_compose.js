const APIUtil = require('./api_util');

class TweetCompose {
  constructor(el) {
    this.$el = $(el);
    this.$textarea = this.$el.find("textarea");
    this.$mention = this.$el.find("select");
    const TweetCompose = this;
    this.$el.on('submit', TweetCompose.submitFunction.bind(this));
    this.$textarea.on('keyup', TweetCompose.maxChar.bind(this));
    $('a.add-mentioned-user').on('click', this.addMentionedUser.bind(this));
    $('div.mentioned-users').on('click', "a.remove-mentioned-user", function(e) {
      TweetCompose.removeMentionedUser.call(this, e)
    });
  }
  //
  submitFunction(event) {
    let that = this;
    event.preventDefault();
    let tweet = this.$el.serializeJSON().tweet;
    this.$el.find(':input').prop('disabled', true);
    APIUtil.createTweet(tweet)
      .then( res => {
        that.handleSuccess.call(that, res)
      })
  }

  handleSuccess(res) {
    // this.clearInput();
    this.$el.find(':input').prop('disabled', false);
    console.log(res);
    let mentioned_users = ""

    res.mentions.forEach( (mentioned_user) => {
      mentioned_users += `<li><a href="/users/${mentioned_user.user_id}">${mentioned_user.user.username}</a></li>`
    })
    let $li = $(`<li>${res.content} -- <a href="/user/${res.user_id}">${res.user.username}</a> -- ${res.created_at}<ul>${mentioned_users}</ul></li>`);
    this.clearInput.call(this);
    $('#feed').prepend($li);

  }

  clearInput() {
    this.$textarea.val("");
    this.$mention.val(0);
    $('.char-left').text("");
    $('div.mentioned-users').empty();
  }

  maxChar(event) {
    let characters = this.$textarea.val().length;
    $('.char-left').text((140 - characters).toString() + " characters left");
  }

  addMentionedUser(e) {
    e.preventDefault();
    let script = $("script.select-mentions").html();
    $('div.mentioned-users').append(script);
    return false;
  }

  removeMentionedUser(e) {
    e.preventDefault();
    $(this).parent().remove();
  }
}

module.exports = TweetCompose;
