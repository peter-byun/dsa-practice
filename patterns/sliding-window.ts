// Find the **maximum sum of `k` consecutive elements** in an array.
// Example:
// `[2, 1, 5, 1, 3, 2]`, with `k = 3` → maximum sum is `9` (`5+1+3`).

function maxSubarraySumSlidingWindow(arr: number[], k: number) {
  if (arr.length < k) return null;

  // initial window sum
  let windowSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += arr[i];
  }

  let maxSum = windowSum;

  // slide the window
  for (let end = k; end < arr.length; end++) {
    windowSum += arr[end] - arr[end - k]; // add new, remove old
    maxSum = Math.max(maxSum, windowSum);
  }

  return maxSum;
}

console.log(maxSubarraySumSlidingWindow([2, 1, 5, 1, 3, 2], 3));
// -> 9

// Naive Implementation (Brute Force)

function maxSubarraySumNaive(arr: number[], k: number) {
  if (arr.length < k) return null;

  let maxSum = -Infinity;

  for (let i = 0; i <= arr.length - k; i++) {
    let sum = 0;
    for (let j = i; j < i + k; j++) {
      sum += arr[j];
    }
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
}

console.log(maxSubarraySumNaive([2, 1, 5, 1, 3, 2], 3));
// -> 9
