/**
 * Based on Google Custom Elements documentation:
 * https://developers.google.com/web/fundamentals/web-components/customelements
 */
import { 
    pageTitle, 
    personalInfo, 
    skills, 
    technologies 
} from '../../contents/about.js'
import { LiraElement } from '/js/lira.js'

// Defines the custom element's class
export class AboutMe extends LiraElement {
    constructor () {
        super()

        document.title = `about me • viniciusbs`
    }

    // Defines the component default inner HTML
    render () {
        return `
            <floating-logo></floating-logo>

            <fadein-container>
                <h2>${pageTitle}</h2>

                <div class="grid grid-3-4 col-gap-2 grid-top">
                    <div class="whoiam grid grid-center">
                        <div class="photoarea">
                            <img src="${personalInfo.photo.path}" 
                                width="${personalInfo.photo.width}"
                                height="${personalInfo.photo.height}"
                                alt="${personalInfo.photo.alt}">
                        </div>

                        <div class="personal-info text-content">
                            <span class="name">
                                <strong>${personalInfo.name}</strong>
                            </span>
                            <span class="email">
                                <a href="mailto:${personalInfo.email}" 
                                    target="_blank">${personalInfo.email}</a>
                            </span>
                            <span class="location">
                                ${personalInfo.location}
                            </span>
                            
                        </div>

                        <div class="grid grid-1-1 grid-center col-gap-1 always-col">
                            ${this.renderEach(Object.entries(personalInfo.icons), 
                                ([icon, props]) => {
                                    return `
                                    <social-link-icon icon="${icon}", color="black"
                                        href="${props.url}" title="${props.title}">
                                    </social-link-icon>
                                    `
                                }
                            )}
                        </div>
                    </div>
                    <article class="self-description text-content">
                        <paragraph-text>
                            ${personalInfo.description}
                        </paragraph-text>
                    </article>
                </div>


                <div class="grid grid-3-6 col-gap-4">
                    <div class="skills text-center">
                        <h2>${skills.title}</h2>

                        ${this.renderEach(skills.items, (item) => {
                            return `
                            <circle-viewer>
                                ${item}
                            </circle-viewer>
                            `
                        })}
                    </div>

                    <div id="technologies" class="text-center">
                        <h2>Technologies</h2>
                        
                        ${this.renderEach(technologies.items, (item) => {
                            return `
                            <circle-viewer>
                                ${item}
                            </circle-viewer>
                            `
                        })}
                    </div>
                </div>
            </fadein-container>
        `
    }
}