// Initilize a function
function alertFunction() {
    alert("Hello there!")
}

// Create an element to select button
const btn = document.querySelector("#btn");

// Call function
btn.addEventListener("click", alertFunction);