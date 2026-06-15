import { LiraElement } from '/js/lira.js'

const WordCarouselItemAttributes = [
    // 'icon',
    // 'color',
    // 'href',
    // 'title',
    // 'text'
]

export class WordCarouselItem extends LiraElement {
    constructor () {
        super(true, WordCarouselItemAttributes)
        this.useStyle('./styles.css')
    }
    
    static get observedAttributes () {
        return WordCarouselItemAttributes
    }
    
    render () {
        return `
        <li class="word-carousel-item">
            <slot></slot>
        </li>
        `
    }
}