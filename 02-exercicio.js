const nomeDog = "tHoR legal"

nomeFormatado = nomeDog.charAt(0).toUpperCase() + nomeDog.slice(1, nomeDog.length).toLowerCase()

const temUmaPalavra = nomeDog.trim().split(/\s+/).length === 1;

console.log(nomeDog)
console.log(nomeFormatado)
console.log(temUmaPalavra)