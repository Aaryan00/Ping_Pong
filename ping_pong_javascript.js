var paddleHeight = 150;
var paddleWidth = 5;
var ballRadius = 25;
var halfPaddleHeight = paddleHeight / 2;
var speedOfPaddle1 = 0;
var positionOfPaddle1 = 460;
var speedOfPaddle2 = 0;
var positionOfPaddle2 = 460;
var topPositionOfBall = 390;
var leftPositionOfBall = 773;
var topSpeedOfBall = 0;
var leftSpeedOfBall = 0;
var score1 = 0;
var score2 = 0;

//2 players

function start() {
    alert("Click ok to start the game");
    startBall();
}

function startBall() {
    topPositionOfBall = 390;
    leftPositionOfBall = 773;
    if (Math.random() < 0.5) {
        var side = 1
    } else {
        var side = -1
    }
    topSpeedOfBall = Math.random() * 5 + 5;
    leftSpeedOfBall = side * (Math.random() * 5 + 5 );
};

//add key events

document.addEventListener('keydown', function (e) {
     //w
     if (e.keyCode == 87 || e.which == 87) { // W key
      speedOfPaddle1 = -10;
     }
     //s
     if (e.keyCode == 83 || e.which == 83) { // S Key
      speedOfPaddle1 = 10;
     }
     //up
     if (e.keyCode == 38 || e.which == 38) { // up arrow
      speedOfPaddle2 = -10;
     }
     //down
     if (e.keyCode == 40 || e.which == 40) { // down arrow
      speedOfPaddle2 = 10;
     }
}, false);

document.addEventListener('keyup', function (e) {
    //w
    if (e.keyCode == 87 || e.which == 87) {
        speedOfPaddle1 = 0;
    }
    //s
    if (e.keyCode == 83 || e.which == 83) {
        speedOfPaddle1 = 0;
    }
    //up
    if (e.keyCode == 38 || e.which == 38) {
        speedOfPaddle2 = 0;
    }
    //down
    if (e.keyCode == 40 || e.which == 40) {
        speedOfPaddle2 = 0;
    }
}, false);

function print() {
    console.log(positionOfPaddle1);
}


window.setInterval(function show() {
    positionOfPaddle1 += speedOfPaddle1;
    positionOfPaddle2 += speedOfPaddle2;
    topPositionOfBall += topSpeedOfBall;
    leftPositionOfBall += leftSpeedOfBall;

// paddlee dont go above box

    if (positionOfPaddle1 <= 103) {
        positionOfPaddle1 = 103;
    }
    if (positionOfPaddle2 <= 103) {
        positionOfPaddle2 = 103;
    }

//paddle dont go below box

    if (positionOfPaddle1 >= window.innerHeight - paddleHeight- 27) {
        positionOfPaddle1 = window.innerHeight - paddleHeight - 27;
    }
    if (positionOfPaddle2 > window.innerHeight - paddleHeight - 27) {
        positionOfPaddle2 = window.innerHeight - paddleHeight - 27;
    }

// ball dont go above and below box

    if (topPositionOfBall <= 105 || topPositionOfBall >= window.innerHeight - ballRadius-45) {
        topSpeedOfBall = -topSpeedOfBall
    }

// scoring for out

    if (leftPositionOfBall <= paddleWidth + 35) {
        if (topPositionOfBall > positionOfPaddle1 && topPositionOfBall < positionOfPaddle1 + paddleHeight) {
            leftSpeedOfBall = -leftSpeedOfBall;
            var audio = new Audio('sound.mp3');
            audio.play();
        } else {
            score2++;
            var audio = new Audio('out.mp3');
            audio.play();
            startBall();
        } 
    }
    if (leftPositionOfBall >= window.innerWidth - ballRadius - paddleWidth -40 ) {
        if (topPositionOfBall > positionOfPaddle2  && topPositionOfBall < positionOfPaddle2 + paddleHeight) {
            leftSpeedOfBall = -leftSpeedOfBall
            var audio = new Audio('sound.mp3');
            audio.play();
        } else {
            score1++
            var audio = new Audio('out.mp3');
           audio.play();
            startBall();
        }
    }

    document.getElementById("paddle1").style.top = (positionOfPaddle1) + "px";
    document.getElementById("paddle2").style.top = (positionOfPaddle2) + "px";
    document.getElementById("ball").style.top = (topPositionOfBall) + "px";
    document.getElementById("ball").style.left = (leftPositionOfBall) + "px";
    document.getElementById('score1').innerHTML = score1.toString();
    document.getElementById('score2').innerHTML = score2.toString();
}, 1000/60);
