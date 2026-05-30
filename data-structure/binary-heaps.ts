// Max heap in array: parent at i, children at 2i+1, 2i+2
//   arr[0] = max; insert bubble up, extractMax bubble down
export class MaxBinaryHeap {
  values: number[] = [];

  insert(value: number): boolean {
    throw new Error("Not implemented");
  }

  remove(value: number): boolean {
    throw new Error("Not implemented");
  }

  find(value: number): number {
    throw new Error("Not implemented");
  }

  contains(value: number): boolean {
    throw new Error("Not implemented");
  }

  extractMax(): number | undefined {
    throw new Error("Not implemented");
  }
}
