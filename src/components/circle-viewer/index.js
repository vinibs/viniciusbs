import { LiraElement } from '/js/lira.js'

export class CircleViewer extends LiraElement {
    constructor () {
        super(true)
        this.useStyle('./styles.css')
    }

    render () {
        return `
            <div class="circle">
                <div class="overlay">
                    <slot></slot>
                </div>
            </div>
        `
    }
}
