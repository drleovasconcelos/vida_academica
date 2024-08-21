const url = 'https://api.thecatapi.com/v1/images/search'

const img = document.querySelector('#cat-img')
const btn = document.querySelector('button')

// evento para clicar no botão e alterar a imagem
btn.addEventListener('click', () => {
    // alt+shift+f - indentação instantânea 
    fetch(url)
        .then(Response => {
            return Response.json()
        })
        .then(dados => {
            // console.log(dados)
            img.src = dados[0].url
        })
})

