// Given an integer n. You need to recreate the pattern given below for any value of N. Let's say for N = 5, the pattern should look like as below:
// 5 5 5 5 5 5 5 5 5
// 5 4 4 4 4 4 4 4 5
// 5 4 3 3 3 3 3 4 5
// 5 4 3 2 2 2 3 4 5
// 5 4 3 2 1 2 3 4 5
// 5 4 3 2 2 2 3 4 5
// 5 4 3 3 3 3 3 4 5
// 5 4 4 4 4 4 4 4 5
// 5 5 5 5 5 5 5 5 5
// Print the pattern in the function given to you.

function pattern22(n) {
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < i; j++) {
      process.stdout.write(String(n - j) + " ");
    }

    for (let j = i; j < n; j++) {
      process.stdout.write(String(n - i) + " ");
    }

    for (let j = n - 1; j > i; j--) {
      process.stdout.write(String(n - i) + " ");
    }

    for (let j = i - 1; j >= 0; j--) {
      process.stdout.write(String(n - j) + " ");
    }

    process.stdout.write("\n");
  }
  for (let i = n - 2; i >= 0; i--) {
    for (let j = 0; j < i; j++) {
      process.stdout.write(String(n - j) + " ");
    }

    for (let j = i; j < n; j++) {
      process.stdout.write(String(n - i) + " ");
    }

    for (let j = n - 1; j > i; j--) {
      process.stdout.write(String(n - i) + " ");
    }

    for (let j = i - 1; j >= 0; j--) {
      process.stdout.write(String(n - j) + " ");
    }

    process.stdout.write("\n");
  }
}

pattern22(8);
