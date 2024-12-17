// Tasks
// Using JS and HTML, write a countdown timer with the ability to set 
// custom countdown duration, pause / resume the timer, and reset the timer
// Bonus: track and display previous results and the timestamp the record was made
const originalTime = document.getElementById('counter').textContent;
let currentTime = originalTime;
let stopper;

function counter(){
    // Update display
    currentTime--;
    document.getElementById('counter').textContent = currentTime;

    // Times up
    if (currentTime < 0) {        
        clearInterval(stopper);
        document.getElementById('counter').textContent = "Time!";
    }
}

// Reset button
const resetButton = document.querySelector("#reset");
resetButton.addEventListener('click', () => {
    clearInterval(stopper);
    currentTime = originalTime;
    document.getElementById('counter').textContent = currentTime;
})

// Start and Pause Button
const startPauseButton = document.querySelector("#start");
startPauseButton.addEventListener('click', () => {
    if (stopper) {
        clearInterval(stopper);
        stopper = null;
    } else {
        stopper = setInterval(counter, 1000); // Start the countdown
    }
});