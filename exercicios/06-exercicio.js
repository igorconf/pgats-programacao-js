const nome = "Ada"
const porte = "pequeno"
const tempo = 10

let atividade

switch(porte) {
    case "pequeno":
        atividade = "brincar dentro de casa"
        break
    case "medio":
        atividade = "caminhada no quarteirão"
        break
    case "grande":
        atividade = "correr no parque"
        break
    default:
        atividade = "porte invalido"
}
let mensagem

if (tempo < 15) {
    mensagem = "atividade rapida"
} else if (tempo <= 30) {
    mensagem = "tempo ideal"
} else if (tempo > 30) {
    mensagem = "hora da diversão"
}

console.log(`${mensagem}: ${atividade}`)