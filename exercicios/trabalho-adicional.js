/*
Programa sobre função
Hands-on
Crie uma função que pega uma lista de inteiros e strings e 
retorna uma nova lista sem as strings.

Programa Retornando Número de Vogais
Hands-on
Retorne o número de vogais no texto fornecido. 
Consideraremos a, e, i, o e u como vogais para este Kata. 
O texto de entrada conterá apenas letras minúsculas e/ou espaços. 
Letras acentuadas não fazem parte desse desafio.

*/

function removerStrings(lista) {
  return lista.filter(item => Number.isInteger(item))
}

const lista = [1, "cachorro", 13, "azul", 10, "dez"]
console.log(removerStrings(lista))

console.log("----------")

function contarVogais(texto) {
  const vogais = "aeiou"
  let contador = 0

  for (let letra of texto) {
    if (vogais.includes(letra)) {
      contador++
    }
  }

  return contador
}

const frase = "o flamengo e o maior de todos"
const totalVogais = contarVogais(frase)

console.log(totalVogais)