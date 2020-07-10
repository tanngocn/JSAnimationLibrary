document.addEventListener("DOMContentLoaded",function(){
	var timeline1= anime.timeline();
	timeline1.add({
		targets:'.anh polyline',
		strokeDashoffset:[anime.setDashoffset,0],
		duration:1000,
		delay:1000,
		easing:'easeOutSine'
	}).add({targets:'.anh rect',
		strokeDashoffset:[anime.setDashoffset,0],
		duration:2000,
		delay:1000,
		delay:function(el,i){
			return 1000*i;
		},
		easing:'easeInSine'
	})

	.add({
		targets:'.anh g path',
		strokeDashoffset:[anime.setDashoffset,0],
		duration:1000,
		stroke:'#e74c3c',
		delay:function(el,i){
			return 500*i;
		},
		easing:'easeInSine',
		loop:true,
		direction:'alternate'
	})
},false)

