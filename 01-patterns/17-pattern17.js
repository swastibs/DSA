// Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:
//     A
//    ABA
//   ABCBA
//  ABCDCBA
// ABCDEDCBA
// Print the pattern in the function given to you.

// Pseudocode:
// READ N
// FOR ROW FROM 1 TO N
//     DISPLAY N - ROW spaces without a new line
//     FOR LETTER_NUMBER FROM 1 TO ROW
//         DISPLAY the letter at LETTER_NUMBER without a new line
//     END FOR
//     FOR LETTER_NUMBER FROM ROW - 1 DOWN TO 1
//         DISPLAY the letter at LETTER_NUMBER without a new line
//     END FOR
//     DISPLAY A NEW LINE
// END FOR

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
