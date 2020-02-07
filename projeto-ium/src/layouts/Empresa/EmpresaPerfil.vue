<template>
   <q-layout>
    <q-toolbar class="bg-primary text-white">
      <q-btn flat round dense icon="keyboard_backspace" class="q-mr-sm" @click="menuPrincipal" />
      
      <q-toolbar-title>Desenvolvedor PHP</q-toolbar-title>

      <q-btn flat round dense icon="whatshot" />
    </q-toolbar>

    <div class="q-pa-md row items-start q-gutter-md">
    <q-card class="my-card">
      
      <img src="https://cdn.quasar.dev/img/mountains.jpg" >
      <q-page-sticky position="bottom-right" :offset="[18, 18]">
            <q-btn fab icon="add" color="orange" />
          </q-page-sticky>
      <q-card-section>
        <div>
          <div class="text-h6">Desenvolvedor PHP   <div class="posttime"> Postada á 3 horas </div></div>      
        </div>
        <div class="text-subtitle2">Empresa - Cidade, país</div>
      </q-card-section>
     
      <q-card-section>
        <a>{{ lorem }}</a>
      </q-card-section>

      <q-card-section>
        <div class="text-subtitle2">Atribuições da vaga</div>
      </q-card-section>

      <q-card-section>
        <div v-for="c in 5" :key="c"><a>{{ atribuicoes }}</a></div> 
      </q-card-section>

      <q-card-section>
        <div class="text-subtitle2">Conhecimentos Necessários</div>
      </q-card-section>

      <q-card-section>
        <div v-for="c in 5" :key="c"><a>{{ atribuicoes }}</a></div> 
      </q-card-section>
    </q-card>
    </div>
   </q-layout>
</template>

<script>
import imagem from '../../img/user.png';

export default {
  name: 'Login',
  data () {
    return {
     
      lorem:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      atribuicoes: 'Lorem ipsum dolor sit amet'
    }
  },
  methods:{
    menuPrincipal(){
      this.$router.push('/index');
    }
  }
}
</script>

<style scoped>
  .text-h6{
    color: #1E88E5;
    font-size: 16px;
  }

  .text-subtitle2{
    font-size: 12px;
  }
  .posttime{
    float:right;
    color: black;
    font-size: 10px;
    opacity: 0.7;
    font-style: italic;
  }
  a{
    opacity: 0.7;
  }
</style>
