class View {
  constructor(game, $el) {
    this.game = game;
    this.$el = $el;

    this.setupBoard();
    this.bindEvents();
  }

  bindEvents() {
    this.$el.on("click", "li", ( event => {
      const $square = $(event.currentTarget);
      this.makeMove($square);
    }));
  }

  makeMove($square) {
    const player = this.game.currentPlayer;
    const pos = $square.data("pos");

    try {
      this.game.playMove(pos);
    } catch (e) {
      alert("Invalid move! Try again.");
      console.log(e);
      return;
    }

    $square.addClass(player)

    if (this.game.isOver()) {
      this.$el.off("click");
      this.$el.addClass("game-over");

      const winner = this.game.winner();
      const $figcaption = $('<figcaption>');

      if (winner) {
        this.$el.addClass(`winner-${winner}`);
        $figcaption.html(`The winner is ${winner}!`)
      } else {
        $figcaption.html('It\'s a draw!');
      }
      this.$el.append($figcaption);
    }

  }

  setupBoard() {
    const $ttt = $('.ttt');
    const $ul = $('<ul></ul>')
    for (let rowIdx = 0; rowIdx < 3; rowIdx ++) {
      for (let colIdx = 0; colIdx < 3; colIdx ++) {
        const $li = $('<li></li>').data("pos", [rowIdx, colIdx]);
        $ul.append($li);
      }
    }
    $ttt.append($ul);
  }
}

module.exports = View;
