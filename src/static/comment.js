const createButton = document.getElementById("createCommentButton")

createButton.addEventListener("click", ()=>{
    fetch("http://127.0.0.1:8000/comment/create", {
        method:"POST",
        body:JSON.stringify(
            {
                header: 'comment3',
                body:" просто коммент",
                img: 'img'
            }),
        headers:{
            "Content-Type": "application/json"
        }
    })
})