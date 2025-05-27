const nome = "Dogo", raca = "vira-lata"
let idade = 5, peso = 2, adotado = false

let nameUpperCase = nome.toUpperCase()
let racaFirstLetter = raca.charAt(0).toUpperCase() + raca.slice(1).toLocaleLowerCase(0)

const animal = [{
    nome: nameUpperCase,
    peso: peso,
    raca: racaFirstLetter
}]

console.log(animal)