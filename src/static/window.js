// я хз чо оно не работает
window.addEventListener('beforeunload',function (event){
    const message = "Вы уверены, что хотите покинуть эту страницу?"
    event.preventDefault(message)
    event.returnValue = message
    return message
})

window.onUnload = function() {
    alert('hello');
    return 'hello';
}
  
// window.onbeforeunload = function(event) {
//     event.preventDefault()
//     alert('bye');
//     return 'bye';
// }

onUnload()
// onbeforeunload()
