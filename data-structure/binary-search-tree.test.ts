import { describe, expect, test } from "vitest";
import { BinarySearchTree } from "./binary-search-tree";

describe("BinarySearchTree", () => {
  test("insert, find, findMin, findMax", () => {
    const tree = new BinarySearchTree();
    [10, 5, 15, 3, 7].forEach((n) => tree.insert(n));
    expect(tree.find(7)?.value).toBe(7);
    expect(tree.find(99)).toBeNull();
    expect(tree.findMin()?.value).toBe(3);
    expect(tree.findMax()?.value).toBe(15);
  });

  test("remove", () => {
    const tree = new BinarySearchTree();
    [10, 5, 15, 3, 7, 12, 20].forEach((n) => tree.insert(n));
    tree.remove(3);
    expect(tree.find(3)).toBeNull();
    expect(tree.dfsInOrder()).toEqual([5, 7, 10, 12, 15, 20]);
  });

  test("traversals", () => {
    const tree = new BinarySearchTree();
    [10, 5, 15, 3, 7].forEach((n) => tree.insert(n));
    expect(tree.dfsInOrder()).toEqual([3, 5, 7, 10, 15]);
    expect(tree.dfsPreOrder()[0]).toBe(10);
    expect(tree.dfsPostOrder().at(-1)).toBe(15);
    expect(tree.bfs()[0]).toBe(10);
  });

  test("isBalanced", () => {
    const balanced = new BinarySearchTree();
    [10, 5, 15].forEach((n) => balanced.insert(n));
    expect(balanced.isBalanced()).toBe(true);
  });
});
