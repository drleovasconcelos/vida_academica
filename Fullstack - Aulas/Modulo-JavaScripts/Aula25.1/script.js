async function fetchCotacao() {
    const response = await fetch('https://economia.awesomeapi.com.br/json/all')
    // console.log(response) 
    const dados = await response.json()
    // console.log(dados) 
    return dados
}

// fetchCotacao() - na hora de testar

async function converter() {
    const entrada = Number(document.querySelector('#entrada').value)
    const moedaSelecionada = document.querySelector('#moedas').value
    const resultados = await fetchCotacao()
    // console.log(resultados[moedaSelecionada].bid) - teste
    // toLocaleString = para converter moeda
    const calculo = Number((entrada * resultados[moedaSelecionada].bid).toFixed(2)).toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})
    // console.log(calculo)
    const saida = document.querySelector('#saida')
    saida.innerText = `Resultados = ${calculo}`
}







