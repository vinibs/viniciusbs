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

                <responsive-container mode="full" limitedWidth mainContainer>
                    <h2>${pageTitle}</h2>

                    <responsive-container mode="sidebar">

                        <div class="whoiam">
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

                            <div class="contact-links">
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

                    </responsive-container>

                    <section class="profile-pillars">
                        <h3>Profile Pillars</h3>
                        <ul class="pillars-list">
                            ${this.renderEach(Object.entries(personalInfo.profilePillars),
                                ([index, pillar]) => {
                                    return `
                                    <li>
                                        <h4>${pillar.title}</h4>
                                        <p>${pillar.description}</p>
                                    </li>
                                    `
                                }
                            )}
                        </ul>
                    </section>
                </responsive-container>

            </fadein-container>
        `
    }
}