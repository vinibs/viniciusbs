/**
 * Based on Google Custom Elements documentation:
 * https://developers.google.com/web/fundamentals/web-components/customelements
 */

// Defines the custom element's class
class AppIndex extends HTMLElement {

    // Defines what should be done when the element is attached to the DOM
    connectedCallback () {
        // Sets the element's inner HTML to its own render() method's
        this.innerHTML = this.render()
        document.title = `viniciusbs`
    }

    // Defines the component default inner HTML
    render () {
        return `
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
                    <a class="github icon" href="https://github.com/vinibs" 
                        title="GitHub" target="_blank" rel="noreferrer"></a>
                </div>
                
            </div>
        `
    }
}

// Defines the custom element tag so it can be used in DOM
window.customElements.define('app-index', AppIndex)