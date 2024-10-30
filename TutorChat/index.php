<?php
    session_start();
?>
<!DOCTYPE html>
<html lang="pt">
    <head>
        <meta charset="UTF-8">
        <title>Tutor Gamedu</title>
		
		<link type="text/css" rel="stylesheet" href="css/paginaStyle.css"/>
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
			
            var pagina = "Apresentacao";
			
			var atividades = [];
            
			var ativacaoAudio = false;
			
			var codigoAula = '1';
			
			var idAula = '2';
			
			var contexto = "";
			
			var textoEsperado = [];
			
			var botoes = [];
			
			var dependencias = [];
			
			var links = [];
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
			
			var baseDados = "base/arkanoid.json";
			if(data['base'] !== undefined){
                baseDados = "base/"+data['base']+".json";
            }
			
			var aula = "Não definida";
			if(data['aula'] !== undefined){
                aula = data['aula'];
            }
			
            window.getNome = function(){
                return this.nome;
            };
			
			window.getIdUsuario = function(){
                return this.idUsuario;
            };
			
			window.getIdProcesso = function(){
                return this.idProcesso;
            };
			
			window.getPagina = function(){
                return this.pagina;
            };
			
			window.getAtividades = function(){
                return this.atividades;
            };
			
			window.getAtivarAudio = function(){
                return this.ativacaoAudio;
            };
			
			window.getCodigoAula = function(){
                return this.codigoAula;
            };
			
			window.getIdAula = function(){
                return this.idAula;
            };
			
			window.getContexto = function(){
                return this.contexto;
            };
			
			window.getTextoEsperado = function(){
                return this.textoEsperado;
            };
			
			window.getLinks = function(){
                return this.links;
            };
			
			window.getBotoes = function(){
                return this.botoes;
            };
			
			window.getDependencias = function(){
				return this.dependencias;
			};
			
			window.getBaseDados = function(){
				return this.baseDados;
			};
			
			window.getAula = function(){
                return this.aula;
            }; 
		</script>
        <link type="text/css" rel="stylesheet" href="css/stylesheetIndex.css"/>
        <script src="js/jquery-3.1.1.min.js" type="text/javascript"></script>
		<link rel="stylesheet" href="bootstrap/css/bootstrap.min.css">
		<script src="bootstrap/js/bootstrap.min.js" type="text/javascript"></script>
		<script src="assets/geral/quadroConteudos.js" type="text/javascript"></script>
		<script src="assets/geral/log.js" type="text/javascript"></script>
		<script src="assets/geral/controleAnimacao.js" type="text/javascript"></script>
		<script src="assets/geral/auxiliares.js" type="text/javascript"></script>
		<script type="text/javascript" src="agentes/pedagogico.js"></script>
		<script type="text/javascript" src="agentes/afetivo.js"></script>
		<script src="agentes/controleBot.js" type="text/javascript"></script>
		<style>
			body{
				background-color: #B0C4DE;
			}
		</style>
		<script>
			$(function(){
				funcaoLog('Iniciou aula '+aula);
				newEntry("");
				chamarDependencias();
				window.history.pushState("", "RoboEdu", "Tutor");
			});
        </script>
    </head>
    <body>
        <div class="container-fluid">
            <div class="row">
				<div class="col-md-4" id="colunaCentral">
					<div id="quadroInteracao">
						<div id='bodybox'>
							<div id='chatborder'>
								</br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br></br>
								<ul></ul>
							</div>
						</div>	
					</div>
				</div>
				<div class="col-md-8" id="colunaCentral">
					<div id="quadroConteudo">
						<ul></ul>
					</div>
				</div>
			</div>
		</div>
		<script type="text/javascript">
			var div = document.getElementById("quadroConteudo"); //pega o elemento com id div (no caso uma DIV)
			div.setAttribute("style", "height:" + ($(window).height() - 70) + "px;"); //seta o style do elemento
			div = document.getElementById("bodybox"); //pega o elemento com id div (no caso uma DIV)
			div.setAttribute("style", "height:" + ($(window).height() - 70) + "px;"); //seta o style do elemento
		</script>
    </body>
</html>