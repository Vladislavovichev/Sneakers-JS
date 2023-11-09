class Spinner {

    clear() {
        document.querySelector('.spinner').innerHTML = '';
    }

    render() {
        document.querySelector('.spinner').innerHTML = `
            <div class="spinner-container">
                <img class="spinner__img" src="./components/Spinner/img/circle.svg" >
            </div>
        `
    }
}

const spinner = new Spinner ()
