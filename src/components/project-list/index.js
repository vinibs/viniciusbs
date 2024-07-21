import { LiraElement } from '/js/lira.js'

export class ProjectList extends LiraElement {
    constructor () {
        super(true)
        this.useStyle('./styles.css')
    }

    render () {
        return `
            <ul class="project-list">
                <slot></slot>
            </ul>
        `
    }
}