// Quick sort with clearer variable names
function quickSort(arr: number[], left = 0, right = arr.length - 1): number[] {
  if (left < right) {
    const pivotIndex = partition(arr, left, right);

    // Recurse on left side
    quickSort(arr, left, pivotIndex - 1);

    // Recurse on right side
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

function partition(arr: number[], left: number, right: number): number {
  const pivot = arr[right]; // pick last element as pivot
  let i = left; // first index where we can put a smaller element

  for (let j = left; j < right; j++) {
    if (arr[j] < pivot) {
      [arr[i], arr[j]] = [arr[j], arr[i]]; // swap smaller element forward
      i++;
    }
  }

  // Place pivot into its correct spot
  [arr[i], arr[right]] = [arr[right], arr[i]];
  return i; // pivot index
}
