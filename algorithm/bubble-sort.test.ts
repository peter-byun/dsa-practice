import { describe, expect, test } from "vitest";
import { bubbleSort } from "./bubble-sort";

describe("bubbleSort", () => {
  test("sorts ascending", () => {
    expect(bubbleSort([3, 1, 4, 1, 5])).toEqual([1, 1, 3, 4, 5]);
    expect(bubbleSort([])).toEqual([]);
    expect(bubbleSort([1])).toEqual([1]);
  });
});
