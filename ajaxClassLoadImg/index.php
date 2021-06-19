
<!DOCTYPE html>
<html lang="ru">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Document</title>
</head>
<body>

<form id="form" action="">
	<input name="img" type="file">
	<input name="text" type="text">
	<button type="submit">da</button>
</form>


	<ul>
		<li class="li">
			dawdaw
			<button data-img="3" data-text="23" class="button">delete</button>
		</li>
		<li class="li">
			dawdaw
			<button data-img="321323" data-text="32131224" class="button">delete</button>
		</li>
	</ul>



<script>

	class Ajax
	{
        constructor(eventer, url, name)
		{
            this.eventer = eventer;
		    this.url = url;
		    this.name = name;
		}
		form()
		{
            const form = document.querySelector(this.eventer);
            form.addEventListener('submit', (e) =>
			{
                e.preventDefault();
                this.send(form);
            });
		}
		btn()
		{
			const itemList = document.querySelectorAll(this.eventer);
			itemList.forEach((item) =>{
				item.addEventListener('click', () =>{

					let form = this.formCreate(item);
					this.send(form);
				});
			})
		}
		formCreate(item)
		{
            const formElement = document.createElement('form');
            Object.keys(item.dataset).forEach((key, i) =>{
                const input = document.createElement('input');
                input.name = key;
                input.value = Object.values(item.dataset)[i];
                formElement.insertAdjacentElement('beforeend', input);
            });
            return formElement;
		}
		async send(form)
		{
            let response = await fetch(this.url, {
                method: 'POST',
                body: new FormData(form)
            });
            if (response.ok)
            {
                let result =  await response.json();
                document.dispatchEvent(new CustomEvent(this.name, {
                    detail: result
                }));
            }
            else{
                console.log('Errors...');
            }
		}
	}

	const btn = new Ajax('.button', '/modules/load.php', 'btn')
    btn.btn()
	document.addEventListener('btn', (e) =>
	{
        console.log(e.detail)
	})

    const form = new Ajax('#form', '/modules/load.php', 'form')
    form.form()
    document.addEventListener('form', (e) =>
    {
        console.log(e.detail)
    })




	
	

</script>
</body>
</html>