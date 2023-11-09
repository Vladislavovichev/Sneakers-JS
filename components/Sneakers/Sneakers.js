class Sneakers {
    constructor() {
        this.itemAdded = './images/btn-checked.svg'
        this.itemAdd = './images/plus.svg'
        this.isAdded = ''
    }

    addDeleteItemToCart(id, price){
        let { pushProduct, sumOfProducts } = localStorageUtil.putProducts(id, price)

        if (pushProduct) {
            this.isAdded = this.itemAdd
        } else {
            this.isAdded = this.itemAdded
        } 

        headerPart.render()
        sneakers.render()
    }

    render () {
        const productsStore = localStorageUtil.getProducts();

        document.querySelector('.sneakers').innerHTML=`
        <h1>Все кросовки</h1>
        <div class="items"></div>
        `
        let productHTML = '';
        
        Catalog.forEach(({image, title, price, id}) => {
            

            if (productsStore.indexOf(String(id)) === -1) {
                this.isAdded = this.itemAdd
            } else {
                this.isAdded = this.itemAdded
            }             

            productHTML += `
            <div class="item-wrapper">
                <div class="item">
                    <div class="item__up">
                        <img src="${image}" alt="">
                        <p>${title}</p>
                    </div>
                    <div class="item_down">
                        <div class="item_down-left">
                            <h2>ЦЕНА:</h2>
                                <h1>${price} руб.</h1>
                        </div>
                        <div class="item_down-right" onclick="sneakers.addDeleteItemToCart('${id}', ${price})">
                            <img src=${this.isAdded} alt="">
                        </div>
                    </div>
                </div>
            </div>
            `;
        });

        document.querySelector('.items').innerHTML = productHTML;
    }
}

const sneakers = new Sneakers()