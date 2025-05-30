/*
    Sintaxe CommomJS:
        module.exports = {} / require("")

ESM =- Ecmascript Standar Modeulos
    export {} / import
*/
const brinquedos = [
    "Osso",
    "Peteca",
    "Machadin"
]

function exibirNomePet(paramNomePet) {
    console.log(`O nome do pet e ${paramNomePet}`)
}

function exibirIdade(paramIdadePet) {
    console.log(`A idade do pet e ${paramIdadePet}`)
}

export {
    exibirNomePet,
    exibirIdade
}