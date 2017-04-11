
function animate(opts){
	var start = new Date;
	var id = setInterval(function(){
		var timePassed = new Date - start;
		var progress = timePassed/opts.duration
		
		if (progress >1) progress = 1;
		var delta = opts.delta(progress)
		opts.step(delta)
		
		if (progress==1){
			clearInterval(id)
		}
		
	},opts.delay||10)
}

function move(element, delta, duration){
	var to =100
	
	//var element = document.getElementById('kula')
	animate({
		
		delay:10,
		duration: duration||1000,
		delta: delta,
		step: function(delta){
			
			//element.style.top = (to*delta) + 'px'
			element.style.opacity = delta;
		}
		
	})
}
function linear(progress){
	return progress
}

	
function sqr(progress){
	return progress/3+progress
}

function back(progress, x) {
	var x =1.5;
    return Math.pow(-progress, 2) 
}
