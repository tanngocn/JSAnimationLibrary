document.addEventListener("DOMContentLoaded",function(){
	var cdha = anime.timeline();
	cdha.add({
		targets: '.ve rect',
		strokeDashoffset:[anime.setDashoffset,0],
		duration:2000,
		opacity:[0,1],
		easing:'easeOutSine'
	}).add({
		targets:'img.anh',
		opacity:[0,1],
		duration:600,
	}).add({
		targets:'.ve rect',
		opacity:0,
		duration:600,
	})
},false)

