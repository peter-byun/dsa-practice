// Problem: Given a sorted array, find if there exists a pair of numbers whose sum equals a given target.
function pairWithTargetSum(arr: number[], target: number) {
  let left = 0,
    right = arr.length - 1;

  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === target) {
      return [arr[left], arr[right]];
    } else if (sum > target) {
      right--;
    } else {
      left++;
    }
  }
  return null;
}

// Naive Approach: O(N^2) time complexity
function pairWithTargetSumNaive(arr: number[], target: number) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === target) {
        return [arr[i], arr[j]];
      }
    }
  }
  return null;
}
