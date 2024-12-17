// Tasks
// Using JS and HTML, write a countdown timer with the ability to set 
// custom countdown duration, pause / resume the timer, and reset the timer
// Bonus: track and display previous results and the timestamp the record was made

let time = document.getElementById('counter').textContent;

function counter(){
    // Print the current time
    console.log(`The time is ${time}`);

    // Update display
    document.getElementById('counter').textContent = time--;

    // Stop the timer 
    if (time === 0) {        
        clearInterval(stopper);
    }
}

// Run the counter every one second
const stopper = setInterval(counter, 1000);