<script>
import Tzeet from './Tzeet.vue'
import FormularioTzeet from './FormularioTzeet.vue'

export default{
    components: {
        Tzeet,
        FormularioTzeet
    }
}
</script>


<template>
    <div class="col-7 col-sm-8 col-md-6 col-lg-7 pagina-central dark-gray p-l-2">
        <h3>Home</h3>
        <FormularioTzeet />

        <br>
        <br>
        <Tzeet />


    </div>
</template>