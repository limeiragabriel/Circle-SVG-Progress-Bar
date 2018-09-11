var control = document.getElementById('control');
var progressValue = document.querySelector('.circle');

var CIRCUMFERENCE = 100;

function progress(value) {
	var progress = value / 100;
	var dashoffset = CIRCUMFERENCE * (1 - progress);
	
	console.log('progress:', value + '%', '|', 'offset:', dashoffset)
	
	progressValue.style.strokeDashoffset = (dashoffset);

	//document.getElementById('cont').textContent = value + '%';
}

control.addEventListener('input', function(event) {
	progress(event.target.valueAsNumber);

});

progressValue.style.strokeDasharray = CIRCUMFERENCE;
progress(60);