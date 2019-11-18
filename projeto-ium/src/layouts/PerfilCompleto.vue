<template>
  <div style="">

    <q-card class="my-card" >
      <q-card-section >
        <div class="title" >Educação</div>
        <q-card-section>
          <div class="title-descricao">
            Bel. Ciência da Computação <span style="float:right;color:#1E88E5;font-weight:bold;">2018</span>
          </div>
          <div class="sub-title-descricao">
            Universidade Federal do Amazonas 
          </div>
        </q-card-section>     
      </q-card-section>

      <q-card-section >
        <div class="title" >Trabalho</div>
        <q-card-section>
          <div class="title-descricao">
            Bel. Ciência da Computação <span style="float:right;color:#1E88E5;font-weight:bold;">2018</span>
          </div>
          <div class="sub-title-descricao">
            Universidade Federal do Amazonas 
          </div> 
        </q-card-section>    
      </q-card-section>

      <q-card-section >
        <div class="title" >Certificações</div>
        <q-card-section>
          <div class="title-descricao">
            Bel. Ciência da Computação <span style="float:right;color:#1E88E5;font-weight:bold;">2018</span>
          </div>
          <div class="sub-title-descricao">
            Universidade Federal do Amazonas 
          </div> 
        </q-card-section>    
      </q-card-section>

    </q-card>

     <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-btn fab icon="add" color="blue" />
      </q-page-sticky>
  </div>   
</template>

<script>

export default {
   data () {
    return {
   
    }
  },

  methods: {
   
  }
   
}
</script>


<style scoped>

.title{
  color:#1E88E5;
  font-weight:bold;
  font-size: 17px;
  margin: 0% 0% 0% 2.5%;
}
.title-descricao{
  font-size: 17px;
  color: black;
}

.sub-title-descricao{
  font-size: 12px;
  color: black;
}
</style>