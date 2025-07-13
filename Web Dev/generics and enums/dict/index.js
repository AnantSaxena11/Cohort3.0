"use strict";
var Direction;
(function (Direction) {
    Direction["UP"] = "up";
    Direction["DOWN"] = "down";
    Direction["RIGHT"] = "right";
    Direction["LEFT"] = "left";
})(Direction || (Direction = {}));
function doSomething(keyPressed) {
    if (keyPressed == Direction.UP) {
    }
}
doSomething(Direction.UP);
console.log(Direction.UP);
