/**
 * Based on Google Custom Elements documentation:
 * https://developers.google.com/web/fundamentals/web-components/customelements
 */

import { pageTitle, projects } from '../../contents/projects.js'

// Defines the custom element's class
class Projects extends HTMLElement {
    // Defines what should be done when the element is attached to the DOM
    connectedCallback () {
        // Sets the element's inner HTML to its own render() method's
        this.innerHTML = this.render()
        document.title = `projects • viniciusbs`
    }

    renderProjectsSections(html = '') {
        Object.entries(projects).forEach(([entry, projectData]) => {
            html += `
            <div class="project-section" id="${entry}">
                <h3 class="subtitle">${projectData.title}</h3>
                    ${this.renderProjects(projectData.items)}
            </div>
            `
        })

        return html
    }

    renderProjects(projects = [], html = '') {
        projects.map(project => {
            html += `
            <div class="grid grid-7-x grid-middle project">
                <div class="project-screen">
                    ${project.link ? `
                        <a href="${project.link.url}" 
                        title="${project.link.title}" target="_blank">
                    ` : ''} 
                    <div class="screenshot ${project.image.class}" role="img" 
                        title="${project.image.title}"></div>
                    ${project.link ? `</a>` : ''}
                </div>
                <div class="project-content">
                    <h3>${project.name} (${project.year})</h3>
                    <p class="resources">
                        ${project.resources.join(', ')}
                    </p>


                    ${this.renderDescription(project)}

                    ${project.link ? `
                    <p class="projectlink">
                        <a href="${project.link.url}" 
                            title="${project.link.title}" 
                            target="_blank">${project.link.text}</a>
                    </p>
                    ` : ''}
                </div>
            </div>
            `
        })

        return html
    }

    renderDescription(project = {}, html = '') {
        project.description.map(paragraph => {
            html += `
            <p>
                ${paragraph}
            </p>
            `
        })

        return html
    }

    // Defines the component default inner HTML
    render () {
        return `
            <a href="#" class="logo"></a>
            <h2>${pageTitle}</h2>

            ${this.renderProjectsSections()}
        `
    }
}

// Defines the custom element tag so it can be used in DOM
window.customElements.define('my-projects', Projects)
