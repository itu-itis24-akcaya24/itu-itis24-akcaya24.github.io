let count = 0;
let lives = 3;
let isB = false;
let isL = false;
let isA = false;
let isS = false;
let isT = false;
function increaseNumber(){
    if(document.getElementById("inputText").value=="BLAST"){
        count = 100;
        document.getElementById("letterB").style.opacity=1;
        document.getElementById("letterL").style.opacity=1;
        document.getElementById("letterA").style.opacity=1;
        document.getElementById("letterS").style.opacity=1;
        document.getElementById("letterT").style.opacity=1;
    }
    else if(document.getElementById("inputText").value=='B'|| document.getElementById("inputText").value=='b' && !isB){
        count = count + 20;
        document.getElementById("letterB").style.opacity=1;
        isB = true;
    }
    else if(document.getElementById("inputText").value=='L'||document.getElementById("inputText").value=='l' && !isL){
        count = count + 20;
        document.getElementById("letterL").style.opacity=1;
        isL = true;
    }
    else if(document.getElementById("inputText").value=='A'||document.getElementById("inputText").value=='a' && !isA){
        count = count + 20;
        document.getElementById("letterA").style.opacity=1;
        isA = true;
    }
    else if(document.getElementById("inputText").value=='S'||document.getElementById("inputText").value=='s' && !isS){
        count = count + 20;
        document.getElementById("letterS").style.opacity=1;
        isS = true;
    }
    else if(document.getElementById("inputText").value=='T'||document.getElementById("inputText").value=='t' && !isT){
        count = count + 20;
        document.getElementById("letterT").style.opacity=1;
        isT = true;
    }
    else if(document.getElementById("inputText").value.length>1){
        lives = 0;
    }
    else{
        lives = lives - 1;
    }

    if(count==100 && lives>0){
        document.getElementById("victory-message").innerHTML="congrats u won";
        document.getElementById("victory-message").style.color="black";
    }
    if(lives==0){
        document.getElementById("victory-message").innerHTML="you lost, restart the game";
        document.getElementById("victory-message").style.color="black";

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
    document.getElementById("inputText").value="";
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

    document.getElementById("letterB").style.opacity = 0;
    document.getElementById("letterL").style.opacity=0;
    document.getElementById("letterA").style.opacity=0;
    document.getElementById("letterS").style.opacity=0;
    document.getElementById("letterT").style.opacity = 0;

    document.getElementById("inputText").value="";
    
    document.getElementById("victory-message").style.color="transparent";

}
