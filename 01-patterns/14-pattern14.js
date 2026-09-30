// Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:
// A
// AB
// ABC
// ABCD
// ABCDE
// Print the pattern in the function given to you.

function pattern14(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(String.fromCharCode(64 + j) + " ");
    }
    process.stdout.write("\n");
  }
}

pattern14(5);
