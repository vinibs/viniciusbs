/**
 * Based on Google Custom Elements documentation:
 * https://developers.google.com/web/fundamentals/web-components/customelements
 */

// Defines the custom element's class
class Projects extends HTMLElement {
    // Defines what should be done when the element is attached to the DOM
    connectedCallback () {
        // Sets the element's inner HTML to its own render() method's
        this.innerHTML = this.render()
        document.title = `projects • viniciusbs`
    }

    // Defines the component default inner HTML
    render () {
        return `
            <a href="#" class="logo"></a>
            <h2>Projects</h2>

            <div class="project-section" id="personal-projects">
                <h3 class="subtitle">Personal projects</h3>

                <div class="grid grid-7-x grid-middle project">
                    <div class="project-screen">    
                        <div class="screenshot tsanalysis" role="img" 
                            title="TSAnalysis screenshot"></div>
                    </div>
                    <div class="project-content">
                        <h3>Time Series Analysis System (2019)</h3>
                        <p class="resources">
                            JavaScript, HTML, CSS, jQuery, D3.js, Responsive, 
                            Python, Django, SQLite, PostgreSQL
                        </p>
                        <p>
                            This was my graduation's final project, made with 
                            various technologies that I had to learn just to 
                            get it done.
                        </p>
                        <p>
                            It is made in Python, over the Django framework, 
                            and uses some libraries as jQuery and D3.js in the 
                            front-end to simplify the DOM elements handling.
                        </p>
                        <p>
                            The system was created trying to simplify the time 
                            series data analysis, using an intuitive GUI and 
                            needing few previous knowledgement from the user.
                        </p>
                        <p>
                            This was my first use of Amazon S3 (AWS Storage) 
                            and Heroku together.
                        </p>
                    </div>
                </div>

                <div class="grid grid-7-x grid-middle project">
                    <div class="project-screen">
                        <a href="https://github.com/vinibs/lira" 
                            title="Lira on GitHub" target="_blank">
                
                            <div class="screenshot lira" role="img" 
                                title="Lira screenshot"></div>
                        </a>
                    </div>
                    <div class="project-content">
                        <h3>Lira (2018)</h3>
                        <p class="resources">
                            Pure JavaScript, HTML, CSS, Responsive
                        </p>
                        <p>
                            Lira (or LiraJS) is a Single Page Application (SPA) 
                            and Progressive Web App (PWA) microframework.
                        </p>
                        <p>
                            It brings a simple router made in pure JS and a 
                            file/directory  structure to simplify some basics
                            of SPAs and PWAs, using the concepts of HTML Custom
                            Elements.
                        </p>
                        <p>
                            It was entirely made from scratch, all by myself.
                        </p>
                        <p>
                            <b>And, hey, look!</b> You are seeing it working 
                            right now!
                        </p>
                        <p class="projectlink">
                            <a href="https://github.com/vinibs/lira" 
                                title="Lira on GitHub" 
                                target="_blank">View on GitHub</a>
                        </p>
                    </div>
                </div>
                
                <div class="grid grid-7-x grid-middle project">
                    <div class="project-screen">
                        <a href="https://github.com/vinibs/luvi" 
                            title="Luvi on GitHub" target="_blank">
                
                            <div class="screenshot luvi" role="img" 
                                title="Luvi screenshot"></div>
                        </a>
                    </div>
                    <div class="project-content">
                        <h3>Luvi (2017)</h3>
                        <p class="resources">
                            PHP, HTML, CSS, Responsive
                        </p>
                        <p>
                            Luvi is a PHP microframework.
                        </p>
                        <p>
                            It was created to be used in my new personal 
                            projects.
                        </p>
                        <p>
                            Other frameworks bring so much resources, more 
                            than I usually need. So I made my own, focused 
                            on simplicity.
                        </p>
                        <p>
                            It was entirely made from scratch, all by myself.
                        </p>
                        <p class="projectlink">
                            <a href="https://github.com/vinibs/luvi" 
                                title="Luvi on GitHub" 
                                target="_blank">View on GitHub</a>
                        </p>
                    </div>
                </div>
                
                <div class="grid grid-7-x grid-middle project">
                    <div class="project-screen">
                        
                        <div class="screenshot cadeu" role="img" 
                            title="Cadêu screenshot"></div>
                            
                    </div>
                    <div class="project-content">
                        <h3>Cadêu (2014 - 2019)</h3>
                        <p class="resources">
                            PHP, HTML, CSS, pure JavaScript, Responsive, MySQL
                        </p>
                        <p>
                            Cadêu is a tiny system where users input in which 
                            sites they have an account into a personal list 
                            with some search and filter resources.
                        </p>
                        <p>
                            This project was my first one, created during my 
                            technical degree course and is the reason why I 
                            learned many of the things I knew before entering 
                            graduation.
                        </p>
                        <p>
                            It was entirely made from scratch, all by myself.
                        </p>
                    </div>
                </div>
            </div>


            <div class="project-section" id="work">
                <h3 class="subtitle">At work / internship</h3>

                <div class="grid grid-7-x grid-middle project">
                    <div class="project-screen">
                        <div class="screenshot pdti" role="img" 
                        title="PDTI screenshot"></div>
                    </div>
                    <div class="project-content">
                        <h3>PDTI (2016 - 2018)</h3>
                        <p class="resources">
                            PHP, HTML, CSS, jQuery, Bootstrap, PostgreSQL
                        </p>
                        <p>
                            A system to manage and distribute the academic 
                            scholarships of UTFPR (Technological Federal 
                            University of Paraná).
                        </p>
                        <p>
                            The system has now more than 3,000 users and, in 
                            the year of 2017, it was used to manage more than 
                            2,600 academic scholarships inside the institution.
                        </p>
                        <p>
                            I started working on it after it was essentially 
                            made, but was still in its beginning. I created 
                            some functionalities of the system and worked on 
                            trying to bring it a better user experience.
                        </p>
                        <p>
                            Between 2016 and 2018, I worked at mainly the 
                            back-end, but at the front-end too, on this project.
                        </p>
                    </div>
                </div>
                
                <div class="grid grid-7-x grid-middle project">
                    <div class="project-screen">
                        <div class="screenshot intranet" role="img" 
                            title="Intranet/Support System screenshot"></div>
                    </div>
                    <div class="project-content">
                        <h3>UTFPR Intranet/Support System (2016 - 2018)</h3>
                        <p class="resources">
                            PHP, HTML, CSS, JavaScript, jQuery, Bootstrap, 
                            PostgreSQL
                        </p>
                        <p>
                            An internal system used by teachers, students and 
                            public servants of UTFPR (Technological Federal 
                            University of Paraná), at both campuses Londrina 
                            and Cornélio Procópio.
                        </p>
                        <p>
                            The system is made as a collaborative project 
                            between both campuses, created to simplify some 
                            internal processes of the institution in a virtual 
                            environment.
                        </p>
                        <p>
                            It has now more than 3,500 users and offers many 
                            different functionalities, like campus TV program 
                            control, the complete process of teacher 
                            substitution in a class, from the request to the 
                            decision and more.
                        </p>
                        <p>
                            Between 2016 and 2018, I worked at mainly the 
                            back-end, but at the front-end too, on this project, 
                            starting to work on it after some years from its 
                            begin.
                        </p>
                    </div>
                </div>

                <div class="grid grid-7-x grid-middle project">
                    <div class="project-screen">
                        <a href="https://eventos.cp.utfpr.edu.br/" 
                            title="Visit Events Management System" 
                            target="_blank">

                            <div class="screenshot events" role="img" 
                                title="Events Management System screenshot">
                            </div>
                        </a>
                    </div>
                    <div class="project-content">
                        <h3>UTFPR Events Management System (2016 - 2018)</h3>
                        <p class="resources">
                            PHP, HTML, CSS, jQuery, Bootstrap, Laravel, 
                            PostgreSQL
                        </p>
                        <p>
                            A system to set and manage an internal event of the 
                            campus Cornélio Procópio of UTFPR (Technological 
                            Federal University of Paraná), which is used by the 
                            main events of the campus.
                        </p>
                        <p>
                            Since its first version, in 2016, it has been used 
                            in more than 6 events that occur during the year 
                            inside the university, like academic weeks and 
                            internship events.
                        </p>
                        <p>
                            It has also a main page that concentrates all the 
                            current events, simplifying the access to each one 
                            of them.
                        </p>
                        <p>
                            Between 2016 and 2018, I worked both at the 
                            back-end and the front-end on this project, since 
                            its first version.
                        </p>
                        <p class="projectlink">
                            <a href="https://eventos.cp.utfpr.edu.br/" 
                                title="Visit Events Management System" 
                                target="_blank">
                                Visit the website
                            </a>
                        </p>
                    </div>
                </div>
            </div>

            <div class="project-section" id="freelances">
                <h3 class="subtitle">Freelances / Other projects</h3>

                <div class="grid grid-7-x grid-middle project">
                    <div class="project-screen">

                        <div class="screenshot siconf" role="img" 
                            title="SICONF screenshot"></div>
                            
                    </div>
                    <div class="project-content">
                        <h3>Assutef's SICONF (2017)</h3>
                        <p class="resources">
                            PHP, HTML, CSS, jQuery, Bootstrap, Laravel, 
                            AdminLTE, MySQL, Responsive
                        </p>
                        <p>
                            A platform to show the Assutef's members their 
                            expenses using the association benefits.
                        </p>
                        <p>
                            I made mainly the management of the platform user 
                            interface in its details, helped with some of the 
                            back-end logic and made, in group, the modeling of 
                            the database.
                        </p>
                    </div>
                </div>

                <div class="grid grid-7-x grid-middle project">
                    <div class="project-screen">
                        <a href="http://bochabrasil.com.br" 
                            title="Visit Bocha Brasil" target="_blank">

                            <div class="screenshot bochabrasil" role="img" 
                                title="Bocha Brasil screenshot"></div>
                        </a>
                    </div>
                    <div class="project-content">
                        <h3>Bocha Brasil (2010 - 2019)</h3>
                        <p class="resources">
                            PHP, HTML, CSS, pure JavaScript, Responsive, MySQL
                        </p>
                        <p>
                            The website of Bocha Brasil, a business that sells 
                            ball kits for paralympic boccia.
                        </p>
                        <p>
                            The last version of the website was made in 2016, 
                            but their site is maintained by me since 2010.
                        </p>
                        <p>
                            It was completely made from scratch, all by myself.
                        </p>
                        <p class="projectlink">
                            <a href="http://bochabrasil.com.br" 
                            title="Visit Bocha Brasil" target="_blank">
                                Visit the website
                            </a>
                        </p>
                    </div>
                </div>

                <div class="grid grid-7-x grid-middle project">
                    <div class="project-screen">
                        <a href="http://worldswebuild.ga" 
                            title="Visit Worlds We Build" target="_blank">

                            <div class="screenshot wwb" role="img" 
                                title="Worlds We Build screenshot"></div>
                        </a>
                    </div>
                    <div class="project-content">
                        <h3>Worlds We Build (2015 - 2019)</h3>
                        <p class="resources">
                            PHP, HTML, CSS, Responsive, MySQL
                        </p>
                        <p>
                            The web Giovanna Bueloni's portfolio, Worlds We 
                            Build.
                        </p>
                        <p>
                            It was created to expose her works and has a tiny 
                            internal system to post contents.
                        </p>
                        <p>
                            It was completely made from scratch, all by myself.
                        </p>
                        <p class="projectlink">
                            <a href="http://worldswebuild.ga" 
                                title="Visit Worlds We Build" target="_blank">
                                Visit the website
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        `
    }
}

// Defines the custom element tag so it can be used in DOM
window.customElements.define('my-projects', Projects)