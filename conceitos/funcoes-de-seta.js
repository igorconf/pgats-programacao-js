const exibirNomeDog = (nome) => {
    console.log(nome)
}


const exibirPorteDoDog = (porte = "ND") => {
    console.log(porte)
}

const obterNomeDoDogFormatado = (nomeFormatado) => {
    return nomeFormatado.toUpperCase()
}

const obterObjetoDog = () => {
    return {
        nome: "Bailey",
        peso: 11.5
    }
}

const obterObjetoDog2 = () => {
    return [{
        nome: "Bailey",
        peso: 11.5
    },
    {
        nome: "Srena",
        peso: 10.5
    }]
}

exibirNomeDog("Pipoca")
exibirPorteDoDog()
console.log(obterNomeDoDogFormatado("joseph"))
console.log(obterObjetoDog())
console.log(obterObjetoDog2())