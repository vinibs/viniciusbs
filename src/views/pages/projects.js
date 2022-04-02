/**
 * Based on Google Custom Elements documentation:
 * https://developers.google.com/web/fundamentals/web-components/customelements
 */

import { pageTitle, projects } from '../../contents/projects.js'

// Defines the custom element's class
export class Projects extends HTMLElement {
    // Defines what should be done when the element is attached to the DOM
    connectedCallback () {
        // Sets the element's inner HTML to its own render() method's
        this.innerHTML = this.render()
        document.title = `projects • viniciusbs`
    }

    // Defines the component default inner HTML
    render () {
        return `
            <a href="#" class="logo"></a>
            <h2>${pageTitle}</h2>

            ${Object.entries(projects).map(([sectionId, projectData]) => {
                return `
                <project-section 
                    id="${sectionId}" 
                    title="${projectData.title}">
    
                    ${Object.keys(projectData.items).map((id, index) => {
                        return `
                        <project-item 
                            parity="${index % 2 == 0 ? 'even' : 'odd'}"
                            section="${sectionId}"
                            id="${id}">
                        </project-item>
                        `
                    })}
    
                </project-section>
                `
            })}
        `
    }
}
