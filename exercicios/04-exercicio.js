const nome = "Mel"
const peso = 20
const estoque = 5000

const gramasPorDia = peso * 30
const duracaoEstoque = estoque / gramasPorDia

console.log(`Nome do dog: ${nome}`)
console.log(`Peso: ${peso}`)
console.log(`Gramas por dia: ${gramasPorDia}`)
console.log(`O estoque vai durar: ${duracaoEstoque}`)

function calcularConsumoDeRacao(nome, peso, estoque) {
    const gramasPorDia = peso * 30
    const duracaoEstoque = Math.floor(estoque / gramasPorDia)

    console.log(`Nome do dog: ${nome}`)
    console.log(`Peso: ${peso}`)
    console.log(`Gramas por dia: ${gramasPorDia}`)
    console.log(`O estoque vai durar: ${duracaoEstoque} dias`)
    console.log(`----------------------`)
}

calcularConsumoDeRacao("Ada", 1, 2000)
calcularConsumoDeRacao("Graple", 4.2, 20000)
calcularConsumoDeRacao("Ada", 1, 2000)