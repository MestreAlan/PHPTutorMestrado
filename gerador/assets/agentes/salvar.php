<?php

// Pega a requisição post e transforma em JSON.
$values1;
$nome1;
$values2;
$nome2;
if(isset($_POST)){
    if(isset($_POST['data1'])&& isset($_POST['data2'])){
		$values1 = $_POST['data1'];
		$values2 = $_POST['data2'];
		$nome1 = $_POST['nome1'];
		$nome2 = $_POST['nome2'];
	}
}
//Criar json expositor
$lista = array();
$lista2 = array();
$contador=count($values1);

for($i=0;$i<$contador;$i++){
	if($i==0){
		$lista = array("nomeAula"=>$values1[0][0]);
	}else{
		$lista3 = array("id"=>$values1[$i][0],"codigo"=>$values1[$i][1],"titulo"=>$values1[$i][2],"resumo"=>$values1[$i][3],"contexto"=>$values1[$i][4],"atividades"=>$values1[$i][5],"links"=>$values1[$i][6]);
		array_push($lista2,$lista3);
	}
}
$lista["atividades"] = $lista2;
$values1 = json_encode($lista, JSON_UNESCAPED_UNICODE);
//Criar json chat
$lista = array();
$lista2 = array();
$contador=count($values2);
$lista_numero = array();

for($i=0;$i<$contador;$i++){
	if($values2[$i][0]>=6){
		if(count($values2[$i][4])>0&&count($values2[$i][6])==0){
			array_push($lista_numero,$values2[$i][0]);
			array_push($lista_numero,2);
		}else{
			array_push($lista_numero,$values2[$i][0]);
			array_push($lista_numero,0);
		}
	}
	$lista3 = array("id"=>intval($values2[$i][0]),"codigo"=>$values2[$i][1],"titulo"=>$values2[$i][2],"contexto"=>$values2[$i][3],"atividades"=>$values2[$i][4],"textoEsperado"=>$values2[$i][5],"links"=>$values2[$i][6]);
	array_push($lista2,$lista3);
}
$lista["dependencias"] = $lista_numero;
$lista["atividades"] = $lista2;
$values2 = json_encode($lista, JSON_UNESCAPED_UNICODE);

// Armazena no final do arquivo os valores recebidos.
file_put_contents('../../../TutorExpositor/base/'.$nome1.'.json', $values1);
file_put_contents('../../../TutorChat/base/'.$nome2.'.json', $values2);