var video = document.getElementById("Video1");
var vez = 0;
video.oncanplay = function(){ 
	if(vez==0){
		video.play();
		vez=1;
	}
	
	video.onplay = function(){
		funcaoLog('PlayV time atual: '+video.currentTime+" tempo total do vídeo: "+video.duration);
	};

	video.onpause = function(){
		funcaoLog('PauseV time atual: '+video.currentTime+" tempo total do vídeo: "+video.duration);
	};

	video.onloadstart = function() {
		funcaoLog('CarregarV');
	};

	video.onended = function() {
		video.currentTime = 0;
		funcaoLog('AssistirAteFim');
	};

	video.onvolumechange = function() {
		funcaoLog('AlterouSonVideo time atual: '+video.currentTime+" tempo total do vídeo: "+video.duration);
	};

	video.onseeking = function() {
		funcaoLog('InicioMoverVideo time atual: '+video.currentTime+" tempo total do vídeo: "+video.duration);
	};

	video.onseeked = function() {
		funcaoLog('FimMoverVideo time atual: '+video.currentTime+" tempo total do vídeo: "+video.duration);
	};

	video.onerror = function() {
		funcaoLog('ErroDetectadoVideo time atual: '+video.currentTime+" tempo total do vídeo: "+video.duration);
	};

	window.beforeunload = function() {
		funcaoLog('FechouPagina-TempoVideo time atual: '+video.currentTime+" tempo total do vídeo: "+video.duration);
	};
};