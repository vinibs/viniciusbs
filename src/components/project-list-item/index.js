import { LiraElement } from '/js/lira.js'

const ProjectListItemAttributes = [
    'type',
    'name',
    'year',
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
            <li class="project-item-container ${this.type}">
                <p class="name">${this.name}</p>
                <p class="year">${this.year}</p>
            </li>
        `
    }
}