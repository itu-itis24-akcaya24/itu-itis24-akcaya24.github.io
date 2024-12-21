let count = 0;
let lives = 3;
let isB = false;
let isL = false;
let isA = false;
let isS = false;
let isT = false;

const letterB = document.getElementById("letterB");
const letterL = document.getElementById("letterL");
const letterA = document.getElementById("letterA");
const letterS = document.getElementById("letterS");
const letterT = document.getElementById("letterT");

const infoMessage = document.getElementById("victory-message");
const inputText = document.getElementById("inputText");

function increaseNumber(){
    if(inputText.value[0]=='B' || inputText.value[0]=='b'&&
    inputText.value[1]=='L' || inputText.value[1]=='l'&&
    inputText.value[2]=='A' || inputText.value[2]=='a'&&
    inputText.value[3]=='S' || inputText.value[3]=='s'&&
    inputText.value[4]=='T' || inputText.value[4]=='t')
    {
        count = 100;
        letterB.style.opacity=1;
        letterL.style.opacity=1;
        letterA.style.opacity=1;
        letterS.style.opacity=1;
        letterT.style.opacity=1;
    }
    else if(inputText.value=='B'|| inputText.value=='b' && !isB){
        count = count + 20;
        letterB.style.opacity=1;
        isB = true;
    }
    else if(inputText.value=='L'||inputText.value=='l' && !isL){
        count = count + 20;
        letterL.style.opacity=1;
        isL = true;
    }
    else if(inputText.value=='A'||inputText.value=='a' && !isA){
        count = count + 20;
        letterA.style.opacity=1;
        isA = true;
    }
    else if(inputText.value=='S'||inputText.value=='s' && !isS){
        count = count + 20;
        letterS.style.opacity=1;
        isS = true;
    }
    else if(inputText.value=='T'||inputText.value=='t' && !isT){
        count = count + 20;
        letterT.style.opacity=1;
        isT = true;
    }
    else if(inputText.value.length>1){
        lives = 0;
    }
    else{
        if(inputText.value=='B' || inputText.value=='b' || inputText.value=='L' || inputText.value=='l' || inputText.value=='A' || inputText.value=='a' ||
            inputText.value=='S' || inputText.value=='s' || inputText.value=='T' || inputText.value=='t')
        {
            console.log("dont type the same thing bruh");
            infoMessage.style.color="black";
            infoMessage.textContent="Please dont type the same letter.";
        }
        else{
        lives -= 1;
        }
    }

    if(count==100 && lives>0){
        infoMessage.textContent="You won!";
        infoMessage.style.color= "green";
        document.getElementById("submitbutton").disabled = true;
        inputText.disabled = true;
    }
    if(lives==0){
        infoMessage.textContent="You lost, restart the game.";
        infoMessage.style.color="red";
        document.getElementById("submitbutton").disabled = true;
        inputText.disabled = true;
    }

    switch(lives){
        case 3:
            document.getElementById("heart3").style.opacity=1;
            document.getElementById("heart2").style.opacity=1;
            document.getElementById("heart1").style.opacity=1;
        break;
        case 2:
            document.getElementById("heart3").style.opacity=0;
            document.getElementById("heart2").style.opacity=1;
            document.getElementById("heart1").style.opacity=1;
        break;
        case 1:
            document.getElementById("heart3").style.opacity=0;
            document.getElementById("heart2").style.opacity=0;
            document.getElementById("heart1").style.opacity=1;
        break;
        case 0:
            document.getElementById("heart3").style.opacity=0;
            document.getElementById("heart2").style.opacity=0;
            document.getElementById("heart1").style.opacity=0;  
        break;
    }

    document.getElementById("score").innerHTML ="Score: " + count;
    inputText.value="";
    document.getElementById("resetgame").style.display="unset";
}
function resetGame(){
    count = 0;
    lives = 3;

    isB = false;
    isL = false;
    isA = false;
    isS = false;
    isT = false;

    document.getElementById("heart3").style.opacity=1;
    document.getElementById("heart2").style.opacity=1;
    document.getElementById("heart1").style.opacity=1;

    document.getElementById("score").innerHTML = "Score: "+count;

    letterB.style.opacity = 0;
    letterL.style.opacity=0;
    letterA.style.opacity=0;
    letterS.style.opacity=0;
    letterT.style.opacity = 0;

    inputText.value="";
    
    infoMessage.style.color="transparent";

    document.getElementById("submitbutton").disabled = false;
    inputText.disabled = false;

}
