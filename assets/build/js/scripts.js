document.addEventListener('DOMContentLoaded', () => {


    const Calc = {

        init:function(){
            Calc.variables()
        },

        variables:function(){
            const rounding = document.getElementById('rounding');
            const number = document.querySelector('.number');
            const figure = document.querySelector('.figure');
            const colorBox = document.querySelectorAll('.colorBox');
            const rotate = document.getElementById('rotate');
            const width = document.getElementById('width');
            const height = document.getElementById('height');
            const widthSize = document.querySelector('.width');
            const heightSize = document.querySelector('.height');

            const shadowX = document.getElementById('shadowX');
            const shadowY = document.getElementById('shadowY');
            const shadowF = document.getElementById('shadowF');

            const shadowArray = [
                shadowX,
                shadowY,
                shadowF
            ];


            const shadowRes = document.querySelector('.shadow');
            const shadowColor = document.querySelectorAll('.shadow-color div');

            const getTheCode = document.getElementById('getTheCode');
            const formCode = document.querySelector('.getTheCode__form');


            const skew = document.getElementById('skew');


            Calc.sizeWidth(width, widthSize, figure);
            Calc.sizeHeight(height, heightSize, figure);
            Calc.transform(rotate, number, figure);
            Calc.rounding(rounding, number , figure);
            Calc.colorBox(colorBox, number , figure);
            // Calc.shadow(shadowRes, shadowArray, shadowColor, figure);
            // Calc.shadowColor(shadowColor);

        },

        sizeWidth:function (width, widthSize, figure) {
            width.addEventListener('mousemove', () =>{
                Calc.sizeRes(width, figure, widthSize);
            });
            width.addEventListener('mouseout', () =>{
                widthSize.style.opacity = '0';
            });
        },

        sizeHeight:function (height, heightSize, figure) {
            height.addEventListener('mousemove', () =>{
                Calc.sizeRes(height, figure, heightSize);
            });
            height.addEventListener('mouseout', () =>{
                heightSize.style.opacity = '0';
            });
        },

        sizeRes:function (x, figure, size) {
            let sizeVal = Number(x.value);
            let sizeId = x.id;
            if (sizeId === 'width'){
                figure.style.width = sizeVal + 'px'
            }
            if (sizeId === 'height'){
                figure.style.height = sizeVal + 'px'
            }
            size.style.opacity = '1';
            size.textContent = sizeVal +'px';
        },

        rounding:function (rounding, number , figure) {
            rounding.addEventListener('mousemove', () =>{
                let roundingVal = rounding.value;
                figure.style.borderRadius = roundingVal + 'px';
                number.textContent = roundingVal +'px';
                number.style.opacity = '1';
            });
            Calc.delete(rounding, number);
        },

        colorBox:function (colorBox, number , figure) {
            colorBox.forEach((colorBox) =>{
                let boxColor = colorBox.getAttribute('value');
                colorBox.addEventListener('click', () =>{
                    figure.style.background = boxColor;
                });
                colorBox.addEventListener('mousemove', () =>{
                    number.textContent = colorBox.dataset.color;
                    number.style.color = boxColor;
                    number.style.opacity = '1';
                });
                Calc.delete(colorBox, number);
            });
        },

        transform:function (rotate, number, figure, skew) {
            rotate.addEventListener('mousemove', () =>{
                let rotateVal = rotate.value;
                figure.style.transform = 'rotate(' + rotateVal + 'deg )';

                number.style.opacity = '1';
                number.textContent = rotateVal + ' deg';
            });
            Calc.delete(rotate, number);
        },





















        delete:function(x, number){
            x.addEventListener('mouseout', () =>{
                number.style.opacity = '0';
                number.style.color = '#000';
            });
        },

        test:function (){
            console.log(1)
        },
        // Calc.test()


        // shadow:function (shadowRes, shadowArray, shadowColor, figure) {
        //     shadowRes.addEventListener('click', () =>{
        //
        //     });
        //     let shadowPos = ['0', '0', '0'];
        //     shadowRes.querySelectorAll('input').forEach((input, i) =>{
        //         input.addEventListener('mousemove', () =>{
        //             shadowPos[i] = input.value;
        //
        //             shadowColor.forEach((y) =>{
        //                 if (y.classList.contains('active')){
        //
        //                     // let colorVal = y.value;
        //                     console.log(y)
        //                 }
        //             });
        //
        //             // figure.style.boxShadow = shadowPos[0] + 'px ' + shadowPos[1] + 'px ' + shadowPos[2] + 'px ' + colorVal;
        //         })
        //     });
        // },
        //
        //
        // shadowColor:function (shadowColor) {
        //     shadowColor.forEach((color) =>{
        //         color.addEventListener('click', () =>{
        //             shadowColor.forEach((x) =>{
        //                if ( x.classList.contains('active')){
        //                     x.classList.remove('active');
        //                 }
        //             });
        //             color.classList.add('active');
        //         });
        //     });
        // }





        // getTheCode:function (getTheCode, formCode, rotateVal) {
        //     getTheCode.addEventListener('click', () =>{
        //         formCode.textContent = 1;
        //         let rot = rotate();
        //         console.log(rot)
        //     })
        // }


        // rotate:function (rotate, number, figure) {
        //     rotate.addEventListener('mousemove', () =>{
        //         let rotateVal = rotate.value;
        //         figure.style.transform = 'rotate(' + rotateVal + 'deg )';
        //
        //         number.style.opacity = '1';
        //         number.textContent = rotateVal + ' deg';
        //         return rotateVal;
        //     });
        //     rotate.addEventListener('mouseout', () =>{
        //         number.style.opacity = '0';
        //     });
        //
        // },



    };
    Calc.init();
    window.Calc = Calc;
});


