import { describe, expect, test } from "vitest";
import { AdjacencyListGraph } from "./adjacency-list";

describe("AdjacencyListGraph", () => {
  test("vertices, edges, bfs", () => {
    const g = new AdjacencyListGraph();
    g.addVertex("A");
    g.addVertex("B");
    g.addVertex("C");
    g.addEdge("A", "B");
    g.addEdge("B", "C");
    expect(g.hasEdge("A", "B")).toBe(true);
    expect(g.hasEdge("A", "C")).toBe(false);
    expect(g.bfs("A")).toEqual(["A", "B", "C"]);
    g.removeEdge("A", "B");
    expect(g.hasEdge("A", "B")).toBe(false);
    expect(g.display()).toContain("A");
  });
});
