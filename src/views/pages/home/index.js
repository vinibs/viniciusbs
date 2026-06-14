/**
 * Based on Google Custom Elements documentation:
 * https://developers.google.com/web/fundamentals/web-components/customelements
 */
import { LiraElement } from '/js/lira.js'
import { mainContent } from '../../../contents/home.js'


// Defines the custom element's class
export class Home extends LiraElement {
    constructor () {
        super()

        document.title = `viniciusbs`

        this.useStyle('./styles.css')
    }

    // Defines the component default inner HTML
    render () {
        return `
            <fadein-container>
                <responsive-container limitedWidth mainContainer>
                    <floating-bubbles>
                        ${this.renderEach(mainContent.bubbles, 
                            (bubbleContent) => {
                                return `
                                <bubble-item model="${bubbleContent.model}"
                                    ${bubbleContent.url ? `url="${bubbleContent.url}"` : ''}>

                                    ${bubbleContent.text}
                                </bubble-item>
                                `
                            }
                        )}
                    </floating-bubbles>


                    <section class="home-content">
                        <div class="home-logo">vinicius bs</div>
                        <div class="description">
                            <span>${mainContent.title}</span>
                            <span class="main-text">
                                ${mainContent.carouselBaseText}
                            </span>
                            
                            <div class="subtitle">
                                ${mainContent.description}
                            </div>
                        </div>
                    </section>
                </responsive-container>
        `
    }
}