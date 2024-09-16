const qtdCarrinho = document.querySelector('#qtd-carrinho')
const catalogo = document.querySelector('#catalogo')
const itensCarrinho = JSON.parse(localStorage.getItem('itensCarrinho')) || []
qtdCarrinho.innerText = itensCarrinho.length

async function fetchProdutos() {
  const response = await fetch('https://fakestoreapi.com/products')
  const data = await response.json()

  for (const produto of data) {
    produto.qtd = 1
    const card = document.createElement('div')
    card.id = produto.id
    card.classList.add('card')

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

    const preco = document.createElement('p')
    preco.innerText = `R$ ${produto.price}`

    const btn = document.createElement('button')
    btn.innerText = 'Adicionar'
    btn.id = 'btn'

    btn.addEventListener('click', function () {
      const itensCarrinho =
        JSON.parse(localStorage.getItem('itensCarrinho')) || []

      if (itensCarrinho.length > 0) {
        let encontrado = false
        for (const prod of itensCarrinho) {
          if (prod.id == produto.id) {
            encontrado = true
            prod.qtd += 1
            break
          }
        }
        if (!encontrado) {
          itensCarrinho.push(produto)
          qtdCarrinho.innerText = itensCarrinho.length
        }
      } else {
        itensCarrinho.push(produto)
        qtdCarrinho.innerText = itensCarrinho.length
      }

      localStorage.setItem('itensCarrinho', JSON.stringify(itensCarrinho))
      alert('Produto adicionado com sucesso!')
    })

    card.append(nome, img, preco, btn)
    catalogo.append(card)
  }
}

fetchProdutos()
