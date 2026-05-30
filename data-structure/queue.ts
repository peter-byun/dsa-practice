// FIFO: enqueue back, dequeue front
//   front → [ ] [ ] [ ] ← back
export class Queue<T> {
  head: Node | null = null;
  tail: Node | null = null;
  length: number = 0;

  initialize(val: any): boolean {
    if (!this.head) {
      const node = new Node(val);
      this.head = node;
      this.tail = node;
      this.length++;
      return true;
    }
    return false;
  }

  enqueue(value: T): void {
    if (this.initialize(value)) {
      return;
    }
    if (this.tail) {
      this.tail.next = new Node(value);
      this.tail = this.tail.next;
    } else {
      this.tail = new Node(value);
    }
    this.length++;
  }

  dequeue(): T | undefined {
    if (!this.head) {
      return;
    }
    const oldHead = this.head;
    this.head = oldHead.next;
    this.length--;

    return oldHead.val;
  }

  peek(): T | undefined {
    if (!this.head) {
      return;
    }
    return this.head.val;
  }

  isEmpty(): boolean {
    return !this.head;
  }

  get size(): number {
    return this.length;
  }
}

class Node {
  val: any;
  next: Node | null = null;
  constructor(val: any) {
    this.val = val;
  }
}
