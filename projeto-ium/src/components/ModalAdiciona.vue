<template>
  <div class="q-pa-md">
    <!-- ================= Modal Edição ================================= -->
    <q-dialog v-model="adiciona" persistent>
      <q-card style="width: 700px; max-width: 90vw;">
        <q-card-section class="row items-center">
          <q-item-section>
            <q-input 
             
              :label="desc1"
              ref="instituicao"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Campo obrigatório']"
            />  
          </q-item-section>
        </q-card-section>

        <q-card-section class="row items-center">
          <q-item-section>
            <q-input
               
              :label="desc2"
              ref="curso"
              lazy-rules
              :rules="[ val => val && val.length > 0 || 'Campo obrigatório']"
            />
          </q-item-section> 
        </q-card-section>

        <q-card-section>
          <div style="display:flex;justify-content:center;">
            <span>
                <q-input filled 
                  
                  maxlength="10" 
                  :label="dt1" 
                  style="max-width:148px"
                  ref="dtinicio"                
                  lazy-rules
                  :rules="[ val => val && val.length > 0 || 'Campo obrigatório']"    
                > 
                  <q-popup-proxy ref="qDateProxy1" transition-show="scale" transition-hide="scale">
                      <!-- <q-date v-model="clinicio" @input="() => $refs.qDateProxy1.hide()" /> -->
                  </q-popup-proxy>
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                    </q-icon>
                  </template>
                </q-input>
            </span>
            <span style="margin-left:2.5%;">
                <q-input filled 
                  
                  :label="dt2"
                  maxlength="10" 
                  style="max-width:145px;"
                  ref="dtconclusao"
                  lazy-rules
                  :rules="[ val => val && val.length > 0 || 'Campo obrigatório']"     
                >
                <q-popup-proxy ref="qDateProxy2" transition-show="scale" transition-hide="scale">
                    <!-- <q-date v-model="clconclusao"  @input="() => $refs.qDateProxy2.hide() " /> -->
                 </q-popup-proxy>
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                    </q-icon>
                  </template>

              </q-input>
            </span>
          </div>
        </q-card-section>  

        <q-card-actions align="right">
          <q-btn flat label="cancelar" color="primary" @click="closeModal()" />
          <q-btn flat label="cadastrar" color="primary"  v-close-popup/>
        </q-card-actions>
        
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  name: "ModalAdiciona",
  props: ['adiciona','desc1', 'desc2', 'dt1', 'dt2'],  
  data(){
    return {
      ad:false,
      descript1:null,
      descript2:null,
    }
  },
  mounted(){

  },
  computed: {
    
  },
  methods: {
    closeModal(){
      this.$emit('adiciona', false);
    }
  }
}
</script>