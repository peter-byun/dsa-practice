## What’s Big O Notation?

Big O Notation is a mathematical way to describe the **upper bound** of an algorithm’s performance **as the input size grows.**
It doesn’t measure exact execution time or memory usage, but rather provides a high-level view of how the algorithm scales.

The key idea: **Big O shows the worst-case growth rate**, meaning how much work (time or space) the algorithm might need at most as inputs become larger.

This makes it useful for:
• Comparing different algorithms or implementations for the same problem.
• Understanding how an algorithm behaves as data size increases.
• Communicating efficiency without depending on hardware or coding details.

## Simplifying Big O

When analyzing complexity, **we only care about the dominant term** as n grows very large:

• Drop constants  
O(3n) → O(n)

• Drop smaller terms  
O(n² + n) → O(n²)

• Keep the fastest-growing part  
O(n³ + n² + 100n) → O(n³)

## Examples of Time Complexity

Time complexity describes **how the number of operations grows relative to the input size n**.

O(1) — Constant Time

```js
function getFirstElement(arr) {
  return arr[0]; // Always one operation
}
```

O(n) — Linear Time

```js
function printAll(arr) {
  for (let item of arr) {
    console.log(item); // Runs n times
  }
}
```

O(n²) — Quadratic Time

```js
function printPairs(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      console.log(arr[i], arr[j]); // Runs n * n times
    }
  }
}
```

O(log n) — Logarithmic Time

```js
function binarySearch(arr, target) {
  let left = 0,
    right = arr.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
```

O(n log n) — Linearithmic Time

```js
function sortArray(arr) {
  return arr.sort((a, b) => a - b);
  // JS’s built-in sort is usually O(n log n)
}
```

## Examples of Space Complexity

Space complexity describes how much extra memory an algorithm uses as input size grows.

O(1) — Constant Space

```js
function sumArray(arr) {
  let total = 0; // Just one variable
  for (let num of arr) {
    total += num;
  }
  return total;
}
```

O(n) — Linear Space

```js
function copyArray(arr) {
  let newArr = []; // Grows with input size
  for (let num of arr) {
    newArr.push(num);
  }
  return newArr;
}
```

O(n²) — Quadratic Space

```js
function createMatrix(n) {
  // Creates an n x n matrix
  let matrix = [];
  for (let i = 0; i < n; i++) {
    matrix.push(new Array(n).fill(0));
  }
  return matrix;
}
```
