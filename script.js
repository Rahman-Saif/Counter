
let plus=document.querySelector(".increment");
let minus=document.querySelector(".decrement");
let reset=document.querySelector(".reset");
let result=document.querySelector(".result");
let count=0;

plus.addEventListener("click",function(){
    count++;
    result.textContent=count;
    
})

minus.addEventListener("click",function(){
    if(count==0){
        count=0;
    }else{
        count--;
    }
    
    result.innerText=count;
})

reset.addEventListener("click",function(){
    count=0;
    result.innerText=count;
})