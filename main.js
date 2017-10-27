var eyboss = new Audio('ey-boss.wav');
var cancer = new Audio('i-have-a-cancer.wav');
var alien = new Audio('have-you-seen-alien.wav');
var nyesss = new Audio('nyesssss.wav');
var startCount = 0
var stop = new Audio('time-to-stop.wav');

var playSound = function(){
	var val = Math.floor((Math.random() * 4) + 1);
	startCount++;
	if (startCount % 12 == 0) {
		stop.play();
	} else {
		switch(val){
			case 1:
				eyboss.play();
				break;
			case 2:
				cancer.play();
				break;
			case 3:
				alien.play();
				break;
			case 4:
				nyesss.play();
				break;
		}
	}
}
setInterval(function(){ playSound() }, 300000);
// setTimeout(playSound, 3000);
// setTimeout(playSound(), 5000);
// setTimeout(playSound(), 7000);
// setTimeout(playSound(), 9000);
// setTimeout(stop.play(), 11000);

