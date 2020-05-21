class CircleChart extends HTMLElement {
    constructor () {
        super()
        const shadowRoot = this.attachShadow({mode: 'open'})
        this.percent = this.getAttribute('percent') || 0;
    }

    connectedCallback () {
        this.shadowRoot.innerHTML = this.render()
    }

    /**
     * Generates the circle background based on the percent attribute
     */
    generateBackground() {
        if (this.percent >= 100)
            return `none`

        let varDegrees = 90
        let colors = ['230,230,230', '230,230,230']

        if (!isNaN(this.percent)) {
            if (this.percent < 50) {
                varDegrees = 90 + (3.6 * this.percent)
                colors[0] = '230,230,230'
            }
            else if (this.percent > 50) {
                varDegrees = -90 + (3.6 * this.percent)
                colors[0] ='90,90,90'
            }
        }

        let firstGrad = this.percent == 50 ? '' : 
            `linear-gradient(`
                + `${varDegrees}deg, `
                + `transparent 50%, `
                + `rgb(${colors[0]}) 50%`
            + `),`
        
        let lastGrad = `linear-gradient(`
                + `90deg, ` 
                + `rgb(${colors[1]}) 50%, `
                + `transparent 50%`
            +`)`

        return firstGrad + lastGrad
    }

    style () {
        return `
            <style>
                .circle-base {
                    background: rgb(90,90,90);
                    background-image: ${this.generateBackground()};
                    border-radius: 50%;
                    display:inline-block;
                    height: 90px;
                    margin: 15px;
                    position: relative;
                    text-align: center;
                    width: 90px;
                }
                
                .circle-base > .overlay {
                    align-items: center;
                    background: rgb(255,255,255);
                    border-radius: 50%;
                    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
                    display:grid;
                    height: 70px;
                    margin: 10px;
                    position: absolute;
                    width: 70px;
                }
                
                .circle-base > .overlay > span {
                    display: block;
                    font-size: 13pt;
                    margin: 0 -15px;
                    max-width: 115px;
                    text-shadow: 
                        3px 0px 3px white,
                        -3px 0px 3px white,
                        6px 0px 6px white,
                        -6px 0px 6px white;
                    word-spacing: 115px;
                }
            </style>
        `
    }

    render () {
        return `
            ${this.style()}
            <div class="circle-base">
                <div class="overlay">
                    <span><slot></slot></span>
                </div>
            </div>
        `
    }
}

window.customElements.define('circle-chart', CircleChart)