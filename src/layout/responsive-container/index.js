import { LiraElement } from '/js/lira.js'

const ResponsiveContainerAttributes = [
    'mode',
    'limitedWidth',
    'mainContainer',
]

const availableModes = {
    'half': 'half',
    'full': 'full',
    'sidebar': 'sidebar',
}

export class ResponsiveContainer extends LiraElement {
    constructor () {
        super(true, ResponsiveContainerAttributes)

        if (!availableModes[this.mode]) {
            this.mode = availableModes.full
        }
        this.limitedWidth = !(this.limitedWidth === null)
        this.mainContainer = !(this.mainContainer === null)

        this.useStyle('./styles.css')
    }

    static get observedAttributes () {
        return ResponsiveContainerAttributes
    }

    render () {
        return `
        <section class="responsive-container ${this.mode} 
            ${this.limitedWidth ? 'limited-width' : ''} 
            ${this.mainContainer ? 'main-container' : ''}">

            <slot></slot>
        </section>
        `
    }
}