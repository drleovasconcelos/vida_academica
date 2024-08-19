const url = 'https://api.thecatapi.com/v1/images/search'

const img = document.querySelector('#cat-img')
// alt+shift+f - indentação instantânea 
fetch(url)
    .then(Response => {
        return Response.json()
    })
    .then(dados => {
        // console.log(dados)
        img.src = dados[0].url
    })
