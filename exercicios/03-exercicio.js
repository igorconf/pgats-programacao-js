const nome = "Ada"
const idade = 1
const porte = "P"
const idadeMinima = 2

const adocao = idade >= idadeMinima
                ? "sim"
                : porte === "P"
                ? "sim"
                : "não"

console.log(adocao)

function verificarSePodeSerAdotado (idade, porte) {
    const adocao = idade >= idadeMinima
                ? "sim"
                : porte === "P"
                ? "sim"
                : "não"
    console.log(adocao)
}
console.log("Testes com função\n")
verificarSePodeSerAdotado(1, "M")
verificarSePodeSerAdotado(2, "M")
verificarSePodeSerAdotado(2, "P")
verificarSePodeSerAdotado(1, "P")