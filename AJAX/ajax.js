if (document.querySelector('.addToBd'))
{
    const form = document.querySelector('.addToBd'),
        input = form.querySelector('input'),
        btn = form.querySelector('button');

    btn.addEventListener('click', (event) =>{
        event.preventDefault();
        const text = input.value;

    
        const url = "/modules/test.php";
        const params = "login=" + text;



            console.log(params);
            
        const request = new XMLHttpRequest();
        request.responseType =	"json";
        request.open("POST", url, true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        request.addEventListener("readystatechange", () => {
            if (request.readyState === 4 && request.status === 200) {
                let response = request.response;

                console.log(response);
            }
        });

        request.send(params);

    })
}