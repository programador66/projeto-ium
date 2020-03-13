<template>
  <div class="q-pa-md">
    <!-- ================= Modal Edição ================================= -->
    <q-dialog v-model="adiciona" persistent>
      <q-card style="width: 700px; max-width: 90vw;">
        <q-card-section class="row items-center">
          <q-item-section>
            <q-input
              :label="desc1"
              ref="empresa"
              v-model="empresa"
              lazy-rules
              :rules="[val => (val && val.length > 0) || 'Campo obrigatório']"
            />
          </q-item-section>
        </q-card-section>

        <q-card-section class="row items-center">
          <q-item-section>
            <q-input
              :label="desc2"
              v-model="cargo"
              ref="cargo"
              lazy-rules
              :rules="[val => (val && val.length > 0) || 'Campo obrigatório']"
            />
          </q-item-section>
        </q-card-section>

        <q-card-section>
          <div style="display:flex;justify-content:center;">
            <span>
              <q-input
                filled
                maxlength="10"
                :label="dt1"
                style="max-width:148px"
                ref="dtInicio"
                lazy-rules
                v-model="dtInicio"
                :rules="[val => (val && val.length > 0) || 'Campo obrigatório']"
              >
                <q-popup-proxy ref="qDateProxy1" transition-show="scale" transition-hide="scale">
                  <q-date v-model="clInicio" @input="() => $refs.qDateProxy1.hide()" />
                </q-popup-proxy>
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer"> </q-icon>
                </template>
              </q-input>
            </span>
            <span style="margin-left:2.5%;">
              <q-input
                filled
                :label="dt2"
                maxlength="10"
                style="max-width:145px;"
                ref="dtFinal"
                v-model="dtFinal"
                lazy-rules
                :rules="[val => (val && val.length > 0) || 'Campo obrigatório']"
              >
                <q-popup-proxy ref="qDateProxy2" transition-show="scale" transition-hide="scale">
                  <q-date v-model="clFinal" @input="() => $refs.qDateProxy2.hide()" />
                </q-popup-proxy>
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer"> </q-icon>
                </template>
              </q-input>
            </span>
          </div>
        </q-card-section>

        <q-card-actions align="right">
          <q-btn flat label="cancelar" color="primary" @click="closeModal()" />
          <q-btn flat label="cadastrar" color="primary" @click="cadastrar()" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </div>
</template>

<script>
export default {
  name: 'ModalAdiciona',
  props: ['adiciona', 'desc1', 'desc2', 'dt1', 'dt2'],
  data() {
    return {
      ad: false,
      descript1: null,
      descript2: null,
      empresa: null,
      cargo: null,
      dtInicio: null,
      clInicio: null,
      dtFinal: null,
      clFinal: null,
    };
  },
  mounted() {},
  watch: {
    clInicio(val) {
      if (val == '') {
        this.dtInicio = ' ';
        // this.$refs.dtinicio.resetValidation();
      } else {
        const ndInicio = new Date(val);
        this.dtInicio = ndInicio.toLocaleDateString();
      }
    },
    clFinal(val) {
      if (val == '') {
        this.dtFinal = ' ';
        // this.$refs.dtinicio.resetValidation();
      } else {
        const dtFinal = new Date(val);
        this.dtFinal = dtFinal.toLocaleDateString();
      }
    },
  },
  methods: {
    closeModal() {
      this.limpaCampos();
      this.$emit('adiciona', false);
    },
    cadastrar() {
      const obg = {
        empresa: this.empresa,
        cargo: this.cargo,
        inicio: this.dtInicio,
        saida: this.dtFinal,
      };
      this.$emit('cadastraNovaProfissao', obg);
    },
    limpaCampos() {
      this.empresa = '';
      this.dtInicio = '';
      this.dtFinal = '';
      this.cargo = '';
    },
  },
};
</script>
