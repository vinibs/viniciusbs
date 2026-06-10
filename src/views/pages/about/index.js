/**
 * Based on Google Custom Elements documentation:
 * https://developers.google.com/web/fundamentals/web-components/customelements
 */
import {
    pageTitle,
    personalInfo,
} from '../../../contents/about.js'
import { LiraElement } from '/js/lira.js'

// Defines the custom element's class
export class AboutMe extends LiraElement {
    constructor () {
        super()

        document.title = `about me • viniciusbs`

        this.useStyle('./styles.css')
    }

    // Defines the component default inner HTML
    render () {
        return `
            <floating-logo></floating-logo>

            <fadein-container>
                <h2>${pageTitle}</h2>

                <div class="grid grid-3-4 col-gap-2 grid-top">
                    <div class="whoiam grid grid-center grid-middle">
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
                            <span class="location">
                                ${personalInfo.location}
                            </span>
                        </div>

                        <div class="flex flex-column flex-center gap-5">
                            ${this.renderEach(Object.entries(personalInfo.icons),
                                ([icon, props]) => {
                                    return `
                                    <social-link icon="${icon}"
                                        href="${props.url}" title="${props.title}" text="${props.text}">
                                    </social-link>
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

            </fadein-container>
        `
    }
}