class Ajax
{
    constructor(form, url)
    {
        this.url = url;
        this.form   = document.querySelector(form);
        const input = this.form.querySelectorAll('input');
        const btn   = this.form.querySelector('button');
        this.start(input, btn);
    }

    start(input, btn)
    {
        btn.addEventListener('click', (e) =>{
            event.preventDefault();;
            this.add(input);
        })
    }

    add(input)
    {
        this.post_json(input)
    }
    post_json(data)
    {
        const request = new XMLHttpRequest();
        let params = this.to_string(data);

        request.responseType =	"json";
        request.open("POST", '/'+this.url, true);
        request.setRequestHeader("Content-type", "application/x-www-form-urlencoded");

        request.addEventListener("readystatechange", () => {
            if (request.readyState === 4 && request.status === 200) {
                let response = request.response;

                console.log(response);
            }
        });
        request.send(params);
    }

    to_string(data)
    {
        let res = '';
        for(let i = 0; i < data.length; i++)  
        {
            res += `data_${i}=${data[i].value}&`;
        }
        return res;
    }


}



const test = new Ajax('.addToBd', 'modules/test.php')
