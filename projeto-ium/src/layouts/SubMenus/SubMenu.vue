<template>
  <div>
    <q-tabs v-model="tab" class="text-teal" >
      <q-tab label="vagas" class="text" name="one" />
      <q-tab label="Seleções" class="text" name="two"/>
      <q-tab label="Perfil" class="text" name="three"/>
    </q-tabs>

    <q-separator />
    
    <q-tab-panels v-model="tab" animated swipeable infinite>
      <q-tab-panel name="one">
        <vagas/>
      </q-tab-panel>

      <q-tab-panel name="two">
          <selecoes/>
      </q-tab-panel>

      <q-tab-panel v-if="!existePerfil" name="three" id="perfil">
          <perfil/>
      </q-tab-panel>

      <q-tab-panel v-else="" name="three" id="p-completo">
        <perfil-completo/>
      </q-tab-panel>

    </q-tab-panels>
  </div>
</template>

<script>
import vagas from './Vagas';
import selecoes from './Selecoes';
import perfil from './Perfil';
import perfilCompleto from './PerfilCompleto';
import Candidato from "../../api/candidato";
import { mapGetters, mapMutations } from "vuex";

export default {
  components:{
    vagas,selecoes,perfil,perfilCompleto
  },
  data () {
    return {
      left: false,
      tab:'one',
      existePerfil:false,

    }
  },
  computed:{
    ...mapGetters("jfs/",{
      getCurriculo:"getCurriculo",
      getDadosPessoais:"getDadosPessoais",
      getFormacaoEscolar: "getFormacaoEscolar",
      getCertificados: "getCertificados"
    })
      
  },
  beforeMount(){

    const id_user = JSON.parse(sessionStorage.getItem('usuario')).id;

    Candidato.getCurriculo({id_candidato:id_user}).then(response => {

      this.setDadosPessoais(response.data.data[0]);
      
      if (response.data.data[0].formacao_escolar.length > 0) {
        this.existePerfil = true;  
        this.setFormacaoEscolar(response.data.data[0].formacao_escolar[0]);
        this.setCertificados(response.data.data[0].certificados[0]);
         
      }
    }).catch(e=> {
      console.log(e);
    })
    
  },
  methods: {
    ...mapMutations("jfs",{
      setDadosPessoais: "setDadosPessoais",
      setFormacaoEscolar: "setFormacaoEscolar",
      setCertificados: "setCertificados"
    })
  }
}
</script>


<style scoped>
.text{
    color: white
  }
  #perfil{
    background-image: url("../../img/ilustracao.png");
    background-color: white;
    height: 800px;
  }

  #p-completo{
    background-color: white;
    height: 800px;
  }
</style>