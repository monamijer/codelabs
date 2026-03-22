class Pony extends HTMLElement{
  constructor(){
	super();
	  console.log('Iam a component');
  }
	connectedCallback(){
		this.innerHTML=`<h1> General Solda a Warrior </h1> `;
	}
}
customElements.define('ns-pony', Pony)
