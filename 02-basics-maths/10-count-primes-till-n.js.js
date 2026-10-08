// Count of Prime Numbers till N
// You are given an integer n. You need to find out the number of prime numbers in the range [1, n] (inclusive). Return the number of prime numbers in the range.

// A prime number is a number which has no divisors except, 1 and itself.

// Example 1:
// Input: n = 6
// Output: 3
// Explanation: Prime numbers in the range [1, 6] are 2, 3, 5.

// Example 2:
// Input: n = 10
// Output: 4
// Explanation: Prime numbers in the range [1, 10] are 2, 3, 5, 7.

function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.floor(Math.sqrt(n)); i++) {
    if (n % i === 0) return false;
  }

  return true;
}

function primeUptoN(n) {
  let count = 0;
  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) count++;
  }

  return count;
}

console.log(primeUptoN(6));
