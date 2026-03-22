interface Config{
	readonly timeout: number;
}
const config: Config = { timeout: 2000 }
console.log(config)
interface PonyModel{
  name: string;
  color: string;
  speed: number;
}

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K]{
  return obj[key];
}

const pony: PonyModel = {
	name: 'Victorine Bwami',
	color: 'vert',
	speed: 45
};
const nameValue = getProperty(pony, 'name');
console.log(nameValue)


type PonyModelKey = keyof PonyModel;
let property: PonyModelKey = 'name';
console.log(property);
property = 'speed'
console.log(property);
