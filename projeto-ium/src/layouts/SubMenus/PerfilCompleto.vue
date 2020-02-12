<template>
  <div >

    <div class="title" >
      Educação
    </div>
  
      <div v-for="formacao in getFormacaoEscolar" :key="formacao.id">
          <div  class="container">  
              <div class="title-descricao items">
                {{formacao.curso}}
              </div>
              <div class="items az">
                {{formacao.data_conclusao}}  
              </div>
              <div class="items">
                <span class="item az" >
                  <q-btn flat round icon="delete" @click="confirmaExclusao(formacao.id,'f')"/>
                </span>
              </div> 
          </div>
          <div class="sub-title-descricao">
            {{formacao.instituicao}}
          </div>
      </div>    


    <div class="title">
      Trabalho
    </div>

    <div v-for="emprego in getExperienciaProfissional" :key="emprego.id"> 
      <div class="container">
        <div class="title-descricao items">
          {{emprego.cargo}} 
        </div>
        <div class="item az">{{emprego.data_saida}}</div>
        <span class=" item az" >
          <q-btn flat round icon="delete"/>
        </span>

      </div>
      
      <div class="sub-title-descricao">
        {{emprego.empresa}} 
      </div>  
      
    </div>      
  

    <div class="title" >Certificações</div>
      <div v-for="(cert, i) in getCertificados" :key="i">
        <div class="container">
            <div class="title-descricao items">
              {{cert.descricao}}
            </div>
            <span class="items az">{{cert.data}}</span>
             <span class=" item az" >
                <q-btn flat round icon="delete"/>
             </span> 
        </div>

        <div class="sub-title-descricao">
          {{cert.emissor}}
        </div> 
      </div>   


  <q-page-sticky position="bottom-right" :offset="[18, 18]">
    <q-btn fab icon="edit" color="blue" @click="editarPerfil()" />
  </q-page-sticky>
</div>   
</template>

<script>

import { mapGetters, mapMutations } from "vuex";
import FormacaoEscolarApi from '../../api/formacaoEscolar';

export default {
   data () {
    return {
      formacaoEscolar: null,
      certificados: null,
      experienciaProfissional: null,
    }
  },
  computed:{
    ...mapGetters("jfs/",{
      getCurriculo:"getCurriculo",
      getDadosPessoais:"getDadosPessoais",
      getFormacaoEscolar: "getFormacaoEscolar",
      getCertificados: "getCertificados",
      getExperienciaProfissional: "getExperienciaProfissional"
    })
     
  },
  methods: {
    ...mapMutations("jfs/",{
      setEditar: "setEditar"
    }),
   editarPerfil(){
     this.setEditar(true);
     this.$router.push("/perfil-curriculo");
   },
   confirmaExclusao(val,tpExclusao){
           this.$q.dialog({
            title: 'Exclusão de informações',
            message: 'Deseja realmente excluir as informações?',
            cancel: true,
            persistent: true
          }).onOk(() => {
            switch (tpExclusao) {
              case 'f':
                this.excluirEducacao(val);
                break;
              default:
                console.log('nenhuma informação escolhida');  
            }

          }).onCancel(() => {
            console.log('>>>> Cancel')
          })
   },
   excluirEducacao(val){

     FormacaoEscolarApi.deleteFormacaoEscolar({id:val})
     .then(response => {
       const dados = response;
       console.log(response);
       if (dados.data.success) {
          this.$q.notify({
            color: 'blue',
            timeout: 1500,
            textColor: 'white',
            message: dados.data.message,
            actions: [{icon: 'close', color: 'white'}]
          })
       } else {
         this.$q.notify({
            color: 'red',
            timeout: 1500,
            textColor: 'white',
            message: dados.data.message,
            actions: [{icon: 'close', color: 'white'}]
          })
       }
     })

   }
  }
   
}
</script>


<style scoped>
.container {
  display: flex;
	max-width: 400px;
	margin: 0 auto;
  justify-content: space-between;
  align-items: center;
}

.items{
  text-align: right;
}

.az{
  color:#1E88E5;
  font-weight:bold;
  font-size:14px;
}

.my-card{
  height: auto;
}
.title{
  color:#1E88E5;
  font-weight:bold;
  font-size: 1.125rem;
  padding: 1%;
  margin: 0% 0% 2.5% 0%;
  border-bottom: 1px orange solid;
}
.title-descricao{
  font-size: 17px;
  color: black;
}

.sub-title-descricao{
  font-size: 14px;
  color: black;
  /* border-bottom: tomato solid 1px; */
  margin-bottom: 2.8%;
  padding: 0%;
}
</style>