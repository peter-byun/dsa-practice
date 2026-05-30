// hash(key) → bucket index; collisions → chain at bucket[i]
//   set/get/remove average O(1)
export class HashTable<V> {
  set(_key: string, value: V): void {
    throw new Error("Not implemented");
  }

  get(_key: string): V | undefined {
    throw new Error("Not implemented");
  }

  hasKey(_key: string): boolean {
    throw new Error("Not implemented");
  }

  remove(_key: string): boolean {
    throw new Error("Not implemented");
  }

  keys(): string[] {
    throw new Error("Not implemented");
  }

  values(): V[] {
    throw new Error("Not implemented");
  }

  clear(): void {
    throw new Error("Not implemented");
  }
}
