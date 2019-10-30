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
      <div id="progress" v-show="mostrarProgress">
       <q-circular-progress
          indeterminate
          size="50px"
          color="white"
          class="q-ma-md"
        />
      </div>

     <div id="form" v-show="!mostrarProgress">  
        <q-form
          class="q-gutter-md"
          color="white"
        >
          <q-input
            color="white"
            filled
            v-model="email"
            label="E-mail"
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
          <div id="ntc"><a> Não tem conta? Crie uma nova conta  </a></div>
          <span> <q-btn  id="face" @click="facebook" /></span> <span> <q-btn id="google" /></span>
          <div id="btnEntrar">
            <q-btn label="Entrar" @click="entrar" text-color="blue" color="white"/>
          </div>
        </q-form>
        </div>
    </div>
  </q-layout>
</template>

<script>
import imagem from '../img/user.png';
import MyLayout from '../layouts/MyLayout';
import firebase from 'firebase';
export default {
  name: 'Login',
  data () {
    return {
      email: null,
      senha: null,
      url: imagem,
      accept: true,
      mostrarProgress:false
    }
  },
   methods: {
    onSubmit () {
        firebase.auth().createUserWithEmailAndPassword(this.email, this.senha).then(
          (user) => {
            this.$router.push('/index');
        },
        (err) => {
            this.$q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'fas fa-exclamation-triangle',
            message: 'Email ou senha inválido'
        })
        
          }
        )
     
    },
    onReset () {
      this.usuario = null
      this.senha = null
      this.accept = false
    },
    criarNovaConta(){    
       firebase.auth().createUserWithEmailAndPassword(this.email, this.senha).then(
          (user) => {
            this.$router.push('/index');
        },
        (err) => {
            this.$q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'fas fa-exclamation-triangle',
            message: 'Email ou senha inválido'
        })
        
          }
        )
    },
    entrar(){
      
      // firebase.auth().signInWithEmailAndPassword(this.email, this.senha).then(
      //     (user) => {
      //       this.$router.push('/index');
      //   },
      //   (err) => {
      //       this.$q.notify({
      //       color: 'red-5',
      //       textColor: 'white',
      //       icon: 'fas fa-exclamation-triangle',
      //       message: 'Usuário inexistente'
      //   })
        
      //     }
      //   )
      this.mostrarProgress = true;
      let foto = document.getElementById("foto");
      foto.style.transitionDelay = "0.1s";
      foto.style.transitionDuration = "3s";
      foto.style.transform = 'scale(1.3)';
       
    },
    facebook(){
      var provider = new firebase.auth.FacebookAuthProvider();
      firebase.auth().signInWithPopup(provider).then(function(result) {
    
          var token = result.credential.accessToken;
          // The signed-in user info.
          var user = result.user;
          // ...
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          // The email of the user's account used.
          var email = error.email;
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential;
          // ...
        });
    }
  }
}
</script>

<style scoped>

.grow
{
  -webkit-transform: scale(1.3);
  -ms-transform: scale(1.3);
  transform: scale(1.3);
}
#progress {
  margin:20% 38%;
}
#login {
  background-color:#1E88E5;
}
#foto{
  margin:20% 28%;
}
#ntc{
  color:white;
  margin:5% 16%;
}

#btnEntrar{
   margin:10% 40%;
}

#face{
  width: 160px;
  height: 32px;
  background-image:url('../img/Image 2.png');
  background-size: 105%;
}

#google{
  width: 160px;
  height: 38px;
  background-image:url('../img/google.png');
  background-size: 102%;
}
</style>
