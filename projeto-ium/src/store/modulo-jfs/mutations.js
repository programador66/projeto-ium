
export function setDadosPessoais (state,dados) {
    state.dadosPessoais.cpf = dados.cpf;
    state.dadosPessoais.telefone = dados.telefone;
    state.dadosPessoais.sexo = dados.sexo;
    state.dadosPessoais.endereco = dados.endereco
}

export function setFormacaoEscolar(state, dados) {
    state.formacao_escolar.push(dados)
}

export function setCertificados(state, dados) {
    state.certificados.push(dados)
}