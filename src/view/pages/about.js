/**
 * Based on Google Custom Elements documentation:
 * https://developers.google.com/web/fundamentals/web-components/customelements
 */
import '../../components/circle-viewer/index.js'

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

                    <circle-viewer>
                        Software architecture
                    </circle-viewer>

                    <circle-viewer>
                        Automated testing
                    </circle-viewer>

                    <circle-viewer>
                        Agile methods
                    </circle-viewer>
                    
                    <circle-viewer>
                        User interface
                    </circle-viewer>
                    
                    <circle-viewer>
                        User experience
                    </circle-viewer>

                    <circle-viewer>
                        Web responsivity
                    </circle-viewer>

                    <circle-viewer>
                        Logo creation
                    </circle-viewer>

                    <circle-viewer>
                        Visual identity
                    </circle-viewer>

                    <circle-viewer>
                        Video making
                    </circle-viewer>

                    <circle-viewer>
                        Text writing
                    </circle-viewer>

                    <circle-viewer>
                        Hand drawing
                    </circle-viewer>
                </div>



                <div id="technologies" class="text-center">
                    <h2>Technologies</h2>

                    <circle-viewer>
                        HTML
                    </circle-viewer>

                    <circle-viewer>
                        CSS
                    </circle-viewer>

                    <circle-viewer>
                        PHP
                    </circle-viewer>

                    <circle-viewer>
                        JavaScript
                    </circle-viewer>

                    <circle-viewer>
                        Python
                    </circle-viewer>

                    <circle-viewer>
                        C
                    </circle-viewer>

                    <circle-viewer>
                        Java
                    </circle-viewer>

                    <circle-viewer>
                        Android (Java)
                    </circle-viewer>

                    <circle-viewer>
                        C#
                    </circle-viewer>

                    <circle-viewer>
                        Node.JS
                    </circle-viewer>

                    <circle-viewer>
                        Git
                    </circle-viewer>

                    <circle-viewer>
                        MySQL
                    </circle-viewer>

                    <circle-viewer>
                        PostgreSQL
                    </circle-viewer>

                    <circle-viewer>
                        SQLite
                    </circle-viewer>

                    <circle-viewer>
                        MongoDB
                    </circle-viewer>

                    <circle-viewer>
                        SQL Server
                    </circle-viewer>

                    <circle-viewer>
                        Selenium
                    </circle-viewer>

                    <circle-viewer>
                        Cypress
                    </circle-viewer>

                    <circle-viewer>
                        Codeception
                    </circle-viewer>

                    <circle-viewer>
                        JUnit
                    </circle-viewer>

                    <circle-viewer>
                        Mockito
                    </circle-viewer>

                    <circle-viewer>
                        Bootstrap
                    </circle-viewer>

                    <circle-viewer>
                        jQuery
                    </circle-viewer>

                    <circle-viewer>
                        ExtJS
                    </circle-viewer>

                    <circle-viewer>
                        D3.js
                    </circle-viewer>

                    <circle-viewer>
                        React
                    </circle-viewer>

                    <circle-viewer>
                        Angular
                    </circle-viewer>

                    <circle-viewer>
                        Laravel 5
                    </circle-viewer>

                    <circle-viewer>
                        Django
                    </circle-viewer>

                    <circle-viewer>
                        .NET Framework
                    </circle-viewer>

                    <circle-viewer>
                        Azure DevOps
                    </circle-viewer>

                    <circle-viewer>
                        Jira
                    </circle-viewer>

                    <circle-viewer>
                        Heroku
                    </circle-viewer>

                    <circle-viewer>
                        Amazon Web Services
                    </circle-viewer>

                    <circle-viewer>
                        Google Cloud Plaftorm
                    </circle-viewer>

                    <circle-viewer>
                        GIMP
                    </circle-viewer>

                    <circle-viewer>
                        Inkscape
                    </circle-viewer>
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