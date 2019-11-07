<template>
  <div>
    <perfilCurriculo/>
  </div>
</template>

<style lang="stylus" scoped>
  .text{
    color:blue
  }
</style>

<script>
import perfilCurriculo from '../layouts/Curriculo/DadosPessoais';

export default {
    components:{
      perfilCurriculo
    }, 
    data () {
    return {
       tab: 'one'
    }
  }
}
</script>
