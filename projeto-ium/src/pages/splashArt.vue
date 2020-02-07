<template>
  <div>
    <splashArt/>
  </div>
</template>

<style lang="stylus" scoped>
  .text{
    color:blue
  }
</style>

<script>
import splashArt from '../layouts/Splash/splashArt'

export default {
    components:{
      splashArt
    }, 
    data () {
    return {
       tab: 'one'
    }
  }
}
</script>
