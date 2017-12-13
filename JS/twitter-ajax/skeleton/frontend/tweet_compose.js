const APIUtil = require('./api_util.js');

function TweetCompose($el) {
  this.$el = $el;
  this.$textarea = this.$el.find('textarea');
  this.$charLeft = $el.find('.chars-left');
  this.$addMentionedUser = $el.find('.add-mentioned-user');
  this.$mentionedUsers = this.$el.find('.mentioned-users');
  window.$el = this.$el;

  this.$el.on('submit', this.handleSubmit.bind(this));
  this.$textarea.on('input', this.handleCharsLeft.bind(this));
  this.$addMentionedUser.on('click', this.insertMention.bind(this));
  this.$mentionedUsers.on('click', 'span', this.removeMention.bind(this));
}

TweetCompose.prototype.handleSubmit = function (event) {
  event.preventDefault();
  const data = this.$el.serializeArray();
  APIUtil.createTweet(data).then( (response) => {
    this.addTweet(response);
    this.clearInputs();
    this.$el.find('input').prop("disabled", false);
    this.$charLeft.text("");
  });
  this.$el.find('input').prop("disabled", true);
};

TweetCompose.prototype.addTweet = function (response) {
  let $li = $("<li>").text(`${response.content} -- ${response.user.username} -- ${response.created_at}`);
  $('#feed').prepend($li);
};

TweetCompose.prototype.clearInputs = function () {
  this.$el.find('textarea').val("");
  this.$el.find('select').val("");
  this.$el.find('label.mention').remove();
};

TweetCompose.prototype.handleCharsLeft = function (event) {
  event.preventDefault;
  let charactersLeft = 140 - this.$textarea.val().length;
  this.$charLeft.text(charactersLeft);
};

TweetCompose.prototype.insertMention = function (e) {
  e.preventDefault();

  let $p  = $("<label class='mention'>Mention</label>");
  let $select = $('<select name="tweet[mentioned_user_ids][]"></select>');
  $select.append($('<option></option>'));
  for(let i = 0; i < window.users.length; i++) {
    let $user = $(`<option value="${window.users[i].id}">${window.users[i].username}</option>`);
    $select.append($user);
  }
  $p.append($select);
  $p.append('<span class="remove-mentioned-user">X</span>');
  this.$mentionedUsers.append($p);
};

TweetCompose.prototype.removeMention = function (e) {
  e.preventDefault();
  $(e.target).parent().remove();
};

module.exports = TweetCompose;
