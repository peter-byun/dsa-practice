import { describe, expect, test } from "vitest";
import { selectionSort } from "./selection-sort";

describe("selectionSort", () => {
  test("sorts ascending", () => {
    expect(selectionSort([3, 1, 4, 1, 5])).toEqual([1, 1, 3, 4, 5]);
  });
});
