<template>
   <q-layout view="hHh lpR fFf">

    <div class="row">
      <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar class="bg-primary text-white">
      <q-btn flat round dense icon="keyboard_backspace" class="q-mr-sm"  />
      
      <q-toolbar-title>Criar Perfil</q-toolbar-title>

      <q-btn flat label="concluir"/>
    </q-toolbar>
      
    </q-header>
    </div>

  
    <div id="passos">
       <!-- <q-card class="my-card" style="height:500px;">
        <q-card-section> -->
          <q-stepper
                v-model="step"
                ref="stepper"
                contracted
                color="primary"
                animated
              >
                <q-step
                  :name="1"
                  title="Select campaign settings"
                  icon="settings"
                  :done="step > 1"
                >
                 <perfil @stepper="proximo" />

                </q-step>

                <q-step
                  :name="2"
                  title="Create an ad group"
                  caption="Optional"
                  icon="create_new_folder"
                  :done="step > 2"
                >
                  An ad group contains one or more ads which target a shared set of keywords.
                </q-step>

                <q-step
                  :name="3"
                  title="Create an ad"
                  icon="add_comment"
                >
                  Try out different ad text to see what brings in the most customers, and learn how to
                  enhance your ads using features like ad extensions. If you run into any problems with
                  your ads, find out how to tell if they're running and how to resolve approval issues.
                </q-step>

                <template v-slot:navigation>
                  <q-stepper-navigation>
                    <q-btn @click="$refs.stepper.next()" color="primary" :label="step === 3 ? 'Finish' : 'Continue'" />
                    <q-btn v-if="step > 1" flat color="primary" @click="$refs.stepper.previous()" label="Back" class="q-ml-sm" />
                  </q-stepper-navigation>
                </template>
              </q-stepper>
        <!-- </q-card-section>
    </q-card> -->
    </div>

  </q-layout>
</template>

<script>

import  perfil from "../Curriculo/Perfil";

export default {
  components:{
    perfil
  },
  name: 'DadosPessoais',
  data () {
    return {
     step: 1
    }
  },
   methods: {
    proximo(val){
      this.step = val;
    }
  }
}
</script>

<style scoped>
#passos{
  margin-top: 13%;
}

@media only screen and (max-width:320px) {
 
}
</style>
