try {
    console.log(`Tentando alimentar o pet...`)
    throw new Error()
} catch (excecao) {
    console.log(excecao)
}