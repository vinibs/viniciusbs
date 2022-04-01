export const styles = `
    .circle {
        border: 2px solid rgb(230,230,230);
        box-sizing: border-box;
        border-radius: 50%;
        display:inline-block;
        height: 100px;
        margin: 10px;
        position: relative;
        text-align: center;
        transition: linear 0.2s;
        width: 100px;
    }

    .circle > .overlay {
        align-items: center;
        border-radius: 50%;
        display:grid;
        height: 100%;
        margin: 0 2px;
        position: absolute;
        width: calc(100% - 1px);
    }

    .circle:hover {
        border-color: rgb(90,90,90);
        border-width: 3px;
    }
`