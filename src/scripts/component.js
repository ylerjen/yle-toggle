export class WebComponent extends HTMLElement {
    constructor() {
        super();
        /*const template = document.getElementById('tpl-credit-card');
        const content = template.content;
        console.log(template, content);
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(content.cloneNode(true));*/
        this.innerHTML = '<h1>I\'m your Web-Component.</h1><p>Change me in <code>src/scripts/component.js</code></p>';
    }
}
  

export function defineCustomElement() {
    customElements.define('web-component', WebComponent);
}