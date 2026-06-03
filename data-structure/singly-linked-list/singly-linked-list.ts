import type { T } from "../../types";

type NullableNode = SLNode | null;

export class SinglyLinkedList {
  head: NullableNode = null;
  tail: NullableNode = null;
  length = 0;

  constructor(value?: T) {
    if (value !== null && value !== undefined) {
      this.initialize(value);
    }
  }

  private initialize(value: T) {
    const node = new SLNode(value);
    this.head = node;
    this.tail = node;
    this.length = 1;
  }

  private isOutOfRange(index: number) {
    return index < 0 || index >= this.length;
  }

  push(value: T): boolean {
    if (this.length === 0 || this.head === null || this.tail === null) {
      this.initialize(value);
      return true;
    }
    const newNode = new SLNode(value);
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
    return true;
  }

  pop(): NullableNode {
    if (this.head === null) return null;

    if (this.length === 1) {
      const popped = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      popped.next = null;
      return popped;
    }

    let prev = this.head;
    let current = this.head;
    while (current.next !== null) {
      prev = current;
      current = current.next;
    }
    prev.next = null;
    this.tail = prev;
    this.length--;
    return current;
  }

  get(index: number): NullableNode {
    if (this.head === null || this.isOutOfRange(index)) return null;

    let node: NullableNode = this.head;
    for (let i = 0; i < index; i++) {
      node = node!.next;
      if (node === null) return null;
    }
    return node;
  }

  set(index: number, value: T): boolean {
    const toChange = this.get(index);
    if (toChange) {
      toChange.value = value;
      return true;
    }
    return false;
  }

  insert(index: number, value: T): boolean {
    if (index < 0 || index > this.length) {
      throw new OutOfRangeError();
    }

    if (index === 0) {
      const newNode = new SLNode(value);
      newNode.next = this.head;
      this.head = newNode;
      if (this.length === 0) this.tail = newNode;
      this.length++;
      return true;
    }

    if (index === this.length) {
      return this.push(value);
    }

    const prevNode = this.get(index - 1);
    if (prevNode === null) throw new OutOfRangeError();

    const newNode = new SLNode(value);
    newNode.next = prevNode.next;
    prevNode.next = newNode;
    this.length++;
    return true;
  }

  remove(index: number): boolean {
    if (this.isOutOfRange(index)) {
      throw new OutOfRangeError();
    }

    if (index === 0) {
      const oldHead = this.head!;
      this.head = oldHead.next;
      oldHead.next = null;
      this.length--;
      if (this.length === 0) this.tail = null;
      return true;
    }

    const prev = this.get(index - 1)!;
    const toRemove = prev.next;
    prev.next = toRemove ? toRemove.next : null;

    if (prev.next === null) {
      this.tail = prev;
    }

    if (toRemove) toRemove.next = null;
    this.length--;
    return true;
  }

  rotate(): boolean {
    if (this.length < 2 || this.head === null || this.tail === null) {
      return false;
    }

    const oldHead = this.head;
    this.head = oldHead.next;
    oldHead.next = null;
    this.tail.next = oldHead;
    this.tail = oldHead;

    return true;
  }
}

class SLNode {
  value: T;
  next: SLNode | null = null;
  constructor(value: T) {
    this.value = value;
  }
}

class OutOfRangeError extends Error {
  constructor() {
    super("Index out of range");
  }
}
