// Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:
// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *
// Print the pattern in the function given to you.

function pattern10(n) {
  for (let i = 1; i <= n; i++) {
    console.log("*".repeat(i));
  }
  for (let i = 1; i <= n; i++) {
    console.log("*".repeat(n - i));
  }
}

pattern10(5);
