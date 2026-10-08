// Count number of odd digits in a number
// You are given an integer n. You need to return the number of odd digits present in the number.
// The number will have no leading zeroes, except when the number is 0 itself.

// Example 1:
// Input: n = 5
// Output: 1
// Explanation: 5 is an odd digit.

// Example 2:
// Input: n = 25
// Output: 1
// Explanation: The only odd digit in 25 is 5.

// =====================================================================

// function countOddDigit(n) {
//   let count = 0;

//   while (n > 0) {
//     if ((n % 10) % 2 !== 0) count++;
//     n = Math.floor(n / 10);
//   }

//   return count;
// }

// =====================================================================

function countOddDigit(n) {
  return Array.from(String(n)).filter((e) => e % 2 !== 0).length;
}

console.log(countOddDigit(123456));
