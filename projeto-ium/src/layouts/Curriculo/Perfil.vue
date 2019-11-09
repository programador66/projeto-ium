<template>
   <div>

    <q-card class="" style="width:105%;margin-left:-2.5%;">
      <q-card-section> 
        <q-item-section>
          <q-item-label >
            <a class="title">Dados Pessoais</a>
          </q-item-label> 

          <q-item-label>
            <q-input v-model="nomecompleto" label="Nome Completo"  />
          </q-item-label>

          <q-item-label>
            <q-input v-model="cpf" label="CPF"  />
          </q-item-label> 

        </q-item-section>  
      </q-card-section> 

      <q-card-section>
          <q-item-section>

          <q-item-label>
            <q-input v-model="endereco" label="Endereco"  />
          </q-item-label>

          <q-item-label>
            <q-input v-model="fone" label="Fone"  />
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
          <q-btn @click="perfil()" color="primary"  label="Proximo" />
        </q-item-section> 
      </q-card-section> 
    </q-card>   
                  
  </div>
</template>

<script>


export default {
  name: 'DadosPessoais',
  data () {
    return {
     step: 1,
     nomecompleto:null,
     endereco:null,
     cpf:null,
     fone:null,
     group: null,
      options: [
        { label: 'Masculino', value: 'M' },
        { label: 'Feminino', value: 'F', color: 'pink' }
      ]
    }
  },
   methods: {
    perfil(){
      this.$emit('stepper',2);
    }
  }
}
</script>

<style scoped>
#passos{
  margin-top: 13%;
  height: 50px;
}
.title{
  color:#1E88E5;
  font-weight:bold;
  font-size: 19px;
}

@media only screen and (max-width:320px) {
 
}
</style>
