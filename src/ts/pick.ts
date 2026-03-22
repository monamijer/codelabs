interface PonyModel{
  name: string;
  color: string;
  age: number;
}
const pony: Pick<PonyModel, 'name'| 'color'>={
  name: 'Victorine',
  color: 'pink',
}
console.log(pony)
