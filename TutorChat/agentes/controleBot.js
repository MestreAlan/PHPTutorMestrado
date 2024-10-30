nlp = window.nlp_compromise;

var messages = [], 
  lastUserMessage = "", 
  botMessage = "", 
  userName = "Aluno",
  botName = 'RoboEdu', 
  talking = true; 

function chamadaBotao(value){
	for(var i=0;i<dependencias.length-1;i=i+2){
		if(dependencias[i] == idAula){
			if(dependencias[i+1] == 0){
				dependencias[i+1]=1;
			}else if(dependencias[i+1] == 2){
				dependencias[i+1]=3;
			}
			i=dependencias.length;
		}
	}
	$( ".listaAcoes" ).empty();
	newEntry(value);
}

function newEntry(value) {
	atualizarConversa(value);
	this.botMessage = contexto;
	userName = nome;

	if (value != "") {
		lastUserMessage = value;
		messages.push("<b>" + userName + ":</b> " + lastUserMessage);
		insertChat(userName,lastUserMessage,'',0);
		funcaoLog('Escrita do usuário: '+lastUserMessage);
	}
	
	ms = "";
	for (var i = 0; i < messages.length; i++) {
		ms = ms+messages[i]+"<BR>";
	}
	var retornoBotoes = "";
	if(botoes != null){
		for(var i=0;i<botoes.length;i=i+3){
			var aux = 0;
			for(var j=0;j<dependencias.length-1;j=j+2){
				if(dependencias[j] == botoes[i]){
					aux=1;
					if(dependencias[j+1]==0){
						retornoBotoes = retornoBotoes+"<button class='label label-danger'; onclick='idAula = "+botoes[i]+"; codigoAula = "+botoes[i+1]+"; chamadaBotao(\""+botoes[i+2]+"\");' title='Vídeo ainda não acessado'>"+botoes[i+2]+"</button><br>";
					}else if(dependencias[j+1]==1){
						retornoBotoes = retornoBotoes+"<button class='label label-info'; onclick='idAula = "+botoes[i]+"; codigoAula = "+botoes[i+1]+"; chamadaBotao(\""+botoes[i+2]+"\");' title='Vídeo já acessado'>"+botoes[i+2]+"</button><span class='glyphicon glyphicon-ok'></span><br>";
					}else if(dependencias[j+1]==2){
						retornoBotoes = retornoBotoes+"<button class='label label-warning'; onclick='idAula = "+botoes[i]+"; codigoAula = "+botoes[i+1]+"; chamadaBotao(\""+botoes[i+2]+"\");' title='Lista com vídeos sobre o tema: "+botoes[i+2]+"'>"+botoes[i+2]+"</button><br>";
					}else{
						retornoBotoes = retornoBotoes+"<button class='label label-primary'; onclick='idAula = "+botoes[i]+"; codigoAula = "+botoes[i+1]+"; chamadaBotao(\""+botoes[i+2]+"\");' title='Já acessado!'>"+botoes[i+2]+"</button><br>";
					}
					j=dependencias.length;
				}
			}
			if(aux == 0){
				retornoBotoes = retornoBotoes+"<button class='label label-primary'; onclick='idAula = "+botoes[i]+"; codigoAula = "+botoes[i+1]+"; chamadaBotao(\""+botoes[i+2]+"\");'>"+botoes[i+2]+"</button><br>";
			}
		}
		botoes = [];
	}
	
	falaBot(botMessage,botName,retornoBotoes);
	
	
	funcaoLog('Escrita do bot: '+botMessage);
}

function falaBot(botMessage,botName,retornoBotoes){
	var aux = "";
	for(var i =0;i<botMessage.length;i++){
		if(botMessage[i] == "." || botMessage[i] == "?" || botMessage[i] == "!"){
			aux = aux+botMessage[i];
			if(i==botMessage.length-1){
				insertChat(botName,aux,retornoBotoes,0);
			}else{
				insertChat(botName,aux,"",0);
				var aux2 = "";
				for(var j=i+1;j<botMessage.length;j++){
					aux2 = aux2+botMessage[j];
				}
				setTimeout(function(){ 
					falaBot(aux2,botName,retornoBotoes);
				}, aux.length*50);
			}
			i=botMessage.length;
		}else{
			aux = aux+botMessage[i];
		}
	}
}

function insertChat(who, text, buttons,time = 0){
    var control = "";
    if (who == "RoboEdu"){
        
		control = 
					'<li style="width:100%">' +
                        '<div class="msj macro">' +
                        '<div class="avatar"><img id="tutor" src="imgRobo/cabeca/head0001.png" alt="tutor"/></div>' +
                            '<div class="text text-l">' +
								'<b>'+who+':</b>'+
                                '<p><span class="digitando"> Digitando...</span>' +
                                '<center class="listaAcoes digitandoButton"></center></p>'+
                            '</div>' +
                        '</div>' +
                    '</li>';  
					comecar();
					animationValue(2);
					setTimeout(function(){ 
						document.getElementsByClassName("digitando")[0].innerHTML = text;
						document.getElementsByClassName("digitandoButton")[0].innerHTML = buttons;
						animationValue(1);
						pararAnimation();
						document.getElementsByClassName("avatar")[document.getElementsByClassName("avatar").length - 1].innerHTML = "";
						document.getElementsByClassName("avatar")[document.getElementsByClassName("avatar").length - 1].innerHTML = '<img class="img-circle img-l" style="width:50%;" src="imgRobo/cabeca/head0000.png" />';
						$("span").removeClass("digitando");
						$("center").removeClass("digitandoButton");
						$(document).ready(function(){
							$('#chatborder').animate({ scrollTop: 9999999 }, 'slow');
						});
					}, text.length*45);
					
					
			
    }else{
        control =  '<li style="width:100%;">' +
                        '<div class="msj-rta macro">' +
                            '<div class="text text-r">' +
								'<b>'+who+':</b>'+
                                '<p>'+text+'</p>' +
                            '</div>' +
                        '<div class="avatar" style="padding:0px 0px 0px 10px !important"><img class="img-circle img-r" style="width:25%;" src="imgRobo/avatar_user/usertype1.png" /></div>' +                                
                  '</li>';
    }
    setTimeout(
        function(){                        
			if(who == "RoboEdu"){
				//hey.innerHTML = "<b>RoboEdu:</b>"; // Atualiza o valor calculado.
				
			}
            //$("#chatborder ul").prepend(control);
			$("#chatborder ul").append(control);
			$(document).ready(function(){
				$('#chatborder').animate({ scrollTop: 9999999 }, 'slow');
			});
        }, time);
    
}

function Speech(say) {
	responsiveVoice.setDefaultVoice("Brazilian Portuguese Female")
	responsiveVoice.speak(say);
}

document.onkeypress = keyPress;
function keyPress(e) {
  var x = e || window.event;
  var key = (x.keyCode || x.which);
  if (key == 13 || key == 3) {
    //runs this function when enter is pressed
    //botMessageInsert();
  }
  if (key == 38) {
    console.log('hi')
      //document.getElementById("chatbox").value = lastUserMessage;
  }
}

function placeHolder() {
  //document.getElementById("chatbox").placeholder = "";
}