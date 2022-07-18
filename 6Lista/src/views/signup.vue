<script>
import SegundaParteCadastro from '../components/SegundaParteCadastro.vue';

export default{
  components: {
    SegundaParteCadastro
  }
}
</script>

<template>
  <div class="d-flex justify-content-center">
    <form class="SignUp validacao">
        <header class="row my-2 mx-1 d-flex justify-self-center">
            <div class="col CC">
              <h4>Criar Conta</h4>
            </div>
            <div class="col close d-flex justify-content-end">
              <a href="login.html"><button type="button" class="btn-close mb-1" data-bs-dismiss="modal" aria-label="Close"></button></a>
            </div>
            <hr>
        </header>
        
        <div class="form-floating mb-3">
          <input type="text" class="form-control signup" id="nome" placeholder="Nome" required>
          <label for="floatingInput">Nome:</label>
        </div>
        <div class="form-floating mb-3">
          <input type="email" class="form-control signup" id="email" placeholder="email@example.com" required>
          <label for="floatingInput">Email:</label>
        </div>
        <div class="form-floating mb-3">
          <input type="password" class="form-control signup" id="senha" placeholder="Senha" minlength="6" required>
          <label for="floatingPassword">Senha:</label>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control signup" id="confirmar" placeholder="Confirmar senha" required>
          <label for="floatingPassword">Confirmação de senha:</label>
        </div>
        
        <br>
        <SegundaParteCadastro />
        
        <footer class="row my-2 mx-1 d-flex justify-self-center">
          <hr>
          <div class="Footer m-0 d-flex justify-content-center mb-3">
              <button type="submit" class="Inscrever btn btn-primary btn-sm rounded-pill"><strong>Se inscrever</strong></button>
          </div>
        </footer>
    </form>
  </div>
</template>

<style scoped>
form.Login{
    height:400px;
    width:500px;
    position: absolute;
    top: 50%;
    -webkit-transform: translateY(-50%);
    transform: translateY(-50%);

    background-color: rgb(255, 255, 255);
    border-radius: 5px;
}

form.SignUp{
    margin-top: 50px;
    margin-bottom: 50px;
    height:790px;
    width:500px;

    background-color: rgb(255, 255, 255);
    border-radius: 5px;
}

div, span{
    margin-left: 20px;
    margin-right: 20px;
}

div.textoExibicao, div.textoTermos{
    margin: 0px;
}

div.textoExibicao{
    color:grey;
}

div.Mes, div.Dia, div.Ano{
    padding-right: 0px;
    margin-right: 0px;
}

select.mes{
    width: 220px;
}

.caixa{
    margin-right: 11px;
}

.radio{
    margin-left: 0px;
}

button{
    align-self: center;
    width: 475px;
}

body{
    background-color: rgb(3, 94, 124) !important;
}

.CC{
    margin-left: 0px;
}

.close{
    margin-right: 0px;
}

</style>