// async function buscarDados() {
//     const res = fetch('https://jsonplaceholder.typicode.com/posts')
//     console.log(res)
// }
// res.then(dados => console.log(dados))

// async function buscarDados() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     console.log(res)
//     const data = await res.json()
//     console.log(data)
// }

// buscarDados()


// Atividade 1: // criar Api para pesquisar uma Api
// link: https://api.thecatapi.com/v1/images/search


async function buscarDados() {
    const res = await fetch('https://api.thecatapi.com/v1/images/search')
    console.log(res)
    const data = await res.json()
    console.log(data)
}

buscarDados()
