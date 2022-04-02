import { projects } from '../../contents/projects.js'

export class ProjectItem extends HTMLElement {
    constructor () {
        super()

        const shadowRoot = this.attachShadow({mode: 'open'})
        this.loadAttributes()
        
        this.currentPath = import.meta.url.replace(/https?:\/\/[^\/]+\//, '/')
        this.currentDirectory = this.currentPath.replace(/\/[^\/]+$/, '')
    }

    loadAttributes () {
        this.parity = this.getAttribute('parity')
        this.section = this.getAttribute('section')
        this.id = this.getAttribute('id')

        const project = projects[this.section].items[this.id]


        this.name = project.name
        this.year = project.year
        this.resources = project.resources
        this.paragraphs = project.description

        this.url = project.link?.url
        this.linkTitle = project.link?.title
        this.linkText = project.link?.text
        this.hasLink = !!project.link

        this.imageClass = project.image.class
        this.imageTitle = project.image.title
    }

    connectedCallback () {
        this.execRender()
    }

    attributeChangedCallback () {
        this.execRender()
    }

    execRender () {
        this.shadowRoot.innerHTML = this.render()
    }

    loadStyles () {
        return `<style>@import '${this.currentDirectory}/styles.css';</style>`
    }

    render () {
        return `
        ${this.loadStyles()}
        <div class="project ${this.parity}">
            <div class="project-screen">
                ${this.hasLink ? `
                    <a href="${this.url}" 
                    title="${this.linkTitle}" target="_blank">
                ` : ''} 
                <div class="screenshot ${this.imageClass}" role="img" 
                    title="${this.imageTitle}"></div>
                ${this.hasLink ? `</a>` : ''}
            </div>
            <div class="project-content">
                <h3>${this.name} (${this.year})</h3>
                <p class="resources">
                    ${this.resources.join(', ')}
                </p>

                <div class="description">
                    ${this.paragraphs.map(text => `<p>${text}</p>`).join('')}
                </div>

                ${this.hasLink ? `
                <p class="projectlink">
                    <a href="${this.url}" part="link" 
                        title="${this.linkTitle}" 
                        target="_blank">${this.linkText}</a>
                </p>
                ` : ''}
            </div>
        </div>
        `
    }
}