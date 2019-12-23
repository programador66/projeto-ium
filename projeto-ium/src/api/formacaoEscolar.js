import API from './api';

class FormacaoEscolar extends API{

    async seFormacaoEscolar(parametros){
        let config = this.headerToken();
        const response = await this.api.post('candidato/formacao',parametros,{...config});
        return response;
    }
}

export default new FormacaoEscolar();