const clickReturn = document.querySelector("#clickReturn")
const clickNext = document.querySelector("#clickNext")
const screen2 = document.querySelector(".screen2")
const main = document.querySelector("main")

// Eventos
clickNext.addEventListener("click", clickPassin)
clickReturn.addEventListener("click", clickAgain)

//Funções
function clickPassin() {
  toggleScreen()
  let phraseAleat = Math.floor(Math.random() * frases.length)
  screen2.querySelector("span").innerText = frases[phraseAleat]
}

function clickAgain() {
  toggleScreen()
}

function toggleScreen() {
  main.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

//Array
const frases = [
  "O Senhor é meu pastor, nada me faltará. - Salmo 23:1",

  "Amarás o teu próximo como a ti mesmo. - Mateus 22:39",

  "Tudo posso naquele que me fortalece. - Filipenses 4:13",

  "Deem graças ao Senhor, pois ele é bom; o seu amor dura para sempre. - Salmos 136:1",

  "Confia no Senhor de todo o teu coração e não te estribes no teu próprio entendimento. - Provérbios 3:5",
]


