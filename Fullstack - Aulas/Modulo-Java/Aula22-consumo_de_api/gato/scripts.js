const url = 'https://api.thecatapi.com/v1/images/search'

// alt+shift+f - indentação instantânea 
fetch(url)
    .then(Response => {
        return Response.json()
    })
    .then(dados => {
        console.log(dados)
    })
