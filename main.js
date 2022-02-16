harry_potter="";
peter_pan="";
lWx=0;
lWy=0;
rWx=0;
rWy=0;
function preload()
{
    harry_potter=loadSound("harrypotter.mp3");
    peter_pan=loadSound("peterpan.mp3");
}
function setup()
{
    canvas=createCanvas(600,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function modelLoaded()
{
    console.log("PoseNET ready.");
}
function gotPoses(results,error)
{
    if(error)
    {
        console.error(error);
    }
    if(results.length>0)
    {
        lWy=results[0].pose.leftWrist.y;
        lWx=results[0].pose.leftWrist.x;
        rWx=results[0].pose.rightWrist.x;
        rWy=results[0].pose.rightWrist.y;
        console.log("LeftWy= "+lWy+" LeftWx= "+lWx+" RightWy= "+rWy+" RightWx= "+rWx);
    }
}
function draw()
{
    image(video,0,0,600,400);
}