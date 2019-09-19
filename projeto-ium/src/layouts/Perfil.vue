<template>
  <div class="perfil">
      <q-card class="my-card">
      <q-card-section>
        <div id="title1" >Seu Currículo ainda não está cadastrado.</div>
        <div id="title2">Crie um agora e tenha mais chances em novas oportunidades</div>
      </q-card-section>

      

      <q-separator />

      
    </q-card>
  </div>   
</template>

<script>
// import imagem from '../img/ilustracao.svg';

export default {
   data () {
    return {
     lorem:'lorem ispun jiamso nnjjaum join th amalum'
    }
  }
   
}
</script>


<style scoped>
.perfil{
  background-image: url("../img/ilustracao.png");
  background-color: white;
  height: 800px;
}
#title1{
  font-family: Helvetica;
  font-weight:bold;
  font-size:18px;
  color:#1E88E5;
  text-align: center
}
#title2{
  font-family: Helvetica;
  font-weight:bold;
  font-size:18px;
  color:#000000;
  text-align: center
}
</style>