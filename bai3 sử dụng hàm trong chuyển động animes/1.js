var cd=anime({
	targets:'.btn',
	translateY:'100px',
	duration:function(el,i){ return (i*100)+200;},
	delay:function(el,i){return (i*100)+200;},
	// direction:'reverser'
	direction:'alternate',
	loop:true
})