<template>
   <div>

    <q-card class="" style="width:105%;margin-left:-2.5%;">
      <q-card-section> 
        <q-item-section>
          <q-item-label >
            <a class="title">Prêmio e Certificações</a>
          </q-item-label> 

            <template v-if="existeEducacao">
              <div  v-for="edu in objEducacao" :key="edu">
                <q-card-section> 
                  <q-item-label>
                    <span>{{edu.titulo}}</span> <span style="float:right;color:#1E88E5;font-weight:bold;">{{edu.conclusao}}</span>
                  </q-item-label>
                  <q-item-label>
                    {{edu.instituicao}}
                  </q-item-label>
                </q-card-section> 
                <q-separator />
              </div>
            </template>

          <q-item-label style="margin-top:2%;">
            <q-input v-model="premio" label="Prêmio ou Certificado"  />
          </q-item-label>

          <q-item-label>
            <q-input v-model="emissor" label="Emissor"  />
          </q-item-label> 

          
          <q-item-label>
            <div>
              <span style="float:left">
              <q-input v-model="data" 
              label="Data" 
              style="max-width:150px"
          
              > 
                <q-popup-proxy ref="qDateProxy2" transition-show="scale" transition-hide="scale">
                  <q-date v-model="cldata"  @input="() => $refs.qDateProxy2.hide() " />
                </q-popup-proxy>              
                <template v-slot:append>
                  <q-icon name="event" />
                </template>
              </q-input>
              </span>
            </div>    
          </q-item-label> 
        </q-item-section>   
      </q-card-section> 

      <q-card-section style="margin-top:4%;">
        <q-item-label>
          <q-btn
            size="6px"
            round
            color="primary"
            icon="add"
            @click="existeEducacao=!existeEducacao"  
          />
          <a style="margin-left:2%;opacity: 0.6;">Adicionar </a>
        </q-item-label> 

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
  name: 'Certificados',
  data () {
    return {
     objEducacao:[{"titulo":"Sistemas de Informação","instituicao":"FUCAPI","conclusao":2016}], 
     premio:null,
     emissor:null,
     data:null,
     existeEducacao:false,
     cldata:null
    }
  },
  watch: {
    cldata(val) {
      const dt = new Date(val);
      this.data = dt.toLocaleDateString();
    }
  },
   methods: {
    perfil(){
      this.$emit('stepper',5);
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
