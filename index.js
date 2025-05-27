console.log("aula inicial js")
console.error("erro mane")
console.warn("greaat")
console.table([{
    nome: "igor",
    turma: "2",
    disciplina: "prog js"
},
{
    nome: "igor",
    turma: "2",
    disciplina: "prog js"
}
])


// constantes

// const - nunca mudam
const nome = "Loki"
const raca = "SRD"
const sexo = "Macho"
const cor = "Caramelo"
const dataDeNascimento = "01/01/2020"
const porte = "M"

// var ou let - podem mudar
let idade = 5
let peso = 10.5
let vacinado = true
let castrado = false
let tamanho = "M"

const numeroAula = "03"
const turma = "02"

console.log("Aula 03 da turma " + turma + " no sabado dia 05 de abril")
console.log(`Aula ${numeroAula} da turma ${turma} no sabado dia 05 de abril`)

console.log(numeroAula.length) //quantidade de caracteres

const nomesDeAlunos = "Giuliana Andre GoKU Lucas Lenilson"

const nomesDeAlunosSplit = nomesDeAlunos.split(" ") //separar 

console.log(nomesDeAlunosSplit)

console.log(nomesDeAlunos.toLowerCase()) //tudo minusculo
console.log(nomesDeAlunos.toUpperCase()) // tudo maiusculo

console.log(nomesDeAlunos.includes("Andre")) // verifica se tem ou n booleano

console.log(nomesDeAlunos.replace("a", "i")) //trocar um pelo outro

const conceitosLogica = "     inteiro real cadeira de caracteres.....    "
console.log(conceitosLogica.trim()) // ignorar espaços

let dataParaCortar = "05 de abril"
const cpf = "87138712381"

console.log(dataParaCortar.slice(0, 2)) // cortar posições começando 0
console.log(cpf.slice(0, 3)) // cortar ou substring


