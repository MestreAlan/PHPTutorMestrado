<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Tutor Gamedu</title>
        <link type="text/css" rel="stylesheet" href="css-vg.css"/>
        <link href="css/bootstrap.min.css" rel="stylesheet">
        <style>
            body{
                background: #6F6F6F;
            }
            .barra{
                position: absolute;
                left: 18%;
                z-index: 10;
            }
            .efeito{
                box-shadow: inset 0 2px 5px #fff, 0 1px 3px #666 !important;
                top:2px
            }
        </style>
        <script>
            /* INICIO DO CODIGO QUE PEGA OS DADOS DA URL */
            var query = location.search.slice(1);
            var partes = query.split('&');
            var data = {};
            partes.forEach(function (parte) {
                var chaveValor = parte.split('=');
                var chave = chaveValor[0];
                var valor = chaveValor[1];
                data[chave] = valor;
            });
            /* FIM DO CODIGO QUE PEGA OS DADOS DA URL */
            //window.open('https://docs.google.com/forms/d/1wZUV-AQMcaXRBcZUuToTa5_vtdWKnSJExG_CBA_eIXQ/edit?usp=drive_web', 'Questionário', 'STATUS=NO, TOOLBAR=NO, LOCATION=NO, DIRECTORIES=NO, RESISABLE=NO, SCROLLBARS=YES, TOP=10, LEFT=10, WIDTH=770, HEIGHT=400');  
            var nome = 'ALUNO';
			if(data['user_name'] !== undefined){
                nome = data['user_name'];
            }
			
			var idUsuario = 0;
			if(data['user_id'] !== undefined){
                idUsuario = data['user_id'];
            }
			
			var idProcesso = 0;
			if(data['process_id'] !== undefined){
                idProcesso = data['process_id'];
            }
            var pagina = "aberturaVideo";
			
			aula = "Arkanoid_vg";
            //window.open('https://docs.google.com/forms/d/1y5GYQTDpZ5I9_J8cZM3h1LskkaDutUYLjQv5k4TWIbc/edit?usp=drive_web', 'Questionário', 'STATUS=NO, TOOLBAR=NO, LOCATION=NO, DIRECTORIES=NO, RESISABLE=NO, SCROLLBARS=YES, TOP=10, LEFT=10, WIDTH=770, HEIGHT=400');
            window.getAnimation = function(){
                return this.nome;
            };
			window.getIdUsuario = function(){
                return this.idUsuario;
            };
			window.getIdProcesso = function(){
                return this.idProcesso;
            };
            window.getAnimation = function(){
                return this.pagina;
            };
			window.getAula = function(){
                return this.aula;
            };                        
        </script>
    </head>
    <body>
    
        <div id="barra" class="barra">
            <div class="btn-group">
                <button type="button" onclick="abrirPagina('assets/aula/arkanoid_vg/aberturaVideo.html'); funcaoLog('Menu(MISSION)'); funcaoLog('Saiu_pagina'); pagina='aberturaVideo';" class="btn btn-primary">Início da missão</button>
            </div>
                        
            <div class="btn-group">
                <button type="button" class="btn btn-default" id="nome"></button>
            </div>
        </div>
        
        <div class="container">
            <div class="row">
                <div class="col-md-12">
                    <div class="row">
                        <div id="quadro">
                            <ul></ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script type="text/javascript" src="core.js"></script>
        <script src="assets/js/jquery-2.2.3.min.js"></script>
        <script src="js/bootstrap.min.js"></script>  
        <script src="assets/js/main.js"></script>
        <script>
            $(function(){
                abrirPagina('assets/aula/arkanoid_vg/aberturaVideo.html');
            });
            
            function abrirPagina(pagina){
                $.get(pagina).success(function(res){
                    $("#quadro").html(res);
                    $(document).ready(function(){
                        funcaoLog('Entrou_pagina');
                    });
                });
            }
    
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
            
            funcaoLog('Iniciou aula LOGIN-Arkanoid_vg');
            
        </script>
    </body>
</html>