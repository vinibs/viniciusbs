import { projects } from '../../contents/projects.js'
import { LiraElement } from '/js/lira.js'

const ProjectSectionAttributes = [
    'id',
    'title',
]

export class ProjectSection extends LiraElement {
    constructor () {
        super(true, ProjectSectionAttributes)
        this.useStyle('./styles.css')

        this.projects = projects[this.id].items
    }

    static get observedAttributes () {
        return ProjectSectionAttributes
    }

    render () {
        return `
            <div class="project-section" id="${this.id}">
                <h3 class="subtitle">${this.title}</h3>

                <slot></slot>
            </div>
        `
    }
}