<template>
   <div>

       <q-card class="" style="height:200px;width:105%;margin-left:-2.5%;">
        <q-card-section> 
          <q-item-section>
            <q-item-label ><a class="title">Dados Pessoais</a></q-item-label> 
            
            </q-item-section>
        </q-card-section> 
       </q-card>   

    <!-- <q-btn @click="perfil()" color="primary"  label="Proximo" /> -->
                  
  </div>
</template>

<script>


export default {
  name: 'DadosPessoais',
  data () {
    return {
     step: 1
    }
  },
   methods: {
    perfil(){
      this.$emit('stepper',2);
    }
  }
}
</script>

<style scoped>
#passos{
  margin-top: 13%;
  height: 50px;
}
.title{
  color:#1E88E5
}

@media only screen and (max-width:320px) {
 
}
</style>
