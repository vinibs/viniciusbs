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
                    <div class="home-content">
                        <div class="description grid">
                            <span>Web de</span>
                            <span class="functions">sign<br>velopment</span>
                        </div>
                
                        <div class="technologies">
                            PHP, HTML, CSS, JS.<br>
                            And a little bit more.
                        </div>
                    </div>
                
                    <div class="full-grid-2-col">
                        <social-link-icon icon="github" 
                            href="https://github.com/vinibs" title="GitHub">
                        </social-link-icon>
                    </div>
                    
                </div>
            </fadein-container>
        `
    }
}