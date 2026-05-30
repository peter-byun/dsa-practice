import { describe, expect, test } from "vitest";
import { maxSubarraySumNaive, maxSubarraySumSlidingWindow } from "./sliding-window";

const arr = [2, 1, 5, 1, 3, 2];
const k = 3;

describe("maxSubarraySum", () => {
  test("sliding window finds max sum", () => {
    expect(maxSubarraySumSlidingWindow(arr, k)).toBe(9);
    expect(maxSubarraySumSlidingWindow(arr, 10)).toBeNull();
  });

  test("naive matches sliding window", () => {
    expect(maxSubarraySumNaive(arr, k)).toBe(9);
  });
});
