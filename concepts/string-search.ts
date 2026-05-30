// Simple String Search

export function simpleStringSearch(haystack: string, needle: string): number {
  const hLength = haystack.length;
  const nLength = needle.length;

  for (let i = 0; i <= hLength - nLength; i++) {
    let j;
    for (j = 0; j < nLength; j++) {
      if (haystack[i + j] !== needle[j]) {
        break;
      }
    }
    if (j === nLength) {
      return i; // Needle found at index i
    }
  }

  return -1; // Needle not found
}

// Knuth-Morris-Pratt (KMP) Algorithm
// Time complexity: O(n + m)
// Space complexity: O(m)
// Limitation: Preprocessing of the needle is required.
// KMP: build lps[] on needle, skip haystack shifts using lps
export function kmpSearch(_haystack: string, _needle: string): number {
  throw new Error("Not implemented");
}
