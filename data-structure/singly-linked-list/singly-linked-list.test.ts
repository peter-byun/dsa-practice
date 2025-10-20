import { describe, expect, test } from "vitest";
import { SinglyLinkedList } from "./singly-linked-list";

describe("Singly Linked List", () => {
  test("get, set", () => {
    const ssl = new SinglyLinkedList<number>();
    ssl.push(1);
    ssl.push(2);

    expect(ssl.get(0)?.value).toBe(1);
    expect(ssl.get(1)?.value).toBe(2);

    expect(ssl.get(0)?.next?.value).toBe(2);

    const two = ssl.pop();
    expect(two?.value).toBe(2);
    const one = ssl.pop();
    expect(one?.value).toBe(1);

    expect(ssl.length).toBe(0);
  });

  test("insert, remove", () => {
    const ssl = new SinglyLinkedList<number>();
    ssl.insert(0, 1);
    ssl.push(2);
    ssl.push(3);

    ssl.insert(0, -1);
    ssl.insert(4, 5);

    expect(ssl.get(0)?.value).toBe(-1);
    expect(ssl.get(4)?.value).toBe(5);

    expect(ssl.head?.value).toBe(-1);
    expect(ssl.tail?.value).toBe(5);

    expect(ssl.length).toBe(5);
  });

  test("rotate", () => {
    const ssl = new SinglyLinkedList<number>();
    ssl.push(1);
    ssl.push(2);
    ssl.push(3);

    ssl.rotate();

    expect(ssl.get(0)?.value).toBe(2);
    expect(ssl.get(1)?.value).toBe(3);
    expect(ssl.get(2)?.value).toBe(1);

    expect(ssl.head?.value).toBe(2);
    expect(ssl.tail?.value).toBe(1);

    expect(ssl.length).toBe(3);
  });
});
