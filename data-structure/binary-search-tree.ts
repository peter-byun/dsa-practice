// For each node: left < node < right
//        8
//       / \
//      3   10
export class BinarySearchTree<T> {
  root: BSTNode<T> | null = null;

  insert(value: T): BSTNode<T> {
    throw new Error("Not implemented");
  }

  find(value: T): BSTNode<T> | null {
    throw new Error("Not implemented");
  }

  remove(value: T): BSTNode<T> | null {
    throw new Error("Not implemented");
  }

  findSecondary(value: T): BSTNode<T> | null {
    throw new Error("Not implemented");
  }

  findMin(): BSTNode<T> | null {
    throw new Error("Not implemented");
  }

  findMax(): BSTNode<T> | null {
    throw new Error("Not implemented");
  }

  isBalanced(): boolean {
    throw new Error("Not implemented");
  }

  dfsPreOrder(): T[] {
    throw new Error("Not implemented");
  }

  dfsInOrder(): T[] {
    throw new Error("Not implemented");
  }

  dfsPostOrder(): T[] {
    throw new Error("Not implemented");
  }

  bfs(): T[] {
    throw new Error("Not implemented");
  }
}

export class BSTNode<T> {
  value: T;
  left: BSTNode<T> | null = null;
  right: BSTNode<T> | null = null;

  constructor(value: T) {
    this.value = value;
  }
}
