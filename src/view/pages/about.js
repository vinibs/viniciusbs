/**
 * Based on Google Custom Elements documentation:
 * https://developers.google.com/web/fundamentals/web-components/customelements
 */
import '../../components/circle-chart.js'

// Defines the custom element's class
class AboutMe extends HTMLElement {
    // Defines what should be done when the element is attached to the DOM
    connectedCallback () {
        // Sets the element's inner HTML to its own render() method's
        this.innerHTML = this.render()
        document.title = `about me • viniciusbs`
    }

    // Defines the component default inner HTML
    render () {
        return `
            <a href="#" class="logo"></a>
            <h2>About me</h2>

            <div class="grid grid-3-4 col-gap-2 grid-top">
                <div class="whoiam grid grid-center">
                    <div class="photoarea">
                        <img src="./images/photo.jpg" 
                            alt="Vinicius BS">
                    </div>

                    <div class="personal-info text-content">
                        <span class="name">
                            <strong>Vinicius Baroni Soares</strong>
                        </span>
                        <span class="email">
                            <a href="mailto:hiviniciusbs@gmail.com" 
                                target="_blank">hiviniciusbs@gmail.com</a>
                        </span>
                        <span class="location">
                            Florianópolis, SC, Brazil
                        </span>
                        
                    </div>

                    <div class="grid grid-1-1 grid-center col-gap-1 always-col">
                        <div>
                            <a class="linkedin-black icon" 
                                href="https://www.linkedin.com/in/viniciusbs" 
                                title="LinkedIn" target="_blank" 
                                rel="noreferrer"></a>
                        </div>
                        <div>
                            <a class="github-black icon" 
                                href="https://github.com/vinibs" 
                                title="GitHub" target="_blank"
                                rel="noreferrer"></a>
                        </div>
                    </div>
                </div>
                <article class="self-description text-content">
                    <p>
                        Curious about technology since my childhood and web 
                        developer since 2015, when I completed my technical 
                        degree course. In August 2019, I finished my 
                        <strong>Software Engineering graduation</strong> course
                        at UTFPR (Technological Federal University of Paraná).
                    </p>
                    <p>
                        During the university period, I was a <strong>full-stack
                        web developer</strong> intern in its IT sector for two
                        years and worked for a few months in a software 
                        development business. Currently, I'm working as a 
                        full-stack web developer, since August 2019.
                    </p>
                    <p>
                        But I'm not here to be <i>just</i> a developer. 
                    </p>
                    <p>
                        I like to work with creativity. That's why all my 
                        personal projects are <strong>made from scratch</strong>.
                    </p>
                    <p>
                        My deepest desire is to create and build tools that 
                        can really help people, joining <strong>software, 
                        design and psychology concepts</strong>, to make 
                        people's lives at least a little better.
                    </p>
                </article>
            </div>


            <div class="grid grid-3-6 col-gap-4">
                <div class="skills text-center">
                    <h2>Skills</h2>

                    <circle-chart percent="30">
                        Project management
                    </circle-chart>

                    <circle-chart percent="10">
                        Software architecture
                    </circle-chart>

                    <circle-chart percent="10">
                        Automated testing
                    </circle-chart>

                    <circle-chart percent="20">
                        Agile methods
                    </circle-chart>
                    
                    <circle-chart percent="70">
                        User interface
                    </circle-chart>
                    
                    <circle-chart percent="40">
                        User experience
                    </circle-chart>

                    <circle-chart percent="75">
                        Web responsivity
                    </circle-chart>

                    <circle-chart percent="55">
                        Logo creation
                    </circle-chart>

                    <circle-chart percent="10">
                        Visual identity
                    </circle-chart>

                    <circle-chart percent="35">
                        Video making
                    </circle-chart>

                    <circle-chart percent="45">
                        Text writing
                    </circle-chart>

                    <circle-chart percent="60">
                        Hand drawing
                    </circle-chart>
                </div>



                <div id="technologies" class="text-center">
                    <h2>Technologies</h2>

                    <circle-chart percent="100">
                        HTML
                    </circle-chart>

                    <circle-chart percent="100">
                        CSS
                    </circle-chart>

                    <circle-chart percent="100">
                        PHP
                    </circle-chart>

                    <circle-chart percent="100">
                        JavaScript
                    </circle-chart>

                    <circle-chart percent="14">
                        Python
                    </circle-chart>

                    <circle-chart percent="61">
                        C
                    </circle-chart>

                    <circle-chart percent="30">
                        Java
                    </circle-chart>

                    <circle-chart percent="05">
                        Android (Java)
                    </circle-chart>

                    <circle-chart percent="08">
                        C#
                    </circle-chart>

                    <circle-chart percent="05">
                        Node.JS
                    </circle-chart>

                    <circle-chart percent="25">
                        Git
                    </circle-chart>

                    <circle-chart percent="27">
                        MySQL
                    </circle-chart>

                    <circle-chart percent="14">
                        PostgreSQL
                    </circle-chart>

                    <circle-chart percent="05">
                        SQLite
                    </circle-chart>

                    <circle-chart percent="06">
                        MongoDB
                    </circle-chart>

                    <circle-chart percent="06">
                        SQL Server
                    </circle-chart>

                    <circle-chart percent="18">
                        Selenium
                    </circle-chart>

                    <circle-chart percent="22">
                        Cypress
                    </circle-chart>

                    <circle-chart percent="10">
                        Codeception
                    </circle-chart>

                    <circle-chart percent="05">
                        JUnit
                    </circle-chart>

                    <circle-chart percent="05">
                        Mockito
                    </circle-chart>

                    <circle-chart percent="40">
                        Bootstrap
                    </circle-chart>

                    <circle-chart percent="50">
                        jQuery
                    </circle-chart>

                    <circle-chart percent="10">
                        ExtJS
                    </circle-chart>

                    <circle-chart percent="05">
                        D3.js
                    </circle-chart>

                    <circle-chart percent="15">
                        React
                    </circle-chart>

                    <circle-chart percent="10">
                        Angular
                    </circle-chart>

                    <circle-chart percent="20">
                        Laravel 5
                    </circle-chart>

                    <circle-chart percent="10">
                        Django
                    </circle-chart>

                    <circle-chart percent="05">
                        .NET Framework
                    </circle-chart>

                    <circle-chart percent="10">
                        Azure DevOps
                    </circle-chart>

                    <circle-chart percent="15">
                        Jira
                    </circle-chart>

                    <circle-chart percent="10">
                        Heroku
                    </circle-chart>

                    <circle-chart percent="20">
                        Amazon Web Services
                    </circle-chart>

                    <circle-chart percent="15">
                        Google Cloud Plaftorm
                    </circle-chart>

                    <circle-chart percent="25">
                        GIMP
                    </circle-chart>

                    <circle-chart percent="55">
                        Inkscape
                    </circle-chart>
                </div>
            </div>

            <h2>Main interests</h2>
                <div class="interests grid grid-1-1-1 col-gap-2">
                    <div class="creativity">
                        <span class="icon"></span>
                        Creativity
                    </div>
                    <div class="technology">
                        <span class="icon"></span>
                        Technology
                    </div>
                    <div class="difference">
                        <span class="icon"></span>
                        Difference
                    </div>
                </div>
        `
    }
}

// Defines the custom element tag so it can be used in DOM
window.customElements.define('about-me', AboutMe)