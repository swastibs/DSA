// Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:
//     *
//    ***
//   *****
//  *******
// *********
// Print the pattern in the function given to you.

// Pseudocode:
// READ N
// FOR ROW FROM 1 TO N
//     DISPLAY N - ROW spaces without a new line
//     DISPLAY 2 * ROW - 1 stars
// END FOR

function pattern7(n) {
  for (let i = 0; i < n; i++) {
    console.log(" ".repeat(n - i - 1) + "*".repeat(2 * i + 1));
  }
}

pattern7(5);
