loginForm.addEventListener("submit", (event)=> {
    event.preventDefault()
    fetch("", {
        method: "POST",
        body: JSON.stringify(
            {
                email: inputEmail.value,
                password: inputPassword.value,
                role: inputRole.value,
            }
        ),
        headers:{
            "Content-Type": "application/json"
        }
    }) 
})