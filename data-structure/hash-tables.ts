// hash(key) → bucket index; collisions → chain at bucket[i]
//   set/get/remove average O(1)
export class HashTable {
  array: Array<HashNode> = [];
  addressSpaceLength = 10_000_000;
  head: Node | null = null;
  tail: Node | null = null;
  constructor(addressSpaceLength?: number) {
    if (typeof addressSpaceLength === "number") {
      this.addressSpaceLength = addressSpaceLength;
    }
  }

  private hash(key: string) {
    // Divider bounding the index.
    // To keep the index calculation regardless of the length of the array, we use a fixed space.
    // As the size of the array grows, collision will happen more often, so resizing can be done to optimize this.
    const total = this.addressSpaceLength;

    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    const index = hash % total;
    return index;
  }
  private getHashNode(key: string): HashNode | undefined {
    const index = this.hash(key);
    const existing = this.array[index];
    return existing;
  }
  private iterateAllNodes(cb: (node: Node | undefined) => void) {
    let node = this.head;
    while (node) {
      cb(node);
      node = node.next;
    }
  }
  private findMatchingNode(hashNode: HashNode, key: string) {
    for (let i = 0; i < hashNode.length; i++) {
      if (hashNode[i].key === key) {
        return hashNode[i];
      }
    }
  }
  set(key: string, value: any): void {
    let existingHash: HashNode | undefined = this.getHashNode(key);
    if (!existingHash) {
      // Ensure the hash node for the index
      const index = this.hash(key);
      this.array[index] = [];
      existingHash = this.array[index];
    }

    const newNode = new Node(key, value, null);
    const matchingNode = this.findMatchingNode(existingHash, newNode.key);
    if (matchingNode) {
      matchingNode.value = value;
    } else {
      existingHash.push(newNode);
    }

    if (this.tail) {
      const oldTail = this.tail;
      oldTail.next = newNode;
      newNode.prev = oldTail;
      this.tail = newNode;
    } else {
      this.tail = newNode;
      this.head = newNode;
    }
    if (!this.head) {
      this.head = newNode;
    }
  }

  get(key: string): any | undefined {
    const index = this.hash(key);
    const existing = this.array[index];
    for (let i = 0; i < existing.length; i++) {
      if (existing[i].key === key) {
        return existing[i].value;
      }
    }
    return;
  }

  hasKey(key: string): boolean {
    return this.get(key) !== undefined;
  }

  remove(key: string): boolean {
    const hashNode = this.getHashNode(key);
    if (!hashNode) {
      return false;
    }
    for (let i = 0; i < hashNode.length; i++) {
      if (hashNode[i].key === key) {
        const next = hashNode[i].next;
        const prev = hashNode[i].prev;

        if (this.head === prev) {
          this.head = null;
        }
        if (this.tail === prev) {
          this.tail = null;
        }

        if (prev) {
          prev.next = next;
        }
        if (next) {
          next.prev = prev;
        }

        hashNode.splice(i, 1);
        return true;
      }
    }
    return false;
  }

  keys(): string[] {
    const keys: string[] = [];
    this.iterateAllNodes((node) => {
      node && keys.push(node.key);
    });
    return keys;
  }

  values(): any[] {
    const values: any[] = [];
    this.iterateAllNodes((node) => {
      node && values.push(node.value);
    });
    return values;
  }

  clear(): void {
    this.head = null;
    this.tail = null;
    this.array = [];
  }
}

type HashNode = Node[];
class Node {
  key: string;
  value: any;
  prev: Node | null = null;
  next: Node | null = null;
  constructor(key: string, value: any, next?: Node | null, prev?: Node | null) {
    this.key = key;
    this.value = value;
    if (prev) {
      this.prev = prev;
    }
    if (next) {
      this.next = next;
    }
  }
}
