
		var thecantach=document.querySelector('.title');	
		var ptext=document.querySelector('.subtitle');

		charming(thecantach,{
			classPrefix	:'chu'//Đặt tên class 
		});	
		charming(ptext);

		var cd1=anime({
			targets:' .title span',
			opacity:[0,1],
			translateY:[-300,0],
			delay:function(el,i){
				return i*50;
			},
			loop:true,
			direction:'alternate'
		})
		ptext.addEventListener('mouseenter',function(){
			anime.remove(ptext);
			var cd2=anime({
			targets:' .subtitle span',
			color:'#e74c3c',
			opacity:[0,1],
			translateY:[-10,0],
			delay:function(el,i){
				return i*10;
			},
			duration:500
		})	
		})
			ptext.addEventListener('mouseleave',function(){
			anime.remove(ptext);
			var cd2=anime
			({
			targets:' .subtitle span',
			color:'#95a5a6',
			opacity:[0,1],
			translateY:[-10,0],
			delay:function(el,i){
				return i*10;
			},
			duration:500
			})
		})

		