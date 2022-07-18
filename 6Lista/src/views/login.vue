<template>
  <div class="d-flex justify-content-center">
    <form class="Login validacao">
        <div class="d-flex justify-content-center mt-3">
          <img src="https://github.com/GabrielCAlves/DSW-Lista3/blob/main/tiziu.png?raw=true" width="30" height="45">
        </div>
        <br>

        <div><h6><strong>Entre no Tzeet agora mesmo</strong></h6></div>
        <div class="form-floating mb-3">
          <input type="email" class="form-control login" id="floatingInput" placeholder="email@example.com" minlength="1" required>
          <label for="floatingInput">Email:</label>
          <div class="invalid-feedback">
              Informe um email válido.
          </div>
        </div>
        <div class="form-floating">
          <input type="password" class="form-control login" id="floatingPassword" placeholder="Senha" minlength="1" required>
          <label for="floatingPassword">Senha:</label>
          <div class="invalid-feedback">
              Informe uma senha correspondente.
          </div>
        </div>
        <div><a href="#">Esqueceu a senha?</a></div>
        
        <br>
        <div class="d-flex justify-content-center mb-3">
            <button type="submit" class="Entrar btn btn-primary btn-sm rounded-pill"><strong>Entrar</strong></button>
        </div>
        
        <span>Não tem uma conta? <a href="signup.html">Inscreva-se</a></span>
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