function preload(){
}
function setup(){
Canvas=createCanvas(400,400);
Canvas.position(350,200);
Webcam=createCapture(VIDEO);
Webcam.hide();

}
function draw(){
image(Webcam, 0, 0, 400, 400);
circle(11, 10, 50);
circle(384, 10, 50);
circle(384, 384, 50);
circle(11, 384, 50);
rect(30, -1, 335, 28);
rect(30, 372, 335, 28);
}
function take_snapshot(){
save("Clown.png");
}