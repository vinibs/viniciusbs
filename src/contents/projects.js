export const pageTitle = "Featured Projects"

const categories = {
    corporate: "corporate",
    personal: "personal",
    freelance: "freelance",
}

const projectTypes = {
    backend: "backend",
    cli: "cli",
    mobile: "mobile",
    web: "web",
}

const personalProjects = {
    ai_travel_planner: {
        type: projectTypes.web,
        category: categories.personal,
        link: {
            url: "https://github.com/vinibs/ai-travel-planner",
            title: "AI Travel Planner on GitHub",
            text: "View on GitHub",
            icon: 'github',
        },
        image: { title: "AI Travel Planner", file: "ai-travel-planner.webp" },
        name: "AI Travel Planner",
        year: "2024",
        resources: [
            "React",
            "Gemini API",
            "PoC",
            "LLM Orchestration",
            "Structured Outputs",
        ],
        description: `
            A proof of concept developed to explore non-conversational interfaces for Large Language Models (LLMs), shifting the paradigm from traditional chat formats to a utility-driven, structured data flow.
            
            Based on minimal inputs — destination and duration — the application orchestrates calls to the Gemini API to generate contextualized daily itineraries, segmented by time periods and integrated with cost estimations. The core technical objective was to abstract prompt engineering entirely, leveraging generative AI as a structured background data engine behind a deterministic user interface.
        `
    },
    env_setup: {
        type: projectTypes.cli,
        category: categories.personal,
        link: {
            url: "https://github.com/vinibs/environment-setup",
            title: "Environment setup on GitHub",
            text: "View on GitHub",
            icon: 'github',
        },
        name: "Environment setup CLI",
        year: "2022",
        resources: [
            "Shell Script",
            "Platform Engineering",
            "Developer Experience (DX)",
            "Environment Provisioning"
        ],
        description: `
            The project originated from a personal need to automate system provisioning and eliminate configuration drift following local machine formatting. Initial automation focused on scripting the installation and configuration of core development platforms, such as PHP and MySQL.

            The scope expanded upon identifying significant onboarding friction and environment replication bottlenecks across the engineering team. To streamline team readiness, the scripts were consolidated and extended to support multiple technology stacks, abstracting environment setup complexities for the wider organization.
            
            As adoption grew, the tooling evolved to resolve specific ecosystem compatibility issues of the period. Notable features included implementing time-bound workarounds for running legacy Terraform providers lacking native ARM64 builds during the early Apple Silicon transition, alongside introducing precise version pinning to mitigate immediate breaking changes in upstream pre-commit hook dependencies.
        `
    },
    lira: {
        type: projectTypes.web,
        category: categories.personal,
        link: {
            url: "https://github.com/vinibs/lira",
            title: "Lira on GitHub",
            text: "View on GitHub",
            icon: 'github',
        },
        name: "Lira",
        year: "2018 - 2020",
        resources: [
            "JavaScript",
            "HTML",
            "CSS",
            "Responsive",
            "Web Components",
            "Custom Elements",
            "PWA"
        ],
        description: `
            Originally named LiraJS — a title directly derived from its logo design where the letters "L" and "S" shape the anatomy of a lyre — this project is a lightweight Single Page Application (SPA) and Progressive Web App (PWA) microframework built entirely on Vanilla JavaScript. The project was conceived as a deep-dive architectural exercise to deconstruct standard front-end framework complexities and implement core SPA concepts from first principles, avoiding proprietary syntaxes in favor of native web standards.

            The microframework features a custom-built client-side router and enforces a modular directory structure utilizing HTML Custom Elements. By leveraging native Web Components, the architecture ensures a minimal abstraction layer over the standard DOM, optimizing rendering performance and ensuring compliance with modern PWA criteria.

            And hey, look at that — <strong>you are actually seeing it working right now!</strong> After all, there is no better way to test a framework's limitations than forcing it to host its own creator's website.
        `
    },
    luvi: {
        type: projectTypes.backend,
        category: categories.personal,
        link: {
            url: "https://github.com/vinibs/luvi",
            title: "Luvi on GitHub",
            text: "View on GitHub",
            icon: 'github',
        },
        name: "Luvi",
        year: "2017 - 2020",
        resources: [
            "PHP",
            "MVC Architecture",
            "i18n",
            "Software Design Patterns",
        ],
        description: `
            A minimalist PHP back-end microframework built to deconstruct and master the core mechanics of the Model-View-Controller (MVC) architectural pattern. The project emerged from a drive to investigate framework internals from first principles, aiming to develop a lightweight, streamlined alternative to standard heavy-featured frameworks by stripping away redundant overhead.

            Its initial architecture focused on encapsulating core web application requirements, specifically managing database connectivity and basic authentication state flows. Through subsequent architectural iterations, the framework underwent a structural refactoring to enhance modularity, swapping legacy components for lightweight features such as native multi-language localization (i18n) support.

            While primarily serving as an educational sandbox for software architecture and design patterns, Luvi ultimately matured into a stable, highly predictable boilerplate configuration used to bootstrap fast-prototyping personal projects.
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
            "JavaScript",
            "MySQL",
            "UI/UX Design",
            "Data Privacy",
        ],
        description: `
            The project was conceived as a personal data management solution to solve the issue of credential fragmentation, tracking where users held active online accounts. The initial architectural thesis explored automated email-based registration checks, which pivoted toward a structured web platform allowing users to manually catalog accounts, record associated email addresses, and store cryptographic hints — rather than raw credentials — to maintain a high security posture.

            As a foundational monolith built entirely from scratch without external frameworks, the application served as a multi-year engineering sandbox. It underwent continuous iterative cycles until 2019, when it was decommissioned due to infrastructure hosting constraints and a strategic shift in focus. The development process also included end-to-end product design, encompassing the identity system, logo, and custom iconography.

            During its lifecycle, the ecosystem expanded with "Cadêu Steps," a community-driven submodule designed to catalog step-by-step documentation for account deletion. This extension directly addressed dark patterns in modern user interfaces, providing a centralized repository to help users navigate complex account termination flows.
        `
    },
}

const corporateProjects = {
    ai_quality_framework: {
        type: projectTypes.cli,
        category: categories.corporate,
        name: "AI Quality Validation Framework",
        year: "2024-2025",
        resources: [
            "Squad Leadership",
            "JavaScript",
            "Cypress",
            "React",
            "CLI",
            "LLM Evaluation",
            "Automated Testing",
        ],
        description: `
            The project emerged during the technical leadership of a specific engineering squad developing an LLM-driven document evaluation platform. To address the critical challenge of tracking regressions in non-deterministic AI systems and safeguard output baselines against prompt modifications, a specialized testing framework was designed as a proof of concept to validate automated quality assurance methodologies.

            The architecture leveraged Cypress to orchestrate end-to-end user flows through a React front-end embedded with complex business rules. The core logic integrated string similarity algorithms to programmatically evaluate semantic proximity between LLM outputs and expected baselines. Controlled via a custom CLI, the tool translated qualitative text into quantitative metrics, generating comprehensive quality reports to monitor historical performance trends.

            Once the proof of concept successfully validated the approach, the framework was transitioned to the wider squad. This enablement strategy empowered the team to take ownership of the quality tool, scaling its coverage and implementing the detailed assertions required across all inner system modules and workflows.
        `
    },
    distributed_data_ingestion_platform: {
        type: projectTypes.backend,
        category: categories.corporate,
        name: "Distributed Data Ingestion Platform",
        year: "2023 - 2024",
        resources: [
            "Technical Ownership",
            "Distributed Systems",
            "Python",
            "FastAPI",
            "AWS S3",
            "AWS Fargate",
            "AWS CDK",
            "AWS SDK",
            "Docker",
        ],
        description: `
            The project involved the end-to-end architecture and development of a greenfield data ingestion platform designed to consolidate heterogeneous data streams from multiple third-party client APIs, each presenting distinct architectural standards and payload schemas. Initially bootstrapped as a FastAPI application, the system was refactored into a high-performance Python CLI to run as ephemeral, decoupled containerized tasks via AWS Fargate, utilizing a single Docker image across specialized infrastructure instances.

            To optimize ingestion throughput and overcome third-party API bottlenecks, a multi-layered parallelization strategy was engineered. The process segmented workloads by business domain contexts, targeted API parameters, and dynamic pagination chunks. Addressing the architectural challenge of parallelizing unindexed pagination without total page counts, a speculative chunking mechanism was implemented: instances evaluated boundary pages to dynamically spawn downstream containers for subsequent page ranges while concurrently processing the current chunk. This orchestration reduced baseline data collection runtime from over 4 hours to just 26 minutes.

            As the foundational owner and technical reference for the platform, this role encompassed defining the baseline infrastructure via AWS CDK and leveraging the AWS SDK for dynamic container orchestration. To guarantee long-term maintainability and platform resilience, the architecture was embedded with robust fault tolerance — including automated retry policies and real-time MS Teams alerting — alongside a comprehensive automated test suite. This technical oversight ultimately matured into a mentorship framework, guiding team members through feature expansion and cementing specialized expertise in the client's complex data domain.
        `
    },
    multiplatform_db_connection: {
        type: projectTypes.cli,
        category: categories.corporate,
        name: "Multiplatform Database Connection Protocol",
        year: "2023",
        resources: [
            "Python",
            "Shell Script",
            "Oracle DB",
            "Virtualization",
            "Cross-Platform Architecture",
            "Systems Engineering",
        ],
        description: `
            The project involved the design and execution of a standalone Proof of Concept (PoC) engineered to isolate and optimize local database connectivity vectors within highly restricted, unmanaged environments. The primary objective was to replace a legacy Java dependency with a portable, lightweight Python runtime, ensuring native database communication without requiring a pre-installed Java Virtual Machine (JVM) on host client hardware.

            The core engineering challenge demanded absolute multiplatform compatibility across heavily fragmented operating system environments, including legacy Windows distributions (Windows XP, 7, and 10) alongside diverse enterprise Linux distributions. The implementation required isolating and packaging native Oracle instant client binaries and orchestration scripts to run reliably inside uncontrolled, offline client environments.

            The development cycle leveraged rigorous cross-platform testing, deploying and executing the codebase within a dedicated virtual machine grid to simulate varied kernel behaviors and isolated networking constraints. The PoC successfully established persistent, low-overhead database handshakes across all targeted operating systems, subsequently serving as the verified structural blueprint for the application's core production connection subsystem.
        `
    },
    dynamic_infrastructure_automation_server: {
        type: projectTypes.backend,
        category: categories.corporate,
        name: "Dynamic Infrastructure Automation Server",
        year: "2023",
        resources: [
            "Node.js",
            "JavaScript",
            "Express",
            "Serverless Framework",
            "AWS EC2",
            "AWS CodeDeploy",
            "AWS S3",
            "Docker",
            "Bitbucket Pipelines",
        ],
        description: `
            The project comprised the design and development of an infrastructure automation service engineered to provision and deploy custom, isolated serverless project structures on-demand. Acting as a specialized orchestration engine, the platform translated high-level configurations into fully operational cloud infrastructure through programmatic deployment pipelines.

            The architecture was built using Node.js and Express, serving as a secure gateway that accepted system payloads to programmatically construct isolated workspaces. The server automated the dynamic generation of directory structures, tailored project dependencies, platform-specific Dockerfiles, and Serverless Framework templates. Upon preparing the runtime environment, the system executed isolated commands to trigger the Serverless engine, building and deploying custom container images directly to multi-tenant targets.

            The service operation was integrated with continuous delivery principles, utilizing Bitbucket Pipelines to enforce automated testing guardrails before provisioning. Successful builds automatically triggered localized deployments onto AWS EC2 instances managed via AWS CodeDeploy, ensuring an automated, hands-off infrastructure lifecycle.
        `
    },
    data_ingestion_and_formatting_platform: {
        type: projectTypes.backend,
        category: categories.corporate,
        name: "Data Ingestion & Formatting Platform",
        year: "2023",
        resources: [
            "Python",
            "Pandas",
            "NumPy",
            "AWS Lambda",
            "AWS S3",
            "Docker",
            "OOP",
            "Technical Mentorship",
        ],
        description: `
            The project involved the redesign and optimization of a high-throughput data formatting platform engineered to standardize raw ingestion streams into structured Parquet datasets on AWS S3 before driving downstream data engineering processes. The system utilized Python alongside Pandas and NumPy to execute complex matrix operations and deterministic data transformations within decoupled AWS Lambda functions.

            The primary architectural challenge centered on resolving a fragmented legacy ecosystem composed of isolated, redundant scripts that suffered from severe code duplication and maintainability bottlenecks. The solution involved a comprehensive refactoring of the entire execution engine, abstracting the core formatting pipelines into an elegant, polymorphic object-oriented architecture. By engineering a unified base class to govern the structural transformation lifecycle, creating new pipeline integrations was reduced to implementing source-specific overrides.

            This architectural overhaul significantly enhanced developer experience (DX) and system extensibility, supported by dedicated technical mentorship to onboard team members into core Object-Oriented Programming (OOP) concepts and design patterns. Following the deployment of the documented framework and the team's upskilling, the operational time required to configure new data sources was slashed from two business days to a matter of hours, drastically reducing engineering overhead.
        `
    },
    dbaccess: {
        type: projectTypes.backend,
        category: categories.corporate,
        name: "DBAccess",
        year: "2022",
        resources: [
            "Python",
            "Flask",
            "MySQL",
            "IAM",
            "Event-Driven Architecture"
        ],
        description: `
            The project comprised the architectural redesign and development of a next-generation database Identity and Access Management (IAM) platform for Mercado Livre. Engineered to operate at enterprise scale, the system governed user access provisions across the company's vast database clusters, integrating with core internal distributed services to streamline compliance and access workflows.

            As a member of the external engineering squad based in Brazil, the work involved closecollaboration with Mercado Livre's internal teams distributed across Argentina and Colombia, utilizing English and Spanish for cross-border alignment. The core technical challenge required rapidly mastering the project's framework stack alongside complex Event-Driven Architecture patterns mandated by the client's engineering guidelines.

            Within this ecosystem, responsibilities focused on serving as the technical reference for the external squad — translating these advanced architectural blueprints into concrete development standards and onboarding team members who had no prior Python or Flask experience. Additionally, by directly driving deep technical discussions with the client's internal engineers, this position acted as a trusted technical anchor between both teams, ensuring seamless alignment on complex requirements.
        `
    },
    crypto_exchange: {
        type: projectTypes.mobile,
        category: categories.corporate,
        name: "Cryptocurrency Exchange Platform",
        year: "2022",
        resources: [
            "Node.js",
            "TypeScript",
            "RabbitMQ",
            "Jest",
            "PostgreSQL",
            "Terraform",
            "AWS",
            "Binance API",
        ],
        description: `
            The project involved the development and integration of a high-availability cryptocurrency exchange module within an established digital banking application. Engineered to provide seamless asset trading, the system allowed users to buy, sell, and convert digital assets directly through their banking interface, requiring tight alignment between traditional fintech ledger systems and web3 environments.

            The architectural complexity centered on orchestrating secure, real-time integrations with external exchange APIs for order execution, utilizing RabbitMQ as a core message broker to manage asynchronous transaction queues safely. Given the zero-tolerance nature of financial operations, a critical contribution involved auditing transaction workflows to catch subtle floating-point precision issues and fractional discrepancies between debited values, fees, and generated receipts. Identifying these edge cases prompted a comprehensive overhaul of the transaction calculation logic to prevent long-term balance reconciliation failures and compliance risks. All core business logic and state transitions were protected by a comprehensive test suite built with Jest.

            The engagement began as an advisory code review capacity, actively auditing the codebase for several months before transitioning into direct feature development due to a deep, end-to-end understanding of the system's architecture. Beyond application-level features, responsibilities extended into cloud infrastructure engineering — modifying deployment pipelines via Terraform and leveraging AWS monitoring tools to trace distributed logs, diagnose system bottlenecks, and ensure transactional resilience.
        `
    },
    thaw: {
        type: projectTypes.mobile,
        category: categories.corporate,
        link: {
            url: "https://github.com/vinibs/fcm-notification-tester",
            title: "Firebase PoCs on GitHub",
            text: "View Firebase PoCs on GitHub",
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
            "IoT Architecture",
        ],
        description: `
            The project involved the end-to-end backend architecture and development for the launch version of Thaw, an IoT mobile application engineered to control smart heated insoles for iOS and Android devices. The system acted as the core orchestration layer connecting mobile user interfaces, external e-commerce data, and physical hardware behavior.

            The primary architectural challenges centered on identity and device synchronization. The role required integrating authentication flows with a legacy Magento e-commerce ecosystem maintained by an international team, alongside modeling complex device state logic where two independent hardware components (left and right insoles) had to be synchronized and managed as a single logical entity. To streamline the weather-driven push notification system via Firebase, specialized proof-of-concept applications were independently developed in native Kotlin and Swift. This investigative approach mapped platform-specific payload behaviors, ensuring seamless cross-platform notification delivery.

            To ensure continuous delivery and operational stability, the backend infrastructure was fully codified using Terraform scripts to provision and manage decoupled staging and production environments on AWS. Maintaining a commitment to software quality, the core business logic, edge-case hardware states, and external API integrations were comprehensively protected by an automated test suite engineered with Pytest.
        `
    },
    genesis_auth_server: {
        type: projectTypes.backend,
        category: categories.corporate,
        name: "Genesis Auth Server",
        year: "2020",
        resources: [
            "PHP",
            "Luvi",
            "OAuth 2",
            "MVC Architecture",
            "MySQL",
            "AWS",
            "Jenkins",
        ],
        description: `
            The project involved the architecture, development, and deployment of a custom OAuth 2.0 authorization server designed to enable secure identity federation and cross-product Single Sign-On (SSO) across different applications within the same corporate group. The primary objective was to facilitate seamless user redirection and automated data sharing between internal platforms, allowing users to move between the group's distinct digital products without friction.

            Engineered utilizing the Luvi micro-framework, the server was architected using a decoupled MVC structural pattern in PHP to ensure low operational overhead and granular control over security mechanisms. Under the guidance and technical mentorship of the enterprise architect, the role involved evaluating protocol flows and integrating specific libraries to streamline inter-application communication, alongside simulating end-to-end authorization handshakes.

            The scope of work spanned the entire software lifecycle—from initial protocol definition to configuring deployment pipelines via Jenkins onto AWS. Due to rigorous architectural alignment and comprehensive flow simulation, the platform achieved an exceptional stability benchmark, launching into production with near-zero bugs and maintaining complete transactional reliability over its initial months of operation.
        `
    },
    geld_datasource: {
        type: projectTypes.backend,
        category: categories.corporate,
        name: "Geld Data Source",
        year: "2019 - 2020",
        resources: [
            "Java",
            "Spring Boot",
            "MySQL",
            "AWS",
            "Jenkins",
            "Data Materialization",
        ],
        description: `
            The project involved the architecture and implementation of a specialized data abstraction layer embedded within a partner application, engineered to securely ingest data from the Geld platform to generate high-performance analytical dashboards and business intelligence metrics. The module was developed utilizing Java and the Spring Boot framework to ensure seamless alignment with the partner's core enterprise ecosystem.

            To overcome query latency during complex report generation, the database architecture was refactored to optimize read-heavy workloads. This optimization required restructuring database schemas and designing materialized, pre-processed read-only tables, significantly accelerating data retrieval and rendering times for statistical analysis.

            The engagement began within a collaborative team structure, sharing early implementation and development duties. Through demonstrated execution and technical reliability, the role progressively evolved into full lifecycle ownership, assuming sole responsibility for the feature roadmap, maintenance, and operational management of the integrated data source layer via Jenkins deployment pipelines onto AWS.
        `
    },
}

export const projects = {
    personal: {...personalProjects},
    corporate: {...corporateProjects},
}