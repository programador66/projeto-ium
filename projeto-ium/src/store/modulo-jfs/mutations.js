
export function setDadosPessoais (state,dados) {
    state.dadosPessoais.cpf = dados.cpf;
    state.dadosPessoais.telefone = dados.telefone;
    state.dadosPessoais.sexo = dados.sexo;
    state.dadosPessoais.endereco = dados.endereco
}

export function setFormacaoEscolar(state, dados) {
    if (state.formacao_escolar.length == 0) {
        state.formacao_escolar.push(dados)
    }
    
}

export function setCertificados(state, dados) {
    if (state.certificados.length == 0) {
        state.certificados.push(dados)
    }
}