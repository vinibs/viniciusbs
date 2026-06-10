/**
 * Based on Google Custom Elements documentation:
 * https://developers.google.com/web/fundamentals/web-components/customelements
 */
import { pageTitle, projects } from '../../../contents/projects.js'
import { LiraElement } from '/js/lira.js'

// Defines the custom element's class
export class Projects extends LiraElement {
    constructor () {
        super()

        document.title = `featured projects • viniciusbs`

        window.openProjectId = null

        window.showProjectDetails = this.showProjectDetails
        window.closeProjectDetails = this.closeProjectDetails
        window.clearActiveProjectListItem = () => {
            const previousActiveProject = document.getElementById(window.openProjectId)

            if (previousActiveProject) {
                previousActiveProject.classList.remove("active")
            }
        }

        this.useStyle('./styles.css')
    }

    showProjectDetails (project) {
        const projectId = project.id
        const projectCategory = project.getAttribute("category").toLowerCase()

        const projectInfo = document.getElementById("project-info")
        const projectsList = document.getElementById("projects-list")

        if (!projectInfo.classList.contains("open") || window.openProjectId !== projectId) {
            window.clearActiveProjectListItem()
            project.classList.add("active")
            window.openProjectId = projectId

            projectInfo.classList.add("open")
            projectInfo.innerHTML = `
            <project-item id="${projectId}" category="${projectCategory}"/>
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
                <responsive-container mode="sidebar" limitedWidth mainContainer>
                    <div class="projects-list" id="projects-list">
                        <h2>${pageTitle}</h2>

                        <div class="project-category">
                            <h3 class="title">
                                Personal
                            </h3>

                            <project-list>
                                ${this.renderEach(
                                    Object.entries(projects.personal),
                                    ([projectId, projectData]) => {
                                        return `
                                        <project-list-item
                                            name="${projectData.name}"
                                            year="${projectData.year}"
                                            id="${projectId}"
                                            type="${projectData.type}"
                                            category="${projectData.category}"
                                            onclick="showProjectDetails">
                                        </project-list-item>
                                        `
                                })}
                            </project-list>
                        </div>

                        <div class="project-category">
                            <h3 class="title">
                                Corporate
                            </h3>

                            <project-list>
                                ${this.renderEach(
                                    Object.entries(projects.corporate),
                                    ([projectId, projectData]) => {
                                        return `
                                        <project-list-item
                                            name="${projectData.name}"
                                            year="${projectData.year}"
                                            id="${projectId}"
                                            type="${projectData.type}"
                                            category="${projectData.category}"
                                            onclick="showProjectDetails">
                                        </project-list-item>
                                        `
                                })}
                            </project-list>
                        </div>
                    </div>

                    <article class="project-info text-content" id="project-info">
                    </article>
                </responsive-container>
            </fadein-container>
        `
    }
}