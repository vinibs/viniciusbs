import { LiraElement } from '/js/lira.js'

export class FadeInContainer extends LiraElement {
    constructor () {
        super(true)
        this.useStyle('./styles.css')
    }

    render () {
        return `
            <div class="fadein">
                <slot><slot>
            </div>
        `
    }
}