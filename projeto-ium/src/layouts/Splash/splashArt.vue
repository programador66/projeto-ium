<template>
  <q-layout id="login">
     <div class="bloco1">
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

    <footer>
        <h2>Caio César Lacerda</h2>
        <h2>2020</h2>
    </footer>

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
.bloco1{
  padding-top: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap; 
}
footer {
 display: flex; 
 justify-content: center;
 flex-wrap: nowrap;
 flex-direction: column;
 align-items: center;
 /*border: solid 1px black;
 flex-wrap: wrap;
 flex-direction: column;
  height: 100%; */
}  
footer h2 {
  color:white;
  font-family:Helvetica Neue;
  font-size:  1.25rem;
  font-weight:bold;
  text-align: center;
}
footer :first-child {
  padding: 0%;
  margin-bottom: 0%;
}
footer :last-child {
  margin-top: 0%;
}
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
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
#foto{
  /* margin:20% 28%; */
  display: flex;
  justify-content: center;
  justify-items: center;
  margin: 0%;
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
