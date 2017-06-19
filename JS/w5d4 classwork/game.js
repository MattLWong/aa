class Game {
  constructor() {
    this.towers = [ [3, 2, 1], [], [] ];
  }

  promptMove(reader, cb) {
    this.print();
    reader.question("Which tower do you want to move?", (startIndex) => {
      reader.question("Which spots do you want to drop?", (endIndex) => {
        cb(startIndex, endIndex);
      })
    })
  }

  isValidMove(startIndex, endIndex) {
    if (startIndex > 2 || endIndex > 2 || startIndex === endIndex) {
      return false;
    }
    let startPiece = this.towers[startIndex][this.towers[startIndex].length-1];
    let endPiece = this.towers[endIndex][this.towers[endIndex].length-1];
    if (startPiece === undefined) {
      console.log("you didn't pick up a valid piece");
      return false;
    } else if (endPiece === undefined) {
      return true;
    } else if (startPiece > endPiece) {
      console.log("you cannot put a bigger piece on top of a smaller piece");
      return false;
    } else {
      return true;
    }
  }

  move(startIndex, endIndex) {
    if (this.isValidMove(startIndex, endIndex)) {
      this.towers[endIndex].push(this.towers[startIndex].pop());
      return true;
    } else {
      return false;
    }
  }

  print() {
    console.log(JSON.stringify(this.towers));
  }

  isWon() {
    if (this.towers[1].length === 3 || this.towers[2].length === 3) {
      return true;
    }
  }

  run(reader, ccb) {
    this.promptMove(reader, (startIndex, endIndex) => {
      if (!this.move(startIndex, endIndex)) {
        console.log("Invalid move!")
      }
      if (!this.isWon()) {
        this.run(reader, ccb)
      } else {
        this.print();
        console.log("Won!");
        ccb();
      }
    });
  }
}

module.exports = Game;
