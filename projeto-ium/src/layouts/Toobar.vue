<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white" height-hint="98">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          IUM-Project
        </q-toolbar-title>
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
  }
}
</script>


<style scoped>
.text{
    color: white
  }
</style>