const checkBtn=document.querySelector("#check-btn");
const textInput=document.querySelector("#text-input");
const result=document.querySelector("#result");

function userInput(){
    let input=textInput.value;
    let regex=/[\s\.\,\_\-\(\)\:\\]/gi;
    let updated=input.replace(regex,'').toLowerCase();
   let word=updated.toLowerCase();
   word=word.split("").reverse().join("");
   
    if(word===updated){
        result.innerText=input+" is a palindrome";
    }else{
        result.innerText=input+" is not a palindrome";
    }

}



checkBtn.addEventListener("click",()=>{
    if(textInput.value===""){
        alert("Please input a value");
    }
    userInput();
})