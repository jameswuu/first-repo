// Tasks
// Using JS and HTML, write a countdown timer with the ability to set 
// custom countdown duration, pause / resume the timer, and reset the timer
// Bonus: track and display previous results and the timestamp the record was made


// Initailize values
let originalHours
let originalMinutes;
let originalSeconds;
let currentHours;
let currentMintues;
let currentSeconds;
let previousRow;
let stopper;


// Reset button
const resetButton = document.querySelector("#reset");
resetButton.addEventListener('click', () => {
    clearInterval(stopper);
    originalHours = null;
    originalMinutes = null;
    originalSeconds = null;
    currentHours = null;
    currentMintues = null;
    currentSeconds = null;
    document.getElementById('display').textContent = "00:00:00";
    
    // Reset the start pause button
    stopper = null;
})


// Start and Pause button
const startPauseButton = document.querySelector("#start");
startPauseButton.addEventListener('click', () => {
    // To check whether the counter is null
    if (!originalSeconds && !originalMinutes && !originalHours) {
        // Assign values
        originalHours = parseInt(document.querySelector("#hours").value)
        originalMinutes = parseInt(document.querySelector("#minutes").value);
        originalSeconds = parseInt(document.querySelector("#seconds").value);

        // Append to the records
        const table = document.getElementById("timestamp");
        const newRow = document.createElement("tr");
        const newData = document.createElement("td");
        newData.innerHTML = display(originalHours, originalMinutes, originalSeconds);
        newRow.appendChild(newData);

        // Append at the top of the table
        if (!previousRow) {
            console.log("Append child Ran")
            table.appendChild(newRow);
        } else {
            console.log("Insert Before Ran")
            table.insertBefore(newRow, previousRow);
        }

        // Update the previous row
        previousRow = newRow;

        currentHours = originalHours;
        currentMintues = originalMinutes;
        currentSeconds = originalSeconds;

        // Debugging Line
        console.log(`Hours = ${currentHours}; Minutes = ${currentMintues}; Seconds = ${currentSeconds}`)

        // display counter 
        let counter = display(currentHours, currentMintues, currentSeconds);
        document.querySelector("#display").textContent = counter;
    } 

    if (stopper) {
        clearInterval(stopper);
        stopper = null;
    } else {
        stopper = setInterval(counter, 1000); // Start the countdown
    }
});


// Counting function
function counter(){
    // Check for minutes
    if (currentSeconds === 0) {
        if (currentMintues === 0) {
            if (currentHours === 0) {
                // Times up
                console.log("0: Code ran") // Debugging Line
                clearInterval(stopper);
                document.querySelector("#display").textContent = "Time!";
                return;
            } else {
                console.log("1: Code ran") // Debugging Line
                currentHours--;
                currentMintues = 59;
                currentSeconds = 60;
            }
        } else {
            console.log("2: Code ran") // Debugging Line
            currentMintues--;
            currentSeconds = 60;
        }
    }

    // Update seconds
    currentSeconds--;

    // display counter 
    let counter = display(currentHours, currentMintues, currentSeconds);
    document.querySelector("#display").textContent = counter;
}


// displaying function
function display(hours, minutes, seconds) {
    // Check for hours
    let display;
    if (hours < 10) {
        display = "0" + hours + ":";
    } else {
        display = hours + ":"
    }

    // check for minutes
    if (minutes < 10) {
        display = display + "0" + minutes + ":";
    } else {
        display = display + minutes + ":";

    }

    // check for seconds
    if (seconds < 10) {
        display = display + "0" + seconds;
    } else {
        display = display  + seconds;
    }

    return display;
}