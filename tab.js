class Tab extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <p>&nbsp&nbsp&nbsp&nbsp</p>
        `;
    }
}

customElements.define('tab',Tab);