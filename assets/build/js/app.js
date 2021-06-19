class Transform
{
    constructor()
    {
        this.rounding = document.querySelector('#rounding');
        this.number = document.querySelector('.number');
        this.figure = document.querySelector('#figure');
        this.colorBox = document.querySelectorAll('.colorBox');
        this.rotate = document.querySelector('#rotate');

        this.width = document.querySelector('#width');
        this.height = document.querySelector('#height');

        this.widthSize = document.querySelector('.width');
        this.heightSize = document.querySelector('.height');

        this.shadowX = document.querySelector('#shadowX');
        this.shadowY = document.querySelector('#shadowY');
        this.shadowF = document.querySelector('#shadowF');
        this.shadowColor = document.querySelectorAll('.shadow-color>div');


        this.skewX = document.querySelector('#skew');

        this.getCode = document.querySelector('#getCode');
        this.getCodeForm = document.querySelector('#getCodeForm');
        this.resCode = {};


        this.shadowArray = {
            x: 0,
            y: 0,
            f: 0,
            color: '#fff',
        }

        this.init();
    }

    init(){
        this.changeWidth();
        this.changeHeight();
        this.rotateFunct();
        this.colorFigure();
        this.borderRadius();
        this.getCodeFunct();
        this.skew();
        this.boxShadow();

    }

    changeWidth(){
        this.width.addEventListener('mousemove', () => {
            let value = this.width.value+'px';
            this.figure.style.width = value;
            this.changeNumberSize({ width: value });
        });
    }
    changeHeight(){
        this.height.addEventListener('mousemove', () => {
            let value = this.height.value+'px';
            this.figure.style.height = value;
            this.changeNumberSize({ height: value});
        });
    }

    changeNumberSize(value){
        if (value.width){
            this.widthSize.innerText = value.width;
            this.resCode.width = value.width;
        }
        if (value.height){
            this.heightSize.innerText = value.height;
            this.resCode.height = value.height;
        }
    }

    rotateFunct(){
        this.rotate.addEventListener('mousemove', (e) => {
            let value = e.target.value;
            this.figure.style.transform = 'rotate(' + value + 'deg )';
            this.changeCenterText(value + 'deg');
            this.resCode.rotate = value;
            this.resCode.skewX = 0;
        });
    }

    colorFigure(){
        this.colorBox.forEach( item =>{
            item.addEventListener('click', () =>{
                this.figure.style.background = item.dataset.value;
                this.changeCenterText(item.dataset.color)
                this.resCode.background = item.dataset.value;
            });
        });
    }

    changeCenterText(data){
        this.number.textContent = data;
    }

    borderRadius(){
        this.rounding.addEventListener('mousemove', (e) => {
            const value = e.target.value+'px';
            this.figure.style.borderRadius = value;
            this.resCode.borderRadius = value;

            this.changeCenterText(value);
        })
    }

    skew(){
        this.skewX.addEventListener('mousemove', (e) => {
            let value = e.target.value;
            this.figure.style.transform = `skewX(${value}deg)`;
            this.changeCenterText(value);
            this.resCode.skewX = value;
            this.resCode.rotate = 0;
        })
    }

    getCodeFunct(){
        this.getCode.addEventListener('click', () => {
            this.getCodeForm.innerText = Object.entries(this.resCode).reduce((prev, item) => {
                return `${(prev + item).split(',').join(':')};\n`;
            }, '');
        })
    }

    boxShadow(){
        this.shadowX.addEventListener('mousemove', (e) => {
            this.shadowArray.x = e.target.value;
            this.changeBoxShadow();
            this.changeCenterText(e.target.value);
        })
        this.shadowY.addEventListener('mousemove', (e) => {
            this.shadowArray.y = e.target.value;
            this.changeBoxShadow();
            this.changeCenterText(e.target.value);
        })
        this.shadowF.addEventListener('mousemove', (e) => {
            this.shadowArray.f = e.target.value;
            this.changeBoxShadow();
            this.changeCenterText(e.target.value);
        })
        this.shadowColor.forEach(item => {
            item.addEventListener('click', (e) => {
                this.shadowArray.color = e.target.dataset.value;
                this.changeBoxShadow();
                this.changeCenterText(e.target.dataset.color);
            })
        })

    }
    changeBoxShadow(){
        this.figure.style.boxShadow = `${this.shadowArray.x}px ${this.shadowArray.y}px ${this.shadowArray.f}px ${this.shadowArray.color}`
    }

}

document.addEventListener('DOMContentLoaded', () => {
    new Transform();
});
