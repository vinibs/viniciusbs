import { LiraElement } from '/js/lira.js'

const BubbleAttributes = [
    'model',
    'url',
    'customStyle',
    'text'
]

export class Bubble extends LiraElement {
    constructor () {
        super(true, BubbleAttributes)
        this.useStyle('./styles.css')
        this.useStyle('/css/animations.css')
    }
    
    static get observedAttributes () {
        return BubbleAttributes
    }
    
    render () {
        return `
        <${this.url ? `a href="${this.url}" aria-label="${this.text ?? ''}"` : 'div'}
            class="bubble ${this.model ? `backgrounded ${this.model}` : ''}"
            ${this.customStyle ? `style="${this.customStyle}"` : ''}>
            ${!this.model ? (this.text ?? '') : ''}
        </${this.url ? `a` : 'div'}>
        `
    }
}