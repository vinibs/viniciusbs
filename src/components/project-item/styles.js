export const styles = `
.project {
    align-items: center;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    margin: 80px auto 0;
}

.project-screen {
    max-width: 730px;
}

.project-content {
    max-width: 500px;
    padding: 5px 25px;
}


.project h3 {
    color: rgb(0,0,0);
    font-weight: 100;
    margin: 10px auto 30px;
    text-align: center;
    text-transform: uppercase;
}

.project img {
    width: 95%;
    border: 1px solid rgb(230,230,230);
    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
    border-radius: 10px;
}

.screenshot {
    width: 95%;
    max-width: 95%;
    min-width: 95%;
    padding-bottom: 56.25%;
    border: 1px solid rgb(210,210,210);
    box-shadow: 0 3px 10px rgba(0,0,0,0.1);
    border-radius: 10px;
    margin: auto;
    background: url('../images/screens.jpg') no-repeat top center;
    background-size: cover;
}

    .screenshot.lira {
        background-position: 0 0;
    }
    .screenshot.luvi {
        background-position: 0 11%;
    }
    .screenshot.cadeu {
        background-position: 0 22%;
    }
    .screenshot.pdti {
        background-position: 0 34.23%;
        padding-bottom: 48%;
    }
    .screenshot.intranet {
        background-position: 0 44.18%;
        padding-bottom: 47.3%
    }
    .screenshot.events {
        background-position: 0 54.07%;
        padding-bottom: 47.8%
    }
    .screenshot.siconf {
        background-position: 0 64.94%;
        padding-bottom: 54.4%
    }
    .screenshot.bochabrasil {
        background-position: 0 76.5%;
        padding-bottom: 54.4%
    }
    .screenshot.wwb {
        background-position: 0 88.2%;
        padding-bottom: 55%;
    }
    .screenshot.tsanalysis {
        background-position: 0 99.6%;
        padding-bottom: 55%
    }

.project .resources {
    color: rgb(110,110,110);
}

.project .projectlink {
    margin-top: 40px;
}

    .projectlink.disabled, .projectlink.disabled a {
        color: rgb(200,200,200);
        cursor: default;
    }

    .projectlink.disabled span {
        text-decoration: underline;
        font-style: italic;
    }

.project .half {
    max-width: 700px;
}

@media (min-width: 901px) {
    /* Projetos de exibição par */
    .project.even > .project-screen {
        grid-column: 1/5;
        grid-row: 1;
        justify-self: end;
        width: 100%;
    }

    .project.even > .project-content {
        grid-column: 5/8;
        grid-row: 1;
        justify-self: start;
    }

    .project.even > .project-content > * {
        text-align: left;
    }

    /* Projetos de exibição ímpar */
    .project.odd > .project-screen {
        grid-column: 4/8;
        grid-row: 1;
        justify-self: start;
        width: 100%;

    }

    .project.odd > .project-content {
        grid-column: 1/4;
        grid-row: 1;
        justify-self: end;
    }

    .project.odd > .project-content > * {
        text-align: right;
    }
}

@media (max-width: 900px) {
    .project {
        padding: 15px;
    }
    
    .project-screen {
        justify-self: center;
        width: 100%;
    }

    .project > div {
        grid-column: 1/8;
        text-align: center;
    }

    .project .projectlink {
        text-align: center;
    }

    .project-content {
        padding: 10px;
        max-width: none;
    }

    .project-content > .description {
        text-align: justify;
    }
}
`
