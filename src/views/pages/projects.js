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

        window.closeProjectDetails = this.closeProjectDetails
        window.clearActiveProjectListItem = () => {
            const projects = document.getElementsByTagName("project-list-item")
    
            for (const project of projects) {
                project.classList.remove("active")
            }
        }
    }

    connectedCallback () {
        super.connectedCallback()

        const projects_list = document.getElementsByTagName("project-list-item")

        for (const project of projects_list) {
            project.addEventListener("click", (ev) => {
                this.showProjectDetails(project)
            })
        }
    }

    showProjectDetails (project) {
        const projectId = project.id
        const projectInfo = document.getElementById("project-info")
        const projectsList = document.getElementById("projects-list")
        
        if (!projectInfo.classList.contains("open") || this.openProjectId !== projectId) {
            clearActiveProjectListItem()
            project.classList.add("active")
            
            projectInfo.classList.add("open")
            projectInfo.innerHTML = `
            <project-item id="${projectId}">
            `
            projectsList.classList.add("mobile-hidden")
            projectInfo.scrollTo(0, 0)
        }
    }
    
    closeProjectDetails () {
        const projectInfo = document.getElementById("project-info")
        const projectsList = document.getElementById("projects-list")
        clearActiveProjectListItem()
        
        projectInfo.classList.add("fadeout")
        setTimeout(() => {
            projectsList.classList.remove("mobile-hidden")
            projectInfo.classList.remove("fadeout", "open")
            projectInfo.innerHTML = ``
        }, 200)
    }


    // Defines the component default inner HTML
    render () {
        return `
            <floating-logo></floating-logo>

            <fadein-container>

                <div class="grid grid-3-4 col-gap-2 grid-top mobile-overlapping" id="projects-content">
                    <div class="grid row-gap-1 grid-top projects-list" id="projects-list">
                        <h2>${pageTitle}</h2>
                            ${this.renderEach(
                                Object.entries(projects), 
                                ([projectId, projectData]) => {
                                    return `
                                    <project-list-item 
                                        name="${projectData.name}"
                                        id="${projectId}"
                                        type="${projectData.type}">
                                    </project-list-item>
                                    `
                            })}
                    </div>

                    <article class="project-info text-content" id="project-info">
                    </article>
                </div>

            </fadein-container>
        `
    }
}