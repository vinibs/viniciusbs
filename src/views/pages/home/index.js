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

    generateRandomBubbleStyleProps () {
        const mx = (Math.random() * 12 - 6).toFixed(2) + '%';
        const my = (Math.random() * 12 - 6).toFixed(2) + '%';
        const mrot = (Math.random() * 8 - 4).toFixed(2) + 'deg';
        
        const duration = (Math.random() * 6 + 6).toFixed(2) + 's';
        const delay = (Math.random() * -10).toFixed(2) + 's';

        return `
            --mx: ${mx};
            --my: ${my};
            --mrot: ${mrot};
            --float-duration: ${duration};
            --float-delay: ${delay};
        `
    }


    injectKeywordsCarousel (baseText, keywords) {
        const wordCarousel = `
            <word-carousel align="right">
                ${this.renderEach(keywords, 
                    (keyword) => {
                        return `
                            <word-carousel-item>
                                ${keyword}
                            </word-carousel-item>
                        `
                    }
                )}
            </word-carousel>
        `

        return baseText.replace('{keyword}', wordCarousel.trim()).trim();
    }

    // Defines the component default inner HTML
    render () {
        return `
            <fadein-container>
                <responsive-container limitedWidth mainContainer>
                    <floating-bubbles role="complementary">
                        ${this.renderEach(mainContent.bubbles, 
                            (bubbleContent) => {
                                return `
                                <bubble-item model="${bubbleContent.model}"
                                    ${bubbleContent.url ? `url="${bubbleContent.url}"` : ''}
                                    customStyle="${this.generateRandomBubbleStyleProps()}"
                                    text="${bubbleContent.text}">
                                </bubble-item>
                                `
                            }
                        )}
                    </floating-bubbles>


                    <section class="home-content" role="main">
                        <div class="home-logo" role="banner">vinicius bs</div>
                        <div class="description">
                            <span>${mainContent.title}</span>
                            <span class="main-text">
                                ${this.injectKeywordsCarousel(
                                    mainContent.carouselBaseText,
                                    mainContent.carouselKeywords,
                                )}
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