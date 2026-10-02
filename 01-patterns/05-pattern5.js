// Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:
// *****
// ****
// ***
// **
// *
// Print the pattern in the function given to you.

// Pseudocode:
// READ N
// FOR ROW FROM N DOWN TO 1
//     DISPLAY "*" repeated ROW times
// END FOR

function pattern5(n) {
  for (let i = 0; i < n; i++) {
    console.log("*".repeat(n - i));
  }
}

pattern5(5);
