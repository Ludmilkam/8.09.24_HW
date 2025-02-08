const createButton = document.getElementById("createPostButton")
const deleteButton = document.getElementById("deleteButton")

createButton.addEventListener("click", ()=>{
    fetch("http://127.0.0.1:8000/post/create", {
        method:"POST",
        body:JSON.stringify(
            {
                name: 'post3',
                description:" просто пост",
                time_publicated:26.10,
                author: 'Author3'
            }),
        headers:{
            "Content-Type": "application/json"
        }
    })
})

deleteButton.addEventListener("click", ()=>{
    const id = post.id
    fetch(`http://127.0.0.1:8000/post/delete/${id}`,{
        method:"DELETE",
        headers:{
            "Content-Type": "application/json"
        }
    })
})