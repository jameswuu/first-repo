// Tasks
// Using JS and HTML, write a countdown timer with the ability to set 
// custom countdown duration, pause / resume the timer, and reset the timer
// Bonus: track and display previous results and the timestamp the record was made


// Initailize values
let originalTime;
let currentTime;
let stopper;

function counter(){
    // Update display
    currentTime--;
    document.getElementById('display').textContent = currentTime;

    // Times up
    if (currentTime === 0) {        
        clearInterval(stopper);
        document.getElementById('display').textContent = "Time!";
    }
}

// Reset button
const resetButton = document.querySelector("#reset");
resetButton.addEventListener('click', () => {
    clearInterval(stopper);
    originalTime = null;
    currentTime = null;
    document.getElementById('display').textContent = currentTime;
    
    // Reset the start pause button
    stopper = null;
})

// Start and Pause button
const startPauseButton = document.querySelector("#start");
startPauseButton.addEventListener('click', () => {
    // To check whether hte counter is null
    if (!originalTime) {
        // Assign values
        originalTime = document.querySelector("#counter").value;
        currentTime = originalTime;

        // Set the counter
        document.getElementById('display').textContent = currentTime;
 
        // Dubugging Line
        console.log(`Submit button clicked and the input is ${originalTime}`);
    } 
    if (stopper) {
        clearInterval(stopper);
        stopper = null;
    } else {
        stopper = setInterval(counter, 1000); // Start the countdown
    }
});