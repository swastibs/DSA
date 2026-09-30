// Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:

// *        *     8 =
// **      **     6 =
// ***    ***     4 =
// ****  ****     2 =
// **********     0 =
// ****  ****
// ***    ***
// **      **
// *        *
// Print the pattern in the function given to you.

function pattern19(n) {
  for (let i = 1; i <= n; i++) {
    process.stdout.write(
      "*".repeat(i) + " ".repeat(2 * (n - i)) + "*".repeat(i),
    );
    console.log();
  }
  for (let i = n - 1; i >= 1; i--) {
    process.stdout.write(
      "*".repeat(i) + " ".repeat(2 * (n - i)) + "*".repeat(i),
    );
    console.log();
  }
}

pattern19(5);
