// Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:
// E
// D E
// C D E
// B C D E
// A B C D E
// Print the pattern in the function given to you.

function pattern18(n) {
  for (let i = 1; i <= n; i++) {
    let char = 65 + n - i;
    for (let j = 1; j <= i; j++) {
      process.stdout.write(String.fromCharCode(char) + " ");
      char++;
    }
    process.stdout.write(String("\n"));
  }
}

pattern18(5);
