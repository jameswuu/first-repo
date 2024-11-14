// My JS file

// Select container element
const container = document.querySelector("#container");


// Example 0:
// Add element to container 
const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";
// Append content to container 
container.appendChild(content);


// Example 1:
// Add <p> element
const paragraph = document.createElement("p");
paragraph.style.color = "red";
paragraph.textContent = "Hey I am red";
// Append content to container 
container.appendChild(paragraph);

