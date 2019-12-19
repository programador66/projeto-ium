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
                <q-input filled 
                  v-model="inicio"
                  maxlength="10" 
                  label="Inicio" 
                  style="max-width:148px"
                  ref="dtinicio"
                  
                  lazy-rules
                  :rules="[ val => val && val.length > 0 || 'Campo obrigatório']"    
                > 
                   <q-popup-proxy ref="qDateProxy1" transition-show="scale" transition-hide="scale">
                        <q-date v-model="clinicio" @input="() => $refs.qDateProxy1.hide()" />
                   </q-popup-proxy>
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                      <!-- <q-popup-proxy ref="qDateProxy1" transition-show="scale" transition-hide="scale">
                        <q-date v-model="clinicio" @input="() => $refs.qDateProxy1.hide()" />
                      </q-popup-proxy> -->
                    </q-icon>
                  </template>
                </q-input>
              </span>
              <span style="float:right">
                <q-input filled 
                  v-model="conclusao" 
                  label="Conclusao"
                  maxlength="10" 
                  style="max-width:145px;"
                  ref="dtconclusao"
                  lazy-rules
                  :rules="[ val => val && val.length > 0 || 'Campo obrigatório']"     
                >
                <q-popup-proxy ref="qDateProxy2" transition-show="scale" transition-hide="scale">
                        <q-date v-model="clconclusao"  @input="() => $refs.qDateProxy2.hide() " />
                 </q-popup-proxy>
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                      <!-- <q-popup-proxy ref="qDateProxy2" transition-show="scale" transition-hide="scale">
                        <q-date v-model="clconclusao"  @input="() => $refs.qDateProxy2.hide() " />
                      </q-popup-proxy> -->
                    </q-icon>
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
     clinicio: null,
     clconclusao: null,
     conclusao:null,
     existeEducacao:false
    }
  },
  watch:{
    clinicio(val) {
        if (val == "") {
          this.inicio = " ";
          this.$refs.dtinicio.resetValidation();
        } else {
          const ndInicio = new  Date(val);
          this.inicio = ndInicio.toLocaleDateString();
        }
      
       
    },
    clconclusao(val) {

       if (val == "") {
         console.log("test 1");
          this.conclusao = " ";
          this.$refs.dtconclusao.resetValidation();
        } else {
          const ndConclusao = new  Date(val);
          this.conclusao = ndConclusao.toLocaleDateString();
        }
      
    }
  },
   methods: {
     validaCampos(){
        this.$refs.curso.validate();
        this.$refs.instituicao.validate();
        this.$refs.dtinicio.validate();
        this.$refs.dtconclusao.validate();

        if (
          this.$refs.curso.hasError || this.$refs.instituicao.hasError 
          || this.$refs.dtinicio.hasError || this.$refs.dtconclusao.hasError
          ) 
        {
          return true;
        }
        return false;
     },
     resetaCampos(){
      this.curso = null;
      this.instituicao = null;
      this.inicio = "";
      this.conclusao = "";
      this.clinicio = "";
      this.clconclusao = "";
      this.$refs.curso.resetValidation();
      this.$refs.instituicao.resetValidation();
    
        console.log("test 2");
     },
    perfil(){

      // this.$emit('stepper',3);
    },
    adicionarEducacao() {
      
      if(this.validaCampos()) {
        this.formHasError = true;
      }else{
        const educacao = {
        curso: this.curso,
        instituicao: this.instituicao,
        inicio: this.inicio,
        conclusao: this.conclusao
        }

        this.existeEducacao = true; 
        this.objEducacao.push(educacao);
        this.resetaCampos(); 
      
      }
    },
    excluir(id) {
      
      this.objEducacao.splice(id,1);

      console.log(this.objEducacao);
    },
    cadastroEducacao() {
      
      if(this.objEducacao < 0) {
        if(this.validaCampos()){
          this.formHasError = true;
        }     
      }else{
        if (this.curso != null && this.instituicao != null) {
          const educacao = {
          curso: this.curso,
          instituicao: this.instituicao,
          inicio: this.inicio,
          conclusao: this.conclusao
          }
          this.objEducacao.push(educacao);    
        } 

        console.log('----inserçãoo------');
        console.log(this.objEducacao);

      }
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
