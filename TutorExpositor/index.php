<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Tutor Gamedu</title>
        <link type="text/css" rel="stylesheet" href="css/geral/stylesheet.css"/>
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
            var nome = 'ALUNO';
			if(data['user_name'] !== undefined && data['user_name'] !== ""){
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
			
			var aula = "Não definida";
			if(data['aula'] !== undefined){
                aula = data['aula'];
            }
			
			var idAula = 1;
			
            window.getAnimation = function(){
                return this.nome;
            };
			window.getIdUsuario = function(){
                return this.idUsuario;
            };
			window.getIdProcesso = function(){
                return this.idProcesso;
            };
			window.getAula = function(){
                return this.aula;
            };   
			window.getIdAula = function(){
                return this.idAula;
            };
			
			//Variáveis do controlador
			var id_conteudo; //id
			window.getid_conteudo = function(){
                return this.id_conteudo;
            };
			var codigo_conteudo; //codigo
			window.getcodigo_conteudo = function(){
                return this.codigo_conteudo;
            };
			var titulo_conteudo; //titulo
			window.gettitulo_conteudo = function(){
                return this.titulo_conteudo;
            };
			var contexto_conteudo; //contexto
			window.getcontexto_conteudo = function(){
                return this.contexto_conteudo;
            };
			var atividades_conteudo = []; //atividades
			window.getatividades_conteudo = function(){
                return this.atividades_conteudo;
            };
			var resumo_conteudo; //resumo
			window.getresumo_conteudo = function(){
                return this.resumo_conteudo;
            };
			var links_conteudo = []; //links
			window.getlinks_conteudo = function(){
                return this.links_conteudo;
            };
			var botoes = []; //links
			window.getbotoes = function(){
                return this.botoes;
            };
			
			var baseDados = "base/BASE.json";
			if(data['base'] !== undefined){
                baseDados = "base/"+data['base']+".json";
            }
			
			
        </script>
    </head>
    <body>
    
        <div id="barra" class="barra">
            <div class="btn-group">
				<button type="button" onclick="idAula=2;  chamarAtualizacaoInfo(); abrirPagina('assets/templates/abertura.html'); funcaoLog('Menu(MISSION)'); funcaoLog('Saiu_pagina'); titulo_conteudo='abertura';" class="btn btn-primary">Início da missão</button>
            </div>
                        
            <div class="btn-group">
                <button type="button" class="btn btn-default" id="nome"></button>
            </div>
        </div>
        
        <div class="container">
            <div class="row">
                <div class="col-md-12 box-avatar">
                    <div class="row">
                        <img class="cabeca" id="cabeca" src="imgRobo/cabeca/head0001.png" alt="Tutor Head"/>
                        <img class="peito" id="peito" src="imgRobo/peito/body0001.png" alt="Tutor Body"/>
                        <img class="bracoE" id="bracoE" src="imgRobo/braco/arm0005.png" alt="Tutor Arm"/>
                        <img class="bracoD" id="bracoD" src="imgRobo/braco/arm0001.png" alt="Tutor Arm"/>
                    </div>
                    <div class="row">
                        <div id="quadro">
                            <ul></ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <script type="text/javascript" src="agentes/visual.js"></script>
        <script src="assets/js/jquery-2.2.3.min.js"></script>
        <script src="assets/js/bootstrap.min.js"></script>  
        <script src="assets/js/main.js"></script>
        <script>
            $(function(){
				inicializarInfo();
                abrirPagina('assets/templates/apresentacao.html');
            });
            
            function abrirPagina(titulo_conteudo){
                $.get(titulo_conteudo).success(function(res){
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
            
            funcaoLog('Iniciou aula '+aula);
            window.history.pushState("", "RoboEdu", "Tutor");
        </script>
    </body>
</html>