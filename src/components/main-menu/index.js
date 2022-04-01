import { styles } from './styles.js'

class MainMenu extends HTMLElement {
    constructor () {
        super()
        const shadowRoot = this.attachShadow({mode: 'open'})
    }

    connectedCallback () {
        this.shadowRoot.innerHTML = this.render()
    }

    render () {
        return `
            <style>${styles}</style>
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