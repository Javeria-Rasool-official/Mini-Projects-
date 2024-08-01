let buttons=document.querySelectorAll(".but");
let input=document.querySelector(".input");

Array.from(buttons).forEach((button)=>{
    button.addEventListener("click",()=>{
       input.value=button.innerHTML;
       
    })
})