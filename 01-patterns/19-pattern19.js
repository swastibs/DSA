// Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:
// **********
// ****  ****
// ***    ***
// **      **
// *        *
// *        *
// **      **
// ***    ***
// ****  ****
// **********
// Print the pattern in the function given to you.

function pattern19(n) {
  for (let i = 0; i < n; i++) {
    process.stdout.write(
      "*".repeat(n - i) + " ".repeat(i * 2) + "*".repeat(n - i),
    );
    console.log();
  }
  for (let i = n - 1; i >= 0; i--) {
    process.stdout.write(
      "*".repeat(n - i) + " ".repeat(i * 2) + "*".repeat(n - i),
    );
    console.log();
  }
}

pattern19(5);
