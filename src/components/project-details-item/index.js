import { projects } from '../../contents/projects.js'
import { LiraElement } from '/js/lira.js'

const ProjectDetailsItemAttributes = [
    'section',
    'id',
    'category'
]

export class ProjectDetailsItem extends LiraElement {
    constructor () {
        super(true, ProjectDetailsItemAttributes)
        this.useStyle('./styles.css')

        this.category = this.category.toLowerCase()

        this.loadProjectData()
    }

    static get observedAttributes () {
        return ProjectDetailsItemAttributes
    }

    loadProjectData () {
        const project = projects[this.category]?.[this.id]

        this.type = project.type
        this.name = project.name
        this.year = project.year
        this.resources = project.resources
        this.description = project.description

        this.url = project.link?.url
        this.linkTitle = project.link?.title
        this.linkText = project.link?.text
        this.linkIcon = project.link?.icon
        this.hasLink = !!project.link
        this.hasLinkIcon = !!project.link?.icon

        this.hasImage = !!project.image
        this.imageTitle = project.image?.title
        this.imageFile = project.image?.file
    }

    render () {
        return `
        <div class="project">
            <div class="project-data">
                <div class="project-content">
                    <h2>${this.name}</h2>

                    <h3 class="year">
                        ${this.year}
                    </h3>

                    <paragraph-text class="description">
                        ${this.description}
                    </paragraph-text>
                </div>

                ${this.hasImage ? `
                <div class="project-screen">
                    ${this.hasLink ? `
                        <a href="${this.url}"
                        title="${this.linkTitle}" target="_blank">
                    ` : ''}
                    <img src="/images/projects/${this.imageFile}" title="${this.imageTitle}"/>
                    ${this.hasLink ? `</a>` : ''}
                </div>
                ` : ''}


                ${this.hasLink ? `
                <p class="project-link">
                    ${this.hasLinkIcon ?
                        `
                        <social-link icon="${this.linkIcon}"
                            href="${this.url}"
                            title="${this.linkTitle}"
                            text="${this.linkText}">
                        </social-link>
                        `
                        :
                        `
                        <a href="${this.url}" part="link"
                            title="${this.linkTitle}"
                            aria-label="${this.linkText}
                            target="_blank">
                            ${this.linkText}
                        </a>
                        `
                    }
                </p>
                ` : ''}


                <div class="project-meta">
                    <p class="type">
                        <span class="title">Type:</span>
                        <badge-item type="light">
                            ${this.type}
                        </badge-item>
                    </p>

                    <p class="resources">
                        <span class="title">Resources:</span>
                        <span class="flex gap-5 wrap">
                        ${this.renderEach(this.resources, (resource) => {
                            return `<badge-item type="highlight">${resource}</badge-item>`
                        })}
                        </span>
                    </p>
                </div>
            </div>
        </div>
        `
    }
}