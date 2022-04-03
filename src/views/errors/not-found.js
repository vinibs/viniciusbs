/**
 * Based on Google Custom Elements documentation:
 * https://developers.google.com/web/fundamentals/web-components/customelements
 */
import { LiraElement } from '/js/lira.js'

// Defines the custom element's class
export class NotFound extends LiraElement {
    // Defines the component default inner HTML
    render () {
        return `
            <a href="#" class="logo"></a>
            <h2>Not found</h2>
            <p class="text-center">
                This page doesn't seem to be a part of this app.
            </p>
        `
    }
}