type Color= 'blue'|'red'|'yellow'
interface PonyModel{
	name: string;
	speed: number;
}

const pony: PonyModel = { name: 'Victorine', speed: 43}
function startRace(value: String): String{
	
	return value.toLowerCase();
}

console.log(pony);
