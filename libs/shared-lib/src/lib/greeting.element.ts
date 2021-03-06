export class GreetingElement extends HTMLElement {
    public static observedAttributes = ['title'];
  
    attributeChangedCallback() {
      this.innerHTML = `<h1>Welcome to ${this.title}! bbbbbbbbbbbbb</h1>`;
    }
  }
  
  customElements.define('front-greeting', GreetingElement);