
export function setDadosPessoais (state,dados) {
    state.dadosPessoais.cpf = dados.cpf;
    state.dadosPessoais.telefone = dados.telefone;
    state.dadosPessoais.sexo = dados.sexo;
    state.dadosPessoais.endereco = dados.endereco
}

export function setFormacaoEscolar(state, dados) {

    if (state.formacao_escolar.length == 0) {
        state.formacao_escolar = dados;
    }   
}

export function setExperienciaProfissional(state, dados) {

    if (state.experienciaProfissional.length == 0) {
        state.experienciaProfissional = dados;
    }   
}

export function setCertificados(state, dados) {
    if (state.certificados.length == 0) {
        state.certificados = dados;
    }
}

export function setlimpaDados(state,  dados = null) {
    
    state.dadosPessoais.cpf = null;
    state.dadosPessoais.endereco = null;
    state.dadosPessoais.telefone = null;
    state.dadosPessoais.sexo = null;
    state.formacao_escolar = [];
    state.certificados = [];
    state.experienciaProfissional = [];
    state.editar = false;
}

export function setEditar(state, dados ) {
    state.editar = dados;
}