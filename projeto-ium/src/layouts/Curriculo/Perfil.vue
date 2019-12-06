<template>
    <div>

        <q-card class="" style="width:105%;margin-left:-2.5%;">
            <q-card-section>
                <q-item-section>
                    <q-item-label>
                        <a class="title">Dados Pessoais</a>
                    </q-item-label>

                    <q-item-label>
                        <q-input v-model="nomecompleto" label="Nome Completo"/>
                    </q-item-label>

                    <q-item-label>
                        <q-input v-model="cpf" 
                            label="CPF" 
                            mask="###.###.###-##"
                            hint="ex: 000.000.000-00"
                        />
                    </q-item-label>

                </q-item-section>
            </q-card-section>

            <q-card-section>
                <q-item-section>

                    <q-item-label>
                        <q-input 
                            v-model="endereco" 
                            label="Endereco"
                            hint="rua, número, bairro"
                        />
                    </q-item-label>

                    <q-item-label>
                        <q-input 
                            v-model="fone" 
                            label="Fone"
                            mask="(##) ####-####"
                            hint="(00) 0000-0000"
                        />
                    </q-item-label>

                    <q-item-label>
                        <div style="margin-top:4.5%;">Sexo</div>
                        <q-option-group
                                :options="options"
                                label="Notifications"
                                type="radio"
                                v-model="group"
                        />
                    </q-item-label>

                </q-item-section>

            </q-card-section>

            <q-card-section style="margin-top:5%;">
                <q-item-section>
                    <q-btn @click="cadastroCandidato()" color="primary" label="Proximo"/>
                </q-item-section>
            </q-card-section>
        </q-card>

    </div>
</template>

<script>

    import Candidato from "../../api/candidato";

    export default {
        name: 'DadosPessoais',
        data() {
            return {
                step: 1,
                nomecompleto: null,
                endereco: null,
                cpf: null,
                fone: null,
                group: null,
                options: [
                    {label: 'Masculino', value: 'M'},
                    {label: 'Feminino', value: 'F', color: 'pink'}
                ]
            }
        },
        mounted(){
            if (sessionStorage.getItem('usuario')) {
                this.nomecompleto = JSON.parse(sessionStorage.getItem('usuario')).name
            }   
        },
        methods: {
            cadastroCandidato(){
                this.$q.loading.show();
                const candidato = {
                    cpf: this.cpf,
                    telefone:this.fone,
                    endereco:this.endereco,
                    sexo:this.group,
                    id_user:JSON.parse(sessionStorage.getItem('usuario')).id
                }
                
             Candidato.seCandidato(candidato)
              .then(response => {
                if (response.data.success) {
                    
                this.$q.loading.hide();   
                this.$emit('stepper', 2);
                } else {
                    this.$q.loading.hide(); 
                    
                    this.$q.notify({
                    color: 'red',
                    timeout: 1500,
                    textColor: 'white',
                    message: response.data,
                    actions: [{icon: 'close', color: 'white'}]
                    })
                }
                   
              })
              .catch(e => {
                this.$q.loading.hide();  
                this.$q.notify({
                    color: 'red',
                    timeout: 1500,
                    textColor: 'white',
                    message: e,
                    actions: [{icon: 'close', color: 'white'}]
                })
              })

            },
            perfil() {
                this.$emit('stepper', 2);
            }
        }
    }
</script>

<style scoped>
    #passos {
        margin-top: 13%;
        height: 50px;
    }

    .title {
        color: #1E88E5;
        font-weight: bold;
        font-size: 19px;
    }

    @media only screen and (max-width: 320px) {

    }
</style>
