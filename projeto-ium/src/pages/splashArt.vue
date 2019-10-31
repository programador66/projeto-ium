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
import splashArt from '../layouts/splashArt'

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
