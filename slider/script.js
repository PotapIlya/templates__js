const img  = document.querySelectorAll('.wrapperImg h1'),
     li = document.querySelectorAll('ul li'),
     prev  = document.querySelector('.prev'),
     next  = document.querySelector('.next'),
    resImage = document.getElementById('image');
    ul = document.getElementById('ul');

let i = 0;

img[0].classList.add('active');
li[0].classList.add('activeLi');


li.forEach((item, index) =>{
    item.addEventListener('click', () =>
    {
        img.forEach(x => x.classList.remove('active'));
        img[index].classList.add('active');

        li.forEach(y => y.classList.remove('activeLi'));
        li[index].classList.add('activeLi');
        i = index;
    });
});

next.addEventListener('click', () =>{
    i++;
    if (i >= img.length )
    {
        img[img.length-1].classList.remove('active');
        li[img.length-1].classList.remove('activeLi');

        i = 0;

        img[0].classList.add('active');
        li[0].classList.add('activeLi');
    }
    else
    {
        img[i-1].classList.remove('active');
        img[i].classList.add('active');

        li[i-1].classList.remove('activeLi');
        li[i].classList.add('activeLi');
    }
});

prev.addEventListener('click', () =>{
    i--;
    if (i < 0)
    {
        i = img.length - 1;
        img[0].classList.remove('active');
        img[img.length-1].classList.add('active');

        li[0].classList.remove('activeLi');
        li[img.length-1].classList.add('activeLi');
    }
    else
    {
        img[i+1].classList.remove('active');
        img[i].classList.add('active');

        li[i+1].classList.remove('activeLi');
        li[i].classList.add('activeLi');
    }



    console.log(i)
});






















