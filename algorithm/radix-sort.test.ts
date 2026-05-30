import { describe, expect, test } from "vitest";
import { radixSort } from "./radix-sort";

describe("radixSort", () => {
  test("sorts non-negative integers", () => {
    expect(radixSort([329, 457, 657, 839, 436, 720, 355])).toEqual([
      329, 355, 436, 457, 657, 720, 839,
    ]);
    expect(radixSort([])).toEqual([]);
  });
});
