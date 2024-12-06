# Incorrect Operator in checkIfOdd Function

This repository demonstrates a common error in JavaScript: using the incorrect comparison operator in a conditional statement. The `checkIfOdd` function mistakenly uses the loose inequality operator (`!=`) instead of the strict inequality operator (`!==`). This can lead to unexpected behavior and incorrect results when comparing numbers and boolean values.

## Bug Description

The `checkIfOdd` function intends to return true for odd numbers and false for even numbers. However, due to the use of `!=`, it does not correctly identify odd numbers. The loose inequality operator does type coercion which may yield to unexpected results, as it may lead to false positives in some scenarios. The correct way to handle such checks is using the strict inequality operator which does not do any type coercion. 

## Bug Solution

The solution is to replace the loose inequality operator (`!=`) with the strict inequality operator (`!==`). This will ensure that the function correctly identifies odd numbers.