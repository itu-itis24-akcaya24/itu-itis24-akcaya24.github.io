let count = 0;
let lives = 3;
function increaseNumber(){
    count = count + 20;
    document.getElementById("score").innerHTML ="Score: " + count;
    document.getElementById("letterB").style.opacity=1;
    document.querySelector("body > div.Letters > div").style.border ="none";
     }
function resetGame(){
    count = 0;
    document.getElementById("score").innerHTML = "Score: "+count;
    document.getElementById("letterB").style.opacity = 0;

}