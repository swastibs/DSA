// Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:
// *****
// *   *
// *   *
// *   *
// *****
// Print the pattern in the function given to you.

// Pseudocode:
// READ N
// FOR ROW FROM 1 TO N
//     IF ROW is 1 OR ROW is N
//         DISPLAY N stars
//     ELSE
//         DISPLAY 1 star, then N - 2 spaces, then 1 star
//     END IF
// END FOR

function pattern21(n) {
  for (let i = 1; i <= n; i++) {
    if (i === 1 || i === n) console.log("*".repeat(n));
    else console.log("*" + " ".repeat(n - 2) + "*");
  }
}

pattern21(50);
