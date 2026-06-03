import type { T } from "../types";

// LIFO: push/pop at the same end (top)
//   [bottom] ... [top] ← push/pop here
export class Stack {
  private head: Node | null = null;
  private length: number = 0;

  push(value: T): void {
    if (!this.head) {
      this.head = new Node(value);
      this.length++;
      return;
    }

    this.head.next = new Node(value);
    this.head.next.prev = this.head;

    this.head = this.head.next;
    this.length++;
  }

  pop(): T | undefined {
    if (!this.head) {
      return undefined;
    }

    const oldHead = this.head;

    this.head = this.head.prev;
    if (this.head) {
      this.head.next = null;
    }

    this.length--;
    return oldHead.val;
  }

  peek(): T | undefined {
    return this.head?.val;
  }

  size(
    options: {
      ignoreCache: boolean;
    } = {
      ignoreCache: false,
    },
  ): number {
    if (options.ignoreCache) {
      let count = 0;
      let node = this.head;
      while (node) {
        if (node.prev) {
          count++;
        }
        node = node.prev;
      }
      return count;
    }
    return this.length;
  }
}

class Node {
  val: T;
  next: Node | null = null;
  prev: Node | null = null;
  constructor(val: T) {
    this.val = val;
  }
}
