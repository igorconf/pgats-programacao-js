const nome = "Ada"
const peso = 5.5

const porte = peso <= 10 ? "pequeno" : "medio"

console.log(`Nome: ${nome}`)
console.log(`Peso: ${peso}`)
console.log(`Porte: ${porte}`)
console.log("--------")

function classificarPortePorPeso(nome, peso) {
    const porte = peso <= 10 ? "pequeno" : "medio"

    console.log(`Nome: ${nome}`)
    console.log(`Peso: ${peso}`)
    console.log(`Porte: ${porte}`)
    console.log("--------")
}

classificarPortePorPeso("Pantera", 14.5)
classificarPortePorPeso("Resh", 9.5)
classificarPortePorPeso("Creg", 20.5)