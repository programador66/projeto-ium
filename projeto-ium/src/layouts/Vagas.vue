<template>
  <div class="col-12">
      <q-scroll-area
        style="height: 600px; max-width: 400px;"
      >
     
          <q-list bordered animated>
            <div v-for="c in 6" :key="c">
            <q-card class="my-card" style="margin-bottom:2.5%;">
                <q-item>
                    <q-item-section avatar>
                      <q-avatar>
                        <img src="https://cdn.quasar.dev/img/avatar2.jpg">
                      </q-avatar>
                    </q-item-section>

                    <q-item-section>
                      <q-item-label ><a class="title">Desenvolvedor PHP</a></q-item-label>
                      <q-item-label caption>Empresa - Cidade, país</q-item-label>
                    </q-item-section>
                </q-item>
                <q-card-section>
                  <a class="textBody">{{ lorem }}</a>
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
     lorem:'lorem ispun ajjsjju jjj'
    }
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