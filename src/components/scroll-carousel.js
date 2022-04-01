class ScrollCarousel extends HTMLElement {
    constructor () {
        super()
        const shadowRoot = this.attachShadow({mode: 'open'})

        this.props = {
            processingPageScroll: false,
            waitingForScrollEnd: false,
            canTouchChangePageUp: false,
            canTouchChangePageDown: false,
            changePageTouchStarted: false,
            isScrolling: false,
            lastClickedElement: null,
            startX: null, 
            startY: null, 
            touchStartElement: null, 
            lastScrollTop: 0
        }
    }

    connectedCallback () {
        this.shadowRoot.innerHTML = this.render()

        const self = this
        const scrollableSlot = this.shadowRoot.querySelector('slot')

        setTimeout(function () {
            scrollableSlot.addEventListener(
                'scroll', 
                (e) => self.scrollableScrollHandler(e, self)
            )
        
            scrollableSlot.addEventListener(
                'wheel', 
                (e) => self.wheelHandler(e, self)
            )
            
            scrollableSlot.addEventListener(
                'keydown', 
                (e) => self.keydownScrollHandler(e, self)
            )
        
            scrollableSlot.addEventListener(
                'touchstart', 
                (e) => self.touchStartHandler(e, self)
            )
            scrollableSlot.addEventListener(
                'touchmove',
                (e) => self.touchMoveHandler(e, self)
            )
            scrollableSlot.addEventListener(
                'touchend', 
                (e) => self.props.changePageTouchStarted = false
            )
        
            scrollableSlot.addEventListener(
                'click', 
                (e) => self.props.lastClickedElement = e.target
            )
            console.log('Todos os listeners adicionados')
        }, 1200)
    }


    wheelHandler (e, self) {
        const direction = e.deltaY < 0 ? 'up' : e.deltaY > 0 ? 'down' : null
    
        if (((
                direction === 'up' && 
                self.canScrollPageUp() && 
                !self.props.waitingForScrollEnd
            ) ||
            (
                direction === 'down' && 
                self.canScrollPageDown() &&
                !self.props.waitingForScrollEnd
            )) && !self.props.isScrolling
        ) {
            if (direction && !self.props.processingPageScroll) {
                self.processScroll(self, direction)
            }
        }
    }
    
    keydownScrollHandler (e, self) {
        const direction = e.key === 'ArrowUp' ? 'up' : e.key === 'ArrowDown' ? 'down' : null
    
        if ((
                direction === 'up' && 
                self.canScrollPageUp() && 
                !self.props.waitingForScrollEnd
            ) ||
            (
                direction === 'down' && 
                self.canScrollPageDown() &&
                !self.props.waitingForScrollEnd
            )
        ) {
            self.processScroll(self, direction)
        }
    }
    
    touchStartHandler (e, self) {                                    
        self.props.startX = e.touches[0].clientX;                                      
        self.props.startY = e.touches[0].clientY;
        self.props.touchStartElement = e.target;
    
        if (self.canScrollPageUp())
            self.props.canTouchChangePageUp = true
        else 
            self.props.canTouchChangePageUp = false
        
        if (self.canScrollPageDown())
            self.props.canTouchChangePageDown = true
        else
            self.props.canTouchChangePageDown = false
    }
    
    touchMoveHandler (e, self) {                                      
        const posX = e.touches[0].clientX
        const posY = e.touches[0].clientY
    
        const diffY = posY - self.props.startY
        const direction = diffY > 0 ? 'up' : 'down'
    
        if (self.props.canTouchChangePageUp && direction !== 'up') 
            self.props.canTouchChangePageUp = false
        
        if (self.props.canTouchChangePageDown && direction !== 'down') 
            self.props.canTouchChangePageDown = false
    
        if (Math.abs(diffY) >= 20 &&
            (
                direction === 'up' && 
                self.canScrollPageUp() && 
                self.props.canTouchChangePageUp &&
                !self.props.changePageTouchStarted
            ) ||
            (
                direction === 'down' && 
                self.canScrollPageDown() &&
                self.props.canTouchChangePageDown &&
                !self.props.changePageTouchStarted
            )
        ) {
            self.props.changePageTouchStarted = true
            self.processScroll(self, direction)
        }
    }
    
    scrollableScrollHandler (e, self) {
        self.props.isScrolling = true
        
        if (
            self.props.lastScrollTop !== e.target.scrollTop && 
            (self.canScrollPageUp(e.target) || self.canScrollPageDown(e.target)) &&
            !self.props.waitingForScrollEnd
        ) {
            self.props.isScrolling = false
            self.props.waitingForScrollEnd = true
    
            setTimeout(() => {
                console.log('Reativada a escuta de scroll após final de rolagem')
                self.props.isScrolling = false
                self.props.waitingForScrollEnd = false
            }, 1200)
        }
    
        self.props.lastScrollTop = e.target.scrollTop
    }
    
    
    
    canScrollPageUp (element = this.shadowRoot.querySelector('slot')) {
        return element && element.scrollTop === 0;
    }
    
    canScrollPageDown (element = this.shadowRoot.querySelector('slot')) {
        return element && element.clientHeight + element.scrollTop >= element.scrollHeight
    }
    
    
    processScroll (self, direction) {
        console.log('Trocar de página')
        
        const navElement = document.getElementsByTagName('carousel-nav')[0]
        const pagePath = direction === 'up' ?
            navElement.previous.path : navElement.next.path

        // TODO: Lidar com animações de transição antes de mudar a página
        window.location.hash = `#${pagePath}`
        
        self.props.processingPageScroll = true

        const scrollableSlot = this.shadowRoot.querySelector('slot')
        scrollableSlot.scrollTo(0,0)
        
        setTimeout(function () {
            self.props.processingPageScroll = false
        }, 1300)
    }



    style () {
        return `
            <style>
                * {
                    box-sizing: border-box;
                }

                slot {
                    background-color: rgb(255,255,255);
                    border-radius: 2px;
                    display: block;
                    height: calc(100% - 20px);
                    align-items: center;
                    margin: 10px;
                    overflow-y: auto;
                    padding-right: 140px;
                    width: calc(100vw - 20px);
                }

                @media (max-width: 750px) {
                    slot {
                        font-size: 0.8em;
                        height: calc(100% - 10px);
                        margin: 5px;
                        width: calc(100vw - 10px);
                    }
                
                    @media (orientation: portrait) {
                        slot {
                            padding-right: 45px;
                        }
                    }

                    @media (orientation: landscape) {
                        slot {
                            padding-right: 80px;
                        }
                    }
                }
            </style>
        `
    }

    render () {
        return `
            ${this.style()}
            <slot></slot>
        `
    }
}

window.customElements.define('scroll-carousel', ScrollCarousel)