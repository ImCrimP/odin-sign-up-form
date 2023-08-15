document.addEventListener("DOMContentLoaded", ()=>{
    let password = document.querySelector("#password");
    let confirmPass = document.querySelector("#confirm-password");
    const createBtn = document.querySelector("#create-account");
    
    let signUpDiv = document.querySelector("#sign-up");
    
    let error = document.createElement("div");
    error.setAttribute("id", "error");
    error.textContent = "";
        
    signUpDiv.appendChild(error);
    
    
    
    createBtn.addEventListener("click", ()=>{
        if(password.value != confirmPass.value){
            error.textContent = "*Passwords do not match";
            event.preventDefault();
        }
        else{
            error.textContent = "";
            event.preventDefault();
        }
    });
})

