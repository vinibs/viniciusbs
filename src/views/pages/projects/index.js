/**
 * Based on Google Custom Elements documentation:
 * https://developers.google.com/web/fundamentals/web-components/customelements
 */
import { pageTitle, projects } from '../../../contents/projects.js'
import { LiraElement, http } from '/js/lira.js'

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
                previousActiveProject.removeAttribute("active")
            }
        }

        this.useStyle('./styles.css')

        let params = http.params;
        if (params.projectId) {
            this.initializeProjectView(params.projectId)
        }
    }

    initializeProjectView (projectId) {
        setTimeout(() => {
            const project = document.getElementById(projectId)
            this.showProjectDetails(project)
        }, 60)
    }

    showProjectDetails (project) {
        const projectId = project.id
        const projectCategory = project.getAttribute("category").toLowerCase()

        const projectInfo = document.getElementById("project-info")
        const projectsList = document.getElementById("projects-list")

        if (!projectInfo.classList.contains("open") || window.openProjectId !== projectId) {
            window.clearActiveProjectListItem()
            project.setAttribute("active", true)
            window.openProjectId = projectId

            projectInfo.classList.add("open")
            projectInfo.innerHTML = `
            <project-item id="${projectId}" category="${projectCategory}"/>
            `
            projectsList.classList.add("mobile-no-scroll")

            const currentProtocol = window.location.protocol + "//"
            let currentUrl = window.location.href
            currentUrl = currentUrl.replace(currentProtocol, "")

            let projectUrl = currentUrl.replace(/\/view\/.*/g, "") + `/view/${projectId}`
            projectUrl = currentProtocol + projectUrl.replace(/\/+/g, "/")

            history.pushState(null, '', projectUrl)
        }
    }

    closeProjectDetails () {
        const projectInfo = document.getElementById("project-info")
        const projectsList = document.getElementById("projects-list")
        clearActiveProjectListItem()

        projectInfo.classList.add("fadeout")
        setTimeout(() => {
            projectsList.classList.remove("mobile-no-scroll")
            projectInfo.classList.remove("fadeout", "open")
            projectInfo.innerHTML = ``

            let currentUrl = window.location.href
            let baseUrl = currentUrl.replace(/\/view\/.*/g, "")

            history.pushState(null, '', baseUrl)
        }, 200)
    }


    // Defines the component default inner HTML
    render () {
        return `
            <floating-logo></floating-logo>

            <fadein-container>
                <h2>${pageTitle}</h2>
                <responsive-container mode="sidebar" limitedWidth mainContainer>
                    <div class="projects-list" id="projects-list">
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