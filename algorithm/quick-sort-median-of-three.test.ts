import { describe, expect, test } from "vitest";
import { quickSortMedianOfThree } from "./quick-sort-median-of-three";

describe("quickSortMedianOfThree", () => {
  test("sorts ascending", () => {
    expect(quickSortMedianOfThree([3, 1, 4, 1, 5])).toEqual([1, 1, 3, 4, 5]);
    expect(quickSortMedianOfThree([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });
});
