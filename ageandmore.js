var scl = 20;

function setup() {
	bgcolor = document.getElementById("backgroundcolor");
	bgcolor.style.background = '-webkit-linear-gradient(' + (Math.floor(Math.random()*361)) + 'deg, ' + '#'+("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6) + ', ' + '#'+("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6) + ')';

	var canvas = createCanvas(window.innerWidth, window.innerHeight);
	canvas.parent("snakes");

	s = new Snake();
	frameRate(5);

	for(i = 0; i < 20; i++) {
		s.randomSnake(new Snake());
	}

	setInterval(
		function() {
			document.getElementById('myage').innerHTML = myAge().substring(0, 2);
		}, 100);
	setInterval(
		function() {
			document.getElementById('myageprecise').innerHTML = "."+myAge().substring(3, 12);
		}, 100);
	function myAge(){
		var myBirthday = new Date("October 26, 1998 00:00:00");
		var now = new Date();
		var duration = now - myBirthday;
		var years = duration / 31556900000;
		return String(years);
	}
}

function draw() {
  s.update();
  s.show();
}

function mousePressed() {
	s.pickLocation();
	s.xspeed = 0;
	s.yspeed = 0;
}

function keyTyped() {
	if(key === "r") {
		setInterval(
			function() {
				bgcolor = document.getElementById("backgroundcolor");
				bgcolor.style.background = '-webkit-linear-gradient(' + (Math.floor(Math.random()*361)) + 'deg, ' + '#'+("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6) + ', ' + '#'+("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6) + ')';
			}, 100);
	} else if(key === "c") {
		clear();
	} else if(key === "v") {
		var app = document.getElementById("backgroundcolor");
		style = window.getComputedStyle(app);
		var opacity = style.getPropertyValue('opacity');
		app.style.opacity = String(parseFloat(opacity)+0.05);
	} else if(key === "d") {
		bgcolor = document.getElementById("backgroundcolor");
		bgcolor.style.background = '#DC134C'
	} else if(key === "b") {
		bgcolor = document.getElementById("backgroundcolor");
		bgcolor.style.background = '#1C6BA0'
	} else if(key === "n") {
		bgcolor = document.getElementById("backgroundcolor");
		bgcolor.style.background = '-webkit-linear-gradient(' + (Math.floor(Math.random()*361)) + 'deg, ' + '#'+("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6) + ', ' + '#'+("000000" + Math.random().toString(16).slice(2, 8).toUpperCase()).slice(-6) + ')';
	}
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		s.dir(0, -1);
	} else if (keyCode === DOWN_ARROW) {
		s.dir(0, 1);
	} else if (keyCode === RIGHT_ARROW) {
		s.dir(1, 0);
	} else if (keyCode === LEFT_ARROW) {
		s.dir(-1, 0);
	} else if (keyCode === ENTER) {
		s.xspeed = 0;
		s.yspeed = 0;
	}
}

function Snake(cols, rows) {
  this.xspeed = 0;
  this.yspeed = 0;
  var cols = floor(width/scl);
  var rows = floor(height/scl);

  this.pickLocation = function() {
  	this.x = floor(mouseX/scl)*scl;
  	this.y = floor(mouseY/scl)*scl;
  }

  this.randomSnake = function(snake) {
  	snake.x = floor(random(cols))*scl;
  	snake.y = floor(random(rows))*scl;
  	setInterval(
  		function() {
  			xOrY = random([0, 1])
		  	if(xOrY == 0) {
		  		snake.yspeed = 0;
		  		snake.xspeed = random([-1, 1]);
		  	} else {
		  		snake.xspeed = 0;
		  		snake.yspeed = random([-1, 1]);
		  	}
		  	snake.update();
		  	snake.show();
  		}, random(2000, 4500), snake);
  }

  this.dir = function(x, y) {
    this.xspeed = x;
    this.yspeed = y;
  }

  this.update = function() {
    this.x = this.x + this.xspeed * scl;
    this.y = this.y + this.yspeed * scl;
    this.x = constrain(this.x, -20, floor(width/scl)*scl + 20);
    this.y = constrain(this.y, -20, floor(height/scl)*scl + 20);
  }

  this.show = function() {
  	fill("#696969");
  	stroke("#696969");
    ellipse(this.x, this.y, scl*3/2, scl*3/2);
  }
}