 

let miLista = [ "hola" , 5]


function setup() {
  createCanvas(500, 500);
  console.log("Lista original:", miLista)

  miLista.push("Voy al final!") // Con push agregamos un elemento al final
  console.log("Usamos push:", miLista)


  miLista.unshift("Permiso, voy primero :)") // Con unshift agregamos un elemento al comienzo
  console.log("Usamos unshift:",miLista)

  miLista.pop() // Con pop quitamos un elemento al final
  console.log("Usamos pop:", miLista)


  miLista.shift() // Con shift quitamos un elemento al comienzo
  console.log("Usamos shift:", miLista)
}


