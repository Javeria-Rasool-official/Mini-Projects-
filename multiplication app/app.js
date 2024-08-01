const score=document.querySelector("#score-digit");
let userInput=document.getElementById("user-input");
let answer=userInput.getAttribute("value");
let digit1=document.querySelector("#digit1");
let digit2=document.querySelector("#digit2");
let submit=document.querySelector("#btn");
let warning=document.querySelector("#warnings");
let block=document.querySelector(".block-inside");
let retryNumber=document.querySelector("#re-try");
let exit=document.querySelector("#exit")
let scoreNumber=0;
let retry=0;

function change(){
    let randomNum1=Math.floor(Math.random()*20)+1;
let randomNum2=Math.floor(Math.random()*20)+1;
   digit1.innerText=randomNum1; 
   digit2.innerText=randomNum2; 
}
function calculation(){
    const num1=parseInt(digit1.innerText);
    const num2=parseInt(digit2.innerText);
    return num1*num2;
}
function scoreCal(answer){
let cal=calculation();
    if(parseInt(answer)===cal){
        scoreNumber++;
        score.innerText=scoreNumber;
        change();
        warning.style.display="none";
    }else{
        retry++;
        warning.style.display="block";
        warning.innerText="try again!";
        if(retry>=3){
            block.style.display="block";
            retryNumber.innerText=score.innerText;
        }
    }
    userInput.value="";
}
submit.addEventListener("click",()=>{
    answer=userInput.value;
scoreCal(answer);
})
exit.addEventListener("click",()=>{
    block.style.display="none";
    retry=0;
    scoreNumber=0;
    window.location.reload();
})
function start(){
change();
answer="";
warning.style.display="none";
block.style.display="none";
}
start();


