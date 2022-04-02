export class MainMenu extends HTMLElement {
    constructor () {
        super()
        const shadowRoot = this.attachShadow({mode: 'open'})

        this.currentPath = import.meta.url.replace(/https?:\/\/[^\/]+\//, '/')
        this.currentDirectory = this.currentPath.replace(/\/[^\/]+$/, '')
    }

    connectedCallback () {
        this.shadowRoot.innerHTML = this.render()
    }

    loadStyles () {
        return `<style>@import '${this.currentDirectory}/styles.css';</style>`
    }

    render () {
        return `
            ${this.loadStyles()}
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
