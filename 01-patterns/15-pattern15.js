// Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:
// ABCDE
// ABCD
// ABC
// AB
// A
// Print the pattern in the function given to you.

// Pseudocode:
// READ N
// FOR ROW FROM N DOWN TO 1
//     FOR LETTER_NUMBER FROM 1 TO ROW
//         DISPLAY the letter at LETTER_NUMBER in the alphabet
//     END FOR
//     DISPLAY A NEW LINE
// END FOR

function pattern15(n) {
  for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(String.fromCharCode(64 + j) + " ");
    }
    process.stdout.write("\n");
  }
}

pattern15(5);
