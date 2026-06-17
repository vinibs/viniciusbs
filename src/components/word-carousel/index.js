import { LiraElement } from '/js/lira.js'
import { WordCarouselItem } from './word-carousel-item/index.js'

export { WordCarouselItem }

const WordCarouselAttributes = [
    'align',
]


const availableAlignments = {
    'left': 'left',
    'center': 'center',
    'right': 'right',
}

export class WordCarousel extends LiraElement {
    carouselItems = []
    lastItemIndex = null

    pageLoadDelay = 600
    totalVisibilityDurationMs = 2000
    transitionDurationMs = 300
    delayBetweenItems = 300


    constructor () {
        super(true, WordCarouselAttributes)
        this.useStyle('./styles.css')
        this.useStyle('/css/animations.css')

        if (this.align && !availableAlignments[this.align]) {
            this.align = availableAlignments.left
        }

        this.carouselItems = this.querySelectorAll('word-carousel-item')
        setTimeout(() => {
            this.startCarousel()
        }, this.pageLoadDelay)
    }
    
    static get observedAttributes () {
        return WordCarouselAttributes
    }

    startCarousel () {
        this.setupCarouselItem(this.lastItemIndex)

        const interval = setInterval(() => {
            this.setupCarouselItem(this.lastItemIndex)
        }, this.totalVisibilityDurationMs + this.delayBetweenItems)
    }

    setupCarouselItem (previousIndex) {
        const itemNumber = (previousIndex ?? -1) + 1
        const itemIndex = itemNumber % this.carouselItems.length
        const item = this.carouselItems[itemIndex]

        item.classList.add('fade-in')

        setTimeout(() => {
            item.classList.remove('fade-in')
            item.classList.add('fade-out')
        }, this.totalVisibilityDurationMs - this.transitionDurationMs)

        setTimeout(() => {
            item.classList.remove('fade-out')
        }, this.totalVisibilityDurationMs)

        this.lastItemIndex = itemIndex
    }
    
    render () {
        return `
        <section class="word-carousel ${this.align ? `align-${this.align}` : ''}">
            <slot></slot>
        </section>
        `
    }
}