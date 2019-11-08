<template>
   <q-layout view="hHh lpR fFf">

    <div class="row">
      <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar class="bg-primary text-white" style="height:55px;">
      <q-btn flat round dense icon="keyboard_backspace" class="q-mr-sm"  />
      
      <q-toolbar-title >Criar Perfil</q-toolbar-title>

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
                  icon="add_comment"
                  :done="step > 2"
                >
                <educacao/>

                </q-step>

                <q-step
                  :name="3"
                  title="Create an ad"
                  icon="create_new_folder"
                  :done="step > 3"
                >
                  <experienciaProfissional/>
                </q-step>

                <q-step
                  :name="4"
                  title="Create an ad"
                  icon="add_comment"
                >
                  <certificado/>
                </q-step>

                <template v-slot:navigation>
                  <q-stepper-navigation>
                    <q-btn @click="$refs.stepper.next()" color="primary" :label="step === 4 ? 'Finish' : 'Continue'" />
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

import perfil from "../Curriculo/Perfil";
import educacao from "../Curriculo/Educacao";
import experienciaProfissional  from "../Curriculo/ExperienciaProfissional";
import certificado from "../Curriculo/Certificados";

export default {
  components:{
    perfil,educacao,experienciaProfissional,certificado
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
  margin-top: 14%;
}

@media only screen and (max-width:320px) {
 
}
</style>
