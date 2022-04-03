/**
 * Based on Google Custom Elements documentation:
 * https://developers.google.com/web/fundamentals/web-components/customelements
 */

import { pageTitle, projects } from '../../contents/projects.js'
import { LiraElement } from '/js/lira.js'

// Defines the custom element's class
export class Projects extends LiraElement {
    constructor () {
        super()

        document.title = `projects • viniciusbs`
    }

    // Defines the component default inner HTML
    render () {
        // TODO: Create container component for fade-in animation
        return `
            <floating-logo></floating-logo>
            
            <fadein-container>
                <h2>${pageTitle}</h2>

                ${this.renderEach(
                    Object.entries(projects), 
                    ([sectionId, projectData]) => {
                    return `
                    <project-section 
                        id="${sectionId}" 
                        title="${projectData.title}">
        
                        ${this.renderEach(
                            Object.keys(projectData.items), 
                            (id, index) => {
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
            </fadein-container>
        `
    }
}
