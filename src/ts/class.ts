class NamePony{
  constructor(public name: string, private speed: number){}
  run():void{
	console.log(`${this.name} runs at ${this.speed}m/s`);
  }
}
const pony = new NamePony('Rainbow Dash', 10);
pony.run();
