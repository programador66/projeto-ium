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
   methods: {
    
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



@media only screen and (max-width:320px) {
 


}
</style>
