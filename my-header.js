class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="head">Emanuel Sweeney
                <div style="justify-content: right;">
                    <a class=headopt href="index.html" >Home</a>
                    <a class=headopt href="about.html" >About Me</a>
                </div>
            </header>
            <hr style="border: none; width:300%; height:2px; margin:0%; background-color: #fff;"/> 
        `;
    }
}

customElements.define('my-header', MyHeader);