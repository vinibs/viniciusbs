import { LiraElement } from '/js/lira.js'

const ProjectListItemAttributes = [
    'type',
    'name',
    'id',
]

export class ProjectListItem extends LiraElement {
    constructor () {
        super(true, ProjectListItemAttributes)
        this.useStyle('./styles.css')
    }

    static get observedAttributes () {
        return ProjectListItemAttributes
    }

    render () {
        return `
            <div class="project-item-container ${this.type}">
                <p>${this.name}</p>
            </div>
        `
    }
}