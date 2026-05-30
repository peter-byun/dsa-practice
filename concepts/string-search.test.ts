import { describe, expect, test } from "vitest";
import { kmpSearch, simpleStringSearch } from "./string-search";

describe("simpleStringSearch", () => {
  test("finds index or -1", () => {
    expect(simpleStringSearch("hello world", "world")).toBe(6);
    expect(simpleStringSearch("hello world", "xyz")).toBe(-1);
    expect(simpleStringSearch("aaa", "aa")).toBe(0);
  });
});

describe("kmpSearch", () => {
  test("matches naive search results", () => {
    const haystack = "abxabcabcaby";
    const needle = "abcaby";
    expect(kmpSearch(haystack, needle)).toBe(simpleStringSearch(haystack, needle));
    expect(kmpSearch(haystack, "missing")).toBe(-1);
  });
});
