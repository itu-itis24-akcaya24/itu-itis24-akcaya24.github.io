let count = 0;
let lives = 3;
function increaseNumber(){
    count = count + 20;
    lives = lives - 1;
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
    document.getElementById("letterB").style.opacity=1;
    document.querySelector("body > div.Letters > div").style.border ="none";
     }
function resetGame(){
    count = 0;
    lives = 3;
    document.getElementById("heart3").style.opacity=1;
    document.getElementById("heart2").style.opacity=1;
    document.getElementById("heart1").style.opacity=1;
    document.getElementById("score").innerHTML = "Score: "+count;
    document.getElementById("letterB").style.opacity = 0;

}
