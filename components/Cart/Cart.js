class Cart {

    deleteItem(id) {
        localStorageUtil.putProducts(id)

        headerPart.render()
        sneakers.render()
        cart.render()
    }

    close(){
        document.querySelector('.cart').innerHTML= ``
    }

    render() {

        let itemsInCart = localStorageUtil.getProducts()

        let html = ''
        let sum = 0
        

        Catalog.forEach(({image, title, price, id}) => {
            if (itemsInCart.indexOf(String(id)) !== -1){
                html += `
                
            <div class='cart__item-wrapper'>
                <div class='cart__item'>
                    <img class='cart__item-img' src='${image}'>
                    <div class='cart__item-description'>
                    <div class='cart__item-title'>${title}</div>
                    <div class='cart__item-price'>${price} руб.</div>
                    </div>
                    <div class='cart__item-krest' onclick="cart.deleteItem('${id}', ${price})">
                        <img src='./images/krest.png'>
                    </div>
                </div>
            </div class='cart__item-wrapper'>
            `
            sum += price
        }

            
        })

        let sumProc = sum * 0.05
        
        document.querySelector('.cart').innerHTML=`
        <div class='cart-overlay'>
            <a onclick='cart.close()'></a>
            <div class="cart-item">
                <h1>Корзина</h1>
                <div class="cart__sneakers-to-buy"></div>
                <div class="cart__final">
                    <p>Итого:</p>
                    <div></div>
                    <h2>${sum} руб.</h2>
                </div>
                <div class="cart__final">
                    <p>Налог 5%:</p>
                    <div></div>
                    <h2>${sumProc} руб.</h2>
                </div>
                <a href="">Оформить заказ <img src="./images/white-right.svg" alt=""></a>
            </div>
        </div>
    `

    document.querySelector('.cart__sneakers-to-buy').innerHTML = html

    }
}

const cart = new Cart()