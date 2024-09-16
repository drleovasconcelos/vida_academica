const itensCarrinho = JSON.parse(localStorage.getItem('itensCarrinho')) || []
const carrinho = document.querySelector('#carrinho')
const total = document.querySelector('#total')

for (const produto of itensCarrinho) {

    const card = document.createElement('div')
    card.id = produto.id
    card.classList.add('item-carrinho')

    card.addEventListener('click', function (e) {
      if (e.target.id != 'btn') {
        window.location = 'produto.html'
        localStorage.setItem('idProduto', e.target.parentElement.id)
      }
    })

    const nome = document.createElement('h2')
    nome.innerText = produto.title
   
    const img = document.createElement('img')
    img.src = produto.image
    img.width = 80

    const preco = document.createElement('p')
    preco.innerText = `R$ ${produto.price}`

    card.append(nome, img, preco)
    carrinho.append(card)
}