import { LiraElement } from '/js/lira.js'

const BubbleAttributes = [
    'model',
    'url',
    'customStyle',
]

export class Bubble extends LiraElement {
    constructor () {
        super(true, BubbleAttributes)
        this.useStyle('./styles.css')
    }
    
    static get observedAttributes () {
        return BubbleAttributes
    }
    
    render () {
        return `
        <${this.url ? `a href="${this.url}"` : 'div'}
            class="bubble ${this.model ? `backgrounded ${this.model}` : ''}"
            ${this.customStyle ? `style="${this.customStyle}"` : ''}>
            ${!this.model ? '<slot></slot>' : ''}
        </${this.url ? `a` : 'div'}>
        `
    }
}