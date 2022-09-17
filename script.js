let buttons = document.querySelectorAll(".btn");
let userinput=document.querySelector('input');

Array.from(buttons).forEach((btn)=>{
    btn.addEventListener('click',(e)=>{
        if(e.target.innerHTML=='='){
            try {
                userinput.value=eval(userinput.value);   
            } catch (error) {
                userinput.value="Invalid!"
            }
        }
        else if(e.target.innerHTML=="AC"){
            userinput.value="";
        }

        else if(e.target.innerHTML=="C"){
            userinput.value=userinput.value.slice(0,-1);

        }
        
        else{
            userinput.value=userinput.value+e.target.innerHTML;
        }

    })
})