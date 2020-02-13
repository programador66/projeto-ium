import API from './api';

class ExperienciaProfissional extends API
{

    async seExperienciaProfissional(parametros){
        let config = this.headerToken();
        const response = await this.api.post('candidato/experiencia-profissional',parametros,{...config});
        return response;
    }

    async updateExperienciaProfissional(parametros){
        let config = this.headerToken();
        const response = await this.api.post('candidato/update-experiencia-profissional',parametros,{...config});
        return response;
    }
}

export default new ExperienciaProfissional();