export class CircleViewer extends HTMLElement {
    constructor () {
        super()
        const shadowRoot = this.attachShadow({mode: 'open'})
        this.percent = this.getAttribute('percent') || 0;

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
            <div class="circle">
                <div class="overlay">
                    <slot></slot>
                </div>
            </div>
        `
    }
}
