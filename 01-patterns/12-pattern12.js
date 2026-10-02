// Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:
// 1        1
// 12      21
// 123    321
// 1234  4321
// 1234554321
// Print the pattern in the function given to you.

// Pseudocode:
// READ N
// FOR ROW FROM 1 TO N
//     FOR NUMBER FROM 1 TO ROW
//         DISPLAY NUMBER WITHOUT A NEW LINE
//     END FOR
//     DISPLAY 2 * (N - ROW) spaces without a new line
//     FOR NUMBER FROM ROW DOWN TO 1
//         DISPLAY NUMBER WITHOUT A NEW LINE
//     END FOR
//     DISPLAY A NEW LINE
// END FOR

function pattern12(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      process.stdout.write(String(j));
    }
    for (let j = 1; j <= 2 * (n - i); j++) {
      process.stdout.write(" ");
    }
    for (let j = i; j >= 1; j--) {
      process.stdout.write(String(j));
    }
    console.log();
  }
}

pattern12(5);
