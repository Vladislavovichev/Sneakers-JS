class Header {

    render(){
        
        let sum = 0
        Catalog.forEach(({price, id}) => {
            if (localStorageUtil.getProducts().indexOf(String(id)) !== -1) {
                sum+=price
            }
        })

        document.querySelector('.header').innerHTML = `
            <div class="header-container">
                <div class="header__logo">
                <div class="header__logo-left">
                    <img src="./images/logo.png" alt="">
                </div>
                <div class="header__logo-right">
                    <h1>SNEAKERS</h1>
                    <p>Магазин лучших кросовок</p>
                </div>
            </div>
            <div class="header__nav">
                <a onclick='cart.render()'><img src="./images/cart.svg" alt="">${sum} руб.</a>
                <a><img src="./images/user.svg" alt="">Профиль</a>
            </div>
        </div>
        `
    }
}

const headerPart = new Header()
