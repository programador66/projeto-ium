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
            <q-select v-if="getEditar"  v-model="selectEducao" :options="options" label="Selecionar Educação" />
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
        <q-item-label v-if="!getEditar">
          <q-btn
            size="6px"
            round
            color="primary"
            icon="add"
            @click="adicionarEducacao"  
          />
          <a style="margin-left:2%;opacity: 0.6;">Adicionar Formação</a>
        </q-item-label> 

        <q-item-label v-else>
         <div style="display:flex;justify-content:center;aling-items:center;"> 
           <q-btn
            size="6px"
            round
            color="primary"
            icon="add"
            @click="modalAdicionaEducacao"  
          />
          <a style="margin-left:2%;opacity: 0.6;">Adicionar Formação</a>

          <q-btn
            style="margin-left:2.5%;"
            size="6px"
            round
            color="primary"
            icon="refresh"
            @click="updateFormacao"  
          />
          <a style="margin-left:2%;opacity: 0.6;">Atualizar educação</a>
          </div>
        </q-item-label> 

      </q-card-section>

       <q-card-section style="margin-top:5%;">
        <q-item-section>
          <q-btn  v-if="!getEditar" @click="cadastroEducacao()" color="primary"  label="Proximo" />
          <q-btn  v-else @click="proximoStap" color="primary"  label="Proximo" />
        </q-item-section> 
      </q-card-section>
    </q-card>   
<!-- ================= Modal Edição ================================= -->
    <q-dialog v-model="atualizar" persistent>
      <q-card style="width: 700px; max-width: 90vw;">
        <q-card-section class="row items-center">
          <q-item-section>
            <q-input 
              v-model="instituicao" 
              label="Instituição"
              ref="instituicao"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Campo obrigatório']"
            />  
          </q-item-section>
        </q-card-section>

        <q-card-section class="row items-center">
          <q-item-section>
            <q-input
              v-model="curso" 
              label="Curso"
              ref="curso"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Campo obrigatório']"
            />
          </q-item-section> 
        </q-card-section>

        <q-card-section>
          <div style="display:flex;justify-content:center;">
            <span>
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
                    </q-icon>
                  </template>
                </q-input>
            </span>
            <span style="margin-left:2.5%;">
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
                    </q-icon>
                  </template>

              </q-input>
            </span>
          </div>
        </q-card-section>  

        <q-card-actions align="right">
          <q-btn flat label="cancelar" color="primary" @click="resetaCampos" v-close-popup />
          <q-btn flat label="cadastrar" color="primary" @click="cadastroEducacao" v-close-popup/>
        </q-card-actions>
        
      </q-card>
    </q-dialog>    

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
     selectEducao:null,
     atualizar:false,
    }
  },
  mounted() {
    
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
      
      const educacao = this.getFormacaoEscolar
      .filter(element => element.curso === val)

      educacao.forEach(edu => {
        this.instituicao = edu.instituicao;
        this.inicio = edu.data_inicio;
        this.conclusao = edu.data_conclusao;
        this.id_curso = edu.id;
        this.curso = edu.curso;
      })

    },
    clinicio(val) {
        if (val == " ") {
          this.inicio = " ";
          this.$refs.dtinicio.resetValidation();
        } else {
          const ndInicio = new  Date(val);
          this.inicio = ndInicio.toLocaleDateString();
        }
          
    },
    clconclusao(val) {

       if (val == " ") {    
          this.conclusao = " ";
          this.$refs.dtconclusao.resetValidation();
        } else {
          const ndConclusao = new  Date(val);
          this.conclusao = ndConclusao.toLocaleDateString();
        }
      
    }
  },
   methods: {
     modalAdicionaEducacao(){
      this.atualizar = true;
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
              
        } 
       
        FormacaoEscolar.setFormacaoEscolar({formacao:this.objEducacao})
        .then(Response => {
          
          if (Response.data.success) {
            const message = Response.data.message;   
            if(!this.getEditar) {
              this.$emit('stepper',3)
            }
            else 
            {
              this.$q.notify({
              color: 'blue',
              timeout: 1500,
              textColor: 'white',
              message: message,
              actions: [{icon: 'close', color: 'white'}]
              })
              this.resetaCampos();

            }

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
          
        });

      }

    },
    updateFormacao(){
      const educacao = {
        id_curso: this.id_curso,  
        curso: this.curso,
        instituicao: this.instituicao,
        inicio: this.inicio,
        conclusao: this.conclusao,
        id_user:JSON.parse(sessionStorage.getItem('usuario')).id
      }

      FormacaoEscolar.updateFormacaoEscolar({formacao:educacao})
      .then(Response => {
        
        if (Response.data.success) {
          const message = Response.data.message;   
          if(!this.getEditar) {
            this.$emit('stepper',3)
          }
          else 
          {
            this.$q.notify({
            color: 'blue',
            timeout: 1500,
            textColor: 'white',
            message: message,
            actions: [{icon: 'close', color: 'white'}]
            })

          }

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
        
      }).catch(msg => {
            this.$q.notify({
            color: 'red',
            timeout: 1500,
            textColor: 'white',
            message: "Erro ao atualizar, verifique a conexão",
            actions: [{icon: 'close', color: 'white'}]
          })
      });

    },
    proximoStap(){
      this.$emit('stepper',3);
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
