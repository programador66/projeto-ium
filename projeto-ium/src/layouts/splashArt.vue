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

      <div style="margin-left:30%;color:white;font-family:Helvetica Neue;font-weight:bold;font-size:20px">
        <span> Job For Students</span>
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
import imagem from '../img/user.png';

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
  margin:20% 43%;
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



@media only screen and (max-width:320px) {
 
#splash {
  margin:20% 44%;
}

}
</style>
