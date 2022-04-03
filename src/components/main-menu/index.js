import { LiraElement } from '/js/lira.js'

export class MainMenu extends LiraElement {
    constructor () {
        super(true)
        this.useStyle('./styles.css')
    }

    render () {
        return `
            <nav>
                <div>
                    <a href="#/about-me" title="About me">About me</a>
                </div>
                <div>
                    <a href="#/projects" title="Projects">Projects</a>
                </div>
            </nav>
        `
    }
}
