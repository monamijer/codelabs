class Pony extends HTMLElement{
  static get observedAttributes(){
	return ['name'];
  }
  attributeChangedCallback(name, oldValue, newValue){
	if(name === 'name'){
	  this.render(newValue)
	}
  }
  connectedCallback(){
	const name = this.getAttribute('name');
	this.render(name);
  }
  render(name){
	if(!this.shadowRoot){
	  this.attachShadow({ mode: 'open' });
	}
	this.shadowRoot.innerHTML = `<h1> ${name}</h1>`;
  }

}
customElements.define('ns-pony', Pony)
