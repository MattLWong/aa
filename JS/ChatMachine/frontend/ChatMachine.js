const ChatMachine = function($el) {
  this.$el = $el;
  this.$form = $el.find('form');
  this.$messages = $el.find('ul');
  this.$form.on('submit', this.handleSubmit.bind(this));
};

ChatMachine.prototype.handleSubmit = function (event) {
  event.preventDefault();
  $.ajax({
    method: 'POST',
    url: "/messages",
    data: this.$form.serializeArray(),
    dataType: 'json',
    success: function(message) {
      debugger;
      this.appendMessage(message);
      this.clearInput();
    }.bind(this)
  });
};

ChatMachine.prototype.appendMessage = function (message) {
  var $li = $("<li>").text(message.author + ": " + message.text);
  this.$messages.append($li);
};

ChatMachine.prototype.clearInput = function () {
  this.$form.find('input[type=text]').val("");
};

module.exports = ChatMachine;
