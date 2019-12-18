<template>
<q-layout style="height: 400px">
  <div class="col-12">
      <q-page-container>
        <q-page padding>
            <div v-for="c in 10" :key="c">
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
          <div style="height:50px;">
              <h1></h1>
          </div>
          <!-- place QPageScroller at end of page -->
          <q-page-scroller position="bottom-left" :scroll-offset="150" :offset="[18, 18]">
            <q-btn fab icon="keyboard_arrow_up" color="orange" />
          </q-page-scroller>
        </q-page>
      </q-page-container>
          
 
  </div> 
</q-layout>   
</template>

<script>
export default {
   data () {
    return {
     lorem:'Empresa lider mundial no ramos de tecnologia, usando as melhores práticas de desenvolvimento...'
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