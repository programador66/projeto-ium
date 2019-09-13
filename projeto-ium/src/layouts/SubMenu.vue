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
           <a style="color:red">With so much content to display at once, and often so little screen real-estate,
          Cards have fast become the design pattern of choice for many companies, including
          the likes of Google and Twitter.</a>
        </q-tab-panel>

      </q-tab-panels>
    
    <q-page-container>
      <router-view />
    </q-page-container>
  </div>
</template>

<script>
import vagas from '../layouts/Vagas';

export default {
  components:{
    vagas
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