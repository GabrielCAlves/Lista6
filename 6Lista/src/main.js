import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')

window.addEventListener("load", function(){

    const limite = 140;

    function text(textarea, textoContagem, btn){
        let tamanho = textarea.value.length;
        let cont = limite - tamanho;
        
        textoContagem.innerHTML = cont;

        const palavra = textarea.value;

        if(cont < 40 && cont >= 0){
            textoContagem.style.color = "yellow";
            btn.disabled = false;
        }else if(cont < 0){
            textoContagem.style.color = "red";
            btn.disabled = true;
        }else if(palavra == ""){
            textoContagem.style.color = "black";
            btn.disabled = true;
        }else{
            textoContagem.style.color = "black";
            btn.disabled = false;
        }
    }

    const qtd = document.getElementsByClassName("BtnEnviar");

    const textareas = document.getElementsByTagName("textarea");
    
    for(let i = 0; i < textareas.length; ++i){
        qtd[i].disabled = true;
        
        textareas[i].addEventListener("input", function(){
            this.style.height = "auto";
            this.style.height = `${this.scrollHeight}px`;
            
            if(textareas[i].id === "textareaHome"){
                text(textareas[i], document.querySelector(".contadorHome"), qtd[i]);
            }else if(textareas[i].id === "textareaModal"){
                text(textareas[i], document.querySelector(".contadorModal"), qtd[i]);
            }
        });
    }


    const mes = document.querySelector("#mes");
    const dia = document.querySelector("#dia");
    const ano = document.querySelector("#ano");

    function limparData(){
        if(dia.childElementCount != 0){
            let child = dia.lastElementChild;
            while(child){
                dia.removeChild(child);
                child = dia.lastElementChild;
            }
        }
    }

    function datasDia(){
        let opcao = mes.options[mes.selectedIndex].value;
        let num;
        limparData();

        if(opcao === "Janeiro" || opcao === "Março" || opcao === "Maio" || opcao === "Julho" ||
           opcao === "Agosto" || opcao === "Outubro" || opcao === "Dezembro"){
            for(let i = 1; i <= 31; ++i){
                num = document.createElement("option");
                num.textContent = i;
                num.value = i;
                dia.appendChild(num);
            }
        }else if(opcao === "Fevereiro"){
            for(let i = 1; i <= 29; ++i){
                num = document.createElement("option");
                num.textContent = i;
                num.value = i;
                dia.appendChild(num);
            }
        }else{
            for(let i = 1; i <= 30; ++i){
                num = document.createElement("option");
                num.textContent = i;
                num.value = i;
                dia.appendChild(num);
            }
        }
    };

    function limparAno(){
        if(ano.childElementCount != 0){
            let child = ano.lastElementChild;
            while(child){
                ano.removeChild(child);
                child = ano.lastElementChild;
            }
        }
    }

    function datasAno(){
        let opcao1 = mes.options[mes.selectedIndex].value;
        let opcao2 = dia.options[dia.selectedIndex].value;
        let num;
        limparAno();

        if(opcao1 === "Fevereiro" && opcao2 === "29"){
            for(let i = 1960; i <= 2004; ++i){
                if((i%4 === 0 && i%100 != 0) || i%400 === 0){
                    num = document.createElement("option");
                    num.textContent = i;
                    num.value = i;
                    ano.appendChild(num);
                }
            }
        }else{
            for(let i = 1960; i <= 2004; ++i){
                num = document.createElement("option");
                num.textContent = i;
                num.value = i;
                ano.appendChild(num);
            }
        }
    };

    const radio = document.querySelector(".sim");

    const btn = document.querySelectorAll("button");

    const inputs = document.getElementsByTagName("input");

    function confirmarSenha(){
        const senha = document.querySelector("#senha");
        const confirmar = document.querySelector("#confirmar");

        if(senha.value === confirmar.value){
            confirmar.setCustomValidity("");
        }else{
            confirmar.setCustomValidity("Confirmação de senha não correspondente");
        }
    }

    function desabilitar(){
        for(let i = 0; i < btn.length; ++i){
            btn[i].disabled = true;
        }
    }

    for(let i = 0; i < inputs.length; ++i){
        desabilitar();

        inputs[i].addEventListener("input", function(){

            if(inputs[i].value.length === 0){
                if(i != 4){
                    desabilitar();
                }
            }else if(inputs[i].className === "form-control login"){
                if(i > 0){
                    if(inputs[i].value.length > 0 && inputs[i-1].value.length > 0){
                        btn[0].disabled = false;
                    }
                }else{
                    if(inputs[i].value.length > 0 && inputs[i+1].value.length > 0){
                        btn[0].disabled = false;
                    }
                }
            }else{

                mes.addEventListener("change", function(){
                    datasDia();
                    datasAno();
                });

                dia.addEventListener("change", function(){
                    datasAno();
                });

                if(i === 2 || i === 3){
                    confirmarSenha();
                }
                
                if(radio.checked){
                    btn[1].disabled = false;
                }else{
                    btn[1].disabled = true;
                }
            }
        });
    }

    (() => {
        'use strict'
  
        const forms = document.querySelectorAll('.validacao')

        Array.from(forms).forEach(form => {
            form.addEventListener('submit', event => {
                if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
                }
  
                form.classList.add('was-validated')
            }, false)
        })
    })()
});
