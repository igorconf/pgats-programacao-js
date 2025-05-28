/*
    -- decremento
    ++ incremento

    ? ternário

*/

let pesoDoDog = 10
console.log(pesoDoDog)

pesoDoDog++

console.log(pesoDoDog)

pesoDoDog--

console.log(pesoDoDog)

const pesoDoDogOperadorTernario = 10
const porte = pesoDoDogOperadorTernario <= 10
                ? "pequeno"
                : pesoDoDogOperadorTernario <= 20
                ? "medio"
                : "grande"

console.log(porte)