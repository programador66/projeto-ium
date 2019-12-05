import API from './api';

class Candidato extends API{

    async seCandidato(parametros){
        let config = this.headerToken();
        const response = await this.api.post('candidato/cadastro',parametros,{...config});
        return response;
    }
}

export default new Candidato();