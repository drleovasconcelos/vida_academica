
const imgProduto = document.querySelector('#img-produto')
const nome = document.querySelector('#nome-produto')
const descricao = document.querySelector('#descricao-produto')
const preco = document.querySelector('#preco')
const btn = document.querySelector('#btn')
const id = localStorage.getItem('idProduto')

async function fetchProduto() {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`)
  const data = await response.json()

  imgProduto.src = data.image
  nome.innerText = data.title
  preco.innerText = data.price
  descricao.innerText = data.description
}

fetchProduto()

btn.addEventListener('click', async function () {
  const itensCarrinho = JSON.parse(localStorage.getItem('itensCarrinho')) || []

  const response = await fetch(`https://fakestoreapi.com/products/${id}`)
  const produto = await response.json()

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
    }
  } else {
    itensCarrinho.push(produto)
  }

  localStorage.setItem('itensCarrinho', JSON.stringify(itensCarrinho))
  alert('Produto adicionado com sucesso!')
})
