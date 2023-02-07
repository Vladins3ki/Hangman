
let word, cont, wrong = -1;
function getWord(){
word = document.getElementById("txt").value;
cont = word.length;
for(let i = 0;i < word.length; ++i){
        let div = document.createElement("div");
        div.className="lettersField";
        div.id= i;
        document.getElementById("cont").appendChild(div);
    }
for(let i = 'A'.charCodeAt(0); i <= 'Z'.charCodeAt(0); ++i) {
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
for(let i = 0; i < word.length; ++i){
            if(word[0] == word[i]){
            document.getElementById(i).innerHTML = word[i];
            --cont;
        }
    }
    document.getElementById("txt").value = "";
}
function compare(value){
    for(let i = 0; i < word.length; ++i){
        if(value == word[i]){
            document.getElementById(i).innerHTML = word[i];
            --cont;
        }
    }
    if(cont == 0) window.alert("YOU WON!");  
    let test = (word.indexOf(value) > -1);
    if(test == false){
        ++wrong;
        drawList[wrong]();
    } 
    if(wrong == 9){
        for(let i = 0; i < word.length; ++i){
            document.getElementById(i).innerHTML = word[i];
        }
        window.alert("YOU LOSE!");
    } 
}
















    
   
    




