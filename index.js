
let canvas, line, wrong = 0;

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

let word;
let cont;
function getWord(){
   
   word = document.getElementById("txt").value;
   cont = word.length;

   for(let i = 0;i < word.length; ++i){
        let div = document.createElement("div");
        div.style.width = "50px";
        div.style.height = "50px";
        div.style.background = "white";
        div.style.color = "black";
        div.style.borderBottom= "thick solid black"
        div.style.marginRight = "10px";
        div.style.fontSize = "xxx-large";
        div.style.textAlign = "center";
        div.id= i;
        document.getElementById("cont").appendChild(div);
    }

    for( let i = 65; i <= 90; ++i) {
        let button = document.createElement('button')
        button.className = "button"
        button.id = "btn"
        button.innerHTML = String.fromCharCode(i);
        button.value = String.fromCharCode(i + 32);
        button.addEventListener('click', () => {
        compare(button.value);    
        button.disabled = true;
        })
        document.getElementById("letters").appendChild(button);
    }
    
    
    document.getElementById("0").innerHTML = word[0];
    
        for(let i = 0; i < word.length; ++i){
            if(word[0].toLowerCase() == word[i]){
               document.getElementById(i).innerHTML = word[i];
            }
       }
    

       document.getElementById("txt").value = "";

     
}



function compare(value){

    let positions = [] , i = -1;
    let bigLetter = value.toUpperCase();
    console.log(bigLetter);
    let wrongTest = (word.indexOf(value) > -1);
    if(wrongTest == false) ++wrong;


    while((i=word.indexOf(value,i+1)) >= 0) positions.push(i);
    
     for(let h = 0; h < positions.length; ++h){
        document.getElementById(positions[h]).innerHTML = value;
        --cont;
    }
  
    if(cont == 0) window.alert("YOU WON!");
    
    if(wrong == 1) firstLine();
    if(wrong == 2) secondLine();
    if(wrong == 3) theRope();
    if(wrong == 4) theHead();
    if(wrong == 5) theNeck();
    if(wrong == 6) rightHand();
    if(wrong == 7) leftHand();
    if(wrong == 8) theBody();
    if(wrong == 9) rightLeg();
    if(wrong == 10){
    leftLeg();
    for(let i = 0; i < word.length; ++i){
        document.getElementById(i).innerHTML = word[i];
    }
    window.alert("YOU LOSE!");
    }
    
    
    
}
















    
   
    




