let primeiroNumero = Math.floor(Math.random() * 6) + 1 
let segundoNumero = Math.floor(Math.random() * 6) + 1 
// gra numero aleatório quebrado, ams, soma com 1 para fechar o número 
// math.floor arredonda para baixo

const imgPlayer1 = document.querySelector("#player1")
const imgPlayer2 = document.querySelector("#player2")

const img1 = `img/dice${primeiroNumero}.png`
const img2 = `img/dice${segundoNumero}.png`

imgPlayer1.src = img1
// imgPlayer2.src = img2
// .src é o atributo de aceesso da imagem
// ou
imgPlayer2.setAttribute("src", img2)

const h1 = document.querySelector("h1")
if (primeiroNumero > segundoNumero) {
    h1.innerText = "Player 1 venceu!"
}
else if (primeiroNumero < segundoNumero){
    h1.innerText = "Player 2 venceu"
}
else {h1.innerText = "Empatou"
}