function insertionSort(arr: number[]): number[] {
  // Outer loop: start from index 1 because the element at index 0 is trivially "sorted"
  for (let i = 1; i < arr.length; i++) {
    // Store the current value to insert later
    let current = arr[i];

    // Inner loop: shift elements that are greater than `current` one position to the right
    // Start checking from the previous index
    let j = i - 1;
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j]; // shift element to the right
      j--; // move one step left
    }
    // Insert the current value into the correct position, which is the remaining position after shifting
    arr[j + 1] = current;
  }

  // Return the sorted array
  return arr;
}
