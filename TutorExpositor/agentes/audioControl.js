var audio = document.getElementById("Audio1");

audio.oncanplay = function() {
    animationValue(2);
    funcaoLog('InicioAudio');
};

audio.onended = function() {
    animationValue(1);
    funcaoLog('FimAudio');
};

audio.onerror = function() {
    funcaoLog('ErroDetectadoAudio '+audio.currentTime);
};