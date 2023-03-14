import { LiraElement } from '/js/lira.js'

const BadgeItemAttributes = [
    'type',
]

export class BadgeItem extends LiraElement {
    constructor () {
        super(true, BadgeItemAttributes)
        this.useStyle('./styles.css')

        this.type = this.type ?? 'light'
    }

    static get observedAttributes () {
        return BadgeItemAttributes
    }

    render () {
        return `
            <div class="badge ${this.type}">
                <slot></slot>
            </div>
        `
    }
}