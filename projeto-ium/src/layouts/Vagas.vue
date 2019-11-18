<template>
<q-layout>
  <div class="col-12">
      <q-scroll-area
        style="height: 600px; max-width: 400px;padding-bottom:12%;"
        
      >
          <q-list bordered >
            <div v-for="c in 6" :key="c">
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
                      <q-btn color="primary" style="float:right;" @click="empresaPerfil">Visualizar</q-btn>
                    </q-card-section>
                  </q-item-section>
                </q-card-section>
                
            </q-card >
            
           
            </div>
          </q-list>
          
  </q-scroll-area>
  </div> 
</q-layout>   
</template>

<script>
export default {
   data () {
    return {
     lorem:'lorem ispun ajjsjju jjj asdas dasdasda asdasdasd asdasdas das asda sd'
    }
  },
  computed: {
    contentStyle () {
      return {
        backgroundColor: 'rgba(0,0,0,0.02)',
        color: '#555'
      }
    },

    contentActiveStyle () {
      return {
        backgroundColor: '#eee',
        color: 'black'
      }
    },

    thumbStyle () {
      return {
        right: '2px',
        borderRadius: '5px',
        backgroundColor: '#027be3',
        width: '5px',
        opacity: 0.75
      }
    }
  },
  
  methods:{
    empresaPerfil(){
      this.$router.push('/empresa-perfil');
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