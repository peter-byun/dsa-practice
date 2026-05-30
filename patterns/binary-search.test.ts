import { describe, expect, test } from "vitest";
import { binarySearch } from "./binary-search";

describe("binarySearch", () => {
  const arr = [1, 3, 5, 7, 9, 11];

  test("finds index or null", () => {
    expect(binarySearch(arr, 7)).toBe(3);
    expect(binarySearch(arr, 1)).toBe(0);
    expect(binarySearch(arr, 4)).toBeNull();
  });
});
