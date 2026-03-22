interface PonyModel{
  name: string;
  color: string;
  speed: number;
}

type PonyModelKey = keyof PonyModel;
let property: PonyModelKey = 'name';


function getProperty<T, K extends keyof T>(obj: T, key: K): T[K]{
	return obj[key]
}
const pony: PonyModel ={
  name: 'Victorine',
  color: 'blue',
  speed: 40,
}
const nameValue = getProperty(pony, 'name');
console.log(nameValue)
