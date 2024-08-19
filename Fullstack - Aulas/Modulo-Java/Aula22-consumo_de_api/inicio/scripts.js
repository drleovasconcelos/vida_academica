// testando a api

// o link do navegador
const url = 'https://jsonplaceholder.typicode.com/users'

// // aquisição
// const response = fetch(url)
// console.log(response)

// // conversão
// // retorna uma promisse que é ação assincrona que precisa de tempo para esperar, e then é a função para extrair informações de uma promessa

// // abaixo esse .then serve para resolver a promessa, ajeitando os dados e mostrando no console
// response.then(res => {
//     // console.log(res.json())
//     return res.json()
// }).then(dados => {
//     console.log(dados)
// })

const div = document.querySelector('#dados')



// substitui desde a aquisição
fetch(url)
    .then(response => {
        return response.json()
    })
    .then(dados => {
        for (const user of dados) {
            const dataDiv = document.createElement('div')
            dataDiv.innerHTML = `<p><b>Nome: </b> ${user.name}</p> <p><b>Nome: </b> ${user.email}</p> <p><b>Nome: </b> ${user.phone}</p>
            <hr>
            `

            div.append(dataDiv)
        }
    })
