import { describe, expect, test } from "vitest";
import { isAnagram, isAnagramWithoutFrequencyCounter } from "./frequency-counter";

describe("isAnagram", () => {
  test("detects anagrams", () => {
    expect(isAnagram("cinema", "iceman")).toBe(true);
    expect(isAnagram("hello", "bye")).toBe(false);
  });

  test("naive matches frequency counter", () => {
    expect(isAnagramWithoutFrequencyCounter("cinema", "iceman")).toBe(true);
  });
});
