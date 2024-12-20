// Using JS and HTML, write a countdown timer with the ability to set 
// custom countdown duration, pause / resume the timer, and reset the timer
// Bonus: track and display previous results and the timestamp the record was made


// Initailize values
let originalHours;
let originalMinutes;
let originalSeconds;
let currentHours;
let currentMintues;
let currentSeconds;
let currentMilliseconds;
let previousRow;
let stopper;


// Start and Pause button
const startPauseButton = document.querySelector("#start");
startPauseButton.addEventListener('click', () => {
    // To check whether the counter is null
    if (!originalSeconds || !originalMinutes || !originalHours) {
        // Assign values
        originalHours = parseInt(document.querySelector("#hours").value)
        originalMinutes = parseInt(document.querySelector("#minutes").value);
        originalSeconds = parseInt(document.querySelector("#seconds").value);
        
        // Validate the inputs
        if (isNaN(originalHours) || isNaN(originalMinutes) || isNaN(originalSeconds)) {
            alert("Please fill in all the boxes with valid numbers.");
            clear();
            return;
        } else if (originalHours > 99 || originalMinutes > 99 || originalSeconds > 99) {
            alert("Please enter a number smaller than 99.");
            clear();
            return;
        } else if (originalHours < 0 || originalMinutes < 0 || originalSeconds < 0) {
            alert("Please enter a number greater than 0.");
            clear();
            return;
        }

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
        currentMilliseconds = 0;

        // Debugging Line
        console.log(`Hours = ${currentHours}; Minutes = ${currentMintues}; Seconds = ${currentSeconds}; MilliSeconds = ${currentMilliseconds}`)

        // Call display function 
        display(currentHours, currentMintues, currentSeconds);
    } 

    if (stopper) {
        clearInterval(stopper);
        stopper = null;
        document.querySelector("#start").textContent = "Start";
        document.querySelector("#start").style.background = "rgba(47, 255, 75, 0.8)";
    } else {
        stopper = setInterval(counter, 10); // Start the countdown
        document.querySelector("#start").textContent = "Pause";
        document.querySelector("#start").style.background = "rgba(255, 31, 31, 0.8)";
    }
});



// Reset button
const resetButton = document.querySelector("#reset")
resetButton.addEventListener("click", () => {
    console.log("Reet button clicked") // debugging line 
     if (currentHours || currentMintues || currentSeconds) {
        clearInterval(stopper);
        stopper = null;
        document.querySelector("#start").textContent = "Start";
        document.querySelector("#start").style.background = "rgba(47, 255, 75, 0.8)";
        currentHours = originalHours;
        currentMintues = originalMinutes;
        currentSeconds = originalSeconds;
        currentMilliseconds = 0;
    
        // Call display function 
        display(currentHours, currentMintues, currentSeconds);
     } else {
        return;
     }
})

    

// Clear button
const clearButton = document.querySelector("#clear");
clearButton.addEventListener('click', () => {
    clear();
})



// Counting function
function counter(){
    if (currentMilliseconds === 0) {
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
                    currentSeconds = 59;
                    currentMilliseconds = 100;
                }
            } else {
                console.log("2: Code ran") // Debugging Line
                currentMintues--;
                currentSeconds = 59;
                currentMilliseconds = 100;
            }
        } else {
            currentSeconds--;
            currentMilliseconds = 100;
        }
    }    

    // Update milli-seconds
    currentMilliseconds = currentMilliseconds - 1;

    // Call display function 
     display(currentHours, currentMintues, currentSeconds);
}



// Displaying function
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
        display = display + seconds;
    }

    // Update the counter
    document.querySelector("#display").textContent = display;
    if (currentMilliseconds < 10) {
        document.querySelector("#milli-seconds").textContent = "0" + currentMilliseconds;
    } else {
        document.querySelector("#milli-seconds").textContent = currentMilliseconds;
    }
}



// Clear function
function clear(){
    clearInterval(stopper);
    originalHours = null;
    originalMinutes = null;
    originalSeconds = null;
    currentHours = null;
    currentMintues = null;
    currentSeconds = null;
    currentMilliseconds = null;
    stopper = null;
    document.getElementById('hours').value = "";
    document.getElementById('minutes').value = "";
    document.getElementById('seconds').value = "";
    document.querySelector("#start").textContent = "Start";
    document.querySelector("#start").style.background = "rgba(47, 255, 75, 0.8)";
    document.getElementById('display').textContent = "00:00:00";
    document.getElementById('milli-seconds').textContent = "00";
    return;
}