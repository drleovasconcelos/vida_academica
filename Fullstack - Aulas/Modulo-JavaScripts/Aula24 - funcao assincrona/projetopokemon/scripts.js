const pokemonName = document.querySelector('.pokemon-name')
const pokemonNumber = document.querySelector('.pokemon-number')
const pokemonImage = document.querySelector('.pokemon-image')

const form = document.querySelector('.form')
const input = document.querySelector('.buscar')
const btnNext = document.querySelector('.btn-next')
const btnPrev = document.querySelector('.btn-prev')

let pokemonAtual = 1

// await espera o dado (dar um tempo)
// link da api // https://pokeapi.co/api/v2/pokemon/ditto - detalhe = usar crase onde está o link
async function fetchPokemon(pokemon){
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemon}` 
    const response = await fetch(url)
    // console.log(response) - teste
    if (response.status === 200) {
        const data = await response.json()
        // console.log(data) - teste
        return data
    }
}
// fetchPokemon(pokemonAtual) - teste

async function renderPokemon(data) {
    pokemonName.innerText = 'Carregando...'
    pokemonNumber.innerText = ''
    const pokemon = await fetchPokemon(data)
    if (pokemon) {
        pokemonImage.style.display = 'block'
        pokemonName.innerText = pokemon.name
        pokemonNumber.innerText = pokemon.id
        // sprites está a imagem do pokemon na API -> sprites/versions/generation-v/black-white
        pokemonImage.src = pokemon['sprites']['versions']['generation-v']['black-white']['animated']['front_default']
        input.value = ''
        pokemonAtual = pokemon.id
    }
    else {
        pokemonImage.style.display = 'none'
        pokemonName.innerText = 'Não encontrado :c'
        pokemonNumber.innerText = ''
    }
}

// submit = enter
form.addEventListener('submit', (e) => {
    // impede que o formulário recarrege - continua a página aberta
    e.preventDefault()
    renderPokemon(input.value.toLowerCase())
})

btnNext.addEventListener('click', () => {
    pokemonAtual++
    renderPokemon(pokemonAtual)
})

renderPokemon(pokemonAtual)


