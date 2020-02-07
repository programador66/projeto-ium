<template>
<div class="q-pa-md">

    <q-card class="my-card" >
        <q-card-section >
          <div id="title1" >Seu Currículo ainda não está cadastrado.</div>
            <div id="title2">Crie um agora e tenha mais chances em novas oportunidades</div>
        </q-card-section>
          <q-card-section >
            <div style="text-align:center;margin-top:10%;">
              <q-btn color="primary" 
              @click="perfil()">
              Cadastrar
              </q-btn></div>
          </q-card-section>
          
    </q-card>
  </div>   
</template>

<script>

export default {
   data () {
    return {
     lorem:'lorem ispun jiamso nnjjaum join th amalum'
    }
  },

  methods: {
    perfil(){
      this.$router.push("/perfil-curriculo");
    }
  }
   
}
</script>


<style scoped>
  .my-card{
    margin-top:25%;
    height: 300px;
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
  text-align: center;
  margin-top: 5%;
}
</style>