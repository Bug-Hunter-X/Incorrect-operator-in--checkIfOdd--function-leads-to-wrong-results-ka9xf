function checkIfEven(number) {
  if (number % 2 === 0) {
    return true; 
  } else {
    return false; 
  }
}

function checkIfOdd(number) {
  if (number % 2 !== 0) { // Solution: Replaced '!=' with '!==' 
    return true; 
  } else {
    return false;
  }
}

console.log(checkIfEven(4)); // Output: true
console.log(checkIfOdd(7)); // Output: true (Correct)
console.log(checkIfOdd(0)); //Output: false (Correct) 
console.log(checkIfOdd(5)); //Output: true (Correct) 