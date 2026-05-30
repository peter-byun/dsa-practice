// Lower priority number = served first (min-heap on priority)
//   enqueue(value, priority) → heap ordered by priority
export class PriorityQueue<T> {
  enqueue(value: T, _priority: number): void {
    throw new Error("Not implemented");
  }

  dequeue(): T | undefined {
    throw new Error("Not implemented");
  }

  peek(): T | undefined {
    throw new Error("Not implemented");
  }

  isEmpty(): boolean {
    throw new Error("Not implemented");
  }

  get size(): number {
    throw new Error("Not implemented");
  }
}
