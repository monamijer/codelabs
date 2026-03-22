class RaceService {
 constructor(public name: string, private age: number){}
 list(): any{
	console.log('hello everyone')
 }
}
class RaceList{
  raceService: RaceService;
  races: Array<string> = [];

  constructor(raceService: RaceService){
	this.raceService = raceService;
	this.raceService.list().then((races: any) => (this.races = races));
  }
}
