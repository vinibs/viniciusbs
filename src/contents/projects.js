export const pageTitle = "Projects"

const categories = {
    at_work: "At Work",
    personal: "Personal",
    freelance: "Freelance",
}

const projectTypes = {
    backend: "backend",
    cli: "cli",
    mobile: "mobile",
    web: "web",
}

export const projects = {

    mob_dropbox_automation: {
        type: projectTypes.backend,
        category: categories.at_work,
        name: "Dropbox data collect automation",
        year: "2023",
        resources: [
            "Python",
            "AWS S3",
            "AWS Lambda Functions",
            "Dropbox SDK",
            "Docker",
        ],
        description: `
            As part of the data collect process, one client needed the data was collected from a Dropbox account, where the files were manually uploaded during the weekdays.

            For more than a year this collect process was done manually, eventually more than once a day, since there weren't a fixed time window to the files to be available on the Dropbox account, and once I became responsible for this process (for a few days) a developed a Python script to automate this process.

            This project consisted in understanding how to have a constant connection to the Dropbox account without needing a user to interact to it and deploy the code to a Lambda function so it could be scheduled to run a few times a day (due to the lack of a fixed time window for the files' availability).

            The main idea of this automation was to connect to Dropbox, look for the files regarding the provided date, download them (if found) and upload them to AWS S3 to start the data engineering process.

            A cool feature was the fact that the script identified if the provided date (by default the current date) is a monday and, if so, it also searched for the files regarding the previous weekend days - since the files for these days are always uploaded on mondays. 
            
            In the end, this scheduled Lambda function reduced the time and effort needed to daily collect the data from this specific client.
        `
    },
    sync_oracle_db_connection_poc: {
        type: projectTypes.cli,
        category: categories.at_work,
        name: "Oracle DB connection POC",
        year: "2023",
        resources: [
            "Python",
            "Shell Script",
            "Windows",
            "Linux",
            "Multiplatform",
            "Virtual Machine",
            "Proof of Concept (POC)",
        ],
        description: `
            A Proof of Concept developed to find a better way to connect the current application to Oracle databases running locally.

            The application was initially configured to connect to Oracle databases through a Java platform, but since the application needed to be installed in the client's machine the goal was not to need to install Java when installing the application.

            This change should be able to connect to the database when running in different Windows versions, such as XP, 7 and 10, while being compatible with Linux platforms - since it would run in an uncontrolled environment in the client's machine.

            This POC needed some virtual machines running different Windows and Linux versions and also the Oracle database so it could be accessible by the other VMs.

            The Python code was able to successfully be installed on the machines and connect to the database so this POC became the base for future improvements to the final application.
        `
    },
    sync_serverless_automation_server: {
        type: projectTypes.backend,
        category: categories.at_work,
        name: "Serverless deploy automation server",
        year: "2023",
        resources: [
            "JavaScript",
            "NodeJS",
            "Express",
            "AWS S3",
            "AWS EC2",
            "AWS CodeDeploy",
            "Serverless Framework",
            "Docker",
            "Bitbucket Pipelines",
        ],
        description: `
            As part of a bigger application it was necessary to automate the process of creating serverless projects, with specifics files and dependencies and custom Docker images.

            Oriented to use the Serverless Framework to deploy the custom image through code, I developed a Proof of Concept and then turned it into a web server, running on AWS EC2, to receive a JSON data through an endpoint and use it to create an internal directory with all the needed files, including the setup for Serverless Framework and the Dockerfile and then run a command to trigger Serverless to build and deploy the project.

            This project also used Bitbucket pipelines, which were configured to run the automated tests and, once they all passed, deploy the updated version using AWS CodeDeploy.
        `
    },
    mob_collect_proxy: {
        type: projectTypes.backend,
        category: categories.at_work,
        name: "Data collect reverse proxy",
        year: "2023",
        resources: [
            "Nginx",
            "AWS EC2",
        ],
        description: `
            For collecting data of some clients, there were IP restrictions on their firewall and it was decided to configure an existing EC2 machine with fixed IP as a reverse proxy.

            This way, it was possible to communicate with all the clients' APIs that had IP restrictions using the fixed IP from this machine. To do that, I configured an Nginx server on that machine and configured it as a reverse proxy.

            It became, then, used for both development and production purposes to allow our Fargate instances to communicate to the clients' APIs.

            Although there were some limitations with this approach, such as error observability when we got a 502 answer from the proxy, it made the process of communicating with such APIs a lot easier.
        `
    },
    mob_data_formatting: {
        type: projectTypes.backend,
        category: categories.at_work,
        name: "Data formatting platform",
        year: "2023",
        resources: [
            "Python",
            "AWS S3",
            "AWS Lambda Functions",
            "Pandas",
            "NumPy",
            "Docker",
        ],
        description: `
            Being part of the same flow as the data collect platform, the data formatting platform consists of Lambda functions that were created to standardize the data before going to data engineering processes.

            After the data of a single source (client) was collected, Lambda functions to format the data from that source were invoked, reading the original Parquet file on AWS S3, adjusting its data to the standard format and uploading the resulting dataset as a new Parquet on S3.

            When I started working in this project, it was composed by a bunch of independent scripts, most of them copying the same base structure from the others. Then I became responsible for maintaining it and making it support new sources and, to make it easier, I refactored the whole project structure so we had a single base class defining the whole formatting process and each of the specific classes, for each source, would have to just define what was really specific for those data.

            After refactoring and documenting the new structure and how it worked, it became much easier to create new formatting Lambda functions, since each new class, for a new source, would have only a few lines of code and a process that initially was taking about one or two days to be done started to be done in a couple of hours.
        `
    },
    mob_collect: {
        type: projectTypes.backend,
        category: categories.at_work,
        name: "Data collect platform",
        year: "2023 - 2024",
        resources: [
            "Python",
            "FastAPI",
            "CLI",
            "AWS S3",
            "AWS Fargate",
            "AWS CDK",
            "AWS SDK",
            "Docker",
            "Parallelism",
            "MS Teams messaging",
        ],
        description: `
            A platform started from scratch to satisfy the need of collecting data from different sources for a specific client - each source being one of the client's client, with different API standards and naming patterns.

            Initially developed as a FastAPI project, it was soon converted to a Python CLI to be run on different containers on AWS using Fargate. Built so the data collect process for each source could be run in a different instance but using the same Docker image, later I became responsible for splitting and parallelizing the collect process for a single source (client).

            To achieve the desired parallelism and improve collect time, there were used 3 different approaches: split the collect by every context (running one instance to collect only products, another one only for suppliers, etc.), splitting the collect on specific parameters the API needed (some APIs returned data only for a specific store, so each store's data were collected in a different instance) and splitting by pagination, with each instance collecting a chunk of X pages.

            The greatest challenge on this process was to really parallelize the pagination, since it was not possible to know the total number of pages. To do this, it was used the idea of "check the last page of the chunk - if we have more pages than that, start a new instance for the next chunk and, then, continue collecting data from all the other pages in this current chunk" and it worked like a charm. 
            
            After implementing all these strategies, a data collect that was taking more than 4h started to be done in 26 minutes.
            
            Every data collected was saved as a Parquet file on S3 and became part of a data engineering flow of another team. The instances management was done using the AWS SDK and the base infrastructure was defined using AWS CDK.

            During the collect processes, if something gone wrong, the platform automatically retried 3 times the same request and if it kept failing sent a message on a MS Teams group, alerting about the error.

            I was responsible for the creation of this project in first instance, then became responsible for implementing every new feature, guiding colleagues on maintaining it and writing automated tests, defining how to improve collect time and implementing what was needed to make this improvement. With this, I was taken as a technical reference and expert in this client's process and data collect features.
        `
    },
    farm: {
        type: projectTypes.web,
        category: categories.at_work,
        name: "Farm management system",
        year: "2023",
        resources: [
            "Python", 
            "FastAPI",
            "MySQL",
        ],
        description: `
            This project can be described as a web platform to manage the processes, mostly focused on animal lifecycles, adopted by a group of farms.

            I got the chance to participate in this project since its beginning and help the team during the main discovery process, also brainstorming about the system UI, user flow and some behaviors the system was expected to have.

            My responsibilities included choosing the techology to use in the back-end, such as language, framework and database, seting up the base back-end architecture based on an internal base project - and help improving this base with some generic features as they were created for this project -, and creating the code for the user management of the system.
        `
    },
    dbaccess: {
        type: projectTypes.backend,
        category: categories.at_work,
        name: "DBAccess",
        year: "2022",
        resources: [
            "Python", 
            "Flask",
            "MySQL",
        ],
        description: `
            A database Identity Access Manager (IAM) is what defines DBAccess.

            It was created as a new version of an existing platform, focused on managing the users accesses to many databases and being integrated with many other company's services to manage all the whole business.

            The team for this project was distributed among three different countries and it was a great experience of dealing with people in English and Spanish.

            During the project I had the responsibilities of understanding some architecture pattern requirements, setting up the project's architecture, providing examples of the appropriated way to do things following the requirements and help and guide teammates with no previous knowledge in Python and some of the adopted technologies. And it was a great experience.
        `
    },
    metrics: {
        type: projectTypes.backend,
        category: categories.at_work,
        name: "Internal metrics system",
        year: "2022",
        resources: [
            "Node JS", 
            "TypeScript",
            "React",
            "RabbitMQ",
            "Jira API",
            "Apache Superset",
            "Docker",
            "MySQL",
        ],
        description: `
            This project's focus were to gather information from Jira regarding the development process - how much time are the tasks taking to be completed, how many tasks were delivered in a given period and so on.

            Built as a microservice, being part of an internal service for the company's management, this project involved planning how to connect to Jira to gather the data, store what was relevant in the database and setting and automated way of requesting new updates from time to time so the stored data were always updated.

            Besides working on the back-end to develop the process of getting and storing data, I also worked on searching for data visualization tools and setting up Apache Superset as our main tool to view all charts and statistics.

            During its set up process, I also needed to create customized charts (visualizations) for Superset, in React, and set the platform's Docker build process to compile and include them on the final distribution build we used.

            I was also responsible for the project as a lead developer during its last few months, helping the team to remove blockers, open and organize tasks and prioritize the next steps.

        `
    },
    env_setup: {
        type: projectTypes.cli,
        category: categories.personal,
        link: { 
            url: "https://github.com/vinibs/environment-setup", 
            title: "Environment setup on GitHub",
            text: "View on GitHub",
        },
        name: "Environment setup CLI",
        year: "2022",
        resources: [
            "Shell script",
        ],
        description: `
            After having some trouble to configure my computer after formatting it, I decided to automate a few steps and started creating shell scripts to do all the heavy install of the development platforms I usually use.

            It started by just a few scripts, for PHP and MySQL, but then I noticed that in the company I was working for, many people had troubles and spent many time setting their environment up. Then I decided to also create scripts for setting up other technologies, to help them getting started.

            After some time using the scripts for setting up my machine with different development environments, I noticed that there also troubles with some other tools we used on the day-by-day that could be fixed and automated with some scripts.

            Some of them were to downgrade a tool used with pre-commit, since it had one of its dependencies updated - what broke the tool - but it was not updated itself to fix it - and a fix to be able to correctly execute Terraform commands from M1 Macs, since the projects used a plugin that didn't have an ARM64 build available.

            All these scripts were then gathered in a GitHub public repository so everyone could use them if needed.
        `
    },
    crypto_exchange: {
        type: projectTypes.mobile,
        category: categories.at_work,
        name: "Cryptocurrency exchange",
        year: "2022",
        resources: [
            "Node JS", 
            "TypeScript",
            "Binance API",
            "RabbitMQ",
            "Jest",
            "PostgreSQL",
            "Terraform",
            "AWS",
        ],
        description: `
            After a few months helping the project's back-end team by constantly reviewing their code, I started working on it directly.

            The main goal was to create a ctyptocurrency exchange inside a digital bank app, so user could buy, convert and sell assets in an easy and integrated way.

            During its development, I helped the team to identify risky situations and find convertion errors that could lead to issues to the digital bank company.

            Besides the usual complexity of the back-end, this project also involved integrating the code with Binance APIs - where the cryptocurrencies were actually traded - and manage transactions using RabbitMQ as a message broker.

            All the main functionalities and their behaviors were tested using Jest, keeping a culture of testing as much as possible during the back-end development.

            I also needed to make some changes on the back-end infrastructure using Terraform and accompany logs on AWS to identify and solve some issues.
        `
    },
    thaw: {
        type: projectTypes.mobile,
        category: categories.at_work,
        link: { 
            url: "https://github.com/vinibs/fcm-notification-tester", 
            title: "Firebase POCs on GitHub",
            text: "View the POCs on GitHub",
        },
        image: { title: "ACG Thaw screenshot", file: "thaw.webp" },
        name: "ACG Thaw",
        year: "2021 - 2022",
        resources: [
            "Python", 
            "Django",
            "Django Rest Framework",
            "Firebase",
            "Pytest",
            "PostgreSQL",
            "AWS",
            "Terraform",
        ],
        description: `
            Thaw is an app created for controlling heating insoles.

            The app was built for both Androind and iOS and I was the person in charge of planning and developing its backend for the first version.

            The backend development had a few challenges, such as integrating the authentication with a Magento system maintened by an foreign team, defining and organizing the behavior of the devices should have (since there were usually two different devices, but the pair needed to be considered as only one) and integrating the backend with a weather platform to send push notifications to the app.

            In this project, we used Firebase to send push notifications. To get to know the correct parameters the back-end should send so the notifications appear correctly on the different operating systems, I also developed two proves of concept (POCs) - one for Android, using native Kotlin, and one for iOS, using Swift - to better understand what data each OS needed to receive.

            Keeping the culture of automated testing, all the backend main functions and its integrations were tested through test cases written with Pytest.

            I was also responsible for setting and managing the project's backend environments (staging and production) on AWS through Terraform scripts.
        `
    },
    etch: {
        type: projectTypes.mobile,
        category: categories.at_work,
        image: { title: "Etch screenshot", file: "etch.webp" },
        name: "Etch Travel",
        year: "2021",
        resources: [
            "Python", 
            "Django",
            "Django Rest Framework",
            "Google Maps API",
            "Pytest",
            "PostgreSQL",
        ],
        description: `
            Etch is an app to help people organize trips together, in a smarter way.

            Its main idea is to allow planning the itinerary for a trip and add friends who will travel together. This way, every involved person can easily know the travel plans, such as "who", "where" and "when".

            It was an iOS app, but I worked on the back-end, creating the needed endpoints and integrating with Google Maps API to get places' data.
            
            Sometimes I also helped the front-end/mobile team to find some design inconsistencies across the UI, such as elements that had a background in one screen but didn't have in another.

            Since my first day on this project, the automated tests for the backend services and endpoints were essential for any delivery, so I learn many things about testing during this project.
        `
    },
    auth_server: {
        type: projectTypes.backend,
        category: categories.at_work,
        name: "Genesis Auth Server",
        year: "2020",
        resources: [
            "OAuth",
            "PHP",
            "MySQL",
            "AWS",
            "Jenkins",
        ],
        description: `
            This project started by a need of allowing users of one application to be redirected and automatically authenticated in another application from a partner company. That meant we needed to provide the user's data to this second application.

            To do that, it was created a server that, following the OAuth 2 protocol, allowed the user to authorizate the use of its data on the partner client once and automatically access the second app in the future.

            I worked on this project since its planning and technology definitions until its deploy and followed up with its first monts in production. I built its internal structure to be mostly like an MVC structure, but didn't use any framework, and designed all the flows, even simulating the behavior and frontend of both parts.

            It's considered one of the most challenging projects I worked on, since it presented me new concepts such as the OAuth 2 protocol and its flows  .
        `
    },
    cliconnect: {
        type: projectTypes.mobile,
        category: categories.at_work,
        image: { title: "CliConnect screenshot", file: "cliconnect.webp" },
        name: "CliConnect",
        year: "2020",
        resources: [
            "React",
            "Cordova",
            "PHP",
            "MySQL",
            "Jenkins",
        ],
        description: `
            A mobile app to let the client follow up with its seed shipment in real time among many different farms is what defines CliConnect.

            Built using React and ported to a mobile app using Cordova, its goal was to give Genesis's clients an easy way to check their shipments in real time in a national scale.

            It was my first contact with React, so I needed to learn it to go on with the project. I ended up being the only maintainer of this project and leter of a new one, very similar, but focused on a single client.

            After some time working on it, I also organized a workshop to teach my teammates the basics of the technology and the build and deploy processes.
        `
    },
    mgeld: {
        type: projectTypes.mobile,
        category: categories.at_work,
        image: { title: "mGeld screenshot", file: "mgeld.webp" },
        name: "mGeld",
        year: "2020",
        resources: [
            "Java",
            "Native Android",
            "PHP",
            "MySQL",
            "Jenkins",
        ],
        description: `
            mGeld is the Android app used by Genesis's employees in the field to register their activities on some processes, that later can be seen and managed through Geld.

            I was responsible for two different integrations with external apps. One of them was basically a web view that needed to be open during a specific process.

            The second integration I worked on was to be able to open a german partner's app that should use the phone's camera to read some seed properties and return these values to the app's main process screen.

            Even though it looks simple, it brough many complexities and was a great experience on dealing with native Android technology and communicating with foreign partners.

            Besides the app itself, I also worked on the web service the app communicates to, which was a completely different project from Geld (web), even though they both communicate with the same databases and manage some of the same processes.
        `
    },
    geld_datasource: {
        type: projectTypes.backend,
        category: categories.at_work,
        name: "Geld Data Source",
        year: "2019 - 2020",
        resources: [
            "Java",
            "Springboot",
            "MySQL",
            "AWS",
            "Jenkins",
        ],
        description: `
            This project was an abstraction inside a partner application to access Geld data and generate charts and statistics.

            The partner application was built using Java and Springboot, so every data source created for it uses the same technologies.

            It required, for gathering some information, to change the database structure by creating read-only tables with pre-processed data (materialize data) to improve speed on the report generation.

            I started working on this project sharing some duties with a few teammates, but ended up being the person in charge for all the management of this data source after some time.
        `
    },
    geld: {
        type: projectTypes.web,
        category: categories.at_work,
        image: { title: "Geld screenshot", file: "geld.webp" },
        name: "Geld",
        year: "2019 - 2020",
        resources: [
            "PHP",
            "HTML",
            "CSS",
            "jQuery",
            "Cypress",
            "MySQL",
            "AWS",
            "Jenkins",
        ],
        description: `
            Geld is a web platform for managing Genesis's internal field operations.

            It is used by the company's employees to register and manage their activities on the field, such as classifying seeds, and manage the status of many internal processes.

            In 2020, I worked on the addition of the port operations feature to the system, which consisted on a sub-system focused on managing operations inside cargo ships.

            When I started working on this project, it had three different versions, with different UIs and in different repositories, so each change done in the main repository needed to be done again in the other two.

            I was then responsible for unifying these three projects into a single code base and planned and executed it, guiding my team on how to approach things, and we successfully converted three different systems that worked the same way into a single system that changed its appearance and details, such as the database it connected to, by just changing an environment variable.

            After some time working on this project, I started working with a QA teammate on automated UI tests for this system using Cypress. We developed many tests for the main parts of the system, but the project didn't last a long time.
        `
    },
    tsanalysis: {
        type: projectTypes.web,
        category: categories.personal,
        image: { title: "TSAnalysis screenshot", file: "tsanalysis.webp" },
        name: "Time Series Analysis System",
        year: "2019",
        resources: [
            "Python", 
            "Django", 
            "JavaScript", 
            "HTML", 
            "CSS", 
            "jQuery", 
            "D3.js", 
            "Responsive", 
            "SQLite", 
            "PostgreSQL",
            "Heroku",
            "AWS S3",
        ],
        description: `
            This was my graduation's final project, made with various technologies that I had to learn just to get it done.

            It is made in Python, over the Django framework, and uses some libraries as jQuery and D3.js in the front-end to simplify the DOM elements handling.

            The idea behind the project was to create an online platform to read and analyze time series data, allowing people with no previous knowledge on the subject to input their records and have some charts generated and their data's analysis simplified through an intuitive user interface.

            To deploy it I had a few issues regarding free infrastructure, since limitations on file storage on Heroku. This led me to deploying the backend on Heroku and integrate it with AWS S3 to store the user's uploaded files.
        `
    },
    lira: {
        type: projectTypes.web,
        category: categories.personal,
        link: { 
            url: "https://github.com/vinibs/lira", 
            title: "Lira on GitHub",
            text: "View on GitHub",
        },
        name: "Lira",
        year: "2018 - 2020",
        resources: [
            "Vanilla JavaScript", "HTML", "CSS", "Responsive",
        ],
        description: `
            Lira (or LiraJS) is a Single Page Application (SPA) and Progressive Web App (PWA) microframework.

            It brings a simple router made in pure JS and a file/directory structure to simplify some basics of SPAs and PWAs, using the concepts of HTML Custom Elements.

            The reason why this project was created is similar to Luvi's history. I started learning front-end frameworks an didn't understand (and like) how they work and their complexity, so I decided to create my own.

            An idea behind it is to keep it the most near as using the default base language as possible, instead of creating a completely new syntax.

            The funniest part about its history is that its logo came to my mind before even thinking about a name, so it was the logo that defined how it was going to be called.

            It is a great way to learn new concepts and front-end technologies, even though it has its limitations.

            And, hey, look! <b>You are seeing it working right now!</b> This website is built over Lira to test its capabilities and limitations in practice.
        `
    },
    luvi: {
        type: projectTypes.backend,
        category: categories.personal,
        link: { 
            url: "https://github.com/vinibs/luvi", 
            title: "Luvi on GitHub",
            text: "View on GitHub",
        },
        name: "Luvi",
        year: "2017",
        resources: [
            "PHP",
        ],
        description: `
            Luvi is a PHP microframework.

            When I started using frameworks, I got bothered for not understanding how things work behid the scenes and how much resources (many of them not useful for my use cases at the time) they bring, so I decided to create my own framework (a generic MVC structure) to better understand the architecture and fundamentals, thinking of being the simplest as possible.

            Then Luvi was born. A simple structure that, in its first version, tried to abstract database connections and authentication flow. However, in newer versions - remaking it with a different structure -, some features were removed and other were added, such as support for many localization strings.

            The main focus of this project is to understand technologies and architecture patterns, eventually being useful as a base for personal projects.
        `
    },
    siconf: {
        type: projectTypes.web,
        category: categories.freelance,
        image: { title: "SICONF screenshot", file: "siconf.webp" },
        name: `Assutef's SICONF`,
        year: "2017",
        resources: [
            "PHP", 
            "HTML", 
            "CSS", 
            "jQuery", 
            "Bootstrap", 
            "Laravel",
            "AdminLTE",
            "MySQL",
            "Responsive",
        ],
        description: `
            A platform to show to Assutef's members their expenses using the association benefits.

            It was developed by me and one more person, and I worked with the database modeling, some back-end features and front-end details to improve the user experience.

            The system was planned to allow the association members to check their expenses and make it easier to the administration to see usage charts and generate reports and the files that need to be sent to the bank.
        `
    },
    pdti: {
        type: projectTypes.web,
        category: categories.at_work,
        image: { title: "PDTI screenshot", file: "pdti.webp" },
        name: "PDTI",
        year: "2016 - 2018",
        resources: [
            "PHP", 
            "HTML", 
            "CSS", 
            "jQuery", 
            "Bootstrap", 
            "PostgreSQL",
        ],
        description: `
            A system to manage and distribute the academic scholarships of UTFPR (Technological Federal University of Paraná).

            The system had more than 3,000 users in 2018 and, in the previous year, it was used to manage more than 2,600 academic scholarships inside the institution.

            I started working on it after its essential features were already developed, but there were many improvements that could be done. I created some new functionalities and worked on trying to bring it a better user experience.
        `
    },
    intranet: {
        type: projectTypes.web,
        category: categories.at_work,
        image: { title: "Intranet/Support System screenshot", file: "intranet.webp" },
        name: "UTFPR Intranet/Support System",
        year: "2016 - 2018",
        resources: [
            "PHP", 
            "HTML", 
            "CSS", 
            "JavaScript", 
            "jQuery", 
            "Bootstrap", 
            "PostgreSQL",
        ],
        description: `
            An internal system used by teachers, students and employees at UTFPR (Technological Federal University of Paraná), at both campuses Londrina and Cornélio Procópio.

            The system is made as a collaborative project between both campuses, created to simplify some internal processes of the institution in a virtual environment.

            It had more than 3,500 users in 2018 and offers many different functionalities, like campus TV program control, the complete process of teacher substitution in a class, from the request to the decision and more.
        `
    },
    events: {
        type: projectTypes.web,
        category: categories.at_work,
        link: { 
            url: "https://eventos.cp.utfpr.edu.br", 
            title: "Visit Events Management System",
            text: "Visit the website",
        },
        image: { title: "Events Management System screenshot", file: "events.webp" },
        name: "UTFPR Events Management System",
        year: "2016 - 2018",
        resources: [
            "PHP", 
            "HTML", 
            "CSS", 
            "jQuery", 
            "Bootstrap", 
            "Laravel", 
            "PostgreSQL",
        ],
        description: `
            A Laravel + Bootstrap system to set and manage an internal event of the campus Cornélio Procópio of UTFPR (Technological Federal University of Paraná), which was used by the main events of the campus.

            Since its first version, in 2016, it has been used in more than 6 events that occur during the year inside the university, like academic weeks and internship events.

            It was created as a generic system to manage a single event, so each event had to create a new copy of the project, customize it and host it, instead of being a single platform for many events.

            There was also a main page that concentrates all the current ongoing events, simplifying the access to each one of them.

            Between 2016 and 2018, I worked both at the back-end and the front-end on this project, since its first version.
        `
    },
    wwb: {
        type: projectTypes.web,
        category: categories.freelance,
        image: { title: "Worlds We Build screenshot", file: "worldswebuild.webp" },
        name: `Worlds We Build`,
        year: "2015",
        resources: [
            "PHP", 
            "HTML", 
            "CSS", 
            "MySQL",
            "Responsive",
        ],
        description: `
            Giovanna Bueloni's web portfolio, Worlds We Build.

            Created to expose her works, it was designed and developed from scratch, without any framework, with a simple internal admin panel so she could easily post her newer works.

            It stayed availabe online for a few years but had to be shut down due to infrastructure issues back on 2019.
        `
    },
    cadeu: {
        type: projectTypes.web,
        category: categories.personal,
        image: { title: "Cadêu screenshot", file: "cadeu.webp" },
        name: "Cadêu",
        year: "2014 - 2019",
        resources: [
            "PHP", 
            "HTML", 
            "CSS", 
            "Vanilla JavaScript", 
            "Responsive", 
            "MySQL",
        ],
        description: `
            Cadêu was my first personal project, born from the question "what sites/services do I currently have online accounts in?". The initial idea was to check the internet to discover if a given e-mail was already registered in each visited site and give the user a list of results.

            However, it ended up not being possible to be done - at least at that time, with the knowledge I had -, so I decided to go through a different approach: a web platform so I can manually register where I have an account, possibly also registering a password tip (not the full password, for security reasons) and which e-mail address I used.

            As my first personal project, it was a great way to learn things, such as CSS, JavaScript and responsivity. It was maintained and had new versions until 2019, when I decided to shut it down since there were only few users and I had some issues finding a free infrastructure to keep it in.

            During its lifetime, I also created a "submodule" for it, called Cadêu Steps. Its idea was to provide users with a community-maintained platform to check the step-by-step to delete accounts from specific sites/services - usually it's easy to know how to create an account, but how to delete it can be a tricky info to find, in some cases.

            Besides developing the website, as a monolhitic PHP/HTML application, built from scratch without any framework, I also designed its logo an all its icons so they could be as customizable as possible.
        `
    },
    bochabrasil: {
        type: projectTypes.web,
        category: categories.freelance,
        link: { 
            url: "http://bochabrasil.com.br", 
            title: "Visit Bocha Brasil",
            text: "Visit the website",
        },
        image: { title: "Bocha Brasil screenshot", file: "bochabrasil.webp" },
        name: "Bocha Brasil",
        year: "2010 - 2019",
        resources: [
            "PHP", 
            "HTML", 
            "CSS", 
            "Vanilla JavaScript", 
            "Responsive", 
            "MySQL",
        ],
        description: `
            The website of Bocha Brasil, a small family business that sells ball kits for paralympic boccia.

            As my first website project, its first version was designed through Google Sites, back to 2010, before I even started studying about technology.

            Since then, the website had a few newer versions, changing its design and its contents. The last one was made in 2016 and added resources such as a simple integration with payment methods, an internal panel where sells details can be checked and news can be posted.

            After moving from Google Sites, all versions were made from scratch, without any framework, and were designed to have a responsive UI so users can use it regardless of their device.

            I also participate in the logo design changes a few times and was responsible for shooting and editing the photos used in the website and designing its icons and illustrations.
        `
    },
}