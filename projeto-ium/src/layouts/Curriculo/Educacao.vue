<template>
   <div>

    <q-card class="" style="width:105%;margin-left:-2.5%;">
      <q-card-section> 
        <q-item-section>
          <q-item-label >
            <a class="title">Educação</a>
          </q-item-label> 

            <template v-if="existeEducacao">
              <div  v-for="(edu,indice) in objEducacao" :key="indice">
                <q-card-section> 
                  <q-item-label>
                    <span>{{edu.titulo}}</span>
                     <span style="float:right;color:#1E88E5;font-weight:bold;">
                      {{edu.conclusao}}
                      <span ><q-btn flat round icon="delete" @click="excluir(indice)"/></span>
                      </span>
                      
                  </q-item-label>
                  <q-item-label>
                    {{edu.instituicao}}
                  </q-item-label>
                </q-card-section> 
                <q-separator />
              </div>
            </template>

          <q-item-label style="margin-top:2%;">
            <q-input 
              v-model="curso" 
              label="Curso"
              ref="curso"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Campo obrigatório']"
            />
          </q-item-label>

          <q-item-label>
            <q-input 
              v-model="instituicao" 
              label="Instituição"
              ref="instituicao"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Campo obrigatório']"
                />
          </q-item-label> 

          
          <q-item-label>
            <div>
              <span style="float:left">
              <q-input v-model="inicio" 
              label="Inicio" 
              style="max-width:148px"
              mask="##/##/####"
              hint="ex: 00/00/0000"
              ref="dtinicio"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Campo obrigatório']"
              > 
                <template v-slot:append>
                  <q-icon name="event" />
                </template>
              </q-input>
              </span>
              <span style="float:right">
              <q-input v-model="conclusao"
              label="Conclusao"
              style="max-width:145px;"
              mask="##/##/####"
              hint="ex: 00/00/0000"
              ref="dtconclusao"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Campo obrigatório']"
              >
                <template v-slot:append>
                  <q-icon name="event" />
                </template>
              </q-input>
              </span>
            </div>    
          </q-item-label> 
        </q-item-section>   
      </q-card-section> 

      <q-card-section style="margin-top:4%;" v-show="this.objEducacao.length < 2">
        <q-item-label>
          <q-btn
            size="6px"
            round
            color="primary"
            icon="add"
            @click="adicionarEducacao"  
          />
          <a style="margin-left:2%;opacity: 0.6;">Adicionar Formação</a>
        </q-item-label> 

      </q-card-section>

       <q-card-section style="margin-top:5%;">
        <q-item-section>
          <q-btn @click="cadastroEducacao()" color="primary"  label="Proximo" />
        </q-item-section> 
      </q-card-section>
    </q-card>   
               
  </div>
</template>

<script>


export default {
  name: 'Educacao',
  data () {
    return {
     objEducacao:[], 
     curso:null,
     instituicao:null,
     inicio:null,
     conclusao:null,
     existeEducacao:false
    }
  },
   methods: {
    perfil(){

      // this.$emit('stepper',3);
    },
    adicionarEducacao() {
      this.$refs.curso.validate();
      this.$refs.instituicao.validate();
      this.$refs.dtinicio.validate();
      this.$refs.dtconclusao.validate();

      if (this.$refs.curso.hasError || this.$refs.instituicao.hasError || this.$refs.dtinicio.hasError || this.$refs.dtconclusao.hasError) {
        return this.formHasError = true;
      }

      const educacao = {
        curso: this.curso,
        instituicao: this.instituicao,
        inicio: this.inicio,
        conclusao: this.conclusao
      }

       this.existeEducacao = true; 
       this.objEducacao.push(educacao);
       console.log(this.objEducacao);

    },
    excluir(id) {
      
      this.objEducacao.splice(id,1);

      console.log(this.objEducacao);
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
