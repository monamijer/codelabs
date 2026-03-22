interface PonyModel {
  name: string;
  color: string;
  speed: number;
}
interface FormValid{
  value: string;
  valid: boolean;
}
const pony: Record<keyof PonyModel, FormValid> = {
  name: { value: 'Victorine', valid: true},
  color: {value: 'blue', valid: true},
  speed: {value: '45', valid: true},
}
console.log(pony);
