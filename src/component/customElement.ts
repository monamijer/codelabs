class Pony extends HTMLElement{
  constructor(){
	super();
	console.log('Iam a pony!');
  }
}
customElements.define('ns-pony', Pony)
