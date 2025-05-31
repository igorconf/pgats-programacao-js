import { exibirNomeDogFormatado } from '../conceitos/testes-de-unidade.js'
import assert from 'node:assert'

describe('Testes do projeto', () => {
    it('deve exibir o nome do dog com letras maiusculas', () => {
        assert.strictEqual(exibirNomeDogFormatado('Mimosa'), 'MIMOSA')
    })
})