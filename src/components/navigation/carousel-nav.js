import './carousel-nav-item.js'
import menus from '../../data/menus.js'

class CarouselNav extends HTMLElement {
    constructor () {
        super()
        const shadowRoot = this.attachShadow({mode: 'open'})

        const self = this
        window.addEventListener('hashchange', () =>
            self.connectedCallback()
        )
    }

    connectedCallback () {
        this.menus = this.defineMenuItems()
        this.shadowRoot.innerHTML = this.render()
    }

    defineMenuItems () {
        // Formata a hash para verificar se o menu corresponde à tela atual
        let currentHash = window.location.hash.substr(1)

        if (currentHash.length > 1 && currentHash.substr(-1) === '/')
            currentHash = currentHash.slice(0, -1)

        // Define as variáveis a serem utilizadas para definir os itens de menu
        let newMenus = []
        let mainItems = []
        let otherItems = []
        let previous = -1
        let next = -1

        // Varre os itens de menu definindo como não ativos por padrão
        for (let i in menus) {
            menus[i].active = false
            i = parseInt(i)
            
            // Se o item de menu atual corresponder ao hash da página atual, marca como ativo
            if (currentHash === menus[i].path) {
                menus[i].active = true

                // E define quais são os índices do item anterior e posterior ao principal
                if (i >= 1)
                    previous = i - 1
                else
                    previous = menus.length - 1

                if (i < menus.length - 1)
                    next = i + 1
                else
                    next = 0

                // Se o array otherItems já tiver o item referente ao menu anterior, remove-o
                if (otherItems.includes(menus[previous]))
                    otherItems.splice(otherItems.indexOf(menus[previous]), 1)
                mainItems.push(menus[previous]) // E adiciona ao mainItems

                mainItems.push(menus[i]) // Adiciona o menu ativo ao mainItems

                // Se o array otherItems já tiver o item referente ao menu posterior, remove-o
                if (otherItems.includes(menus[next]))
                    otherItems.splice(otherItems.indexOf(menus[next]), 1)
                mainItems.push(menus[next]) // E adiciona ao mainItems
            }
            else {
                // Se não for correspondente à tela atual, adiciona ao otherItems 
                // se ainda não estiver presente no mainItems
                if (!mainItems.includes(menus[i]))
                    otherItems.push(menus[i])
            }
        }

        // Junta ambos os arrays no newMenus
        newMenus.push(... mainItems)
        newMenus.push(... otherItems)

        // Define os menus anterior e posterior para serem lidos ao trocar de página pela rolagem
        this.previous = menus[previous]
        this.next = menus[next]

        return newMenus
    }

    style () {
        return `
            <style>
                nav {
                    border-image: linear-gradient(
                            0deg, 
                            transparent 1%, 
                            rgb(60,60,60) 20%, 
                            rgb(60,60,60) 80%, 
                            transparent 99%
                        ) 1;
                    border-style: solid;
                    border-width: 0 0 0 1px;
                    justify-self: center;
                    text-transform: uppercase;
                    position: fixed;
                    right: 35px;
                    top: 50%;
                    transform: translateY(-50%);
                    z-index: 100;
                }

                ul {
                    list-style: none;
                    margin: 0;
                    padding: 0;
                }

                @media (max-width: 750px) {

                    @media (orientation: portrait) {
                    
                        nav {
                            border-image: linear-gradient(
                                90deg, 
                                transparent 1%, 
                                rgb(60,60,60) 20%, 
                                rgb(60,60,60) 80%, 
                                transparent 99%
                            ) 1;
                            border-width: 0 0 1px 0;
                            font-size: 0.7em;
                            right: 15px;
                            text-align: center;
                            transform: rotate(90deg) translateX(50%);
                            transform-origin: 100% 0;
                            white-space:nowrap;
                        }
                    }
                
                    @media (orientation: landscape) {    
                        nav {
                            font-size: 0.7em;
                            right: 15px;
                        }
                    }
                    
                }                
            </style>
        `
    }

    render () {
        let element = `
            ${this.style()}
            <nav>
                <ul>
        `

        for (const menu of this.menus) {            
            element += 
                    `<carousel-nav-item href="#${menu.path}" ${menu.active ? 'active' : ''}>
                        ${menu.title}
                    </carousel-nav-item>
            `
        }


        element += `                    
                </ul>
            </nav>
        `

        return element
    }
}

window.customElements.define('carousel-nav', CarouselNav)