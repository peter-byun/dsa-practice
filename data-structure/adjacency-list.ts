// Undirected graph: Map<vertex, neighbor[]>
// BFS: queue, mark visited; explore layer by layer
export class AdjacencyListGraph {
  private adjacency = new Map<string, string[]>();

  addVertex(_vertex: string): void {
    throw new Error("Not implemented");
  }

  addEdge(_v1: string, _v2: string): void {
    throw new Error("Not implemented");
  }

  removeEdge(_v1: string, _v2: string): void {
    throw new Error("Not implemented");
  }

  hasEdge(_v1: string, _v2: string): boolean {
    throw new Error("Not implemented");
  }

  display(): string {
    throw new Error("Not implemented");
  }

  bfs(_start: string): string[] {
    throw new Error("Not implemented");
  }
}
