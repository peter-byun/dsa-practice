# DSA Study Guide

Work top to bottom. Run tests per file: `npx vitest run path/file.test.ts`.

## 1. Foundations (read only) ✅

| File                                            | Test                                        | Goal                       |
| ----------------------------------------------- | ------------------------------------------- | -------------------------- |
| `concepts/big-o.md`                             | —                                           | Time/space vocabulary      |
| `concepts/js-array.md`, `concepts/js-object.md` | —                                           | Built-in costs             |
| `concepts/recursion.ts`                         | `npx vitest run concepts/recursion.test.ts` | Base case + trust the call |
| `patterns/divide-and-conquer.md`                | —                                           | Split → solve → merge      |

## 2. Linear structures ✅

```
Stack (LIFO) → Queue (FIFO) → Singly LL → Doubly LL → Hash table
```

| File                                   | Test                                                                          | Mental model                           |
| -------------------------------------- | ----------------------------------------------------------------------------- | -------------------------------------- |
| `data-structure/stack.ts`              | `npx vitest run data-structure/stack.test.ts`                                 | Plate stack: push top, pop top         |
| `data-structure/queue.ts`              | `npx vitest run data-structure/queue.test.ts`                                 | Line: enqueue back, dequeue front      |
| `data-structure/singly-linked-list/`   | `npx vitest run data-structure/singly-linked-list/singly-linked-list.test.ts` | Done — use as reference                |
| `data-structure/doubly-linked-list.ts` | `npx vitest run data-structure/doubly-linked-list.test.ts`                    | Nodes have `prev` + `next`             |
| `data-structure/hash-tables.ts`        | `npx vitest run data-structure/hash-tables.test.ts`                           | Key → index via hash; chain collisions |

## 3. Trees, heaps, graphs

```
BST (ordered) → Heap (array tree) → Priority queue (heap wrapper)
     → Adjacency list OR matrix → BFS/DFS
```

| File                                   | Test                                                       | Mental model                                           |
| -------------------------------------- | ---------------------------------------------------------- | ------------------------------------------------------ |
| `data-structure/binary-search-tree.ts` | `npx vitest run data-structure/binary-search-tree.test.ts` | Left < node < right; search O(log n) if balanced       |
| `data-structure/binary-heaps.ts`       | `npx vitest run data-structure/binary-heaps.test.ts`       | Complete binary tree in array; parent ≥ children (max) |
| `data-structure/priority-queue.ts`     | `npx vitest run data-structure/priority-queue.test.ts`     | Heap + enqueue with priority                           |
| `data-structure/adjacency-list.ts`     | `npx vitest run data-structure/adjacency-list.test.ts`     | Map vertex → neighbors; BFS = queue                    |
| `data-structure/adjacency-matrix.ts`   | `npx vitest run data-structure/adjacency-matrix.test.ts`   | 2D grid; DFS = stack/recursion                         |

## 4. Sorting (increasing difficulty)

| File                                      | Test                                                          | Idea                      | Typical time   |
| ----------------------------------------- | ------------------------------------------------------------- | ------------------------- | -------------- |
| `algorithm/bubble-sort.ts`                | `npx vitest run algorithm/bubble-sort.test.ts`                | Swap adjacent; early exit | O(n²)          |
| `algorithm/selection-sort.ts`             | `npx vitest run algorithm/selection-sort.test.ts`             | Min index per pass        | O(n²)          |
| `algorithm/insertion-sort.ts`             | `npx vitest run algorithm/insertion-sort.test.ts`             | Grow sorted prefix        | O(n²)          |
| `algorithm/merge-sort.ts`                 | `npx vitest run algorithm/merge-sort.test.ts`                 | Divide + merge two sorted | O(n log n)     |
| `algorithm/quick-sort.ts`                 | `npx vitest run algorithm/quick-sort.test.ts`                 | Partition around pivot    | O(n log n) avg |
| `algorithm/quick-sort-median-of-three.ts` | `npx vitest run algorithm/quick-sort-median-of-three.test.ts` | Better pivot choice       | same           |
| `algorithm/radix-sort.ts`                 | `npx vitest run algorithm/radix-sort.test.ts`                 | Digit buckets             | O(nk)          |

## 5. Patterns (interview)

| File                            | Test                                                | When to use            |
| ------------------------------- | --------------------------------------------------- | ---------------------- |
| `patterns/two-pointers.ts`      | `npx vitest run patterns/two-pointers.test.ts`      | Sorted array, pair sum |
| `patterns/sliding-window.ts`    | `npx vitest run patterns/sliding-window.test.ts`    | Fixed-size subarray    |
| `patterns/frequency-counter.ts` | `npx vitest run patterns/frequency-counter.test.ts` | Anagrams, same chars   |
| `patterns/binary-search.ts`     | `npx vitest run patterns/binary-search.test.ts`     | Sorted lookup          |

## 6. Strings

| File                        | Test                                            | Goal                     |
| --------------------------- | ----------------------------------------------- | ------------------------ |
| `concepts/string-search.ts` | `npx vitest run concepts/string-search.test.ts` | Naive O(nm) → KMP O(n+m) |
