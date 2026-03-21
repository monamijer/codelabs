var RaceList = /** @class */ (function () {
    function RaceList(raceService) {
        var _this = this;
        this.races = [];
        this.raceService = raceService;
        this.raceService.list().then(function (races) { return (_this.races = races); });
    }
    return RaceList;
}());
