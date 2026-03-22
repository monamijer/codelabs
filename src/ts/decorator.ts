function Component(options: {selector: string, template: string}){
  return function(constructor: Function){
	constructor.prototype.selector = options.selector;
	constructor.prototype.template = options.template;

	console.log(`Log: Component ${options.selector} saved`);
  }
}
