/*

&& - E/and
|| - ou/or
! - não/not

*/
const nomeDog = "Pipoca"

const nomePossuiApenasUmaPalavra = nomeDog.split(" ").length === 1
const nomePossuiAteDezCaracteres = nomeDog.length <= 10

const dog = {
    adotado: false,
    peso: 5.3
}

console.log(dog.adotado || dog.peso < 10)
console.log(nomePossuiApenasUmaPalavra && nomePossuiAteDezCaracteres)