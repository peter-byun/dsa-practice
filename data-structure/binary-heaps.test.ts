import { describe, expect, test } from "vitest";
import { MaxBinaryHeap } from "./binary-heaps";

describe("MaxBinaryHeap", () => {
  test("insert, extractMax, contains", () => {
    const heap = new MaxBinaryHeap();
    [10, 5, 20, 1, 15].forEach((n) => heap.insert(n));
    expect(heap.contains(20)).toBe(true);
    expect(heap.extractMax()).toBe(20);
    expect(heap.extractMax()).toBe(15);
    expect(heap.find(5)).toBeGreaterThanOrEqual(0);
  });

  test("remove", () => {
    const heap = new MaxBinaryHeap();
    [10, 5, 20].forEach((n) => heap.insert(n));
    heap.remove(10);
    expect(heap.contains(10)).toBe(false);
    expect(heap.extractMax()).toBe(20);
  });
});
