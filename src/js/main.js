class Pony extends HTMLElement{
  constructor(){
	super();
	  const template = document.querySelector('#pony-template');
	  const clone = document.importNode(template.content, true)
	  
	  const shadow = this.attachShadow({ mode: 'open' });
	  shadow.appendChild(clone);
	  console.log('this component work');
  }

}
customElements.define('ns-pony', Pony)
