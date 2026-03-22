var NamePony = /** @class */ (function () {
    function NamePony(name, speed) {
        this.name = name;
        this.speed = speed;
    }
    NamePony.prototype.run = function () {
        console.log("".concat(this.name, " runs at ").concat(this.speed, "m/s"));
    };
    return NamePony;
}());
var pony = new NamePony('Rainbow Dash', 10);
pony.run();
