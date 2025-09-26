// O of n
function isAnagram(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) return false;

  // Frequency Counter Pattern - using an object to cache the frequency of characters.
  // As a result we only need to loop through each string once.
  const frequencyCounter: { [key: string]: number } = {};
  for (const char of str1) {
    frequencyCounter[char] = (frequencyCounter[char] || 0) + 1;
  }

  for (const char of str2) {
    if (!frequencyCounter[char]) {
      return false;
    } else {
      frequencyCounter[char] -= 1;
    }
  }

  return true;
}

function isAnagramWithoutFrequencyCounter(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) return false;

  const str1Arr = str1.split("");
  const str2Arr = str2.split("");

  // Naive approach - Without using frequency counter pattern(Caching).
  for (const char of str1Arr) {
    // O of n^2
    const index = str2Arr.indexOf(char);
    if (index === -1) {
      return false;
    } else {
      str2Arr.splice(index, 1);
    }
  }

  return true;
}
