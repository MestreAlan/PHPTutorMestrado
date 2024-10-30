var animation = 1;
var oldAnimation = 0;

window.getAnimation = function(){
	return this.animation;
} 
window.getOldAnimation = function(){
	return this.oldAnimation;
} 

window.animationValue = function(value){
	if(animation === 1){
		oldAnimation = animation;
		animation = 2;
	}else{
		oldAnimation = animation;
		animation = 1;
	}
	oldAnimation = animation;
		animation = value;
	changeAnimation();
}