interface PonyModel{
  name?: string;
  color?: string;
  speed?: number;
}

type Partial<T> = {
  [P in keyof T]? : T[P];
}
const pony: Partial<PonyModel> = {
  name: 'Victorine'
}
