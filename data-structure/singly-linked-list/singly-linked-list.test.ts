import { expect, test } from "vitest";
import { SinglyLinkedList } from "./singly-linked-list";
// import { sum } from "./sum.js";

test("Singly Linked List", () => {
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

  // get, set
  // insert, remove
  // rotate
});
