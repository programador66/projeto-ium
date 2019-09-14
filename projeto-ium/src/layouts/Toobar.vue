<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <a style="margin-top:2%;">IUM-Project</a>
        </q-toolbar-title>
          <q-avatar name="mails" icon="mail" label="Mails" style="float:right;margin-top:1%;" @click="chat">
            <q-badge color="red" floating>2</q-badge>
          </q-avatar>
            <q-avatar style="float:right;margin-top:1%;">
                <img src="https://cdn.quasar.dev/img/avatar2.jpg">
            </q-avatar>
      </q-toolbar>
      <sub-menu/>
    </q-header>

    <q-drawer show-if-above v-model="left" side="left" bordered>
      <!-- drawer content -->
    </q-drawer>
  </q-layout>
</template>

<script>

import subMenu from './SubMenu';

export default {
  components:{
    subMenu
  },
  data () {
    return {
      left: false,
      tab:'one'
    }
  },
  methods:{
    chat(){
      alert('em construção');
    }
  }
}
</script>


<style scoped>
.text{
    color: white
  }
</style>