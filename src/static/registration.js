registerForm.addEventListener("submit", (event)=> {
    event.preventDefault()
    fetch("", {
        method: "POST",
        body: JSON.stringify(
            {
                username: inputUsername.value,
                email:inputEmail.value,
                password: inputPassword.value,
                role: inputRole.value,
            }
        ),
        headers:{
            "Content-Type": "application/json"
        }
    }) 
})