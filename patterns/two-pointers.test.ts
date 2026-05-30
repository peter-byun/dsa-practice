import { describe, expect, test } from "vitest";
import { pairWithTargetSum, pairWithTargetSumNaive } from "./two-pointers";

describe("pairWithTargetSum", () => {
  const arr = [1, 2, 3, 4, 6];
  const target = 6;

  test("finds pair in sorted array", () => {
    expect(pairWithTargetSum(arr, target)).toEqual([2, 4]);
    expect(pairWithTargetSum(arr, 99)).toBeNull();
  });

  test("naive matches optimal", () => {
    expect(pairWithTargetSumNaive(arr, target)).toEqual([2, 4]);
  });
});
