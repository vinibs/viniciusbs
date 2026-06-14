import { LiraElement } from '/js/lira.js'
import { Bubble } from './bubble/index.js'


export { Bubble };

const FloatingBubblesAttributes = [

]

export class FloatingBubbles extends LiraElement {
    constructor () {
        super(true, FloatingBubblesAttributes)
        this.useStyle('./styles.css')
    }
    
    static get observedAttributes () {
        return FloatingBubblesAttributes
    }
    
    render () {
        return `
        <div class="floating-bubbles">
            <slot></slot>
        </div>
        `
    }
}