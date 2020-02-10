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
            <q-input v-if="!getEditar"
              v-model="curso" 
              label="Curso"
              ref="curso"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Campo obrigatório']"
            />
            <q-select v-else v-model="selectEducao" :options="options" label="Selecionar Educação" />
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
import FormacaoEscolar from "../../api/formacaoEscolar"
import { mapGetters } from 'vuex';

export default {
  name: 'Educacao',
  data () {
    return {
     objEducacao:[],
     id_curso: null, 
     curso:null,
     instituicao:null,
     inicio:null,
     clinicio: null,
     clconclusao: null,
     conclusao:null,
     existeEducacao:false,
     options: [],
     selectEducao:null
    }
  },
  mounted() {
    console.log(this.getFormacaoEscolar);
    
    this.options = this.getFormacaoEscolar.map(formacao => formacao.curso)
  },
  computed:{
    ...mapGetters("jfs/",{
      getFormacaoEscolar: "getFormacaoEscolar",
      getEditar: "getEditar"
    }),
    
  },
  watch:{
    selectEducao(val) {
      console.log(val);
    },
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
         
          this.conclusao = " ";
          this.$refs.dtconclusao.resetValidation();
        } else {
          const ndConclusao = new  Date(val);
          this.conclusao = ndConclusao.toLocaleDateString();
        }
      
    }
  },
   methods: {
     setCamposEducacao(){

     },
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
     },
    adicionarEducacao() {
      
      if(this.validaCampos()) {
        this.formHasError = true;
      }else{
        const educacao = {
          id_curso:this.id_curso,
          curso: this.curso,
          instituicao: this.instituicao,
          inicio: this.inicio,
          conclusao: this.conclusao,
          id_user:JSON.parse(sessionStorage.getItem('usuario')).id
        }

        this.existeEducacao = true; 
        this.objEducacao.push(educacao);
        this.resetaCampos(); 
      
      }
    },
    excluir(id) {
      
      this.objEducacao.splice(id,1);

    },
    cadastroEducacao() {
      
      if(this.objEducacao < 0) {
        if(this.validaCampos()){
          this.formHasError = true;
        }     
      }else{
        if (this.curso != null && this.instituicao != null) {
          const educacao = {
            id_curso: this.id_curso,  
            curso: this.curso,
            instituicao: this.instituicao,
            inicio: this.inicio,
            conclusao: this.conclusao,
            id_user:JSON.parse(sessionStorage.getItem('usuario')).id
          }
          this.objEducacao.push(educacao);
           console.log(educacao);    
        } 
       
        FormacaoEscolar.seFormacaoEscolar({formacao:this.objEducacao})
        .then(Response => {
          
          if (Response.data.success) {
            const message = Response.data.message;   
            this.$emit('stepper',3);
          } else {
            const e = Response.data.message; 
              this.$q.notify({
              color: 'red',
              timeout: 1500,
              textColor: 'white',
              message: e,
              actions: [{icon: 'close', color: 'white'}]
            })
          }
          
        })

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
