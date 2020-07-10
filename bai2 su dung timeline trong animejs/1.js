
 var timeline1= anime.timeline();

 timeline1.add({
 	targets:'.n1',
 	translateY:[
 			{value:300,duration:2000}
 	]
 })
timeline1.add({
	targets:'.n2',
	translateY:[{value:500,duration:2000}],
	
	},0 //'-=500'
	)

