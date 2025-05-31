function geradorDeTagsDeIdentificacao(nome) {
  return nome.toUpperCase();
}

function verificarSePodeSerAdotado(idade, porte) {
  return idade === 1 && porte === 'M';
}

function calcularConsumoDeRacao(nome, idade, peso) {
  const consumoPorKg = 300;
  return peso * consumoPorKg;
}

function decidirTipoDeAtividadePorPorte(porte) {
  const atividades = {
    pequeno: 'brincar dentro de casa',
    medio: 'passeio no quarteirão',
    grande: 'correr no parque'
  };
  return atividades[porte];
}

async function buscarDadoAsync() {
  return Promise.resolve('Pipoca');
}

export {
  geradorDeTagsDeIdentificacao,
  verificarSePodeSerAdotado,
  calcularConsumoDeRacao,
  decidirTipoDeAtividadePorPorte,
  buscarDadoAsync
};