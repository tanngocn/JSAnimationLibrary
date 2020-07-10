document.addEventListener("DOMContentLoaded",function(){
	var dt1= document.querySelector('.content');	
	var trangthai="dungyen";
	var vtdt1=dt1.offsetTop;
	console.log(vtdt1);
	window.addEventListener('scroll',function(){
		if(window.pageYOffset>=vtdt1){
			if(trangthai=="dungyen"){
				var cdha = anime.timeline();
				cdha.add({
					targets: '.ve path.p1',
					strokeDashoffset:[anime.setDashoffset,0],
					duration:2000,
					opacity:[0,1],
					easing:'easeOutSine'
				}).add({
					targets: '.ve path.p2',
					strokeDashoffset:[anime.setDashoffset,0],
					duration:2000,
					opacity:[0,1],
					easing:'easeOutSine'
				},0)
				.add({
					targets: 'img.anh',
					opacity:1

				}).add({
					targets: '.ve path.p2',
					opacity:0,
					duration:500
				}).add({
					targets: '.ve path.p1',
					opacity:0,
					duration:500

				})
				trangthai="dangcuon"
			}
		}
	})


},false)

