// When using recursion to solve a problem, you'd often want to have a variable outside the recursive function to keep the result between calls.
// One way to do this is to use a helper recursive function inside the main function.

function collectOddValues(arr: number[]): number[] {
  const result: number[] = [];

  function helper(helperInput: number[]) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0]);
    }

    helper(helperInput.slice(1));
  }

  helper(arr);

  return result;
}

// If you for some reason want to use only one function, you can pass the result of each call to the next one, and initialize the function with default parameters.
function collectOddValuesSingle(
  arr: number[],
  result: number[] = []
): number[] {
  if (arr.length === 0) {
    return result;
  }

  if (arr[0] % 2 !== 0) {
    result.push(arr[0]);
  }

  return collectOddValuesSingle(arr.slice(1), result);
}
