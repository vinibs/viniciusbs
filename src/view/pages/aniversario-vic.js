/**
 * Based on Google Custom Elements documentation:
 * https://developers.google.com/web/fundamentals/web-components/customelements
 */

// Defines the custom element's class
class AniversarioVic extends HTMLElement {
    // Defines what should be done when the element is attached to the DOM
    connectedCallback () {
        this.clearPage()
        this.addDependencies()

        setTimeout(() => {
            const giftArea = document.querySelector('.gift-area')
            giftArea.classList.remove('hidden')

            const gift = document.querySelector('.gift')
            gift.addEventListener('click', this.openGift)
        }, 3500)

        // Waits for the loading of the css and other dependencies to unhide content
        setTimeout(() => {
            const container = document.querySelector('aniversario-vic .container')
            container.removeAttribute('style')
        }, 500)
        
        // Sets the element's inner HTML to its own render() method's
        this.innerHTML = this.render()
        document.title = `feliz aniversário`
    }

    // Clear contents from the default project pages
    clearPage () {
        const cssList = document.querySelectorAll('link[rel="stylesheet"]')
        const menu = document.querySelector('main-menu')

        menu.remove()
        for (let css of cssList) {
            css.remove()
        }
    }

    // Add references to the dependecies necessary for this specific page
    addDependencies () {
        const mainCss = document.createElement('link'),
            animationCss = document.createElement('link'),
            favicon = document.querySelector('link[rel="shortcut icon"]')
        
        // Styles
        mainCss.setAttribute('rel', 'stylesheet')
        mainCss.setAttribute('href', './css/aniversario-vic/style.css')

        animationCss.setAttribute('rel', 'stylesheet')
        animationCss.setAttribute('href', './css/aniversario-vic/animations.css')

        document.head.appendChild(mainCss)
        document.head.appendChild(animationCss)

        // Favicon
        favicon.setAttribute('href', './images/aniversario-vic/favicon.png')
    }

    // Triggers the opening gift animation
    openGift () {
        const customElement = document.querySelector('aniversario-vic'),
            gift = document.querySelector('.gift'),
            cover = document.querySelector('.gift .cover'),
            card = document.querySelector('.gift .card'),
            giftSubtitle = document.querySelector('.gift-subtitle'),
            cardSubtitle = document.querySelector('.card-subtitle')
    
        cover.classList.add('opening')
        card.classList.add('showing')
        giftSubtitle.classList.add('hide')
        cardSubtitle.classList.remove('hidden')
        cardSubtitle.classList.add('show')
        
        gift.removeEventListener('click', customElement.openGift)
    
        setTimeout(() => {
            giftSubtitle.classList.add('hidden')
        }, 1000)
    
        setTimeout(() => {
            card.addEventListener('click', customElement.hideCard)
        }, 2000)
    }
    
    // Triggers the animation to hide the card and show the gift's content
    hideCard () {
        const customElement = document.querySelector('aniversario-vic'),
            giftBack = document.querySelector('.gift .back'),
            giftFront = document.querySelector('.gift .front'),
            card = document.querySelector('.gift .card'),
            cardSubtitle = document.querySelector('.card-subtitle'),
            giftContent = document.querySelector('.gift-content')
    
        card.classList.remove('showing')
        card.classList.add('hiding')
        cardSubtitle.classList.remove('show')
        cardSubtitle.classList.add('hide')
    
        giftContent.classList.remove('hidden')
        giftContent.classList.add('opening')
        giftBack.classList.add('hide')
        giftFront.classList.add('hide')
    
        card.removeEventListener('click', customElement.hideCard)
    }

    // Defines the component default inner HTML
    render () {
        return `
            <div class="container" style="display:none">
            <header>
                <img src="/images/aniversario-vic/colar.svg" 
                    alt="Colar" 
                    class="icon">
                <div class="titles">
                    <h1 class="title">Vic,</h1>
                    <h2 class="title-alt">Feliz aniversário!</h2>
                </div>
            </header>

            <div class="gift-area hidden">
                <div class="gift">
                    <img src="/images/aniversario-vic/gift/back.svg" 
                        alt="Presente" 
                        class="back">
                    <div class="card">
                        <div class="card-content">
                            O maior presente que posso te oferecer é a minha 
                            dedicação e, com ela, aquilo que guardo no coração.
                        </div>
                    </div>
                    <div class="gift-content hidden">
                        <iframe class="video" 
                                src="https://www.youtube.com/embed/47p_2vE3YFg?rel=0" 
                                frameborder="0" 
                                allow="accelerometer; encrypted-media; gyroscope; picture-in-picture" 
                                allowfullscreen></iframe>
                    </div>
                    <img src="/images/aniversario-vic/gift/front.svg" 
                        alt="Presente" 
                        class="front">
                    <img src="/images/aniversario-vic/gift/cover.svg" 
                        alt="Presente" 
                        class="cover">
                </div>
                
                <div class="gift-subtitle">
                    <p class="subtitle">
                        Que tal abrir seu presente?
                    </p>
                    <p class="subtitle secondary">
                        (É só tocar ou clicar nele)
                    </p>
                </div>
                
                <div class="card-subtitle hidden">
                    <p class="subtitle">
                        Pronta pra continuar?
                    </p>
                    <p class="subtitle secondary">
                        (É só tocar ou clicar no cartão)
                    </p>
                </div>
            </div>
        </div>
        `
    }
}

// Defines the custom element tag so it can be used in DOM
window.customElements.define('aniversario-vic', AniversarioVic)