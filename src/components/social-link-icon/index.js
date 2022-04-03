import { LiraElement } from '/js/lira.js'

const SocialLinkIconAttributes = [
    'icon',
    'color',
    'href',
    'title',
]

export class SocialLinkIcon extends LiraElement {
    constructor () {
        super(true, SocialLinkIconAttributes)
        this.useStyle('./styles.css')
    }

    static get observedAttributes () {
        return SocialLinkIconAttributes
    }

    render () {
        const iconColor = this.color ? `-${this.color}` : ''
        const iconClass = `${this.icon}${iconColor}`
        
        return `
        <div>
            <a class="${iconClass} icon" 
                href="${this.href}" 
                title="${this.title}" 
                target="_blank" rel="noreferrer"></a>
        </div>
        `
    }
}