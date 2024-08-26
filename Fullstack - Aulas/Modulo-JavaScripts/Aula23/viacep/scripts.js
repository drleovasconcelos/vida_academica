// primeiro pegar os elementos
const end = document.querySelector('#endereco')
const bairro = document.querySelector('#bairro')
const cidade = document.querySelector('#cidade')
const estado = document.querySelector('#estado')
const cep = document.querySelector('#cep')

function preencherEndereco(endereco) {
    bairro.value = endereco.bairro
    cidade.value = endereco.localidade
    estado.value = endereco.uf
    end.value = endereco.logradouro
}

function isCepValid(cep) {
    // /^[0-9]+$/.test(cep) => para testar se é string ou número 
    return cep.length === 8 && /^[0-9]+$/.test(cep) 
}

function buscarEndereco() {
    const cep = document.querySelector('#cep').value
    // https://viacep.com.br/ws/01001000/json/
    const url = `https://viacep.com.br/ws/${cep}/json/`

    if (isCepValid(cep)) {
        fetch(url)
            .then(response => {
                return response.json()
            })
            .then(dados => {
                if (dados.hasOwnProperty("erro")) {
                   end.value = "Endereço não encontrado!!!" 
                }
                else {
                    preencherEndereco(dados)
                }
            })
            
    }
    else {
        end.value = 'Cep inválido!!!'
    }
    // alt + shift + f = ajeita identação
}
// focusout / blur - quando tura do input ele aparece o endereço nos outros campos
cep.addEventListener('blur', buscarEndereco)
