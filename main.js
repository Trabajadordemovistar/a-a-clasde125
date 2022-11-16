
noseX = 0

noseY = 0

leftwristX = 0

rightwristX = 0

diferencia = 0



function setup(){
    var canvas = createCanvas(500,500)
    canvas.position(700,220)
    video = createCapture(VIDEO);
    video.size(550,500)
    poseNet = ml5.poseNet(video,modelloaded)
    poseNet.on("pose",gotPoses)
}

function modelloaded(){
    console.log("Se programar :)")
}

function gotPoses(result){
if(result.length>0){
console.log(result);
noseX = result[0].pose.nose.x;
console.log(noseX);
noseY = result[0].pose.nose.y;
console.log(noseY);
leftwristX = result[0].pose.leftWrist.x;
console.log(leftwristX)
rightwristX = result[0].pose.rightWrist.x;
console.log(rightwristX);
diferencia = floor(leftwristX - rightwristX);
}

}

function draw(){
background("white");
document.getElementById("square_side").innerHTML  = "El ancho y el alto del cuadrado es:" + diferencia + "px";
fill("black");
stroke("yellow");
strokeWeight(3)
rect(noseX,noseY,diferencia);
fill("white");
text("Soy pro",noseX +50,noseY +50);
}








































