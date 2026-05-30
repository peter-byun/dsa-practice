import { describe, expect, test } from "vitest";
import { Queue } from "./queue";

describe("Queue", () => {
  test("enqueue, dequeue, peek, isEmpty, size", () => {
    const queue = new Queue<string>();
    expect(queue.isEmpty()).toBe(true);
    queue.enqueue("a");
    queue.enqueue("b");
    expect(queue.size).toBe(2);
    expect(queue.peek()).toBe("a");
    expect(queue.dequeue()).toBe("a");
    expect(queue.dequeue()).toBe("b");
    expect(queue.dequeue()).toBeUndefined();
    expect(queue.isEmpty()).toBe(true);
  });
});
