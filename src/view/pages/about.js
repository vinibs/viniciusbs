/**
 * Based on Google Custom Elements documentation:
 * https://developers.google.com/web/fundamentals/web-components/customelements
 */
import { interests, pageTitle, personalInfo, skills, technologies } from '../../contents/about.js'

// Defines the custom element's class
class AboutMe extends HTMLElement {
    // Defines what should be done when the element is attached to the DOM
    connectedCallback () {
        // Sets the element's inner HTML to its own render() method's
        this.innerHTML = this.render()
        document.title = `about me • viniciusbs`
    }

    renderSocialIcons(html = '') {
        Object.entries(personalInfo.icons).forEach(([item, props]) => {
            html += `
            <div>
                <a class="${item}-black icon" 
                    href="${props.url}" 
                    title="${props.title}" 
                    target="_blank" rel="noreferrer"></a>
            </div>
            `
        })

        return html
    }

    renderDescription(html = '') {
        personalInfo.descriptionParagraphs.map(paragraph => {
            html += `
            <p>
                ${paragraph}
            </p>
            `
        })

        return html
    }

    renderCircleViewer(items = [], html = '') {
        items.map(value => {
            html += `
            <circle-viewer>
                ${value}
            </circle-viewer>
            `
        })

        return html
    }

    renderInterests(html = '') {
        interests.items.map(interest => {
            html += `
            <div class="${interest.class}">
                <span class="icon"></span>
                ${interest.text}
            </div>
            `
        })

        return html
    }

    // Defines the component default inner HTML
    render () {
        return `
            <a href="#" class="logo"></a>
            <h2>${pageTitle}</h2>

            <div class="grid grid-3-4 col-gap-2 grid-top">
                <div class="whoiam grid grid-center">
                    <div class="photoarea">
                        <img src="${personalInfo.photo.path}" 
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
                        ${this.renderSocialIcons()}
                    </div>
                </div>
                <article class="self-description text-content">
                    ${this.renderDescription()}
                </article>
            </div>


            <div class="grid grid-3-6 col-gap-4">
                <div class="skills text-center">
                    <h2>${skills.title}</h2>

                    ${this.renderCircleViewer(skills.items)}
                </div>

                <div id="technologies" class="text-center">
                    <h2>Technologies</h2>

                    ${this.renderCircleViewer(technologies.items)}
                </div>
            </div>

            <h2>${interests.title}</h2>
                <div class="interests grid grid-1-1-1 col-gap-2">
                    ${this.renderInterests()}
                </div>
        `
    }
}

// Defines the custom element tag so it can be used in DOM
window.customElements.define('about-me', AboutMe)