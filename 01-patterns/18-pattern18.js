// Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:
// E
// D E
// C D E
// B C D E
// A B C D E
// Print the pattern in the function given to you.

// Pseudocode:
// READ N
// FOR ROW FROM 1 TO N
//     SET START_LETTER_NUMBER TO N - ROW + 1
//     FOR OFFSET FROM 0 TO ROW - 1
//         DISPLAY the letter at START_LETTER_NUMBER + OFFSET
//     END FOR
//     DISPLAY A NEW LINE
// END FOR

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
