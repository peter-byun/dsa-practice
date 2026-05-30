import { describe, expect, test } from "vitest";
import { AdjacencyMatrixGraph } from "./adjacency-matrix";

describe("AdjacencyMatrixGraph", () => {
  test("vertices, edges, dfs", () => {
    const g = new AdjacencyMatrixGraph();
    g.addVertex("A");
    g.addVertex("B");
    g.addVertex("C");
    g.addEdge("A", "B");
    g.addEdge("B", "C");
    expect(g.hasEdge("A", "B")).toBe(true);
    expect(g.dfs("A")).toEqual(["A", "B", "C"]);
    g.removeEdge("A", "B");
    expect(g.hasEdge("A", "B")).toBe(false);
    expect(g.display()).toContain("A");
  });
});
