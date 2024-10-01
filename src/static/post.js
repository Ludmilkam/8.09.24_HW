const createButton = document.getElementById("createPostButton")

createButton.addEventListener("click", ()=>{
    fetch("http://127.0.0.1:8000/post/create", {
        method:"POST",
        body:JSON.stringify(
            {
                name: 'post3',
                description:" просто пост",
                time_publicated:"jutro",
                author: 'Author3'
            }),
        headers:{
            "Content-Type": "application/json"
        }
    })
})