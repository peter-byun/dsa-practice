// Time complexity: O(log n)
// Space complexity: O(1)
// Limitation: The array must be sorted.

function binarySearch(arr: number[], target: number): number | null {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);

    if (arr[mid] === target) {
      return mid; // Target found
    } else if (arr[mid] < target) {
      left = mid + 1; // Search in the right half
    } else {
      right = mid - 1; // Search in the left half
    }
  }

  return null; // Target not found
}
