function countOccurrence(str: string, char: string): number {
  let count = 0;
  for (let i = 0; i < str.length; i++)
    if (str[i] === char) count++;

  return count;
}

function containsInvalidChar(str: string) {
  for (let i = 0; i < str.length; i++) {
    const code = str.charCodeAt(i);
    // ASC2 table could be found at https://asecuritysite.com/coding/asc2
    if (
        !(code === 46) && // dot (.)
        !(code > 47 && code < 58) && // numeric (0-9)
        !(code === 64 ) && // @
        !(code > 64 && code < 91) && // upper alpha (A-Z)
        !(code > 96 && code < 123)) { // lower alpha (a-z)
      return true;
    }
  }
  return false;
};

// common top level domains (as shown by example it is necessary)
const commonTLD = ['.com', '.org', '.net', '.com.lb', '.tech'];

function validateTLD(str: string) {
  for (let i = 0; i < str.length; i++) {
    if (str.endsWith(commonTLD[i])) return true;
  }
}


export const validateEmail = (email: string) => {
  let isValid = true;

  // check char length
  if (email.length > 256) isValid = false;

  // check nb of '@' char
  if (countOccurrence(email, '@') !== 1) isValid = false;

  // check if '@' char is the start or ending char
  if ((email.indexOf('@') === 0) || (email.indexOf('@') === email.length - 1)) isValid = false;

  // check nb of '.' char
  if (countOccurrence(email, '.') < 1) isValid = false;

  // check if '.' char is after '@' char with at least a char diff
  if ((email.charAt(email.indexOf('@') + 1) === '.') || (email.charAt(email.indexOf('@') - 1) === '.')) isValid = false;

  // check if contains invalid char
  if(containsInvalidChar(email)) isValid = false;

  // check if it ends with a proper TLD
  if(!validateTLD(email)) isValid = false;

  return isValid
}