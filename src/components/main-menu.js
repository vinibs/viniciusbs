class MainMenu extends HTMLElement {
    constructor () {
        super()
        const shadowRoot = this.attachShadow({mode: 'open'})
    }

    connectedCallback () {
        this.shadowRoot.innerHTML = this.render()
    }

    style () {
        return `
            <style>
                @keyframes showup {
                    from { bottom: -95px }
                    to { bottom: 5px }
                }

                nav {
                    align-items: center;
                    animation: showup 0.6s;
                    backdrop-filter: blur(8px);
                    background: rgba(255,255,255, 0.8);
                    border-radius: 15px;
                    bottom: 5px;
                    display: flex;
                    justify-content: space-around;
                    left: 0;
                    margin: auto;
                    max-width: 780px;
                    position: fixed;
                    right: 0;
                    text-align: center;
                    width: 90%;
                    z-index: 5;
                    -webkit-backdrop-filter: blur(8px);
                }
                
                nav a, nav a:hover {
                    color: rgb(90,90,90);
                    font-size: 14pt;
                    font-style: normal;
                    text-decoration: none;
                    text-transform: uppercase;
                }

                @media (min-width: 901px) {
                    nav {
                        height: 80px;
                    }
                }

                @media (max-width: 900px) {
                    nav {
                        height: 90px;
                    }
                }
            </style>
        `
    }

    render () {
        return `
            ${this.style()}
            <nav>
                <div>
                    <a href="#/about-me" title="About me">About me</a>
                </div>
                <div>
                    <a href="#/projects" title="Projects">Projects</a>
                </div>
            </nav>
        `
    }
}

window.customElements.define('main-menu', MainMenu)