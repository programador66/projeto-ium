<template>
  <div style="">

    <q-card class="my-card" >
      <q-card-section >
        <div class="title" >Educação</div>
          <q-card-section>
            <div v-for="(formacao,index) in formacaoEscolar" :key="index">
                <div class="title-descricao">
                  {{formacao.curso}} 
                  <span style="float:right;color:#1E88E5;font-weight:bold;"
                  >
                    {{formacao.data_conclusao}}
                  </span>
                </div>
                <div class="sub-title-descricao">
                  {{formacao.instituicao}} 
                </div>
            </div>    
          </q-card-section>     
      </q-card-section>

      <q-card-section >
        <div class="title" >Trabalho</div>
        <div v-for="(emprego,index) in experienciaProfissional" :key="index"> 
          <q-card-section>
              <div class="title-descricao">
                {{emprego.cargo}} <span style="float:right;color:#1E88E5;font-weight:bold;">{{emprego.data_saida}}</span>
              </div>
              <div class="sub-title-descricao">
                {{emprego.empresa}} 
              </div>  
          </q-card-section>
       </div>      
      </q-card-section>

      <q-card-section >
        <div class="title" >Certificações</div>
          <div v-for="(cert,index) in certificados" :key="index">
             <q-card-section>
              <div class="title-descricao">
                {{cert.descricao}} <span style="float:right;color:#1E88E5;font-weight:bold;">{{cert.data}}</span>
              </div>
              <div class="sub-title-descricao">
                {{cert.emissor}}
              </div>  
            </q-card-section> 
          </div>   
      </q-card-section>

    </q-card>

     <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn fab icon="edit" color="blue" @click="editarPerfil()" />
      </q-page-sticky>
  </div>   
</template>

<script>

import { mapGetters, mapMutations } from "vuex";

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
  mounted(){
    
    this.formacaoEscolar = this.getFormacaoEscolar;
    this.certificados = this.getCertificados;
    this.experienciaProfissional = this.getExperienciaProfissional;
    console.log(this.experienciaProfissional)
  },
  methods: {
    ...mapMutations("jfs/",{
      setEditar: "setEditar"
    }),
   editarPerfil() {
     this.setEditar(true);
     this.$router.push("/perfil-curriculo");
   }
  }
   
}
</script>


<style scoped>
.my-card{
  height: auto;
}
.title{
  color:#1E88E5;
  font-weight:bold;
  font-size: 17px;
  margin: 0% 0% 0% 2.5%;
}
.title-descricao{
  font-size: 17px;
  color: black;
}

.sub-title-descricao{
  font-size: 12px;
  color: black;
}
</style>