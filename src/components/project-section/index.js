import { projects } from '../../contents/projects.js'

export class ProjectSection extends HTMLElement {
    constructor () {
        super()

        const shadowRoot = this.attachShadow({mode: 'open'})


        this.currentPath = import.meta.url.replace(/https?:\/\/[^\/]+\//, '/')
        this.currentDirectory = this.currentPath.replace(/\/[^\/]+$/, '')

        this.id = this.getAttribute('id')
        this.title = this.getAttribute('title')
        this.projects = projects[this.id].items
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
            <div class="project-section" id="${this.id}">
                <h3 class="subtitle">${this.title}</h3>

                <slot></slot>
            </div>
        `
    }
}