<template>
  
  <div>
 
    <q-tabs v-model="tab" class="text-teal" >
    <q-tab label="vagas" class="text" name="one" />
    <q-tab label="Seleções" class="text" name="two" />
    <q-tab label="Perfil" class="text" name="three" />
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
    
    <q-page-container>
      <router-view />
    </q-page-container>
  </div>
</template>

<script>
import vagas from '../layouts/Vagas';
import selecoes from '../layouts/Selecoes';
import perfil from '../layouts/Perfil';
import perfilCompleto from '../layouts/PerfilCompleto';

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
  }
}
</script>


<style scoped>
.text{
    color: white
  }
  #perfil{
    background-image: url("../img/ilustracao.png");
    background-color: white;
    height: 800px;
  }

  #p-completo{
    background-color: white;
    height: 800px;
  }
</style>