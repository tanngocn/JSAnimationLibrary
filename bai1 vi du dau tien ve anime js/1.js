document.addEventListener("DOMContentLoaded",function(){
	var  vd= anime({
		targets:'.n1',
			// translateX:300
			translateX:[
				{value:200,duration:700,delay:300},
				{value:500,duration:700,delay:300}
			],
			translateY:[
				{value:200,duration:700,delay:300}
			], //key frames1
			scaleX:[
				{value:2, duration:700,delay:300}
			]
		}) // key frame1

},false)

