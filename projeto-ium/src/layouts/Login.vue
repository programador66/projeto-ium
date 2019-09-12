<template>
  <q-layout id="login">
     <div class="q-pa-md" style="max-width: 400px">
        <div id="foto">
             <q-img
              :src="url"
              spinner-color="white"
              style="height: 140px; max-width: 150px"
              />
        </div>
       
      <q-form
        class="q-gutter-md"
        color="white"
      >
        <q-input
          color="white"
          filled
          v-model="usuario"
          label="Usuário"
          lazy-rules
          dark
          :rules="[ val => val && val.length > 0 || 'Campo não pode ser nulo']"
        />

        <q-input
          filled
          color="white"
          v-model="senha"
          label="Senha"
           dark
          lazy-rules
          type="password"
          :rules="[
            val => val !== null && val !== '' || 'Campo não pode ser nullo'
          ]"
        />
        <div id="ntc"> Não tem conta? Crie uma nova conta  </div>
        <div>
          <q-btn label="Submit" @click="onSubmit" text-color="blue" color="white"/>
        </div>
      </q-form>
    </div>
  </q-layout>
</template>

<script>
import imagem from '../img/user.png';

export default {
  name: 'Login',
  data () {
    return {
      usuario: null,
      senha: null,
      url: imagem,
      accept: true
    }
  },
   methods: {
    onSubmit () {
      if (this.accept !== true) {
        this.$q.notify({
          color: 'red-5',
          textColor: 'white',
          icon: 'fas fa-exclamation-triangle',
          message: 'You need to accept the license and terms first'
        })
      }
      else {
        this.$q.notify({
          color: 'green-4',
          textColor: 'white',
          icon: 'fas fa-check-circle',
          message: 'Submitted'
        })
      }
    },

    onReset () {
      this.usuario = null
      this.senha = null
      this.accept = false
    }
  }
}
</script>

<style scoped>
#login {
  background-color:#1E88E5;
}
#foto{
  margin:20% 28%;
}
#ntc{
  color:white;
}
</style>
