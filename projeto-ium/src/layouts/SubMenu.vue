<template>
  
  <div>
      <!-- <q-tabs align="left">
        <q-route-tab to="/page1" label="Page One" />
        <q-route-tab to="/page2" label="Page Two" />
        <q-route-tab to="/page3" label="Page Three" />

      </q-tabs> -->
       <q-tabs v-model="tab" class="text-teal" >
        <q-tab label="Tab one" class="text" name="one" />
        <q-tab label="Tab two" class="text" name="two" />
        <q-tab label="Tab three" class="text" name="three" />
      </q-tabs>

      <q-separator />
      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="one">
          <a style="color:red">The QCard component is a great way to display important pieces of grouped content.</a>
        </q-tab-panel>

        <q-tab-panel name="two">
           <a style="color:red">With so much content to display at once, and often so little screen real-estate,
          Cards have fast become the design pattern of choice for many companies, including
          the likes of Google and Twitter.</a>
        </q-tab-panel>

      </q-tab-panels>
    
    <q-page-container>
      <router-view />
    </q-page-container>
  </div>
</template>

<script>
export default {
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