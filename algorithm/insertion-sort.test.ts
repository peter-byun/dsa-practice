import { describe, expect, test } from "vitest";
import { insertionSort } from "./insertion-sort";

describe("insertionSort", () => {
  test("sorts ascending", () => {
    expect(insertionSort([3, 1, 4, 1, 5])).toEqual([1, 1, 3, 4, 5]);
  });
});
