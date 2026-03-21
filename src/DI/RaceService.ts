class RaceList{
  raceService: RaceService;
  races: Array<string> = [];

  constructor(raceService: RaceService){
	this.raceService = raceService;
	this.raceService.list().then(races=> (this.races = races));
  }
}
