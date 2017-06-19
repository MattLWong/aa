let cat = {
  meow: function() {
    console.log("meow");
  },
  meowMore: function() {
    for (let i = 0; i < 10; i ++) {
      this.meow();
    }
  }
}
