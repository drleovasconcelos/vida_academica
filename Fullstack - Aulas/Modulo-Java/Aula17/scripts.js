        

const btnSim = document.querySelector("#btn-yes")
const btnNo = document.querySelector("#btn-no")

btnSim.addEventListener("click", () => {
  alert("Oba! Estamos namorando! :)")

  window.location = "https://www.youtube.com/watch?v=izGwDsrQ1eQ"
})

function gerarPosicao(min, max) {
  const position = Math.random() * (max - min) + min + "%"
  return position
}

function mudarPosicao(btn) {
  btn.style.left = gerarPosicao(10, 90)
  btn.style.bottom = gerarPosicao(10, 90)
}

btnNo.addEventListener("click", () => mudarPosicao(btnNo))
btnNo.addEventListener("mouseover", () => mudarPosicao(btnNo))     