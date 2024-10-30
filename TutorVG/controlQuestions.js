

var posi=0;
var fix=0;

function nextQuest(numQuest,aulaPosi,aula){
    if(fix===0){
        fix=numQuest;
        if(fix>0){
            posi=1;
            $("question").attr("href", "#q2");
            this.location = "#q2";
        }
    }
    if(posi>=fix){
        posi=0;fix=0;
        abrirPagina('assets/aula/'+aula+'/'+aulaPosi+'.html'); funcaoLog('Concluir_teste'); funcaoLog('Saiu_pagina'); pagina='aula('+aulaPosi+')'; animationValue(1);
    }else{
        var nomePosi="#q"+(posi+1);
        $("question").attr("href", nomePosi);
        this.location = nomePosi;
        posi++;
    }
}