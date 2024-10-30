function serializar(){
	var sampleObject = {a : 1 , b : 2 , c : { x : 11 , y : 22 }}; 

	localStorage.setItem('myStorage', JSON.stringify(sampleObject));
}
