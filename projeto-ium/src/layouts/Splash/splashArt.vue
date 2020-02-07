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

      <div id="msg1">
        <div style="margin-top:13%;">SIS Estudante-Empresa</div>
      </div>

      <div class="splash" v-show="mostrarProgress">
      
        <q-spinner-dots
          color="white"
          size="3em"
        />
        <q-tooltip :offset="[0, 8]">QSpinnerDots</q-tooltip>
      
      </div>

     

    </div>
  </q-layout>
</template>

<script>
import imagem from '../../img/user.png';

export default {
  name: 'splashArt',
  data () {
    return {
      url: imagem,
      mostrarProgress:false
    }
  },
  mounted(){
    this.splashArt();
  },
   methods: {
    splashArt(){
     
      this.mostrarProgress = true;
      setTimeout(() => {
        this.$router.push('/login');
      },2000);

    
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
.splash {
  margin:20% 46%;
  display: flex;
  justify-content: center
}
#login {
  background-color:#1E88E5;
}
#foto{
  /* margin:20% 28%; */
  display: flex;
  justify-content: center;
  justify-items: center;
}

#ntc{
  color:white;
  margin:5% 16%;
}

#msg1{
  /* margin-left:22%; */
  display: flex;
  justify-content: center;
  justify-items: center;
  color:white;
  font-family:Helvetica Neue;
  font-weight:bold;
  font-size:20px;
}

@media only screen and (max-width:320px) {
 
#splash {
  margin:20% 44%;
}

}
</style>
