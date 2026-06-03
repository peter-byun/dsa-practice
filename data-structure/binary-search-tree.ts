// For each node: left < node < right
//        8
//       / \
//      3   10
export class BinarySearchTree {
  root: BSTNode | null = null;

  private findNode(
    value: any,
    node: BSTNode,
    parent?: BSTNode,
  ): {
    node: BSTNode;
    /** left, self, right */
    positionToInsert: -1 | 0 | 1;
    parent?: BSTNode;
  } {
    if (value > node.value) {
      if (!node.left) {
        return {
          node,
          parent,
          positionToInsert: -1,
        };
      } else {
        return this.findNode(value, node.left, node);
      }
    } else if (value > node.value) {
      if (!node.right) {
        return {
          node,
          parent,
          positionToInsert: 1,
        };
      } else {
        return this.findNode(value, node.right, node);
      }
    } else {
      // equals
      return {
        node,
        parent,
        positionToInsert: 0,
      };
    }
  }

  insert(value: any): BSTNode {
    if (!this.root) {
      this.root = new BSTNode(value);
      return this.root;
    }
    const newNode = new BSTNode(value);
    const positionToInsert = this.findNode(value, this.root);
    switch (positionToInsert.positionToInsert) {
      case -1:
        positionToInsert.node.left = newNode;
        return newNode;
      case 1:
        positionToInsert.node.right = newNode;
        return newNode;
      default:
        positionToInsert.node.left = newNode;
        return newNode;
    }
  }

  find(value: any): BSTNode | null {
    if (!this.root) {
      return null;
    }
    const nodeFound = this.findNode(value, this.root);
    return nodeFound.positionToInsert === 0 ? nodeFound.node : null;
  }

  remove(value: any): BSTNode | null {
    if (!this.root) {
      return null;
    }
    const nodeFound = this.findNode(value, this.root);
    if (nodeFound.positionToInsert === 0) {
      if (nodeFound.parent === this.root) {
        this.root = null;
        return nodeFound.node;
      }
      if (!nodeFound.parent) {
        // Orphan exception. Root nodes should be the only orphan node.
        throw new Error(
          `Orphan node can not be removed. Node's value: ${nodeFound.node.value}`,
        );
      }
      // parent found
      if (nodeFound.parent.left === nodeFound.node) {
        nodeFound.parent.left = null;
        return nodeFound.node;
      } else if (nodeFound.parent.right === nodeFound.node) {
        nodeFound.parent.right = null;
        return nodeFound.node;
      }
    }

    return null;
  }

  findSecondary(value: any): BSTNode | null {
    throw new Error("Not implemented");
  }

  findMin(): BSTNode | null {
    throw new Error("Not implemented");
  }

  findMax(): BSTNode | null {
    throw new Error("Not implemented");
  }

  isBalanced(): boolean {
    throw new Error("Not implemented");
  }

  dfsPreOrder(): any[] {
    throw new Error("Not implemented");
  }

  dfsInOrder(): any[] {
    throw new Error("Not implemented");
  }

  dfsPostOrder(): any[] {
    throw new Error("Not implemented");
  }

  bfs(): any[] {
    throw new Error("Not implemented");
  }
}

export class BSTNode {
  value: any;
  left: BSTNode | null = null;
  right: BSTNode | null = null;

  constructor(value: any) {
    this.value = value;
  }
}
