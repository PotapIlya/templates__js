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

        this.shadowArray = [
            this.shadowX,
            this.shadowY,
            this.shadowF
        ];

        this.init();
    }

    init(){
        this.changeWidth();
        this.changeHeight();
        this.rotateFunct();
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
            this.widthSize.innerText = value.width
        }
        if (value.height){
            this.heightSize.innerText = value.height;
        }
    }

    rotateFunct(){
        this.rotate.addEventListener('mousemove', (e) => {
            this.figure.style.transform = 'rotate(' + rotateVal + 'deg )';
        });
    }

}

document.addEventListener('DOMContentLoaded', () => {
    new Transform();
});
