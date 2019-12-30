export function setDadosPessoais (state,dados) {
    state.dadosPessoais.cpf = dados.cpf;
    state.dadosPessoais.telefone = dados.telefone;
    state.dadosPessoais.sexo = dados.sexo;
    state.dadosPessoais.endereco = dados.endereco
}
