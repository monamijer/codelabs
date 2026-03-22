class Pony extends HTMLElement{
  constructor(){
	super();
	  const shadow = this.attachShadow({ mode: 'open' });
	  const title = document.createElement('h1');
	  title.textContent = 'General Solda, a great fighter';

	  shadow.appendChild(title);
	  console.log('this component work');
  }

}
customElements.define('ns-pony', Pony)
