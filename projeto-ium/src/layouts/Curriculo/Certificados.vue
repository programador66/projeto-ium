<template>
  <div>
    <q-card class="" style="width:105%;margin-left:-2.5%;">
      <q-card-section>
        <q-item-section>
          <q-item-label>
            <a class="title">Prêmio e Certificações</a>
          </q-item-label>

          <template v-if="existeEducacao">
            <div v-for="(premio, index) in obj" :key="index">
              <q-card-section>
                <q-item-label>
                  <span>{{ premio.emissor }}</span>
                  <span style="float:right;color:#1E88E5;font-weight:bold;">
                    {{ premio.data }}
                  </span>
                </q-item-label>
                <q-item-label>
                  {{ premio.premio }}
                </q-item-label>
              </q-card-section>
              <q-separator />
            </div>
          </template>

          <q-item-label style="margin-top:2%;">
            <q-select
              v-if="getEditar"
              v-model="selectCertificacoes"
              :options="options"
              label="Selecionar Certificado"
            />
            <q-input v-model="premio" label="Prêmio ou Certificado" />
          </q-item-label>

          <q-item-label>
            <q-input v-model="emissor" label="Emissor" />
          </q-item-label>

          <q-item-label>
            <div>
              <span style="float:left">
                <q-input v-model="data" label="Data" style="max-width:150px">
                  <q-popup-proxy ref="qDateProxy2" transition-show="scale" transition-hide="scale">
                    <q-date v-model="cldata" @input="() => $refs.qDateProxy2.hide()" />
                  </q-popup-proxy>
                  <template v-slot:append>
                    <q-icon name="event" />
                  </template>
                </q-input>
              </span>
            </div>
          </q-item-label>
        </q-item-section>
      </q-card-section>

      <q-card-section style="margin-top:4%;" v-show="this.obj.length < 2">
        <q-item-label v-if="!getEditar">
          <q-btn
            size="6px"
            round
            color="primary"
            icon="add"
            @click="adicionarPremioOucertificacao"
          />
          <a style="margin-left:2%;opacity: 0.6;">Adicionar </a>
        </q-item-label>
      </q-card-section>

      <q-card-section style="margin-top:5%;">
        <q-item-section>
          <q-btn
            v-if="!getEditar"
            @click="cadastrarCertificacoesePremios()"
            color="primary"
            label="Finalizar"
          />
          <q-btn v-else @click="atualizarCertificados()" color="primary" label="Atualizar" />
        </q-item-section>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>
import Certificacao from '../../api/certificacoesPremios';
import { mapGetters } from 'vuex';

export default {
  name: 'Certificados',
  data() {
    return {
      obj: [],
      premio: '',
      emissor: '',
      data: '',
      existeEducacao: false,
      cldata: null,
      selectCertificacoes: null,
      options: [],
      id: null,
    };
  },
  mounted() {
    this.options = this.getCertificados.map(certificados => certificados.descricao);
  },
  computed: {
    ...mapGetters('jfs/', {
      getEditar: 'getEditar',
      getCertificados: 'getCertificados',
    }),
  },
  watch: {
    cldata(val) {
      const dt = new Date(val);
      this.data = dt.toLocaleDateString();
    },
    selectCertificacoes(val) {
      const certificados = this.getCertificados.filter(element => element.descricao === val);

      certificados.forEach(cert => {
        this.premio = cert.descricao;
        this.cldata = cert.data;
        this.id = cert.id;
        this.emissor = cert.emissor;
      });
    },
  },
  methods: {
    atualizarCertificados() {
      const premioCertificao = {
        premio: this.premio,
        emissor: this.emissor,
        data: this.data,
        id: this.id,
      };
      console.log(premioCertificao);
    },
    cadastrarCertificacoesePremios() {
      this.$q.loading.show();
      if (this.premio && this.emissor && this.data != '') {
        const premioCertificao = {
          premio: this.premio,
          emissor: this.emissor,
          data: this.data,
          id_user: JSON.parse(sessionStorage.getItem('usuario')).id,
        };
        this.obj.push(premioCertificao);
      }

      Certificacao.setCertificacao({ certificacao: this.obj }).then(response => {
        const msg = response.data.message;
        if (response.data.success) {
          this.$q.notify({
            color: 'green',
            timeout: 1500,
            textColor: 'white',
            message: msg,
            actions: [{ icon: 'close', color: 'white' }],
          });
          this.$q.loading.hide();

          setTimeout(() => {
            this.$router.push('/index');
          }, 1600);
        } else {
          this.$q.notify({
            color: 'red',
            timeout: 1500,
            textColor: 'white',
            message: msg,
            actions: [{ icon: 'close', color: 'white' }],
          });
          this.$q.loading.hide();
        }
      });
    },
    adicionarPremioOucertificacao() {
      const premioCertificao = {
        premio: this.premio,
        emissor: this.emissor,
        data: this.data,
        id_user: JSON.parse(sessionStorage.getItem('usuario')).id,
      };
      this.existeEducacao = true;
      this.obj.push(premioCertificao);
      this.premio = '';
      this.emissor = '';
      this.data = '';
    },
  },
};
</script>

<style scoped>
#passos {
  margin-top: 13%;
  height: 50px;
}
.title {
  color: #1e88e5;
  font-weight: bold;
  font-size: 19px;
}

@media only screen and (max-width: 320px) {
}
</style>
