import { describe, expect, test } from "vitest";
import { HashTable } from "./hash-tables";

describe("HashTable", () => {
  test("set, get, hasKey, remove, keys, values, clear", () => {
    const map = new HashTable<number>();
    map.set("a", 1);
    map.set("b", 2);
    expect(map.get("a")).toBe(1);
    expect(map.hasKey("b")).toBe(true);
    expect(map.keys().sort()).toEqual(["a", "b"]);
    expect(map.values().sort((a, b) => a - b)).toEqual([1, 2]);
    expect(map.remove("a")).toBe(true);
    expect(map.get("a")).toBeUndefined();
    map.clear();
    expect(map.keys()).toEqual([]);
  });
});
