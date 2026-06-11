/**
 * Based on Google Custom Elements documentation:
 * https://developers.google.com/web/fundamentals/web-components/customelements
 */
import { LiraElement } from '/js/lira.js'


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
                <responsive-container mode="half" limitedWidth mainContainer verticalCentered>
                    <div class="home-logo">vinicius bs</div>
                    <div class="home-content">
                        <div class="description">
                            <span>Software <strong>engineering</strong>.</span>
                            <span><em>Adapt. Code. Lead. Solve.</em></span>
                        </div>

                        <div class="subtitle">
                            Building solutions through technology.
                        </div>
                    </div>
                </responsive-container>
            </fadein-container>
        `
    }
}