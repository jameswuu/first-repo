// Create variables hold references to these element
const ul = document.querySelector("#lists");
const item = document.querySelector("#item");
const btn = document.querySelector("#btn");

// Event listener when button is clicked
btn.addEventListener("click", () => {
    // Get the value inside the input
    let current_item = item.value;
    console.log(`Current item contains ${current_item}`)

    // Empty the input box
    item.value = '';

    // Create new elements
    let li = document.createElement("li");
    let span = document.createElement("span");
    let button = document.createElement("button");

    // Initalize the value
    span.textContent = current_item;
    button.textContent = "Delete";
    console.log(`Span contains ${span}`)
    console.log(`Button contains ${button}`)

    // Append span and button as the child of list
    li.appendChild(span);
    li.appendChild(button);

    // Append list to the ul
    ul.appendChild(li);
})
