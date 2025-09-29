// Simple String Search

function simpleStringSearch(haystack: string, needle: string): number {
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
// TODO: Implement the KMP algorithm.
