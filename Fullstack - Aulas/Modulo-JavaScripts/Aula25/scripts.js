const apikey = "16f00dd6edca31d9934c7fd9cdfba77c"
const baseURL = "https://api.openweathermap.org/data/2.5/weather?"

// pega os dados 
const form = document.querySelector('.inputForm')
const city = document.querySelector('.city')
const country = document.querySelector('.country')
const temp = document.querySelector('.temp')
const sky = document.querySelector('.sky')  
const minMax = document.querySelector('.min-max')

// form.addEventListener('submit', () => alert('teste')) - teste

function enviarDados(e) {
    e.preventDefault() // evitar que a página seja carregada
    const input = document.querySelector('.inputCity')
    fetchWeather(input.value)
}

async function fetchWeather(cityValue) {
    const response = 
        await fetch(`${baseURL}q=${cityValue}&units=metric&appid=${apikey}`)
    // console.log(response) - teste
    // converter para json
    const dados = await response.json()
    // console.log(dados) - teste
    city.innerText = dados.name
    // sys é uma pasta da API e dentro tem país
    country.innerText = dados.sys.country
    // Math.round = arredonda = main é uma pasta da API e dentro tem temperatura
    temp.innerText = `${Math.round(dados.main.temp)}°c`
    sky.innerText = dados.weather[0].main
    minMax.innerText = `${Math.round(dados.main.temp_min)}°c / ${Math.round(dados.main.temp_max)}°c`
}

form.addEventListener('submit', enviarDados)

