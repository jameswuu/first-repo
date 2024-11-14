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


// Example 2:
// Add <h3> element
const header_3 = document.createElement("h3");
header_3.style.color = "blue";
header_3.textContent = "I am a blue h3";
// Append to the container
container.insertBefore(header_3, paragraph);


// Example 3:
// black border and pink bg 
const box = document.createElement("div");
box.style.border = "solid";
box.style.background = "pink";

// Create additional element: <h1> and <p>
const header_1 = document.createElement("h1");
header_1.textContent = "I'm in a div";
const reply = document.createElement("p");
reply.textContent = "ME TOO!"

// Append to box
box.appendChild(header_1);
box.appendChild(reply);

// Append box to container
container.appendChild(box);