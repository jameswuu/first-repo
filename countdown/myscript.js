// Tasks
// Using JS and HTML, write a countdown timer with the ability to set 
// custom countdown duration, pause / resume the timer, and reset the timer
// Bonus: track and display previous results and the timestamp the record was made


// Initailize values
let originalMinutes;
let originalSeconds;
let currentMintues;
let currentSeconds;
let stopper;

function counter(){
    // Update display
    currentSeconds--;

    // Check for minutes
    if (currentSeconds === 0) { 
        if (currentMintues !== 0) {
            currentMintues--;
            currentSeconds = 59;
        } else {
            // Times up
            clearInterval(stopper);
            document.getElementById('display').textContent = "Time!";
        }
    }

    if (currentSeconds < 10) {
        document.getElementById('display').textContent = currentMintues + ":0" + currentSeconds ;
    } else {
        document.getElementById('display').textContent = currentMintues + ":" + currentSeconds ;
    }
}

// Reset button
const resetButton = document.querySelector("#reset");
resetButton.addEventListener('click', () => {
    clearInterval(stopper);
    originalMinutes = null;
    originalSeconds = null;
    currentMintues = null;
    currentSeconds = null;
    document.getElementById('display').textContent = "counter";
    
    // Reset the start pause button
    stopper = null;
})

// Start and Pause button
const startPauseButton = document.querySelector("#start");
startPauseButton.addEventListener('click', () => {
    // To check whether the counter is null
    if (!originalSeconds && !originalMinutes) {
        // Assign values
        originalMinutes = document.querySelector("#minutes").value;
        originalSeconds = document.querySelector("#seconds").value;
        currentMintues = originalMinutes;
        currentSeconds = originalSeconds;

        // Set the counter
        if (currentSeconds < 10) {
            document.getElementById('display').textContent = currentMintues + ":0" + currentSeconds ;
        } else {
            document.getElementById('display').textContent = currentMintues + ":" + currentSeconds ;
        } 
        // Dubugging Line
        console.log(`The minutes is ${originalMinutes} and the second is ${originalSeconds}`);
    } 
    if (stopper) {
        clearInterval(stopper);
        stopper = null;
    } else {
        stopper = setInterval(counter, 1000); // Start the countdown
    }
});