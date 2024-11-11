// Write a function takes a number and returns number + 7
function add7(number) {
    let answer = (parseInt(number) + 7 );
    return answer;
}


// Write a function takes 2 numbers and reutres their product
function multiply(num1, num2) {
    let answer = (parseInt(num1) * parseInt(num2));
    return answer;
} 


// Write a function takes a string and returns with only the first letter capitalized
function capitalize(word) {
    // Handle empty string
    if (!word || typeof word !== 'string'){
        return 'Invalid Input';
    } else {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    }
}