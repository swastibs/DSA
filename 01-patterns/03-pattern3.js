// Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:
// 1
// 12
// 123
// 1234
// 12345
// Print the pattern in the function given to you.

// Pseudocode:
// READ N
// FOR ROW FROM 1 TO N
//     FOR NUMBER FROM 1 TO ROW
//         DISPLAY NUMBER WITHOUT A NEW LINE
//     END FOR
//     DISPLAY A NEW LINE
// END FOR

function pattern3(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(String(j));
    }
    console.log();
  }
}

pattern3(5);
