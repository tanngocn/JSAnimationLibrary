document.addEventListener("DOMContentLoaded",function(){
	var nut= document.querySelector('.den small');
	var den= document.querySelector('.den');
	nut.addEventListener('click',function(){
		var cd=anime({
			targets:den,
			translateY:'-200%',
			easing:'easeOutSine',
			duration:3600
		})
		var cd2= anime ({
			targets:'.svg svg',
			scaleY:[
			{value:[0.4,2],duration:500,easing:"easeOutSine"},
			{value:[2,0.3],duration:500,easing:"easeOutSine"}
			
		],
		easing:"easeOutSine"
		})
		var cd3=anime({
			targets:'.den  path',
			duration:1000,
			d:"M.75,0H1318.29s17,312.91-28.54,326.18S1169.92,97.66,1169.92,97.66,1153,277.82,1122.66,277.82,1121,54,1033.22,91s-1.69,237.06-77.64,214.3S920.14,109,829,114.73,765.71,426.22,685.55,381.18,697.36,44.56,596.1,121.36,584.28,453.25,494.83,391.61,429,140.33,375,149.81,353.07,422,290.62,386.87,263.62,202,211.3,163.09s-133.33,0-109.7,41.72,16.87,126.11-48.95,89.13S.75,0,.75,0Z",
			easing:"easeOutSine",
			background:"black"

		
		})
	})


},false)

