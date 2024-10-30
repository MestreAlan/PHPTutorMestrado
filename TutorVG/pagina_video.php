<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Video-aula Gamedu</title>
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <style>
            body{
                background: #6F6F6F;
            }
            .barra{
                position: absolute;
                left: 2%;
                z-index: 1;
            }
            .efeito{
                box-shadow: inset 0 2px 5px #fff, 0 1px 3px #666 !important;
                top:2px
            }
            .conteudoVideoUnico{
                margin:0%;
                padding:0;
                position:relative;
                top:0%;
                left:0%;
                background-color:#000;
                width: 100%; 
                height: 100%; 
                text-shadow: black 0.2em 0.1em 0.2em;
            }
        </style>
        <script>
            var query = location.search.slice(1);
            var partes = query.split('&');
            var data = {};
            partes.forEach(function (parte) {
                var chaveValor = parte.split('=');
                var chave = chaveValor[0];
                var valor = chaveValor[1];
                data[chave] = valor;
            });
            var nome = "Seu login: ";
            if(data['uid'] !== undefined){
                nome = nome+data['uid'];
            }else{
                nome = nome+prompt("Insira seu login igual está no Desafio Gamedu para que possamos computar os seus pontos");
            }     
            var pagina = "pagina_video";
        </script>
        
    </head>
    <body>
    
        <div id="barra" class="barra">
            <div class="btn-group">
                <button type="button" class="btn btn-default" id="nome"></button>
            </div>
        </div>
        <div class="col-md-12 box-avatar">
            <div class="conteudoVideoUnico">
                <video controls autoplay id="Video1">
                    <source src="http://gamedu.net/aulas/arkanoid/0.mp4" type="video/mp4" />
                </video>
            </div>  
        </div>
        <script type="text/javascript" src="core.js"></script>
        <script type="text/javascript" src="videoControl.js"></script>
        <script src="assets/js/jquery-2.2.3.min.js"></script>
        <script src="js/bootstrap.min.js"></script>  
        <script src="assets/js/main.js"></script>
        <script>
            
            $("#barra .btn").click(function(){
                $("#barra .btn").each(function(){
                    $(".btn").removeClass("efeito");                  
                });
                $(this).addClass("efeito");
            });
            
            $(function(){
                $('button#nome').text(nome).attr({
                    title:nome
                });
            });
            funcaoLog('LOGIN-pagina_video');
            
        </script>
    </body>
</html>