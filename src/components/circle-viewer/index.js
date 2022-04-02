import { styles } from './styles.js'

export class CircleViewer extends HTMLElement {
    constructor () {
        super()
        const shadowRoot = this.attachShadow({mode: 'open'})
        this.percent = this.getAttribute('percent') || 0;
    }

    connectedCallback () {
        this.shadowRoot.innerHTML = this.render()
    }

    render () {
        return `
            <style>${styles}</style>
            <div class="circle">
                <div class="overlay">
                    <slot></slot>
                </div>
            </div>
        `
    }
}
