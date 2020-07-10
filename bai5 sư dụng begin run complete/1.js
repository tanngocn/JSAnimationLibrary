document.addEventListener("DOMContentLoaded",function(){
		var nut= document.querySelector('.start');
		var h1=document.querySelector('.noidung h1');
		nut.addEventListener('click',function(){
			var cd=anime({
				targets:'.nut .btn',
				rotate:'2turn',
				marginLeft:500,
				duration:5000,
				begin:function(chuyendong){

				},
				run:function(chuyendong){

				},
				complete:function(){
					
				}
			})
		})

},false)

