registerForm.addEventListener("submit", (event)=> {
    event.preventDefault()
    fetch("", {
        method: "POST",
        body: JSON.stringify(
            {
                // role: inputRole.value,
                username: inputUsername.value,
                email:inputEmail.value,
                password: inputPassword.value
            }
        ),
        headers:{
            "Content-Type": "application/json"
        }
    }) 
})