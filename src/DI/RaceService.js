class RaceService {
    name;
    age;
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    list() {
        console.log('hello everyone');
    }
}
class RaceList {
    raceService;
    races = [];
    constructor(raceService) {
        this.raceService = raceService;
        this.raceService.list().then((races) => (this.races = races));
    }
}
export {};
//# sourceMappingURL=RaceService.js.map