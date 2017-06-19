var MovingObject = require("./moving_object.js")

const t = new MovingObject({ pos: [30, 30], vel: [10, 10], radius: 10, color: "#00FF00"})

var canvas = document.getElementById('canvas');
canvas.width = 500;
canvas.height = 500;
var ctx = canvas.getContext('2d');
t.draw(ctx);
t.move();
t.draw(ctx);
