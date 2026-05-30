// Vertices map to indices; matrix[i][j] = 1 if edge
// DFS: stack or recursion, go deep before wide
export class AdjacencyMatrixGraph {
  private vertices: string[] = [];
  private matrix: number[][] = [];

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

  dfs(_start: string): string[] {
    throw new Error("Not implemented");
  }
}
