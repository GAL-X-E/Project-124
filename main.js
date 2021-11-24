difference = 0;
rightWristX = 0;
leftWristX = 0;

your_name = "";

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    canvas = createCanvas(550, 500);
    canvas.position(560, 150);
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log("poseNet is initialized");
}

function gotPoses(results){
    if(results.length > 0){
        console.log(results);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        
        difference = floor(leftWristX - rightWristX);
    }
}

function start(){
    your_name = document.getElementById("name").value;
}

function draw(){
    background('#dde8b7');

    document.getElementById("square_side").innerHTML = "Height and width of a square will be"+difference+"px";
    fill('#34ebba');
    textSize(difference)
    text(your_name,50,400,);
}
