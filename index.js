function render() {
    headerPart.render();
    sneakers.render()
    slider.render()
}

spinner.render();

let Catalog = [];


fetch('https://64ce87720c01d81da3eee6db.mockapi.io/Items')
    .then(res => res.json())
    .then(body => {
        Catalog = body;

        setTimeout(() => {
            spinner.clear()
            render()
        }, 1000);

    })
    .catch(() => {
        spinner.clear();
        errorPage.render();
    });

    