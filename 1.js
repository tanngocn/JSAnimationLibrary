document.addEventListener("DOMContentLoaded",function(){
function dongGoi(chu){
	chu.classList.add('hieuung');
	var cu=chu.innerHTML;
	var moi="<div class='chu' >"+cu+ "</div>";
	chu.innerHTML=moi;
	chu.insertAdjacentHTML('beforeend','<div class="nen"></div>');
	var nen= chu.querySelector('.nen');
	var text= chu.querySelector('.chu');
	var cd= anime.timeline();
	cd.add({
		targets:nen,
		duration:1000,
		easing:'easeInOutQuint',
		scaleX:[0,1],
		complete:function(){
			nen.style.transformOrigin="100% 50%";
			anime({
				targets:nen,
				delay:100,
				easing:'easeInOutQuint',
				duration:800,
				scaleX:[1,0]
			})
		}
	}).add({
		targets:text,
		opacity:[0,1]
	})

}
dongGoi(document.getElementById('k1'));
dongGoi(document.getElementById('k2'));
dongGoi(document.getElementById('k3'));
dongGoi(document.getElementById('k4'));

},false)

// '<div class="nen"></div>'