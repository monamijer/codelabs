function addPointToScore(player, points) {
    points = points || 0;
    player.score += points;
}
function startRunning(pony) {
    pony.run(10);
}
var ponyOne = {
    run: function (meters) { return console.log("pony runs ".concat(meters, "m")); }
};
startRunning(ponyOne);
//console.log(ponyFirst);
var Pony = /** @class */ (function () {
    function Pony() {
    }
    Pony.prototype.run = function (meters) {
        console.log("pony has runs ".concat(meters, "m"));
    };
    return Pony;
}());
