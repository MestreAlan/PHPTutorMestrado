function excluirRecurso(){
	for(var i=0;i<dados_para_gerar_aula_expositor.length;i++){
		if(dados_para_gerar_aula_expositor[i][0]==id_contexto_cadastro_expositor){
			var temporaria=auxiliar_contexto_id_cadastro(id_contexto_cadastro_expositor);
			dados_para_gerar_aula_chat.splice(temporaria,1);
			dados_para_gerar_aula_expositor.splice(i, 4);
			for(var j=0;j<dados_para_gerar_aula_expositor.length;j++){
				if(dados_para_gerar_aula_expositor[j][1]=="sub_sumario"){
					if(dados_para_gerar_aula_expositor[j][5].length>0){
						var temp = dados_para_gerar_aula_expositor[j][5].length;
						for(var k=0;k<temp;k++){
							if(dados_para_gerar_aula_expositor[j][5][k]==id_contexto_cadastro_expositor){
								for(var var_i=0;var_i<dados_para_gerar_aula_chat.length;var_i++){
									if(dados_para_gerar_aula_chat[var_i][4].length>0){
										for(var var_j=0;var_j<dados_para_gerar_aula_chat[var_i][4].length;var_j++){
											if(dados_para_gerar_aula_chat[var_i][4][var_j]==id_contexto_cadastro_chat){
												dados_para_gerar_aula_chat[var_i][4].splice(var_j,1);
												var_j=dados_para_gerar_aula_chat[var_i][4].length;
												var_i=dados_para_gerar_aula_chat.length;
												break;break;
											}
										}
									}
								}
								dados_para_gerar_aula_expositor[j][5].splice(k, 1);
								k=dados_para_gerar_aula_expositor[j][5].length;
								j=dados_para_gerar_aula_expositor.length;
							}
						}
					}
				}
			}
			i=dados_para_gerar_aula_expositor.length;
		}
	}
}

function excluirSumario(){
	for(var i=0;i<dados_para_gerar_aula_expositor.length;i++){
		if(dados_para_gerar_aula_expositor[i][0]==id_contexto_cadastro_expositor){
			
			//elimina os recuros
			var id_temp = id_contexto_cadastro_expositor;
			var temp = dados_para_gerar_aula_expositor[i+1][5].length;
			for(var k=0;k<temp;k++){
				id_contexto_cadastro_expositor=dados_para_gerar_aula_expositor[i+1][5][k];
				
				auxiliar_contexto_id_cadastro(id_contexto_cadastro_expositor);
				
				excluirRecurso();
			}
			
			var temporaria=auxiliar_contexto_id_cadastro(id_temp);
			
			//elimina o subsumário
			dados_para_gerar_aula_expositor.splice(i, 2);			
			dados_para_gerar_aula_chat.splice(temporaria,1);
			
			//Elimina o subsumario na lista do sumario
			for(var j=0;j<dados_para_gerar_aula_expositor[3][5].length;j++){
				if(dados_para_gerar_aula_expositor[3][5][j]==id_temp){
					
					
					for(var var_i=0;var_i<dados_para_gerar_aula_chat[4][4].length;var_i++){
						if(dados_para_gerar_aula_chat[4][4][var_i]==id_contexto_cadastro_chat){
							dados_para_gerar_aula_chat[4][4].splice(var_i, 1);
							var_i=dados_para_gerar_aula_chat[4][4].length;
						}
					}
					
					dados_para_gerar_aula_expositor[3][5].splice(j, 1);
					j=dados_para_gerar_aula_expositor[3][5].length;
				}
			}
			i=dados_para_gerar_aula_expositor.length;
		}
	}
}

function auxiliar_contexto_id_cadastro(id){
	for(var var_i=0;var_i<dados_para_gerar_aula_expositor.length;var_i++){
		if(dados_para_gerar_aula_expositor[var_i][0]==id){
			for(var var_j=0;var_j<dados_para_gerar_aula_chat.length;var_j++){
				if(dados_para_gerar_aula_chat[var_j][7]==dados_para_gerar_aula_expositor[var_i][7]){
					id_contexto_cadastro_chat = dados_para_gerar_aula_chat[var_j][0];
					return var_j;
				}
			}
			var_i = dados_para_gerar_aula_chat.length;
		}
	}
}

function atualizar_contexto(){
	if($.isEmptyObject(dados_para_gerar_aula_expositor || $.isEmptyObject(dados_para_gerar_aula_chat))){
		dados = "<div class='interno'><ul><li><a href='javascript:abrir_pagina(\"assets/templates/criar_aulas.html\");'>Criar aula</a></li></ul>";
		$(document).ready(function() {
			$(".conteudo").html(dados);
		});
	}else{
		dados = "<ul>";
		for(var i=0;i<dados_para_gerar_aula_expositor.length;i++){			
			if(i==0){
				dados=dados+"Aula: "+dados_para_gerar_aula_expositor[i][0]+
				" <a href='javascript:abrir_pagina(\"assets/templates/editar_aula.html\");'>Editar</a>"+
				"<BR>";
			}else{
				if(dados_para_gerar_aula_expositor[i][1]=="sumario"){
					dados+="<li>"+dados_para_gerar_aula_expositor[i][2]+"</li><BR>";
					if(dados_para_gerar_aula_expositor[i][5].length>0){
						for(var j=0;j<dados_para_gerar_aula_expositor[i][5].length;j++){
							for(var k=0;k<dados_para_gerar_aula_expositor.length;k++){
								if(dados_para_gerar_aula_expositor[i][5][j]==dados_para_gerar_aula_expositor[k][0]){
									var texto_sumario = auxiliar_contextualizacao_id(k);
									texto_sumario += dados_para_gerar_aula_expositor[k][8]+" = "+dados_para_gerar_aula_expositor[k][0]+";";
									dados+="&nbsp;&nbsp;&nbsp;<li>"+dados_para_gerar_aula_expositor[k][3]+" "+
										"<a href='javascript:"+texto_sumario+" abrir_pagina(\"assets/templates/editar_sub_sumario.html\");'>Editar</a>"+
										" <a href='javascript:"+texto_sumario+" excluirSumario();atualizar_contexto();'>Excluir</a>"+
										"</li><BR>";
									++k;
									
									if(dados_para_gerar_aula_expositor[k][5].length>0){
										
										dados+="<ul>";
										for(var l=0;l<dados_para_gerar_aula_expositor[k][5].length;l++){
											for(t=0;t<dados_para_gerar_aula_expositor.length;t++){
												if(dados_para_gerar_aula_expositor[k][5][l]==dados_para_gerar_aula_expositor[t][0]){
													var texto_recurso = auxiliar_contextualizacao_id(t);
													texto_recurso += dados_para_gerar_aula_expositor[t][8]+" = "+dados_para_gerar_aula_expositor[t][0]+";";
													dados+="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<li>"+dados_para_gerar_aula_expositor[t][2]+" "+
														"<a href='javascript:"+texto_recurso+" abrir_pagina(\"assets/templates/editar_recurso.html\");'>Editar</a>"+
														" <a href='javascript:"+texto_recurso+" excluirRecurso();atualizar_contexto();'>Excluir</a>"+
														"</li><BR>";
													t=dados_para_gerar_aula_expositor.length;
												}
											}
										}
										dados+="</ul>";
									}
									var texto_criar_recurso = auxiliar_contextualizacao_id(k-1);
									texto_criar_recurso += dados_para_gerar_aula_expositor[k-1][8]+" = "+dados_para_gerar_aula_expositor[k][0]+";";
									dados+="<BR><a href='javascript:abrir_pagina(\"assets/templates/criar_recurso.html\"); "+texto_criar_recurso+"'>Criar recurso</a>";
									k=dados_para_gerar_aula_expositor.length;
								}
							}
						}
					}
					
					var texto_criar_sumario = auxiliar_contextualizacao_id(i);
					texto_criar_sumario += dados_para_gerar_aula_expositor[i][8]+" = "+dados_para_gerar_aula_expositor[i][0]+";";
					dados+="<BR><a href='javascript:abrir_pagina(\"assets/templates/criar_sub_sumario.html\"); "+texto_criar_sumario+"'>Criar sub-sumário</a>";
				}
			}
		}
		dados+"</ul>";
		dados+="</br><center>Nome para arquivo tutor Expositor: </br><input type='text' name='nome_aula' id='nome_expositor' value='BaseExpositor'></center></br>";
		dados+="<center>Nome para arquivo tutor Chat: </br><input type='text' name='nome_aula' id='nome_chat' value='BaseChat'></center></br>";
		dados+="<BR><button class='btn btn-primary' onclick='salvar();'>Gerar aula</button></div>";
		$(document).ready(function() {
			$(".dados").html("");
			$(".conteudo").html(dados);
		});
	}
}

function auxiliar_contextualizacao_id(i){
	var contextualizacao_id_sumario = "";
	for(var var_i=0;var_i<dados_para_gerar_aula_chat.length;var_i++){
		if(dados_para_gerar_aula_chat[var_i][7]==dados_para_gerar_aula_expositor[i][7]){
			contextualizacao_id_sumario += dados_para_gerar_aula_chat[var_i][8]+" = "+dados_para_gerar_aula_chat[var_i][0]+";";
			var_i = dados_para_gerar_aula_chat.length;
		}
	}
	return contextualizacao_id_sumario;
}

function abrir_pagina(pagina){
	$.get( pagina, function( res ) {
		$(".dados").html(res);
		$(document).ready(function(){

		});
	});
}

function salvar(){
	var nome_chat = document.getElementById("nome_chat").value;
	var nome_expositor = document.getElementById("nome_expositor").value;
	var chat = [];
	var expositor = [];
	for(var i=0;i<dados_para_gerar_aula_chat.length;i++){
		chat.push([dados_para_gerar_aula_chat[i][0],dados_para_gerar_aula_chat[i][1],dados_para_gerar_aula_chat[i][2],dados_para_gerar_aula_chat[i][3],dados_para_gerar_aula_chat[i][4],dados_para_gerar_aula_chat[i][5],dados_para_gerar_aula_chat[i][6]]);
	}
	for(var i=0;i<dados_para_gerar_aula_expositor.length;i++){
		if(dados_para_gerar_aula_expositor.length==0){
			expositor.push([dados_para_gerar_aula_expositor[i][0]]);
		}else{
			expositor.push([dados_para_gerar_aula_expositor[i][0],dados_para_gerar_aula_expositor[i][1],dados_para_gerar_aula_expositor[i][2],dados_para_gerar_aula_expositor[i][3],dados_para_gerar_aula_expositor[i][4],dados_para_gerar_aula_expositor[i][5],dados_para_gerar_aula_expositor[i][6]]);
		}
	}
	$.post('assets/agentes/salvar.php', {
		data1: expositor,
		nome1: nome_expositor,
		data2: chat,
		nome2: nome_chat
	}, function(response) {
		console.log(response);
	});
}