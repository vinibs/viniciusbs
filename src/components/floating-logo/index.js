import { LiraElement } from '/js/lira.js'

export class FloatingLogo extends LiraElement {
    isAtHomePage = false

    constructor () {
        super(true)
        this.useStyle('./styles.css')
        this.useStyle('/css/animations.css')

        this.checkIsHomePage()
        
        window.navigation.addEventListener("navigate", (event) => {
            this.checkIsHomePage()
            this.handleLogoHomeClass()
        })
    }

    checkIsHomePage () {
        const currentHash = window.location.hash
        const possibleHomeHashes = ['', '/', '#', '#/']
        this.isAtHomePage = false

        for (const possibleHash of possibleHomeHashes) {
            if (currentHash === possibleHash) {
                this.isAtHomePage = true
            }
        }
    }

    handleLogoHomeClass () {
        const logoElement = this.shadowRoot.querySelector("#floating-logo")

        if (logoElement) {
            if (this.isAtHomePage && !logoElement.classList.contains('at-home')) {
                logoElement.classList.add('at-home')
                logoElement.classList.add('exited')
            }
    
            else if (!this.isAtHomePage) {
                logoElement.classList.remove('at-home')
                logoElement.classList.remove('exited')
            }
        }
    }

    render () {
        return `<a href="#" 
            title="Home Page"
            id="floating-logo"
            class="logo ${this.isAtHomePage ? 'at-home' : ''}"
            ></a>`
    }
}