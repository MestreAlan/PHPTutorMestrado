var audio = document.getElementById("audioTutor");

audio.oncanplay = function() {
	if(ativacaoAudio){
		animationValue(2);
		funcaoLog('InicioAudio');
	}else{
		audio.pause();
	}
};

audio.onended = function() {
	if(ativacaoAudio){
		animationValue(1);
		funcaoLog('FimAudio');
	}
};

audio.onerror = function() {
    funcaoLog('ErroDetectadoAudio '+audio.currentTime);
};