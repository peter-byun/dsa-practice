import { describe, expect, test } from "vitest";
import { DoublyLinkedList } from "./doubly-linked-list";

describe("Doubly Linked List", () => {
  test("push, pop, shift, unshift", () => {
    const list = new DoublyLinkedList();
    list.push(1);
    list.push(2);
    list.unshift(0);
    expect(list.length).toBe(3);
    expect(list.head?.value).toBe(0);
    expect(list.tail?.value).toBe(2);
    expect(list.shift()?.value).toBe(0);
    expect(list.pop()?.value).toBe(2);
    expect(list.length).toBe(1);
  });

  test("get, set, insert, remove", () => {
    const list = new DoublyLinkedList();
    list.push(1);
    list.push(2);
    list.insert(1, 99);
    expect(list.get(1)?.value).toBe(99);
    list.set(0, 10);
    expect(list.get(0)?.value).toBe(10);
    list.remove(1);
    expect(list.length).toBe(2);
  });

  test("reverse", () => {
    const list = new DoublyLinkedList();
    list.push(1);
    list.push(2);
    list.push(3);
    list.reverse();
    expect(list.get(0)?.value).toBe(3);
    expect(list.get(2)?.value).toBe(1);
    expect(list.head?.value).toBe(3);
    expect(list.tail?.value).toBe(1);
  });
});
