<template>
  
  <div  >
      <!-- <q-tabs align="left">
        <q-route-tab to="/page1" label="Page One" />
        <q-route-tab to="/page2" label="Page Two" />
        <q-route-tab to="/page3" label="Page Three" />

      </q-tabs> -->
       <q-tabs v-model="tab" class="text-teal" >
        <q-tab label="vagas" class="text" name="one" />
        <q-tab label="Seleções" class="text" name="two" />
        <q-tab label="Perfil" class="text" name="three" />
      </q-tabs>

      <q-separator />
      
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="one">
          <vagas/>
        </q-tab-panel>

        <q-tab-panel name="two">
           <selecoes/>
        </q-tab-panel>

        <q-tab-panel name="three">
           <perfil/>
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

export default {
  components:{
    vagas,selecoes,perfil
  },
  data () {
    return {
      left: false,
      tab:'one'
    }
  }
}
</script>


<style scoped>
.text{
    color: white
  }
</style>