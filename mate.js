'use strict';

/**
 * @param {string} word
 *
 * @returns {string}
 */
function encodeDuplicates(word) {
  const charCount = {};

  for (const char of word.toLowerCase()) {
    if (char.match(/[a-z]/)) {
      charCount[char] = (charCount[char] || 0) + 1;
    }
  }

  let result = '';

  for (const char of word.toLowerCase()) {
    if (char.match(/[a-z]/)) {
      if (charCount[char] === 1) {
        result += 'x';
      } else {
        result += 'y';
      }
    } else {
      result += char;
    }
  }

  return result;
}
