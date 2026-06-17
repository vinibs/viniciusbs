import { LiraElement } from '/js/lira.js'

const ProjectListItemAttributes = [
    'type',
    'name',
    'year',
    'id',
    'category',
    'onClick',
    'active',
]

export class ProjectListItem extends LiraElement {
    constructor () {
        super(true, ProjectListItemAttributes)
        this.useStyle('./styles.css')

        this.active = !this.active === undefined
    }

    static get observedAttributes () {
        return ProjectListItemAttributes
    }

    render () {
        return `
            <div class="project-item-container ${this.type} ${this.active ? 'active' : ''}"
                id="${this.id}"
                category="${this.category}"
                type="${this.type}"
                ${this.onClick ? `onclick="${this.onClick}(${this.id})"` : ""}>

                <p class="name">${this.name}</p>
                <p class="year">${this.year}</p>
            </div>
        `
    }
}