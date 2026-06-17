import { LiraElement } from '/js/lira.js'
import { navItems } from '../../contents/nav.js'

export class MainNavbar extends LiraElement {
    currentHash = null

    constructor () {
        super(true)
        this.useStyle('./styles.css')

        this.currentHash = window.location.hash

        window.navigation.addEventListener("navigate", (event) => {
            const targetUrl = new URL(event.destination.url);
            const newHash = targetUrl.hash; 

            this.clearActiveMenuItem()
            this.setActiveMenuItem(newHash)
        })
    }

    clearActiveMenuItem () {
        const activeItems = this.shadowRoot.querySelectorAll(".active")

        for (const item of activeItems) {
            item.classList.remove("active")
        }
    }


    setActiveMenuItem (newHash) {
        this.currentHash = newHash
        

        for (const navItem of navItems) {
            if (this.currentHash.includes(navItem.href)) {
                const navElement = this.shadowRoot.querySelector(`[href='${navItem.href}']`)

                if (navElement) {
                    navElement.classList.add("active")
                }
            }
        }
    }


    render () {
        return `
            <nav role="navigation">
                ${this.renderEach(navItems,
                    (navItem) => {
                        return `
                        <a href="${navItem.href}"
                            title="${navItem.title}"
                            aria-label="${navItem.title}"
                            ${this.currentHash.includes(navItem.href) ? 'class="active"' : '' }>
                            ${navItem.title}
                        </a>
                        `
                    }
                )}
            </nav>
        `
    }
}
