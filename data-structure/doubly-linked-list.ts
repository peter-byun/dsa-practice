// Each node: prev ← [value] → next
// head/tail pointers; push/pop at tail, shift/unshift at head
type NullableNode = Node | null;

export class DoublyLinkedList<T> {
  head: NullableNode = null;
  tail: NullableNode = null;
  length = 0;

  initializeIfNot(val: T): asserts this is this & { head: Node; tail: Node } {
    if (!this.head || !this.tail) {
      this.head = new Node(val);
      this.tail = this.head;
      this.length++;
    }

    if (!this.head || !this.tail) {
      throw new Error("Head or tail missing after initialization.");
    }
  }

  push(value: T): boolean {
    const wasEmpty = this.length === 0;
    this.initializeIfNot(value);
    if (wasEmpty) {
      return true;
    }

    this.tail.next = new Node(value);
    this.tail.next.prev = this.tail;

    this.tail = this.tail.next;
    this.length++;

    return true;
  }

  pop(): NullableNode {
    if (!this.tail) {
      return null;
    }

    const tail = this.tail;
    if (!this.tail.prev) {
      this.tail = null;
      this.head = null;
      this.length--;
      return tail;
    }

    this.tail.prev.next = null;
    this.tail = this.tail.prev;
    this.length--;
    return tail;
  }

  shift(): NullableNode {
    if (!this.head) {
      return null;
    }

    const head = this.head;
    this.head = this.head.next;
    if (!this.head) {
      this.tail = this.head;
    }
    this.length--;

    return head;
  }

  unshift(value: T): boolean {
    const wasEmpty = this.length === 0;
    this.initializeIfNot(value);
    if (wasEmpty) {
      this.length++;
      return true;
    }

    this.head.prev = new Node(value);
    this.head.prev.next = this.head;

    this.head = this.head.prev;
    this.length++;

    return true;
  }

  get(index: number): NullableNode {
    let i = index;
    let node = this.head;
    while (i > 0) {
      if (!node) {
        return null;
      }
      if (!node.next) {
        return null;
      }
      node = node.next;
      i--;
    }
    return node;
  }

  set(index: number, value: T): boolean {
    const node = this.get(index);
    if (node) {
      node.value = value;
      return true;
    } else {
      return false;
    }
  }

  insert(index: number, value: T): boolean {
    const node = this.get(index);
    if (!node) {
      return false;
    }

    const oldPrev = node.prev;
    if (!oldPrev) {
      const newNode = new Node(value);
      newNode.next = node;
      node.prev = newNode;
      this.head = newNode;
      this.length++;
      return true;
    }

    const newNode = new Node(value);
    oldPrev.next = newNode;
    newNode.prev = oldPrev;
    newNode.next = node.next;
    if (newNode.next) {
      newNode.next.prev = newNode;
    }
    this.length++;
    return true;
  }

  remove(index: number): boolean {
    const node = this.get(index);
    if (!node) {
      return false;
    }
    const prev = node.prev;
    const next = node.next;
    if (prev) {
      prev.next = next;
    }
    if (next) {
      next.prev = prev;
    }
    this.length--;
    return true;
  }

  reverse(): boolean {
    if (!this.head || !this.tail) {
      return false;
    }

    const head = this.head;
    this.head = this.tail;

    let node: NullableNode = head;
    let prev = null;
    while (node) {
      const next: NullableNode = node.next;
      node.next = prev;
      node.prev = next;

      prev = node;
      node = node.prev;
    }
    this.tail = head;
    return true;
  }
}

class Node {
  value: any;
  prev: Node | null = null;
  next: Node | null = null;

  constructor(value: any) {
    this.value = value;
  }
}
