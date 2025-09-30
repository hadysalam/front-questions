function countOccurrence(str: string, char: string): number {
  let count = 0;
  for (let i = 0; i < str.length; i++)
    if (str[i] === char) count++;

  return count;
}

export function validateBrackets(str: string) {

  // check if string is empty
  if (str.length === 0) return false;

  // check if brackets nb is odd
  if((countOccurrence(str,'(')
    + countOccurrence(str,')')
    + countOccurrence(str,'[')
    + countOccurrence(str,']')
    + countOccurrence(str,'{')
    + countOccurrence(str,'}')
    )%2 !== 0
  )
    return false;

  // check if nb of respective opening brackets = the closing ones
  if (countOccurrence(str,'(') !== countOccurrence(str,')')
    || countOccurrence(str,'[') !== countOccurrence(str,']')
    || countOccurrence(str,'{') !== countOccurrence(str,'}')
  )
    return false;

  // initialize a stack for comparison
  const stack: string[] = [];

  // define a brackets map for pairing
  const map: { [key: string]: string } = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  // loop through the string
  for (const char of str) {
    // check if current char matches an opening bracket
    if (['(', '{', '['].includes(char)) {
      // fill it to the reproduced stack
      stack.push(char);
      // check if current char matches a closing bracket
    } else if ([')', '}', ']'].includes(char)){
      // remove the added opening bracket when respective closing bracket is found
      const topElement = stack.pop();
      // check if the removed bracket matches the needed one
      if (map[char] !== topElement) {
        return false;
      }
    }
  }
  // stack must be cleared
  return stack.length === 0;
}

