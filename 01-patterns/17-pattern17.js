// Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:
//     A
//    ABA
//   ABCBA
//  ABCDCBA
// ABCDEDCBA
// Print the pattern in the function given to you.

function pattern17(n) {
  for (let i = 1; i <= n; i++) {
    process.stdout.write(" ".repeat(n - i));
    for (let j = 1; j <= i; j++) {
      let char = 64 + j;
      process.stdout.write(String.fromCharCode(char));
    }
    for (let j = i - 1; j >= 1; j--) {
      let char = 64 + j;
      process.stdout.write(String.fromCharCode(char));
    }

    process.stdout.write("\n");
  }
}

pattern17(5);
