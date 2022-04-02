import { projects } from '../../contents/projects.js'
import { styles } from './styles.js'

export class ProjectSection extends HTMLElement {
    constructor () {
        super()

        const shadowRoot = this.attachShadow({mode: 'open'})

        this.id = this.getAttribute('id')
        this.title = this.getAttribute('title')
        this.projects = projects[this.id].items
    }

    connectedCallback () {
        this.shadowRoot.innerHTML = this.render()
    }

    render () {
        return `
            <style>${styles}</style>
            <div class="project-section" id="${this.id}">
                <h3 class="subtitle">${this.title}</h3>

                <slot></slot>
            </div>
        `
    }
}