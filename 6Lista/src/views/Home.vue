<script>
import { ref } from 'vue'
import Navegacao from '../components/Navegacao.vue'
import PaginaCentral from '../components/Pagina-Central.vue'
import Recomendados from '../components/Recomendados.vue'

export default{
  components: {
    Navegacao,
    PaginaCentral,
    Recomendados,
  }
}
</script>

<template>
  <div class="container">
          <div class="row justify-content-between">
               
            <Navegacao />
            <PaginaCentral />
            <Recomendados />
               
          </div>
     </div>
</template>

<style scoped>

</style>