const pokemonName = document.querySelector('.pokemon-name')
const pokemonNumber = document.querySelector('.pokemon-number')
const pokemonImage = document.querySelector('.pokemon-image')

const form = document.querySelector('.form')
const input = document.querySelector('.buscar')
const btnNext = document.querySelector('.btn-next')
const btnPrev = document.querySelector('.btn-prev')

let pokemonAtual = 100

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

async function renderPokemon(pokemon) {
    pokemonName.innerText = 'Carregando...'
    pokemonNumber.innerText = ''
}

renderPokemon(pokemonAtual)


