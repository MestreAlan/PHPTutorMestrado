/*Inicio funções para contexto de atividades em json*/
function chamarDependencias(){
	$.ajax({ 
		url: baseDados, 
		dataType: 'json',  
		async: false, 
		success: function(dominio){ 
			dependencias = dominio.dependencias;
		} 
	});
}
function chamarCodigo(){
	$.ajax({ 
		url: baseDados, 
		dataType: 'json',  
		async: false, 
		success: function(dominio){ 
			for(var i=0;i<dominio.atividades.length;i++){// Procura por todos os recursos
				if(dominio.atividades[i].id == idAula){// Verifica se existe id nas atividades
					codigoAula = dominio.atividades[i].codigo;
					i = dominio.atividades.length;
				}
			}
		} 
	});
}
function chamarTituloAtual(id){
	var valorTitulo = "";
	$.ajax({ 
		url: baseDados, 
		dataType: 'json',  
		async: false, 
		success: function(dominio){
			for(var i=0;i<dominio.atividades.length;i++){// Procura por todos os recursos
				if(dominio.atividades[i].id == id){// Verifica se existe id nas atividades
					valorTitulo = dominio.atividades[i].titulo;
					i = dominio.atividades.length;
				}
			}
		} 
	});
	return valorTitulo;
}
function chamarContexto(){
	$.ajax({ 
		url: baseDados, 
		dataType: 'json',  
		async: false, 
		success: function(dominio){ 
			for(var i=0;i<dominio.atividades.length;i++){// Procura por todos os recursos
				if(dominio.atividades[i].id == idAula){// Verifica se existe id nas atividades
					contexto = dominio.atividades[i].contexto[Math.floor(Math.random() * dominio.atividades[i].contexto.length)];
					i = dominio.atividades.length;
				}
			}
		} 
	});
}
function chamarAtividades(){
	$.ajax({ 
		url: baseDados, 
		dataType: 'json',  
		async: false, 
		success: function(dominio){
			atividades = [];
			for(var i=0;i<dominio.atividades.length;i++){// Procura por todos os recursos
				if(dominio.atividades[i].id == idAula){// Verifica se existe id nas atividades
					for(var j=0;j<dominio.atividades[i].atividades.length;j++){// Procura por opções para usuário
						atividades.push(dominio.atividades[i].atividades[j]);
					}
					i = dominio.atividades.length;
				}
			}
		} 
	});
}
function chamarTextoEsperado(){
	$.ajax({ 
		url: baseDados, 
		dataType: 'json',  
		async: false, 
		success: function(dominio){ 
			textoEsperado = [];
			for(var i=0;i<dominio.atividades.length;i++){// Procura por todos os recursos
				if(dominio.atividades[i].id == idAula){// Verifica se existe id nas atividades
					for(var j=0;j<dominio.atividades[i].textoEsperado.length;j++){// Procura por opções para usuário
						textoEsperado.push(dominio.atividades[i].textoEsperado[j]);
					}
					i = dominio.atividades.length;
				}
			}
		} 
	});
}
function chamarLinks(){
	$.ajax({ 
		url: baseDados, 
		dataType: 'json',  
		async: false, 
		success: function(dominio){ 
			links = [];
			for(var i=0;i<dominio.atividades.length;i++){// Procura por todos os recursos
				if(dominio.atividades[i].id == idAula){// Verifica se existe id nas atividades
					for(var j=0;j<dominio.atividades[i].links.length;j++){// Procura por opções para usuário
						links.push(dominio.atividades[i].links[j]);
					}
					i = dominio.atividades.length;
				}
			}
		} 
	});
}
function chamarBotoes(){
	$.ajax({ 
		url: baseDados, 
		dataType: 'json',  
		async: false, 
		success: function(dominio){ 
			if ($(".listaAcoes").hasClass("acoes")) {
				$( ".listaAcoes" ).empty();
			}
			botoes = [];
			for(var i=0;i<dominio.atividades.length;i++){// Procura por todos os recursos
				if(dominio.atividades[i].id == idAula){// Verifica se existe id nas atividades
					for(var j=0;j<dominio.atividades[i].atividades.length;j++){// Procura por opções para usuário
						for(var k=0;k<dominio.atividades.length;k++){
							if(dominio.atividades[k].id == dominio.atividades[i].atividades[j]){// Verifica se existe id nas atividades
								botoes.push(dominio.atividades[k].id);
								botoes.push(dominio.atividades[k].codigo);
								botoes.push(dominio.atividades[k].titulo);
								k = dominio.atividades.length;
							}
						}
					}
					i = dominio.atividades.length;
				}
			}
		} 
	});
}
/*Fim funções para contexto de atividades em json*/
/*Inicio funções para contexto de interações em json*/
function chamarCodigoTutor(){
	$.ajax({ 
		url: baseDados, 
		dataType: 'json',  
		async: false, 
		success: function(dominio){ 
			for(var i=0;i<dominio.interacoes.length;i++){// Procura por todos os recursos
				if(dominio.interacoes[i].id == idAula){// Verifica se existe id nas interacoes
					codigoAula = dominio.interacoes[i].codigo;
					i = dominio.interacoes.length;
				}
			}
		} 
	});
}
function chamarContextoTutor(){
	$.ajax({ 
		url: baseDados, 
		dataType: 'json',  
		async: false, 
		success: function(dominio){ 
			for(var i=0;i<dominio.interacoes.length;i++){// Procura por todos os recursos
				if(dominio.interacoes[i].id == idAula){// Verifica se existe id nas interacoes
					contexto = dominio.interacoes[i].contexto[Math.floor(Math.random() * dominio.interacoes[i].contexto.length)];
					i = dominio.interacoes.length;
				}
			}
		} 
	});
}
function chamarAtividadesTutor(){
	$.ajax({ 
		url: baseDados, 
		dataType: 'json',  
		async: false, 
		success: function(dominio){
			atividades = [];
			for(var i=0;i<dominio.interacoes.length;i++){// Procura por todos os recursos
				if(dominio.interacoes[i].id == idAula){// Verifica se existe id nas interacoes
					for(var j=0;j<dominio.interacoes[i].interacoes.length;j++){// Procura por opções para usuário
						atividades.push(dominio.interacoes[i].interacoes[j]);
					}
					i = dominio.atividades.length;
				}
			}
		} 
	});
}
function chamarTextoEsperadoTutor(){
	$.ajax({ 
		url: baseDados, 
		dataType: 'json',  
		async: false, 
		success: function(dominio){ 
			textoEsperado = [];
			for(var i=0;i<dominio.interacoes.length;i++){// Procura por todos os recursos
				if(dominio.interacoes[i].id == idAula){// Verifica se existe id nas interacoes
					for(var j=0;j<dominio.interacoes[i].textoEsperado.length;j++){// Procura por opções para usuário
						textoEsperado.push(dominio.interacoes[i].textoEsperado[j]);
					}
					i = dominio.interacoes.length;
				}
			}
		} 
	});
}
function chamarLinksTutor(){
	$.ajax({ 
		url: baseDados, 
		dataType: 'json',  
		async: false, 
		success: function(dominio){ 
			links = [];
			for(var i=0;i<dominio.interacoes.length;i++){// Procura por todos os recursos
				if(dominio.interacoes[i].id == idAula){// Verifica se existe id nas interacoes
					for(var j=0;j<dominio.interacoes[i].links.length;j++){// Procura por opções para usuário
						links.push(dominio.interacoes[i].links[j]);
					}
					i = dominio.interacoes.length;
				}
			}
		} 
	});
}
/*Fim funções para contexto de interações em json*/

function chamarPagina(pagina){
	$.get( pagina, function( res ) {
		$("#quadroConteudo").html(res);
		$(document).ready(function(){
			
		});
	});
}

var idAuxi = 0;
function atualizarConversa(valor){
	document.getElementById("quadroConteudo").innerHTML = "<ul></ul>";
	valor = valor.toUpperCase();
	if(idAuxi != 0 && codigoAula != 7){
		idAula = idAuxi;
		chamarCodigo();
		chamarContextoTutor();
		chamarAtividades();
		chamarTextoEsperado();
		chamarLinksTutor();
		idAuxi = 0;
	}
	if(valor == "PBL"){
		botoes.push(idAula,codigoAula,'Continuar');
		idAuxi = idAula;
		idAula = 1;
		chamarCodigoTutor();
		chamarContextoTutor();
		chamarLinksTutor();
		
		setTimeout(function(){ 
			window.open(links[Math.floor((Math.random() * (links.length - 1)))], 'janela', 'width='+825+', height='+520+', top='+110+', left='+400+', scrollbars=yes, status=no, toolbar=no, location=no, directories=no, menubar=no, resizable=no, fullscreen=no');
		}, botMessage.length*45);
	}else if(codigoAula == 1){
		if(idAula == 1){
			chamarContexto();
			chamarAtividades();
			idAula = atividades[0];
			chamarCodigo();
		}else if(idAula == 2){
			chamarContexto();
			contexto = "Olá "+nome+", "+contexto;
			chamarAtividades();
			chamarBotoes();
			botoes[2] = 'Continuar';
			idAula = atividades[0];
			chamarCodigo();
		}else{
			chamarContexto();
			chamarAtividades();
			chamarBotoes();
			botoes[2] = 'Continuar';
			idAula = atividades[0];
			chamarCodigo();
		}
	}else if(codigoAula == 2){
		
	}else if(codigoAula == 3){
		if(valor == textoEsperado[0]){
			idAula = atividades[0];
			chamarCodigo();
			atualizarConversa(valor);
		}else{
			if(textoEsperado[0] == null){
				chamarBotoes();
				chamarContexto();
				chamarAtividades();
				chamarTextoEsperado();
			}else{
				idAula = atividades[1];
				chamarCodigo();
				atualizarConversa(valor);
			}
		}
	}else if(codigoAula == 4){
		chamarContexto();
		chamarLinks();
		chamarAtividades();
		idAula = atividades[0];
		chamarCodigo();
	}else if(codigoAula == 5){
		chamarContexto();
		chamarLinks();
		setTimeout(function(){ 
			chamarPagina("assets/paginasTutor/videoProprio.html"); 
		}, botMessage.length*15);
		var randonAux = Math.floor(Math.random() * 2);
		if(randonAux == 0){
			chamarAtividades();
			chamarBotoes();
			botoes[2] = 'Continuar';
			idAula = atividades[0];
			chamarCodigo();
		}else if(randonAux == 1){
			chamarAtividades();
			idAuxi = atividades[0];
			idAula = 2;
			chamarCodigoTutor();
			botoes.push(idAula,codigoAula,'Continuar');
		}
	}else if(codigoAula == 6){
		chamarContexto();
		chamarBotoes();
	}else if(codigoAula == 7){
		var randonAux = Math.floor(Math.random() * 2);
		if(randonAux == 0){
			var aux = 0;
			for(var i=0;i<dependencias.length-1;i=i+2){
				if(dependencias[i+1] == 0){
					aux=1;
					contexto = "Selecionei para você um novo conteúdo para ver e pesquisar.";
					botoes.push(dependencias[i],5,'Aula: '+chamarTituloAtual(dependencias[i]));
					idAula = idAuxi;
					idAuxi = 0;
					chamarCodigo();
					botoes.push(idAula,codigoAula,'Quero continuar de onde parei');
					i=dependencias.length;
				}
			}
			if(aux == 0){
				contexto = "Parabéns, hoje vc já viu todo o conteúdo programado. Continue estudando e aprimorando a resolução do problema";
				idAula = idAuxi;
				chamarCodigo();
				botoes.push(idAula,codigoAula,'Continuar');
			}
		
		
		}else{
			chamarContextoTutor();
			idAula = idAuxi;
			chamarCodigo();
			botoes.push(idAula,codigoAula,'Continuar');
		}
	}else if(codigoAula == 8){
		
	}
}