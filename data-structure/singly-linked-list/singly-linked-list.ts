type NullableNode<T> = SLNode<T> | null;

class SinglyLinkedList<T> {
  head: NullableNode<T> = null;
  tail: NullableNode<T> = null;
  length: number = 0;

  private initialize(value: T) {
    const node = new SLNode(value);
    this.head = node;
    this.tail = node;
    this.length = 1;
  }
  constructor(value: T) {
    this.initialize(value);
  }
  private isOutOfRange(index: number) {
    return index < 0 || index > this.length - 1;
  }

  push(value: T): boolean {
    if (this.length === 0 || this.head === null || this.tail === null) {
      this.initialize(value);
      return true;
    }

    this.tail.next = new SLNode(value);
    this.length++;
    return true;
  }
  pop(): NullableNode<T> {
    if (this.head === null) {
      return null;
    }

    let nextTail: NullableNode<T> = this.head;
    let prev = this.head;
    while (nextTail !== null) {
      prev = nextTail;
      nextTail = nextTail.next;
    }

    prev.next = null;

    return prev;
  }
  get(index: number): NullableNode<T> {
    if (this.head === null) {
      return null;
    }

    let node = this.head;
    for (let i = 1; i <= index; i++) {
      if (!node?.next) {
        return null;
      }
      node = node?.next;
    }

    return node;
  }
  set(index: number, value: T): boolean {
    const toChanage = this.get(index);
    if (toChanage) {
      toChanage.value = value;
      return true;
    }
    return false;
  }
  insert(index: number, value: T) {
    const isOutOfBoundary = this.isOutOfRange(index);
    const prevNode = this.get(index - 1);
    if (isOutOfBoundary || prevNode === null) {
      throw new OutOfRnageError();
    }

    prevNode.next = new SLNode(value);
    return true;
  }
  remove(index: number) {
    const isOutOfRange = this.isOutOfRange(index);
    if (isOutOfRange) {
      throw new OutOfRnageError();
    }

    const toRemovePrev = this.get(index - 1);
    if (toRemovePrev === null) {
      return false;
    }

    const toRemove = toRemovePrev.next;

    toRemovePrev.next = toRemove ? toRemove.next : null;

    return true;
  }
  rotate() {
    if (this.head === null || this.tail == null) {
      return false;
    }

    const headNext = this.head?.next;
    this.head = this.tail;
    this.head.next = headNext;

    let newTail = this.head;
    while (newTail.next !== null) {
      newTail = newTail.next;
    }
    this.tail = newTail;

    return true;
  }
}

class SLNode<T> {
  value: T;
  next: SLNode<T> | null;
  constructor(value: T) {
    this.value = value;
    this.next = null;
  }
}

class OutOfRnageError extends Error {
  constructor() {
    super("Inex out of range");
  }
}
