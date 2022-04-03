import { LiraElement } from '/js/lira.js'

export class FloatingLogo extends LiraElement {
    constructor () {
        super(true)
        this.useStyle('./styles.css')
    }

    render () {
        return `<a href="#" title="Home Page" class="logo"></a>`
    }
}