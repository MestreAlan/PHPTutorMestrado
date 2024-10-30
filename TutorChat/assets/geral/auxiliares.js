function atualizarPagina(idPagina,codigoPagina){
	$.ajax({
		url : 'agentes/atualizarDadosUsuario.php',//url para acessar o arquivo
		dataType: 'html', //tipo do retorno
		type: 'post', //metodo de envio
		data: {identificacaoId:idPagina,identificacaoCodigo:codigoPagina}, //valores enviados ao script
		beforeSend: function(){
		},
		complete: function(){
		},
		success: function(data, textStatus){
			},
		error: function(xhr,er){
		}
	});
}
function registrarUsuario(nome){
	$.ajax({
		url : 'agentes/registrarUsuario.php',//url para acessar o arquivo
		dataType: 'html', //tipo do retorno
		type: 'post', //metodo de envio
		data: {nome:nome}, //valores enviados ao script
		beforeSend: function(){
		},
		complete: function(){
		},
		success: function(data, textStatus){
		},
		error: function(xhr,er){
		}
	});
}