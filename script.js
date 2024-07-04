let input= document.querySelector(".input")
let btn = document.querySelector(".btn")


btn. addEventListener("click",function()
{
     if(input.type == "password"){
         input.type ="text"
        btn.innerHTML ="hide"}
     
      else{
        input.type = "password"
            btn.innerHTML = "show"
        }

})
