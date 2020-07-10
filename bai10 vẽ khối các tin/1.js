document.addEventListener("DOMContentLoaded",function(){
	var ve=anime.timeline();
	ve.add({
		targets:'.motkhoi .ve rect',
		strokeDashoffset:[anime.setDashoffset,0],
		delay:function(el,i){
			return i*200;
		},
		easing:'easeOutSine',
		duration:600,
		opacity:[0,1]
	}).add({
		targets:'.motkhoi .khoi',
		duration:1,
		opacity:1
	}).add({
			targets:'.motkhoi .ve rect',
			duration:1,
			opacity:0,
	})
},false)

