import { LiraElement } from '/js/lira.js'
import { navItems } from '../../contents/nav.js'

export class MainMenu extends LiraElement {
    constructor () {
        super(true)
        this.useStyle('./styles.css')
    }

    render () {
        return `
            <nav>
                ${this.renderEach(navItems,
                    (navItem) => {
                        return `
                        <a href="${navItem.href}"
                            title="${navItem.title}"
                            aria-label="${navItem.title}">
                            ${navItem.title}
                        </a>
                        `
                    }
                )}
            </nav>
        `
    }
}
