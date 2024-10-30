function funcaoLog(mensagem){
    var d = new Date();
    var data = d.toISOString().substring(0, 10);
	var hora = d.toTimeString().substring(0, 9);
	mensagem = data + ' ; ' + hora + ' ; '+aula+' ; ' + nome + ' ; ' + idUsuario + ' ; ' + idProcesso + ' ; ' + mensagem;
    var logMsg = null;
    if(window.ActiveXObject){
        logMsg = new ActiveXObject("Msxml2.DOMDocument.3.0");
        logMsg.async = true;
        logMsg.open("GET", "logPHP.php?msg="+mensagem);
    }else if(window.XMLHttpRequest){
        logMsg = new XMLHttpRequest();
        logMsg.open("GET", "logPHP.php?msg="+mensagem ,true);
        logMsg.send(null);
    }
};