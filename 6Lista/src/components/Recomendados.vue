<script>
import Sugestoes from './SugestoesUser.vue'

export default{
    components: {
        Sugestoes
    }
}
</script>


<template>
    <div class="d-none d-sm-none d-md-block col-md-3 col-lg-2 recomendados">
        <section class="pesquisa form-group row m-0 rounded-pill">
                <label class="col-form-label"><i class="bi bi-search m-t-6"></i></label>
                <div class="col-sm-10"><input type="text" class="form-control" placeholder="Username"></div>
        </section>

        <section class="caixa">
                <h4><strong>Talvez você curta</strong></h4>
                <Sugestoes />
                <a href="#">Mostrar mais</a>
        </section>
    </div>
</template>