// cria referência ao form e aos elementos de resposta
const frm = document.querySelector("form") 
const resp1 = document.querySelector("pre")
const resp2 = document.querySelector("h3")

const listaAmigo = []

frm.addEventListener("submit", (e) => {

e.preventDefault()
const amigo = frm.inAmigo.value
listaAmigo.push(amigo)

let lista = "" 

for (let i = 0; i < listaAmigo.length; i++) {
    lista += `${i + 1}. ${listaAmigo[i]}\n`
  }
  resp1.innerText = lista 
  frm.inAmigo.value = "" 
  frm.inAmigo.focus() 
  console.log(listaAmigo)
})

frm.btSortear.addEventListener("click", (e) => {

let sorteo = listaAmigo[Math.floor(Math.random() * listaAmigo.length )] 
console.log(sorteo) 

resp2.innerText = `O amigo secreto sorteado é: ${sorteo}`
})

 