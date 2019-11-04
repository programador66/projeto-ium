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

          <div v-if="!novoUsuario">
              <div id="ntc">
                <a style="text-decoration:underline white" @click="criarNovaConta">
                  Não tem conta? Crie uma nova conta
                </a>
              </div>
                <div id="opEntrada"> 
                  <span> <q-btn  id="face" @click="facebook" /></span>
                  <span> <q-btn id="google" /></span>
                </div>
                <div id="btnEntrar">
                    <q-btn label="Entrar" @click="entrar" text-color="blue" color="white"/>
                </div>
          </div>

          <div v-else>
            <q-input
            filled
            color="white"
            v-model="novaSenha"
            label="Confirmar Senha"
            dark
            lazy-rules
            type="password"
            :rules="[
              val => val !== null && val !== '' || 'Campo não pode ser nullo'
            ]"
            />
            <div id="btnCadastrar">
              <q-btn label="Cadastrar" @click="CriarNovoUsuario" text-color="blue" color="white"/>
            </div>
          </div> 
        </q-form>
      </div>
    </div>
  </q-layout>
</template>

<script>
import imagem from '../img/user.png';
import MyLayout from '../layouts/MyLayout';

export default {
  name: 'Login',
  data () {
    return {
      email: null,
      senha: null,
      novaSenha:null,
      novoUsuario:false,
      url: imagem,
      accept: true,
      mostrarProgress:false
    }
  },
   methods: {
    onReset () {
      this.usuario = null
      this.senha = null
      this.accept = false
    },
    criarNovaConta(){  
        this.novoUsuario = true;
    },
    entrar(){
  
      this.mostrarProgress = true;
      let foto = document.getElementById("foto");
      foto.style.transitionDelay = "0.1s";
      foto.style.transitionDuration = "3s";
      foto.style.transform = 'scale(1.3)';
      

      this.$axios.post('http://projeto-ium/api/cliente/login',{
       email: this.email,
       password:this.senha
       })
      .then(response => {
        console.log(response);
        if (response.data.validate){
          const msg = 
          response.data.validate ? response.data.data.email ? response.data.data.email[0] : "" + " "
          +response.data.data.password ? response.data.data.password[0] : "" : null;

          this.$q.notify({
          color: 'red',                                                      
          timeout: 1500,
          textColor: 'white',
          message: msg || 'verificar campos inválidos!',
          actions: [{ icon: 'close', color: 'blue' }]
          })

          this.mostrarProgress = false;

        } else if (response.data.success){
          sessionStorage.setItem('usuario',JSON.stringify(response.data.data));
          setTimeout(() => {
            this.$router.push('/index');
          },2000);

        } else {
         
          let res = response.data.message;

          this.$q.notify({
          color: 'red',                                                      
          timeout: 1500,
          textColor: 'white',
          message: res,
          actions: [{ icon: 'close', color: 'blue' }]
          })

          setTimeout(() => {
            this.mostrarProgress = false;
          },2000);

        }
        

      })
      .catch(e => {
        console.log(e);
      })
    

    },
    CriarNovoUsuario(){

      this.mostrarProgress = true;
      let foto = document.getElementById("foto");
      foto.style.transitionDelay = "0.1s";
      foto.style.transitionDuration = "3s";
      foto.style.transform = 'scale(1.3)';

      this.$q.notify({
        color: 'white',                                                      
        timeout: 1500,
        textColor: 'blue',
        message: 'Cadastro realizado com sucesso!',
        actions: [{ icon: 'close', color: 'blue' }]
       
      })
      setTimeout(() => {
        window.location.reload();
      },2000);

    },
    facebook(){
   
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

#opEntrada{
  margin-left:1.5%;
}

#btnEntrar{
   margin:10% 40%;
}

#btnCadastrar{
   margin:10% 35%;
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

@media only screen and (max-width:320px) {
  #face{
  width: 130px;
  height: 32px;
  background-size: 103%; 
  margin-right: 2%;
}

#google{
  width: 130px;
  height: 38px;
  background-size: 100%; 
}
#ntc{
  color:white;
  margin:5% 10%;
}


#foto{
  margin:12% 28%;
}
}
</style>
