export class WebComponent extends HTMLElement {
    constructor() {
        super();
        /*const template = document.getElementById('tpl-credit-card');
        const content = template.content;
        console.log(template, content);
        const shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(content.cloneNode(true));*/
        this.innerHTML = '<h1>Coucou</h1>';
    }
}
customElements.define('web-component', WebComponent);
  