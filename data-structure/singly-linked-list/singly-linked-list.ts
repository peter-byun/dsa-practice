type NullableNode<T> = SLNode<T> | null;

export class SinglyLinkedList<T> {
  head: NullableNode<T> = null;
  tail: NullableNode<T> = null;
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

  pop(): NullableNode<T> {
    if (this.head === null) return null;

    if (this.length === 1) {
      const popped = this.head;
      this.head = null;
      this.tail = null;
      this.length = 0;
      popped.next = null;
      return popped;
    }

    // Find the node just before the tail
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

  get(index: number): NullableNode<T> {
    if (this.head === null || this.isOutOfRange(index)) return null;

    let node: NullableNode<T> = this.head;
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
    // Allow inserting at end: index ∈ [0, length]
    if (index < 0 || index > this.length) {
      throw new OutOfRangeError();
    }

    if (index === 0) {
      // unshift
      const newNode = new SLNode(value);
      newNode.next = this.head;
      this.head = newNode;
      if (this.length === 0) this.tail = newNode;
      this.length++;
      return true;
    }

    if (index === this.length) {
      // append
      return this.push(value);
    }

    // middle insert: link new node between prev and curr
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
      // remove head
      const oldHead = this.head!;
      this.head = oldHead.next;
      oldHead.next = null;
      this.length--;
      if (this.length === 0) this.tail = null;
      return true;
    }

    const prev = this.get(index - 1)!;
    const toRemove = prev.next; // guaranteed not null due to range check
    prev.next = toRemove ? toRemove.next : null;

    if (prev.next === null) {
      // removed last node -> update tail
      this.tail = prev;
    }

    if (toRemove) toRemove.next = null;
    this.length--;
    return true;
  }

  /**
   * Rotate left by one: move the head node to the end.
   * No-ops for length < 2.
   */
  rotate(): boolean {
    if (this.length < 2 || this.head === null || this.tail === null) {
      return false;
    }

    const oldHead = this.head;
    this.head = oldHead.next; // new head is second node
    oldHead.next = null; // detach old head
    this.tail.next = oldHead; // append old head to end
    this.tail = oldHead; // update tail

    return true;
  }
}

class SLNode<T> {
  value: T;
  next: SLNode<T> | null = null;
  constructor(value: T) {
    this.value = value;
  }
}

class OutOfRangeError extends Error {
  constructor() {
    super("Index out of range");
  }
}
