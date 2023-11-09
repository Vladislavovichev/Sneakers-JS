class Slider {
    constructor() {
        this.offset = 0//смещение от левого края
        this.amountOfSlides = 3 //количество слайдов
    }

    right(){
        this.offset-=100
        if (this.offset<-100*(this.amountOfSlides-1)) {
            this.offset=0
        }
        document.querySelector('.slider-line').style.left=this.offset +'%'
    }
    left(){
        this.offset+=100
        if (this.offset>0) {
            this.offset=-100*(this.amountOfSlides-1)
        }
        document.querySelector('.slider-line').style.left=this.offset +'%'
    }

    render () {
        document.querySelector('.slider').innerHTML=`
        <div class="slider-line">
            <div class="first-slide-buy">
                <h1><span>Stan Smith</span>, Forever</h1>
                <a href="">КУПИТЬ</a>
            </div>
        <img src="./images/slide.png" alt="">
        <img src="./images/slide.png" alt="">
        <img src="./images/slide.png" alt="">
        </div>
        <img class="right" src="./images/right.svg" alt="" onclick="slider.right()">
        <img class="left" src="./images/right.svg" alt="" onclick="slider.left()">
        `
    }
}

const slider = new Slider()