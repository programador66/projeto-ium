import API from './api';

class FormacaoEscolar extends API{

    async setFormacaoEscolar(parametros){
        let config = this.headerToken();
        const response = await this.api.post('candidato/formacao',parametros,{...config});
        return response;
    }

    async updateFormacaoEscolar(parametros){
        let config = this.headerToken();
        const response = await this.api.post('candidato/update-formacao',parametros,{...config});
        return response;
    }

    async deleteFormacaoEscolar(parametros){
        let config = this.headerToken();
        const response = await this.api.post('candidato/delete-formacao',parametros,{...config});
        return response;
    }
}

export default new FormacaoEscolar();