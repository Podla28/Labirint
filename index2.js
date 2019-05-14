var size = 1; //velikost labirinta
var x = 226; //začetna točka;
var x1;
var y = 2;
var dx = 0.5; //hitrost premikanja
var dy = 0.5; //hitrost permikanja
var hitrost = 10;
var ball = new Image;
var value = 0;
var snow = new Image;
ball.src = "slike/zoge4.png";
var a;
var ctx;

/////////////////////////////////////
var canvasSize = 484;
var srcX = 0;
var srcY =0;
var sheetWidth =  82;
var sheetHeight = 14;
var frameCount = 5;

var imgW = sheetWidth / frameCount;
var imgH = sheetHeight;
var currentFrame = 0;
var t1 = 0;

var korx = [226, 242, 242, 242, 258, 258, 274, 290, 290, 304, 306, 322, 338, 338, 354, 370, 370, 354, 354, 338, 322, 306, 290, 290, 290, 276, 276, 258, 242, 226, 226, 226, 242, 242, 258, 258, 258, 274, 274, 290, 290, 304, 322, 338, 338, 354, 354, 354, 370, 370, 354, 338, 338, 322, 306, 306, 322, 322, 306, 306, 306, 306, 306, 306, 290, 274, 274, 258, 258, 258, 274, 274, 290, 306, 306, 290, 274, 274, 274, 290, 306, 306, 322, 338, 354, 370, 370, 370, 354, 354, 338, 322, 322, 306, 290, 276, 276, 258, 244, 244]; //8 -->levo
var kory = [2, 2, 16, 16, 18, 34, 34, 50, 66, 66, 82, 82, 82, 66, 66, 66, 82, 82, 98, 98, 98, 98, 98, 114, 130, 130, 146, 146, 146, 162, 178, 178, 162, 162, 178, 194, 194, 210, 210, 194, 194, 194, 194, 178, 178, 194, 210, 210, 226, 226, 226, 210, 210, 210, 226, 226, 242, 242, 258, 274, 290, 304, 322, 322, 322, 338, 338, 354, 370, 370, 388, 388, 388, 404, 404, 404, 420, 436, 436, 436, 420, 420, 420, 420, 420, 436, 452, 452, 436, 436, 436, 450, 450, 450, 450, 466, 466, 466, 490]; //8

var st = 0; //štetje korakov labirinta
var slider;
var output;
var interval;


function drawIt() {
  slider  = document.getElementById("slider");
  output = document.getElementById("demo");
	a = document.getElementById('canvas');
	ctx = a.getContext('2d');
  output.innerHTML = 10;


    Swal({
      type: 'info' ,
      title: 'Navodila',
     text: 'Za začetek labirinta pritisnite gumb "start"',
  })




}


function risi2(){

  slider.oninput = function() {
    output.innerHTML = this.value;
    hitrost= map_range(this.value);
	//console.log(hitrost);
    clearInterval(interval);
	if(interval)
		newLoop();
  }

	//console.log("t1 : "+t1);
	if (t1 == 50) {
		t1 = 0;
ctx.clearRect(0, 0, 484, 484);
	if (x < korx[st] * size) {
		x += dx;
	} else if (x > korx[st] * size) {
		x -= dx;
	} else if (y < kory[st] * size) {
		y += dy;
	} else if (y > kory[st] * size) {
		y -= dy;
	} else if (y == kory[st] * size) {
		st++;
    if(st>=korx.length){
      clearInterval(interval);

    }

	}

	if (currentFrame == 4) {
		currentFrame = 0;
		srcX = 0;
	}
	else {
		currentFrame++;
		srcX += imgW;
		//console.log(srcX);
	}

	ctx.drawImage(ball, srcX, 0, imgW, imgH, x, y, 14, 14);
}


else {
	ctx.clearRect(0, 0, 484, 484);

		if (x < korx[st] * size) {
			x += dx;
		} else if (x > korx[st] * size) {
			x -= dx;
		} else if (y < kory[st] * size) {
			y += dy;
		} else if (y > kory[st] * size) {
			y -= dy;
		} else if (y == kory[st] * size) {
			st++;
		}
	ctx.drawImage(ball, srcX, 0, imgW, imgH, x, y, 14, 14);

}
t1++;
}


function newLoop(){


	interval = setInterval(risi2, hitrost);

}
function newLoop2(){

   if(!interval)
	interval = setInterval(risi2, hitrost);

}
function stop(){
  interval = clearInterval(interval);
  interval=null;
}

function map_range(value) {
    return 20 + (1 - 20) * (value - 1) / (20 - 1);
}

function sweet(){

  Swal({
    type: 'info',
   title: 'THE CHRISTMAS MAZE',
   text: 'Jaka Podlogar 4.Ra',
   footer: 'Januar 2019',
   backdrop: `
     rgba(51,102,204,0.2)
     center left
     no-repeat
   `
})
}
