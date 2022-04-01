class CarouselNavItem extends HTMLElement {
    constructor () {
        super()
        const shadowRoot = this.attachShadow({mode: 'open'})

        this.props = {
            'active': this.getAttribute('active'),
            'href': this.getAttribute('href')
        }
    }

    connectedCallback () {
        this.shadowRoot.innerHTML = this.render()
    }

    static get observedAttributes () {
        return ['active', 'href']
    }

    get active () {
        return this.hasAttribute('active')
    }

    get href () {
        return this.hasAttribute('href')
    }

    attributeChangedCallback(name, oldValue, newValue) {
        this.props[name] = newValue
        this.shadowRoot.innerHTML = this.render()
    }

    style () {
        return `
            <style>
                li {
                    display: block;
                }
                
                
                li {
                    background: url('../images/icons/bullet.svg') left center no-repeat;
                    background-size: auto 15px;
                    color: rgb(60,60,60);
                    margin: 45px 0;
                    margin-left: -8px;
                    padding-left: 20px;
                }
                
                li[active] {
                    background-image: url('../images/icons/scroll.svg');
                    background-size: auto 36px;
                    color: rgb(0,0,0);
                    font-weight: bolder;
                    height: 36px;
                    line-height: 36px;
                    margin-left: -12px;
                    padding-left: 24px;
                }
                
                li a,
                li a:visited {
                    color: rgb(60,60,60);
                    text-decoration: none;
                    transition: 0.2s linear;
                }
                
                li a:hover {
                    color: rgb(0,0,0);
                }

                li[active] a,
                li[active] a:visited {
                    color: rgb(0,0,0);
                }

                @media (max-width: 750px) {

                    @media (orientation: portrait) {
                        li {
                            background-position: center bottom;
                            background-size: auto 13px;
                            display: inline-block;
                            margin: 0 20px -7px;
                            padding: 0 0 18px;
                        }
                    
                        li[active] {
                            background: none;
                            position: relative;
                            height: auto;
                            line-height: initial;
                        }
                    
                        li[active]::before {
                            background: url('../images/icons/scroll.svg') bottom center no-repeat;
                            background-size: auto 35px;
                            content: "";
                            left: 40%;
                            height: 35px;
                            position: absolute;
                            top: 4.2px;
                            transform: rotate(-90deg);
                            width: 35px;
                            z-index: -1;
                        }
                    }
                
                    @media (orientation: landscape) {
                        li {
                            background-size: auto 11px;
                            margin-bottom: 25px;
                            margin-left: -6px;
                            margin-top: 25px;
                            padding-left: 15px;
                        }
                
                        li[active] {
                            background-size: auto 25px;
                            height: 25px;
                            line-height: 25px;
                            margin-left: -8px;
                            padding-left: 17px;
                        }
                    }
                    
                }                
            </style>
        `
    }

    render () {
        return `
            ${this.style()}
            <li ${this.active ? 'active' : ''}>
                <a ${this.href ? `href="${this.props.href}"` : ''}>
                    <slot></slot>
                </a>
            </li>
    </nav>
        `
    }
}

window.customElements.define('carousel-nav-item', CarouselNavItem)