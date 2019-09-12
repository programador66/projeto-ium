<template>
    <div class="q-pa-md">
    <q-card class="my-card">
      <q-card-section>
        <div class="text-h6">Our Changing Planet</div>
        <div class="text-subtitle2">by John Doe</div>
      </q-card-section>

      <q-tabs v-model="tab" class="text-teal" >
        <q-tab label="Tab one" class="text" name="one" />
        <q-tab label="Tab two" class="text" name="two" />
         <q-tab label="Tab three" class="text" name="three" />
      </q-tabs>

      <q-separator />

      <q-tab-panels v-model="tab" animated>
        <q-tab-panel name="one">
          The QCard component is a great way to display important pieces of grouped content.
        </q-tab-panel>

        <q-tab-panel name="two">
          With so much content to display at once, and often so little screen real-estate,
          Cards have fast become the design pattern of choice for many companies, including
          the likes of Google and Twitter.
        </q-tab-panel>
      </q-tab-panels>
    </q-card>
  </div>
</template>

<style lang="stylus" scoped>
  .text{
    color:blue
  }
</style>

<script>
export default {
    data () {
    return {
       tab: 'one'
    }
  }
}
</script>
