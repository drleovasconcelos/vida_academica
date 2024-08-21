// professor
const cep = prompt('Digite o seu cep: ')
const url = `https://viacep.com.br/ws/${cep}/json/`

fetch(url)
    .then(response => {
        return response.json()
    })
    .then(dados => {
        console.log(dados)
    })

// eu

// const url = 'https://viacep.com.br/ws/01001000/json/'


// // arvore DOM (Document object model)
// function pesquisar() {
//     const endereco = document.getElementById('endereco') // ele pega o elemento digitado na tela (pega do input) 
//     console.log(endereco.value) // com o .value ele mostra no console apenas o valor digitado
//     const h1 = document.getElementById('resultado')
//     h1.innerText = `Resultado = ${endereco}`
// }

// const btn = document.querySelector('button')
// const div = document.querySelector('#dados')

// // substitui desde a aquisição
// btn.addEventListener('click', () => {
//     fetch(url)
//     .then(Response => {
//         return Response.json()
//     })
//     .then(dados => {
//         const dataDiv = document.createElement('div')
//         dataDiv.innerHTML = `<p><b>CEP:</b> ${dados.cep}</p> <p><b>Logradouro:</b> ${dados.logradouro}</p> <p><b>Bairro:</b> ${dados.bairro}</p> <p><b>Cidade:</b> ${dados.localidade}</p> <p><b>Estado:</b> ${dados.uf}</p>

//         div.append(dataDiv)
//         console.log(dataDiv)
        
//     })
// })



















//     // Função para pesquisar o endereço com base no CEP
// function pesquisar() {
//     const cepInput = document.getElementById('endereco'); // Obtém o valor do input
//     const cep = cepInput.value.trim(); // Remove espaços em branco ao redor
//     const resultadoDiv = document.getElementById('resultado'); // Div onde serão exibidos os resultados

//     // Verifica se o CEP tem 8 dígitos e é um número
//     if (cep.length === 8 && !isNaN(cep)) {
//         const url = `https://viacep.com.br/ws/${cep}/json/`; // Constrói a URL para a consulta

//         fetch(url)
//             .then(response => {
//                 if (!response.ok) {
//                     throw new Error('Erro na consulta do CEP');
//                 }
//                 return response.json();
//             })
//             .then(dados => {
//                 // Limpa o resultado anterior
//                 resultadoDiv.innerHTML = '';

//                 // Verifica se o retorno é válido
//                 if (dados.erro) {
//                     resultadoDiv.innerHTML = '<p>CEP não encontrado.</p>';
//                 } else {
//                     // Cria e exibe os dados do endereço
//                     const dataDiv = document.createElement('div');
//                     dataDiv.innerHTML = `
//                         <p><b>CEP:</b> ${dados.cep}</p>
//                         <p><b>Logradouro:</b> ${dados.logradouro}</p>
//                         <p><b>Bairro:</b> ${dados.bairro}</p>
//                         <p><b>Cidade:</b> ${dados.localidade}</p>
//                         <p><b>Estado:</b> ${dados.uf}</p>
//                     `;
//                     resultadoDiv.appendChild(dataDiv);
//                 }
//             })
//             .catch(error => {
//                 // Exibe mensagem de erro
//                 resultadoDiv.innerHTML = `<p>Erro: ${error.message}</p>`;
//             });
//     } else {
//         resultadoDiv.innerHTML = '<p>Por favor, insira um CEP válido.</p>';
//     }
// }
