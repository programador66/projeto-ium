<template>
<div>
  <toolbar/>
</div>  
</template>

<style scoped>
 
</style>

<script>
import toolbar  from '../layouts/Header/Toobar'

export default {
    components:{
      toolbar
    },
    data () {
    return {
       tab: 'one'
    }
  }
}
</script>
