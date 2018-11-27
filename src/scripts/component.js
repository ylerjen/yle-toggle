import componentDom from './../templates/component.html';

export class WebComponent extends HTMLElement {
    constructor() {
        super();
        const tplWrapper = document.createElement('template');
        tplWrapper.innerHTML = componentDom;
        const content = tplWrapper.content;
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(content.cloneNode(true));
        this.innerHTML = '<h1>I\'m your Web-Component.</h1><p>Change me in <code>src/scripts/component.js</code></p>';
    }
}
  
export function defineCustomElement() {
    customElements.define('web-component', WebComponent);
}