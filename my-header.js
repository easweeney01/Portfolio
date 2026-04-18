class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header class="head">Emanuel Sweeney
                <div class="navlink">
                    <a class=headopt href="index.html" >Home</a>
                    <a class=headopt href="about.html" >About Me</a>
                </div>
            </header>
            <hr style="border: none; max-width:100%; height:2px; margin:0 auto; background-color: #fff;"/> 
        `;
    }
}

customElements.define('my-header', MyHeader);