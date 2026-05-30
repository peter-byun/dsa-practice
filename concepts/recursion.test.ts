import { describe, expect, test } from "vitest";
import { collectOddValues, collectOddValuesSingle } from "./recursion";

describe("collectOddValues", () => {
  test("collects odd numbers", () => {
    expect(collectOddValues([1, 2, 3, 4, 5])).toEqual([1, 3, 5]);
    expect(collectOddValuesSingle([1, 2, 3, 4, 5])).toEqual([1, 3, 5]);
    expect(collectOddValues([])).toEqual([]);
  });
});
