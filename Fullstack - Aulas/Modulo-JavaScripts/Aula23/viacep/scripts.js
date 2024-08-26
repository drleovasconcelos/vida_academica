// primeiro pegar os elementos
const end = document.querySelector('#endereco')
const bairro = document.querySelector('#bairro')
const cidade = document.querySelector('#cidade')
const estado = document.querySelector('#estado')
const cep = document.querySelector('#cep')


function buscarEndereco() {
    const cep = document.querySelector('#cep').value
    // https://viacep.com.br/ws/01001000/json/
    const url = `https://viacep.com.br/ws/${cep}/json/`
    fetch(url)
        .then(response => {
            return response.json()
        })
        .then(dados => console.log(dados))
}

// focusout / blur - quando tura do input ele aparece o endereço nos outros campos
cep.addEventListener('blur', buscarEndereco)
