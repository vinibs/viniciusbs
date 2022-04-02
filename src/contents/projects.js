export const pageTitle = 'Projects'

export const projects = {
    personal: {
        title: 'Personal Projects',
        items: {
            tsanalysis: {
                image: { class: 'tsanalysis', title: 'TSAnalysis screenshot' },
                name: 'Time Series Analysis System',
                year: '2019',
                resources: [
                    'Python', 
                    'Django', 
                    'JavaScript', 
                    'HTML', 
                    'CSS', 
                    'jQuery', 
                    'D3.js', 
                    'Responsive', 
                    'SQLite', 
                    'PostgreSQL',
                ],
                description: [
                    `This was my graduation's final project, made with various technologies that I had to learn just to get it done.`,

                    `It is made in Python, over the Django framework, and uses some libraries as jQuery and D3.js in the front-end to simplify the DOM elements handling.`,

                    `The system was created trying to simplify the time series data analysis, using an intuitive GUI and needing few previous knowledgement from the user.`,

                    `This was my first use of Amazon S3 (AWS Storage) and Heroku together.`,
                ]
            },
            lira: {
                link: { 
                    url: 'https://github.com/vinibs/lira', 
                    title: 'Lira on GitHub',
                    text: 'View on GitHub',
                },
                image: { class: 'lira', title: 'Lira screenshot' },
                name: 'Lira',
                year: '2018 - 2020',
                resources: [
                    'Vanilla JavaScript', 'HTML', 'CSS', 'Responsive',
                ],
                description: [
                    `Lira (or LiraJS) is a Single Page Application (SPA) and Progressive Web App (PWA) microframework.`,

                    `It brings a simple router made in pure JS and a file/directory  structure to simplify some basics of SPAs and PWAs, using the concepts of HTML Custom Elements.`,

                    `It was entirely made from scratch, all by myself.`,

                    `<b>And, hey, look!</b> You are seeing it working right now!`
                ]
            },
            luvi: {
                link: { 
                    url: 'https://github.com/vinibs/luvi', 
                    title: 'Luvi on GitHub',
                    text: 'View on GitHub',
                },
                image: { class: 'luvi', title: 'Luvi screenshot' },
                name: 'Luvi',
                year: '2017',
                resources: [
                    'PHP', 'HTML', 'CSS', 'Responsive',
                ],
                description: [
                    `Luvi is a PHP microframework.`,

                    `It was created to be used in my new personal projects.`,

                    `Other frameworks bring so much resources, more than I usually need. So I made my own, focused on simplicity.`,

                    `It was entirely made from scratch, all by myself.`
                ]
            },
            cadeu: {
                image: { class: 'cadeu', title: 'Cadêu screenshot' },
                name: 'Cadêu',
                year: '2014 - 2019',
                resources: [
                    'PHP', 
                    'HTML', 
                    'CSS', 
                    'Vanilla JavaScript', 
                    'Responsive', 
                    'MySQL',
                ],
                description: [
                    `Cadêu is a tiny system where users input in which sites they have an account into a personal list with some search and filter resources.`,

                    `This project was my first one, created during my technical degree course and is the reason why I learned many of the things I knew before entering graduation.`,

                    `It was entirely made from scratch, all by myself.`,
                ]
            },
        },
    },

    at_work: {
        title: 'At work',
        items: {
            pdti: {
                image: { class: 'pdti', title: 'PDTI screenshot' },
                name: 'PDTI',
                year: '2016 - 2018',
                resources: [
                    'PHP', 
                    'HTML', 
                    'CSS', 
                    'jQuery', 
                    'Bootstrap', 
                    'PostgreSQL',
                ],
                description: [
                    `A system to manage and distribute the academic scholarships of UTFPR (Technological Federal University of Paraná).`,

                    `The system has now more than 3,000 users and, in the year of 2017, it was used to manage more than 2,600 academic scholarships inside the institution.`,

                    `I started working on it after it was essentially made, but was still in its beginning. I created some functionalities of the system and worked on trying to bring it a better user experience.`,

                    `Between 2016 and 2018, I worked at mainly the back-end, but at the front-end too, on this project.`,
                ]
            },
            intranet: {
                image: { class: 'intranet', title: 'Intranet/Support System screenshot' },
                name: 'UTFPR Intranet/Support System',
                year: '2016 - 2018',
                resources: [
                    'PHP', 
                    'HTML', 
                    'CSS', 
                    'JavaScript', 
                    'jQuery', 
                    'Bootstrap', 
                    'PostgreSQL',
                ],
                description: [
                    `An internal system used by teachers, students and public servants of UTFPR (Technological Federal University of Paraná), at both campuses Londrina and Cornélio Procópio.`,

                    `The system is made as a collaborative project between both campuses, created to simplify some internal processes of the institution in a virtual environment.`,

                    `It has now more than 3,500 users and offers many different functionalities, like campus TV program control, the complete process of teacher substitution in a class, from the request to the decision and more.`,

                    `Between 2016 and 2018, I worked at mainly the back-end, but at the front-end too, on this project, starting to work on it after some years from its begin.`,
                ]
            },
            events: {
                link: { 
                    url: 'https://eventos.cp.utfpr.edu.br', 
                    title: 'Visit Events Management System',
                    text: 'Visit the website',
                },
                image: { class: 'events', title: 'Events Management System screenshot' },
                name: 'UTFPR Events Management System',
                year: '2016 - 2018',
                resources: [
                    'PHP', 
                    'HTML', 
                    'CSS', 
                    'jQuery', 
                    'Bootstrap', 
                    'Laravel', 
                    'PostgreSQL',
                ],
                description: [
                    `A system to set and manage an internal event of the campus Cornélio Procópio of UTFPR (Technological Federal University of Paraná), which is used by the main events of the campus.`,

                    `Since its first version, in 2016, it has been used in more than 6 events that occur during the year inside the university, like academic weeks and internship events.`,

                    `It has also a main page that concentrates all the current events, simplifying the access to each one of them.`,

                    `Between 2016 and 2018, I worked both at the back-end and the front-end on this project, since its first version`,
                ]
            },
        },
    },

    other: {
        title: 'Other projects',
        items: {
            siconf: {
                image: { class: 'siconf', title: 'SICONF screenshot' },
                name: `Assutef's SICONF`,
                year: '2017',
                resources: [
                    'PHP', 
                    'HTML', 
                    'CSS', 
                    'jQuery', 
                    'Bootstrap', 
                    'Laravel',
                    'AdminLTE',
                    'MySQL',
                    'Responsive',
                ],
                description: [
                    `A platform to show to Assutef's members their expenses using the association benefits.`,

                    `I made mainly the management of the platform user interface in its details, helped with some of the back-end logic and made, in group, the modeling of the database.`,
                ]
            },
            bochabrasil: {
                link: { 
                    url: 'http://bochabrasil.com.br', 
                    title: 'Visit Bocha Brasil',
                    text: 'Visit the website',
                },
                image: { class: 'bochabrasil', title: 'Bocha Brasil screenshot' },
                name: 'Bocha Brasil',
                year: '2010 - 2019',
                resources: [
                    'PHP', 
                    'HTML', 
                    'CSS', 
                    'Vanilla JavaScript', 
                    'Responsive', 
                    'MySQL',
                ],
                description: [
                    `The website of Bocha Brasil, a small business that sells ball kits for paralympic boccia.`,

                    `The latest version of the website was made in 2016, but their site is maintained by me since 2010.`,

                    `It was completely made from scratch, all by myself.`,
                ]
            },
            wwb: {
                image: { class: 'wwb', title: 'Worlds We Build screenshot' },
                name: `Worlds We Build`,
                year: '2015',
                resources: [
                    'PHP', 
                    'HTML', 
                    'CSS', 
                    'MySQL',
                    'Responsive',
                ],
                description: [
                    `Giovanna Bueloni's web portfolio, Worlds We Build.`,

                    `It was created to expose her works and had a tiny internal system to post contents.`,

                    `It was completely made from scratch, all by myself.`,
                ]
            },
        },
    }
}