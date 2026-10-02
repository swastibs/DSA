// Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:
// *
// **
// ***
// ****
// *****
// Print the pattern in the function given to you.

// Pseudocode:
// READ N
// FOR ROW FROM 1 TO N
//     DISPLAY "*" repeated ROW times
// END FOR


function pattern2(n) {
  for (let i = 1; i <= n; i++) {
    console.log("*".repeat(i));
  }
}

pattern2(5);
