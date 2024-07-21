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
    }

    // Defines the component default inner HTML
    render () {
        return `
            <fadein-container>
                <div class="grid grid-1-1 col-gap-4 row-gap-2 home">
                    <div class="home-logo">vinicius bs</div>
                    <div class="home-content grid grid-center row-gap-2">
                        <div class="description">
                            <span>Software <strong>engineering</strong>.</span>
                            <span><em>Adapt. Code. Lead. Solve.</em></span>
                        </div>

                        <div class="subtitle">
                            Building solutions through technology.
                        </div>
                    </div>

                    <div class="full-grid-2-col flex flex-center gap-15">
                        <social-link-icon icon="github" color="gray"
                            href="https://github.com/vinibs" title="GitHub">
                        </social-link-icon>

                        <social-link-icon icon="medium" color="gray"
                            href="https://medium.com/@hiviniciusbs" title="Medium">
                        </social-link-icon>
                    </div>

                </div>
            </fadein-container>
        `
    }
}