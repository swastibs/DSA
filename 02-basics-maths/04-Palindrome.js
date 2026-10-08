// Palindrome Number
// You are given an integer n. You need to check whether the number is a palindrome number or not. Return true if it's a palindrome number, otherwise return false.
// A palindrome number is a number which reads the same both left to right and right to left.
// Example 1:
// Input: n = 121
// Output: true
// Explanation: When read from left to right : 121.

// When read from right to left : 121.
// Example 2:
// Input: n = 123
// Output: false
// Explanation: When read from left to right : 123.
// When read from right to left : 321.

// =====================================================================

// function isPalindrome(n) {
//   const numArr = Array.from(String(n).split(""));

//   let start = 0;
//   let end = numArr.length - 1;

//   while (start <= end) {
//     if (numArr[start] !== numArr[end]) return false;
//     start++;
//     end--;
//   }

//   return true;
// }

// =====================================================================

// function isPalindrome(n) {
//   let rev = 0;
//   let temp = n;

//   while (n > 0) {
//     const lastDigit = n % 10;
//     rev = rev * 10 + lastDigit;
//     n = Math.floor(n / 10);
//   }

//   return rev === temp;
// }

// =====================================================================

function isPalindrome(n) {
  return String(n) === String(n).split("").reverse().join("");
}

console.log(isPalindrome(101));
