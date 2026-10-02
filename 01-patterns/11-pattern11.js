// Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:
// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1
// Print the pattern in the function given to you.

// Pseudocode:
// READ N
// FOR ROW FROM 1 TO N
//     FOR COLUMN FROM 1 TO ROW
//         IF ROW + COLUMN is even
//             DISPLAY 1 WITHOUT A NEW LINE
//         ELSE
//             DISPLAY 0 WITHOUT A NEW LINE
//         END IF
//     END FOR
//     DISPLAY A NEW LINE
// END FOR

function pattern11(n) {
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      if ((i + j) % 2 === 0) process.stdout.write("1 ");
      else process.stdout.write("0 ");
    }
    console.log();
  }
}

pattern11(5);
