interface CanRun{
  run(meters: number): void;
}

function addPointToScore(player: HasScore, points?: number): void{
	points = points || 0;
	player.score += points;
}
function startRunning(pony: CanRun): void{
	pony.run(10);
}
const ponyOne = {
	run: (meters: number) => console.log(`pony runs ${meters}m`)
};
startRunning(ponyOne);
//console.log(ponyFirst);
class Pony implements CanRun{
	run(meters: string): void{
	  console.log(`pony has runs ${meters}m`)
	}
}
