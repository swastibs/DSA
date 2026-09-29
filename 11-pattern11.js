// Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:
// 1
// 0 1
// 1 0 1
// 0 1 0 1
// 1 0 1 0 1
// Print the pattern in the function given to you.

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
