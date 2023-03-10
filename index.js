// binds an event listener in addingEventListener():
const input = document.getElementById("button")

function addingEventListener() {
    alert("I was clicked");
    input.addEventListener("click", addingEventListener)
}
//Binding a click event
