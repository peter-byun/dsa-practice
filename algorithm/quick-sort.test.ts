import { describe, expect, test } from "vitest";
import { partition, quickSort } from "./quick-sort";

describe("quickSort", () => {
  test("sorts ascending", () => {
    expect(quickSort([3, 1, 4, 1, 5])).toEqual([1, 1, 3, 4, 5]);
  });

  test("partition places pivot correctly", () => {
    const arr = [3, 1, 4, 1, 5];
    const pivotIndex = partition(arr, 0, arr.length - 1);
    const pivot = arr[pivotIndex];
    expect(arr.slice(0, pivotIndex).every((n) => n < pivot)).toBe(true);
    expect(arr.slice(pivotIndex + 1).every((n) => n > pivot)).toBe(true);
  });
});
