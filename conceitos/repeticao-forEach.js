const listaDeAlunos = [
    {
        nome: "Matheus", 
        nota: 7
    },
    {
        nome: "Renata", 
        nota: 2
    },
    {
        nome: "Ana", 
        nota: 3
    },
    {
        nome: "Leandro", 
        nota: 4
    },
    {
        nome: "Lucas", 
        nota: 5
    }
]

listaDeAlunos.forEach(aluno => {
    console.log(`O aluno ${aluno.nome} tem a nota ${aluno.nota}`)
})