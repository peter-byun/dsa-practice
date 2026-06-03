import { describe, expect, test } from "vitest";
import { PriorityQueue } from "./priority-queue";

describe("PriorityQueue", () => {
  test("dequeues lower priority number first", () => {
    const pq = new PriorityQueue();
    pq.enqueue("low", 3);
    pq.enqueue("high", 1);
    pq.enqueue("mid", 2);
    expect(pq.size).toBe(3);
    expect(pq.peek()).toBe("high");
    expect(pq.dequeue()).toBe("high");
    expect(pq.dequeue()).toBe("mid");
    expect(pq.dequeue()).toBe("low");
    expect(pq.isEmpty()).toBe(true);
  });
});
