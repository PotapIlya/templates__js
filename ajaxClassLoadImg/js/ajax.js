if (document.querySelector('.deleteItem'))
{
    const form = document.querySelector('.deleteItem'),
        input = form.querySelector('input'),
        btn = form.querySelector('button');


    btn.addEventListener('click', (event) =>{
        event.preventDefault();

        // let formData = new FormData([input])


        const text = input.value;
        
        // console.log(formData)

        const request = new XMLHttpRequest();
        const url = "/modules/load.php";
        const params = "text=" + text;

        // console.log(params)

        request.responseType =	"json";
        request.open("POST", url, true);
        request.setRequestHeader("Content-type", "form/multipart");

        request.addEventListener("readystatechange", () => {
            if (request.readyState === 4 && request.status === 200) {
                let response = request.response;

                console.log(response);

                
            }
        });

        request.send(params);

    })
}



















// if (document.querySelector('.deleteItem')){
//     const form = document.querySelector('.deleteItem'),
//         input = form.querySelector('input'),
//         btn = form.querySelector('button');


//     btn.addEventListener('click', (event) =>{
//         event.preventDefault();
//         const text = input['size'];
        
//         // console.log(text)

//         const request = new XMLHttpRequest();
//         const url = "/modules/load.php";
//         const params = "text=" + text;

//         // console.log(params)

//         request.responseType =	"json";
//         request.open("POST", url, true);
//         request.setRequestHeader("Content-type", "form-data");

//         request.addEventListener("readystatechange", () => {
//             if (request.readyState === 4 && request.status === 200) {
//                 let response = request.response;

//                 console.log(response);

                
//             }
//         });

//         request.send(params);

//     })
// }