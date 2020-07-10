document.addEventListener("DOMContentLoaded",function(){
		nen= document.querySelector('.nen');
		chu= document.querySelector('.chu')
		var cd= anime.timeline();
		cd.add({
			targets:nen,
			scaleX:[0,1],
			duration:1000,
			easing:'easeInOutQuint',
			complete:function(){
				nen.style.transformOrigin="100% 50%";
				anime({
				targets:nen,
				delay:200,
				scaleX:[1,0],
				duration:600,
					easing:'easeInOutQuint'
				})
			},
			
		}).add({
			targets:chu,
			opacity:[0,1]

		})
		// tạo mới 1 phần thẻ html
		var d1= document.createElement('div');
		var d2= document.createElement('div');

		var h1= document.querySelector('.chu');
		d1.className='khoi';
		d2.className="nen";
		h1.parentNode.insertBefore(d1,h1);
		d1.appendChild(h1);
		 d1.appendChild(d2);

},false)

