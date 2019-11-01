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

    <q-drawer 
      show-if-above 
      v-model="left" 
      side="left" 
      bordered :width="300" 
      overlay 
      content-class="bg-grey-3">
      
      <q-list>
        
        <q-scroll-area style="height: calc(100% - 150px); margin-top: 150px; border-right: 1px solid #ddd">
        <q-item clickable tag="a" target="_blank" href="https://quasar.dev">
          <q-item-section avatar>
            <q-icon name="school" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Faculdade</q-item-label>
            <q-item-label caption>quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://chat.quasar.dev">
          <q-item-section avatar>
            <q-icon name="chat" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Discord Chat Channel</q-item-label>
            <q-item-label caption>chat.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://forum.quasar.dev">
          <q-item-section avatar>
            <q-icon name="record_voice_over" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Forum</q-item-label>
            <q-item-label caption>forum.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://twitter.quasar.dev">
          <q-item-section avatar>
            <q-icon name="rss_feed" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Twitter</q-item-label>
            <q-item-label caption>@quasarframework</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://facebook.quasar.dev">
          <q-item-section avatar>
            <q-icon name="public" />
          </q-item-section>
          <q-item-section>
            <q-item-label>Facebook</q-item-label>
            <q-item-label caption>@QuasarFramework</q-item-label>
          </q-item-section>
        </q-item>
        </q-scroll-area>
      </q-list>
      

      <q-img class="absolute-top" src="https://cdn.quasar.dev/img/material.png" style="height: 150px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/avatar2.jpg">
            </q-avatar>
            <div class="text-weight-bold">Razvan Stoenescu</div>
            <div>@rstoenescu</div>
          </div>
      </q-img>

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