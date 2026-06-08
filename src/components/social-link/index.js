import { LiraElement } from '/js/lira.js'

const SocialLinkAttributes = [
    'icon',
    'color',
    'href',
    'title',
    'text'
]

export class SocialLink extends LiraElement {
    constructor () {
        super(true, SocialLinkAttributes)
        this.useStyle('./styles.css')
    }

    static get observedAttributes () {
        return SocialLinkAttributes
    }

    render () {
        const iconColor = this.color ? `colored ${this.color}` : ''
        const iconClass = `${iconColor} ${this.icon}`

        return `
        <a class="social-link"
            href="${this.href}"
            title="${this.title}"
            target="_blank" rel="noreferrer">

            <span class="icon ${iconClass}"></span>
            ${this.text ? `<span class="social-text">${this.text}</span>` : ''}
        </a>
        `
    }
}