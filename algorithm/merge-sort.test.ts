import { describe, expect, test } from "vitest";
import { merge, mergeSort } from "./merge-sort";

describe("mergeSort", () => {
  test("sorts ascending", () => {
    expect(mergeSort([3, 1, 4, 1, 5])).toEqual([1, 1, 3, 4, 5]);
  });

  test("merge combines sorted halves", () => {
    expect(merge([1, 3], [2, 4])).toEqual([1, 2, 3, 4]);
  });
});
