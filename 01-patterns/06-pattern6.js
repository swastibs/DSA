// Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:
// 12345
// 1234
// 123
// 12
// 1
// Print the pattern in the function given to you.

// Pseudocode:
// READ N
// FOR ROW_LENGTH FROM N DOWN TO 1
//     FOR NUMBER FROM 1 TO ROW_LENGTH
//         DISPLAY NUMBER WITHOUT A NEW LINE
//     END FOR
//     DISPLAY A NEW LINE
// END FOR

function pattern6(n) {
  for (let i = n; i >= 1; i--) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(String(j));
    }
    console.log();
  }
}

pattern6(5);
