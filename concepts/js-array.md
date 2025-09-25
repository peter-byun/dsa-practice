## **1. Access by Index**

```
const arr = [10, 20, 30];
console.log(arr[1]); // 20
```

- **Time Complexity**: **O(1)** (constant time)
- **Why**: Arrays store elements in contiguous memory (when “packed”). Accessing index i is a direct offset lookup.
- ⚠️ If the array is “sparse” (missing indexes, e.g. arr[1000] = 5), V8 may switch to “dictionary mode,” making access slower.

---

## **2. Update by Index**

```
arr[1] = 99;
```

- **Time Complexity**: **O(1)**
- Same reason as access: direct memory offset.
- Still fast unless array is sparse/deoptimized.

---

## **3. Push (Add at End)**

```
arr.push(40);
```

- **Average Time Complexity**: **O(1)**
- JS engines over-allocate memory at the end, so appending is usually constant time.
- Rare case: when capacity is exceeded → array is resized (costlier but amortized away).

---

## **4. Pop (Remove from End)**

```
arr.pop();
```

- **Time Complexity**: **O(1)**
- Removes the last element, no shifting needed.

---

## **5. Shift (Remove from Start)**

```
arr.shift();
```

- **Time Complexity**: **O(n)**
- Because **all remaining elements are shifted down by 1** (arr[1] → arr[0], etc.).
- Bad for large arrays if done repeatedly.

---

## **6. Unshift (Add to Start)**

```
arr.unshift(5);
```

- **Time Complexity**: **O(n)**
- Same reason as shift: all existing elements must be moved one index higher.

---

## **7. Insert/Delete in Middle (splice)**

```
arr.splice(2, 0, 15); // insert at index 2
arr.splice(2, 1);     // delete at index 2
```

- **Time Complexity**: **O(n)**
- Elements after the insertion/deletion point must be shifted.

---

## **8. Search by Value (linear scan)**

```
arr.includes(99);
arr.indexOf(20);
```

- **Time Complexity**: **O(n)**
- Must check each element until found (or end).

---

## **9. Iteration**

```
for (let x of arr) { ... }
arr.forEach(x => ...);
```

- **Time Complexity**: **O(n)**
- Every element is visited once.

---

## **10. Slice (Copy a Range)**

```
arr.slice(2, 5);
```

- **Time Complexity**: **O(k)**, where k is the size of the slice.
- It copies elements into a new array.

---

## **11. Concat (Merge Arrays)**

```
const newArr = arr1.concat(arr2);
```

- **Time Complexity**: **O(n + m)** (length of both arrays).
- All elements must be copied into the new array.

---

## **12. Sort**

```
arr.sort((a, b) => a - b);
```

- **Time Complexity**: **O(n log n)** (on average).
- V8 uses an optimized quicksort/timsort hybrid.

---

## **13. Map / Filter / Reduce**

```
arr.map(x => x * 2);
arr.filter(x => x > 10);
arr.reduce((a, b) => a + b, 0);
```

- **Time Complexity**: **O(n)**
- They iterate through the whole array once.
