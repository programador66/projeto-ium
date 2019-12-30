import API from './api';

class Certificacao extends API
{

    async setCertificacao(parametros){
        let config = this.headerToken();
        const response = await this.api.post('candidato/certificado',parametros,{...config});
        return response;
    }
}

export default new Certificacao();