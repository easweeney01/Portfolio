class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <hr style="border: none; width:100%; height:2px; margin-bottom: 0%; margin-top:1rem; background-color: #fff;"/> 
            <footer class="foot">
                <h2 style="color:#fff; font-style: normal; text-align: center; margin-top: 1rem; margin-bottom: 0.5rem;">Contact Me</h2>
                <hr/>
                <p>Feel free to send me an email at <a href="mailto:emanuelanthonysweeney@gmail.com">emanuelanthonysweeney@gmail.com</a>.</p>
                <p>While you're here, why not look at my <a href="#" onclick="window.open('Assets/Resumes/EAS-CS-4-26.pdf')">Computer Science</a> and <a href="#" onclick="window.open('Assets/Resumes/EAS-GD-4-26.pdf')">Games</a> resumes?</p>
                
                <div class="footdiv">
                    <a href="https://github.com/easweeney01" title="GitHub"><img src="Assets/Socials/icon-gh.png"></img></a>
                    <a href="https://www.linkedin.com/in/emanuel-sweeney-863829255/" title="LinkedIn"><img src="Assets/Socials/icon-li.png"></img></a>
                    <a href="https://easweeney.itch.io/" title="Itch.io"><img src="Assets/Socials/icon-io.png"></img></a>
                </div>

                <br/>
            </footer>
        `;
    }
}

customElements.define('my-footer',MyFooter);