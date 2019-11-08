<template>
   <div>

    <q-card class="" style="height:350px;width:105%;margin-left:-2.5%;">
      <q-card-section> 
        <q-item-section>
          <q-item-label >
            <a class="title">Educação</a>
          </q-item-label> 

          <q-item-label style="margin-top:2%;">
            <q-input v-model="curso" label="Curso"  />
          </q-item-label>

          <q-item-label>
            <q-input v-model="instituicao" label="Instituição"  />
          </q-item-label> 

          
          <q-item-label>
            <div>
              <span style="float:left">
              <q-input v-model="inicio" 
              label="Inicio" 
              style="max-width:150px"
              mask="##/##/####"
              hint="ex: 00/00/0000"
              > 
                <template v-slot:append>
                  <q-icon name="event" />
                </template>
              </q-input>
              </span>
              <span style="float:right">
              <q-input v-model="conclusao"
              label="Conclusao"
              style="max-width:150px;"
              mask="##/##/####"
              hint="ex: 00/00/0000"
              >
                <template v-slot:append>
                  <q-icon name="event" />
                </template>
              </q-input>
              </span>
            </div>    
          </q-item-label> 
        </q-item-section>  
      </q-card-section> 

    </q-card>   
               
  </div>
</template>

<script>


export default {
  name: 'Educacao',
  data () {
    return {
     curso:null,
     instituicao:null,
     inicio:null,
     conclusao:null
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
  color:#1E88E5;
  font-weight:bold;
  font-size: 19px;
}

@media only screen and (max-width:320px) {
 
}
</style>
