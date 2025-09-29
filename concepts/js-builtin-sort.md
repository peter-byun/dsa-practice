The builtin sort function of JavaScript, when a callback function is not provided, converts every element to a string and compares their sequences of UTF-16 code unit values.
You would most likely want to provide a callback function to sort numbers in ascending or descending order.

The callback function takes two arguments, `a` and `b`, which represent two elements from the array being compared.

- If the function returns a value less than 0(-1), `a` will be sorted before `b`.
- If the function returns a value greater than 0(+1), `a` will be sorted after `b`.
- If the function returns 0, the order of `a` and `b` remains unchanged.

You could say that the return value determines the order of `a` relative to `b`.
