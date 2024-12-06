function checkIfEven(number) {
  if (number % 2 === 0) {
    return true; // Correct: Returns true if the number is even
  } else {
    return false; // Correct: Returns false if the number is odd
  }
}

function checkIfOdd(number) {
  if (number % 2 != 0) { // Bug: Incorrect operator, should be '!=='
    return true; 
  } else {
    return false;
  }
}

console.log(checkIfEven(4)); // Output: true
console.log(checkIfOdd(7)); // Output: false (Incorrect due to the bug)