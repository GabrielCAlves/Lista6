<template>
    <div class="d-flex">
        <div class="flex-column foto">
            <img alt="Imagem" draggable="true" src="https://pbs.twimg.com/profile_images/1508973126729797635/kB7QCuIe_400x400.jpg" class="css-9pa8cd rounded-circle" width="64" height="64">
        </div>
        <div class="flex-column flex-fill post">
            <div class="form group areaEntrada">
                <textarea class="form-control border-0" id="textareaModal" rows="1" placeholder="O que você está pensando"></textarea>
            </div>
            <div class="configReply">
                <a href="#" style="text-decoration:none"><i class="bi bi-globe"></i>Everyone can reply</a>
            </div>
            <div class="mult-stat-env row h-21">
                <div class="multimedia col inline d-flex justify-content-around align-items-center">
                    <a href="#"><i class="bi bi-image m-0"></i></a>
                    <a href="#"><i class="bi bi-files m-0"></i></a>
                    <a href="#"><i class="bi bi-emoji-smile m-0"></i></a>
                    <a href="#"><i class="bi bi-bar-chart m-0"></i></a>
                    <a href="#"><i class="bi bi-calendar-event m-0"></i></a>
                    <a href="#"><i class="bi bi-geo-alt m-0"></i></a>
                </div>
                <div class="status-envio col inline d-flex justify-content-end align-items-center">
                    <span class="contadorModal"></span>
                    <span>|</span>
                    <a href="#"><i class="bi bi-plus-circle m-0"></i></a>
                    <button type="button" class="BtnEnviar btn btn-primary btn-sm rounded-pill">Enviar</button>
                </div>
            </div>
        </div>
    </div>
</template>