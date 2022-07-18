<template>
    <div>
        <h6><strong>Data de nascimento</strong></h6>

        <div class="textoExibicao mb-4">
            Isto não será exibido publicamente. Confirme sua própria idade, mesmo se esta conta for de empresa, de um animal de estimação ou outros.
        </div>

        <div class="m-0 mb-4 d-flex justify-content-around">
            <div class="col Mes m-0 form-floating">
                <select class="form-select" id="mes" aria-label="Floating label select example" required>
                    <option></option>
                    <option value="Janeiro">Janeiro</option>
                    <option value="Fevereiro">Fevereiro</option>
                    <option value="Março">Março</option>
                    <option value="Abril">Abril</option>
                    <option value="Maio">Maio</option>
                    <option value="Junho">Junho</option>
                    <option value="Julho">Julho</option>
                    <option value="Agosto">Agosto</option>
                    <option value="Setembro">Setembro</option>
                    <option value="Outubro">Outubro</option>
                    <option value="Novembro">Novembro</option>
                    <option value="Dezembro">Dezembro</option>
                </select>
                <label for="floatingSelect">Mês</label>
            </div>
            <div class="col Dia ml-2 form-floating">
                <select class="form-select" id="dia" aria-label="Floating label select example" required>
                </select>
                <label for="floatingSelect">Dia</label>
            </div>
            <div class="col Ano ml-2 form-floating">
                <select class="form-select" id="ano" aria-label="Floating label select example" required>
                </select>
                <label for="floatingSelect">Ano</label>
            </div>
        </div>

        <div class="row d-flex justify-content-between">
            <label class="w-75" for="checkbox1">Receba e-mails sobre sua atividade no Twitter e recomendações.</label>
            <input class="form-check-input p-0 caixa" type="checkbox" value="" id="defaultCheck1">
        </div>
        
        <div class="textoTermos mb-3">
            Você concorda com nossos Termos, com a Política de Privacidade e com o Uso de Cookies?
        </div>

        <div class="form-check form-check-inline mb-2 radio">
            <input class="form-check-input sim" type="radio" name="inlineRadioOptions" id="Sim" value="sim" unchecked>
            <label class="form-check-label" for="inlineRadio1">Sim</label>
        </div>
        <div class="form-check form-check-inline mb-2 radio">
            <input class="form-check-input" type="radio" name="inlineRadioOptions" id="Nao" value="nao">
            <label class="form-check-label" for="inlineRadio2">Não</label>
        </div>
    </div>
</template>