<script>
import Navegacao from '../components/Navegacao.vue'
import Tzeet from '../components/Tzeet.vue'
import Recomendados from '../components/Recomendados.vue'

export default{
    components: {
        Navegacao,
        Tzeet,
        Recomendados,
    }
}
</script>


<template>
     <div class="container">
          <div class="row justify-content-between">
               <Navegacao />

               <div class="col-7 col-sm-8 col-md-6 col-lg-7 pagina-central dark-gray p-l-2">
                    <img alt="Imagem" draggable="true" src="https://pbs.twimg.com/profile_images/1508973126729797635/kB7QCuIe_400x400.jpg" class="css-9pa8cd rounded-circle" width="128">
                    
                    <div class="d-flex flex-row-reverse m-x editar-perfil">
                         <button type="button" class="btn btn-primary btn-md rounded-pill">Edit profile</button>
                    </div>
                    <br>
                    
                    <h4>Bruno Góis Mateus</h4>
                    <h5><span class="gray">@brunomateuss</span></h5>
                    <h6>Android Engineer  - Adjunct Professor  and Researcher in Mobile Development @ Federal University of Ceará</h6>
                    <br>
                    
                    <ul>
                         <li>
                              <div class="gray"><i class="bi bi-geo-alt"></i>Fortaleza <i class="bi bi-calendar3"></i>Ingressou em janeiro de 2010</div>
                         </li>
                    </ul>
              
                    <section class="estatisticas">
                         <ul>
                              <li>
                                   <span><a href="https://twitter.com/brunomateuss/following" class="link-dark"><span class="numero">98</span> <span class="gray">Seguindo</span></a></span>
                                   <span><a href="https://twitter.com/brunomateuss/followers" class="link-dark"><span class="numero">79</span> <span class="gray">Seguidores</span></a></span>
                              </li>
                         </ul>
                    </section>
                    <br>
                    
                         <section class="publicacoes d-flex flex-row flex-fill justify-content-around">
                              
                                   <a href="https://twitter.com/brunomateuss" class="box align-self-center link-dark">Tzeets</a>
                                   <a href="https://twitter.com/brunomateuss/with_replies" class="box align-self-center link-dark"> Tzeets e Respostas</a>
                                   <a href="https://twitter.com/brunomateuss/media" class="box align-self-center link-dark"> Mídia</a>
                                   <a href="https://twitter.com/brunomateuss/likes" class="box align-self-center link-dark"> Curtidas</a>
                              
                         </section>
                    
                    <Tzeet />

               </div>

               <Recomendados />
               
          </div>
     </div>
</template>

<style scoped>
.dark-gray .gray{
    color: rgb(83, 100, 113);
}

.numero{
    font-weight: bold;
}

.dark-gray{
    color: rgb(15, 20, 25);
}

.pagina-central a, .navegacao li a, .mult-stat-env a{
    color: rgb(15, 20, 25);
    text-decoration: none;
}

li{
    list-style-type: none;
}

.div{
    padding-left: 0px;
}

/*Primeira coluna, classe de navegacao*/
.navegacao li{
    font-size: 1.25rem;
    margin-bottom: 10px;
    margin-right: 0px;
}

.navegacao ul{
    padding-left: 17px;
    width: 175px;
    margin: 0px;
}

.navegacao .bi{
    margin: 10px;
    font-size: 20px;
}

.navegacao > .btn{
    width: 130px;
    height: 40px;
    margin-left: 20px;
    margin-bottom: 40px;
    border: 0px;
}

.navegacao li:hover{
    background-color: rgba(15, 25, 20, 0.1);
    border-radius: 10px;
}

.pagina-central .bi{
    margin-right: 10px;
}


/*Segunda coluna, classe da pagina central*/
.pagina-central{
    padding-left: 200px;
}

.pagina-central .editar-perfil{
    float: left;
    float: right;
    margin-top: 90px;
}

.estatisticas{
    color: rgb(83, 100, 113);
}

.estatisticas span:hover{
    text-decoration: underline;
}

.publicacoes{
    height: 50px;
}

.publicacoes a {
    padding: 10px;
    color: rgb(15, 20, 25);
    margin-bottom: 10px;
    flex-grow: 1;
    text-align: center;
}

.publicacoes a:hover{
    background-color: rgba(15, 25, 20, 0.1);
}

.acoes{
    display: flex;
    gap: 10px;
    flex-direction: row;
    margin-bottom: 40px;
}

.acoes a{
    color: rgb(83, 100, 113);
}

.responder-compartilhar .bi-upload{
    margin-left: 50px;
}

.responder-compartilhar .bi-upload:hover{
    color: rgba(29, 155, 240, 1);
}

.responder-compartilhar i:hover{
    background-color:  rgba(29, 155, 240, 0.1);
    border-radius: 10px;
}

.responder-compartilhar a:hover{
    color: rgba(29, 155, 240, 1);
}

.retzeetar{
    margin-left: 40px;
}

.retzeetar:hover{
    color: rgba(0, 186, 124, 1);
}

.retzeetar i:hover{
    color: rgba(0, 186, 124, 1);
    background-color: rgba(0, 186, 124, 0.1);
    border-radius: 10px;
}

.retzeetar a:hover{
    color: rgba(0, 186, 124, 1);
}

.curtir{
    margin-left: 40px;
}

.curtir:hover{
    color: rgba(249, 24, 128, 1);
}

.curtir i:hover{
    background-color: rgba(249, 24, 128, 0.1);
    border-radius: 10px;
}

.curtir a:hover{
    color: rgba(249, 24, 128, 1);
}

.tzeet p:hover, p:link{
    background-color: rgba(15, 25, 20, 0.1);
}

/*Terceira coluna, classe de recomendados*/
.pesquisa{
    width: 250px;
    height: 30px;
    background-color: rgb(239, 243, 244);
}

.pesquisa label{
    width: 16px;
    padding: 0px;
    padding-left: 10px;
    padding-top: 6px;
}

.pesquisa input{
    background-color: rgb(239, 243, 244);
    border-color: transparent;
    width: 200px;
    height: 30px;
    padding: 6px;
}

.caixa{
    width: 250px;
    background-color: rgb(239, 243, 244);
    border-radius: 5px;
}

.caixa a, .caixa h4, .caixa img{
    margin: 10px;
}

/*Modal*/
.foto{
    margin-top: 10px;
}

.post{
    padding-top: 30px;
    padding-left: 30px;
}

.configReply{
    padding-top: 5px;
    padding-bottom: 10px;
}

.configReply a{
    text-decoration: none;
}

.post a:hover{
    background-color: rgb(29, 155, 240);
    border-radius: 10px;
    width: 20px;
    height: 20px;
}

.multimedia a, .status-envio a{
    color: rgb(83, 100, 113);
}

.multimedia a:hover{
    background-color: rgb(29, 155, 240);
    border-radius: 10px;
}

.status-envio span{
    margin-right: 20px;
}

.status-envio a{
    margin-right: 20px;
    width: 20px;
}

.status-envio i{
    height: 16px;
    margin-left: 0px;
}
</style>