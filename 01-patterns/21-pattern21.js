// Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:
// *****
// *   *
// *   *
// *   *
// *****
// Print the pattern in the function given to you.

function pattern21(n) {
  for (let i = 1; i <= n; i++) {
    if (i === 1 || i === n) console.log("*".repeat(n));
    else console.log("*" + " ".repeat(n - 2) + "*");
  }
}

pattern21(50);
