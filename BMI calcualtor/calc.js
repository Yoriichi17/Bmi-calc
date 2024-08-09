let button = document.getElementById("btn");


button.addEventListener("click", () => {
    let fn = document.querySelector("#fn").value;
    let sn = document.querySelector("#sn").value;

    
 
    let ress = sn/(fn*fn)  ;
    let elem = document.getElementById("title");
    let  ele = document.getElementById("para");
    elem.innerHTML = ress;

    if (isNaN(fn) || isNaN(sn)) {
        return alert("Please enter a valid number");
    }
   
    if(ress>24.9){
        elem.style.color = "red"
        ele.textContent =  "YOU ARE OVER WEIGHT !! :(";
        ele.style.color="red"

        
       
       
    }

    else if(ress<18.5){
        elem.style.color = "red"
        ele.textContent =  "YOU ARE UNDER WEIGHT !! :(";
        ele.style.color="red"
    }
            
    
 
     else{
      
            elem.style.color="green"
            ele.textContent =  "YOU ARE HEALTHY !! :)";
            ele.style.color="green"
        }
    })

    
