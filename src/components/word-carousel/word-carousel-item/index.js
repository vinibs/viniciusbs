import { LiraElement } from '/js/lira.js'


export class WordCarouselItem extends LiraElement {
    constructor () {
        super(true)
        this.useStyle('./styles.css')
    }
    
    render () {
        return `
        <li class="word-carousel-item">
            <slot></slot>
        </li>
        `
    }
}