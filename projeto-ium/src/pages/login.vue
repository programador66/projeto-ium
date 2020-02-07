<template>
  <div>
    <login/>
  </div>
</template>

<style lang="stylus" scoped>
  .text{
    color:blue
  }
</style>

<script>
import login from '../layouts/LoginUsuario/Login'

export default {
    components:{
      login
    }, 
    data () {
    return {
       tab: 'one'
    }
  }
}
</script>
