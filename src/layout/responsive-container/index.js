import { LiraElement } from '/js/lira.js'

const ResponsiveContainerAttributes = [
    'mode',
    'limitedWidth',
    'mainContainer',
    'verticalCentered',
    'size'
]

const availableModes = {
    'half': 'half',
    'full': 'full',
    'sidebar': 'sidebar',
}

const availableSizes = {
    'sm': 'sm',
    'md': 'md',
}

export class ResponsiveContainer extends LiraElement {
    constructor () {
        super(true, ResponsiveContainerAttributes)

        if (!availableModes[this.mode]) {
            this.mode = availableModes.full
        }

        if (this.size && !availableSizes[this.size]) {
            this.size = availableSizes.md
        }

        this.limitedWidth = !(this.limitedWidth === null)
        this.mainContainer = !(this.mainContainer === null)
        this.verticalCentered = !(this.verticalCentered === null)

        this.useStyle('./styles.css')
    }

    static get observedAttributes () {
        return ResponsiveContainerAttributes
    }

    render () {
        return `
        <section class="responsive-container ${this.mode} 
            ${this.size ? this.size : ''} 
            ${this.limitedWidth ? 'limited-width' : ''} 
            ${this.mainContainer ? 'main-container' : ''}
            ${this.verticalCentered ? 'vertical-centered' : ''}">

            <slot></slot>
        </section>
        `
    }
}