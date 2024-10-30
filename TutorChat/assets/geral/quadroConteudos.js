function abrirPagina(pagina){
	$.get( pagina, function( res ) {
		$("#quadroConteudo").html(res);
		$(document).ready(function(){

		});
	});
}