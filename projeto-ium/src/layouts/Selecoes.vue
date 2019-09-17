<template>
  <div class="col-12">
      <q-scroll-area
        style="height: 600px; max-width: 400px;"
        
      >
          <q-list bordered animated>
            <div v-for="c in 4" :key="c">
            <q-card class="my-card" style="margin-bottom:3%;">
                <q-item>
                    <q-item-section avatar>
                      <q-avatar >
                        <img src="https://cdn.quasar.dev/img/avatar2.jpg">
                      </q-avatar>
                    </q-item-section>

                    <q-item-section>
                      <q-item-label ><a class="title">Desenvolvedor PHP</a></q-item-label> 
                      <q-item-label caption>Empresa - Cidade, país</q-item-label>
                    </q-item-section>
                      <q-item-label caption style="font-size:10px; margin-top:1.5%;">Postada á 3 horas</q-item-label>
                   
                </q-item>

                <q-card-section>
                  <a class="textBody">{{ lorem }}</a>
                  <q-item-section>
                    <q-card-section>
                      <q-btn color="orange" style="float:right;" @click="confirm">desistir</q-btn>
                    </q-card-section>
                  </q-item-section>
                </q-card-section>
                
            </q-card >
            
           
            </div>
          </q-list> 
  </q-scroll-area>
  </div>   
</template>

<script>
export default {
   data () {
    return {
     lorem:'lorem ispun jiamso nnjjaum join th amalum'
    }
  },
  methods:{
    empresaPerfil(){
      this.$router.push('/empresa-perfil');
    },
    confirm () {
      this.$q.dialog({
        title: 'Desistir da Vaga',
        message: 'Deseja realmente desistir da vaga?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        console.log('>>>> OK')
      }).onOk(() => {
        console.log('>>>> second OK catcher')
      }).onCancel(() => {
        console.log('>>>> Cancel')
      }).onDismiss(() => {
        console.log('I am triggered on both OK and Cancel')
      })
    },
  }
}
</script>


<style scoped>
.text{
    color: white
  }
.title{
  color:#1E88E5
}
.textBody{
  color:black
}
</style>