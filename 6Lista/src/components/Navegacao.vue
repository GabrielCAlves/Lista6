<script>
import Items from './ItemsMenu.vue'
import FormularioTzeet from './FormularioTzeet.vue'

export default{
    components: {
        Items,
        FormularioTzeet
    }
}
</script>


<template>
    <div class="col-2 col-sm-4 col-md-3 col-lg-2 navegacao">
        <Items />
        
        <button type="button" class="btn btn-primary btn-sm rounded-pill" data-bs-toggle="modal" data-bs-target=".modal">Tzeet</button>

        <div class="modal" tabindex="-1">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <FormularioTzeet />
                        </div>
                    </div>
                </div>
        </div>
    </div>
</template>