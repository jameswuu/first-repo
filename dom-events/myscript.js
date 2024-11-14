// Initilize a function
function alertFunction() {
    alert("Hello there!")
}

// Create element to select button
const buttons = document.querySelectorAll("button");


// .forEach method to iterate through each button
buttons.forEach((button)=> {
    // Add eventListenser
    button.addEventListener("click", () => {
        alert(`This Id for the button is ${button.id}`);
    })
})

