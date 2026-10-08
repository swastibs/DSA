// Return the Largest Digit in a Number
// You are given an integer n. Return the largest digit present in the number.

// Example 1:
// Input: n = 25
// Output: 5
// Explanation: The largest digit in 25 is 5.

// Example 2:
// Input: n = 99
// Output: 9
// Explanation: The largest digit in 99 is 9.

// =====================================================================

// function largestDigit(n) {
//   n = Math.abs(n);
//   if (n === 0) return 0;

//   let max = 0;
//   while (n > 0) {
//     const last = n % 10;
//     if (last > max) max = last;
//     n = Math.floor(n / 10);
//   }
//   return max;
// }

// =====================================================================

function largestDigit(n) {
  return Math.max(...String(n).split(""));
}

console.log(largestDigit(87));
