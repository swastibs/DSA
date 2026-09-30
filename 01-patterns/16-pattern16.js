// Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:
// A
// BB
// CCC
// DDDD
// EEEEE
// Print the pattern in the function given to you.

function pattern16(n) {
  for (let i = 1; i <= n; i++) {
    let char = 64 + i;
    for (let j = 1; j <= i; j++) {
      process.stdout.write(String.fromCharCode(char) + " ");
    }
    process.stdout.write("\n");
  }
}

pattern16(5);
