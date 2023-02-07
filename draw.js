let canvas, line;
canvas = document.querySelector("canvas");
line = canvas.getContext("2d");
canvas.width = 700;
canvas.height = 400;
function firstLine(){
    line.beginPath();
    line.lineWidth = 5;
    line.moveTo(200,350);
    line.lineTo(200,60);
    line.stroke();
}
function secondLine(){
    line.beginPath();
    line.lineWidth = 5;
    line.moveTo(198,60);
    line.lineTo(330,60);
    line.stroke();
}
function theRope(){
    line.beginPath();
    line.lineWidth = 5;
    line.moveTo(328,60);
    line.lineTo(328,120);
    line.stroke();
}
function theHead(){
    line.beginPath();
    line.lineWidth = 5;
    line.arc(328,142,25,270,360,false);
    line.stroke();
}
function theNeck(){
    line.beginPath();
    line.lineWidth = 5;
    line.moveTo(328,165);
    line.lineTo(328,200);
    line.stroke();
}
function rightHand(){
    line.beginPath();
    line.lineWidth = 5;
    line.moveTo(328,200);
    line.lineTo(380,240);
    line.stroke();
}
function leftHand(){
    line.beginPath();
    line.lineWidth = 5;
    line.moveTo(328,200);
    line.lineTo(278,240);
    line.stroke();
}
function theBody(){
    line.beginPath();
    line.lineWidth = 5;
    line.moveTo(328,200);
    line.lineTo(328,270);
    line.stroke();
}
function rightLeg(){
    line.beginPath();
    line.lineWidth = 5;
    line.moveTo(328,270);
    line.lineTo(380,310);
    line.stroke();
}
function leftLeg(){
    line.beginPath();
    line.lineWidth = 5;
    line.moveTo(328,270);
    line.lineTo(278,310);
    line.stroke();
}
let drawList = [
    function() { firstLine() },
    function() { secondLine() },
    function() { theRope() },
    function() { theHead() },
    function() { theNeck() },
    function() { rightHand() },
    function() { leftHand() },
    function() { theBody() },
    function() { rightLeg() },
    function() { leftLeg() }
]

