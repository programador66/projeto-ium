<template>
  <div>
    <empresa/>
  </div>
</template>

<style lang="stylus" scoped>
  .text{
    color:blue
  }
</style>

<script>
import empresa from '../layouts/EmpresaPerfil'

export default {
    components:{
      empresa
    }, 
    data () {
    return {
       tab: 'one'
    }
  }
}
</script>
