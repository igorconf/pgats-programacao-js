function exibirNomeDog(nome) {
    console.log(nome)
}

function exibirPorteDoDog(porte = "ND") {
    console.log(porte)
}

function obterNomeDoDogFormatado(nomeFormatado){
    return nomeFormatado.toUpperCase()
}

function obterObjetoDog() {
    return {
        nome: "Bailey",
        peso: 11.5
    }
}

function obterObjetoDog2() {
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