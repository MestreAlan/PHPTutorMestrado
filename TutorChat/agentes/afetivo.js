/**Dados est�ticos*/
var body = ["imgRobo/cabeca/head0001.png","imgRobo/cabeca/head0002.png","imgRobo/cabeca/head0003.png","imgRobo/cabeca/head0004.png","imgRobo/cabeca/head0005.png","imgRobo/cabeca/head0006.png","imgRobo/cabeca/head0007.png",
			"imgRobo/cabeca/head0008.png","imgRobo/cabeca/head0009.png","imgRobo/cabeca/head0010.png","imgRobo/cabeca/head0011.png","imgRobo/cabeca/head0012.png","imgRobo/cabeca/head0013.png","imgRobo/cabeca/head0014.png"];//variavel nova que pega o corpo TAG

/**Vari�veis de suporte*/
//var animation;//Id da a��o atual
//var oldAnimation;
//Variaveis nova da animação do corpo TAG
var animationBody;
var selectedAnimationBody;
var lengthPosiBody;
var imgPosiBody;
var loopBody;
var loopBodyTimes;

/**Anima��es por parte*/
/*Obs: Anima��es devem ser postas do fim do vetor para o in�cio, a posi��o 0 fica o tempo do frame da anima��o*/
/*Body*/
var toSpeak1 = [4,5,4,5,7,6,0.1];//Anima��o falando
var toSpeak2 = [4,5,4,5,4,5,0.1];//Anima��o falando
var toSpeak3 = [2,1,0,5,4,0,0.1];//Anima��o falando
var staid1 = [0,0,0,0,0,0,0.1];//Anima��o piscando serio
var staid2 = [0,0,0,0,1,1,0.1];//Anima��o piscando serio
var staid3 = [0,0,0,1,1,0,0.1];//Anima��o piscando serio
var staid4 = [0,0,1,1,0,0,0.1];//Anima��o piscando serio
var staid5 = [0,1,1,0,0,0,0.1];//Anima��o piscando serio
var digit1 = [8,9,10,8,9,10,0.1];//Anima��o digitando
var digit2 = [8,11,12,13,8,9,0.1];//Anima��o digitando
var digit3 = [8,9,11,12,13,8,0.1];//Anima��o digitando
var digit4 = [8,9,10,11,12,13,0.1];//Anima��o digitando
var digit5 = [8,9,10,9,12,13,0.1];//Anima��o digitando

/**Anima��es*/
/*Obs: As anima��es seguem a seguinte estrutura, chamando os vetores de anima��es mais o tempo de execu��o: cabe�a++++, peito, bra�oE, bra�oD e tempo de execu��o*/
/*Anima��es padr�es*/
//Vetor de animação novo para o body TAG
var bodyRelaxed = [staid1,staid2,staid3,staid4,staid5,true,0];
var bodySpeaking = [toSpeak1,toSpeak2,toSpeak3,true,0];
var bodySpeakingTemporary = [toSpeak1,toSpeak2,toSpeak3,false,5];
var bodyDigitando = [digit1,digit2,digit3,digit4,digit5,true,0];

/*anima��es de intera��o com outros objetos e personagens*/

/*anima��o pontual*/
var timerBody;
/**Fun��es auxiliares de modifica��o de expres�o*/
function changeBody() {
	if(imgPosiBody > 0){
            document.getElementById("tutor").src=body[animationBody[selectedAnimationBody][imgPosiBody]];
            imgPosiBody -= 1;
            timerBody = setTimeout(function(){changeBody();},animationBody[selectedAnimationBody][lengthPosiBody+1]*1000);
	}else if(imgPosiBody === 0 && loopBody){
            document.getElementById("tutor").src=body[animationBody[selectedAnimationBody][imgPosiBody]];
            var aux = animationBody.length-2;
            selectedAnimationBody = Math.floor(Math.random() * aux);
            lengthPosiBody = animationBody[selectedAnimationBody].length-2;
            imgPosiBody = lengthPosiBody;
            timerBody = setTimeout(function(){changeBody();},animationBody[selectedAnimationBody][lengthPosiBody+1]*1000);
	}else if(imgPosiBody === 0 && !loopBody && loopBodyTimes > 0){
            document.getElementById("tutor").src=body[animationBody[selectedAnimationBody][imgPosiBody]];
            var aux = animationBody.length-2;
            selectedAnimationBody = Math.floor(Math.random() * aux);
            lengthPosiBody = animationBody[selectedAnimationBody].length-2;
            imgPosiBody = lengthPosiBody;
            loopBodyTimes -= 1;
            timerBody = setTimeout(function(){changeBody();},animationBody[selectedAnimationBody][lengthPosiBody+1]*1000);
	}else if(imgPosiBody === 0 && !loopBody && loopBodyTimes === 0){
            animation = 1;
            updateBody();
            timerBody = setTimeout(function(){changeBody();}, 0.5*1000);
        }else{
            updateBody();
            timerBody = setTimeout(function(){changeBody();}, 0.5*1000);
	}
}

/*Atualização das animações*/
function updateAnimation(animat){
	var aux;
	animationBody = animat;
	aux = animationBody.length-2;
	selectedAnimationBody = Math.floor(Math.random() * aux);
	lengthPosiBody = animationBody[selectedAnimationBody].length-2;
	imgPosiBody = lengthPosiBody; 
	loopBody = animationBody[animationBody.length-2];
	loopBodyTimes = animationBody[animationBody.length-1];
}


/**Fun��es de anima��o*/
function updateBody(){
		if(animation === 1){//Anima��o relaxada
			updateAnimation(bodyRelaxed);
		}else if(animation === 2){//Anima��o apresentando
			updateAnimation(bodyDigitando);
		}else if(animation === 3){//Anima��o falando pouco
			updateAnimation(bodySpeakingTemporary);
		}
}
var timerSystem;
/**Fun��o controladora*/
window.comecar = function(){
	updateBody();
	timerBoby = setTimeout(function(){
		changeBody();
		}, 0.5*1000);
	
}

window.pararAnimation = function(){
	clearTimeout(timerSystem);
	clearTimeout(timerBody);
};

window.changeAnimation = function(){
	updateBody();
};