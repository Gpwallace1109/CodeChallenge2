// Parsity Coding Challenge

const findSum = function(array) {
  let sum = 0; 
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  return sum;
};



const findFrequency = function(array) {
  const frequency = {};
  
  // Calculate frequency of each item
  for (let i = 0; i < array.length; i++) {
    const item = array[i];
    if (frequency[item]) {
      frequency[item] += 1;
    } else {
      frequency[item] = 1;
    }
  }

  // Find the most and least frequent items
  let mostFrequent = '';
  let leastFrequent = '';
  let mostCount = 0;
  let leastCount = Number.MAX_SAFE_INTEGER;

  for (const key in frequency) {
    if (frequency[key] > mostCount) {
      mostFrequent = key;
      mostCount = frequency[key];
    }
    if (frequency[key] < leastCount) {
      leastFrequent = key;
      leastCount = frequency[key];
    }
  }
  return { most: mostFrequent, least: leastFrequent };
};



const isPalindrome = function(str) {
  const cleanStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');

  const reversedStr = cleanStr.split('').reverse().join('');
  return cleanStr === reversedStr;
};



const largestPair = function(array) {
  if (array.length < 2) {
    return "Array should contain at least two numbers";
  }

  let largestProduct = array[0] * array[1];

  for (let i = 1; i < array.length - 1; i++) {
    const product = array[i] * array[i + 1];
    largestProduct = Math.max(largestProduct, product);
  }
  return largestProduct;
};



const removeParenth = function(str) {
  return str.replace(/ *\([^)]*\) */g, '');
};


const scoreScrabble = function(str) {
  const letterScore = {
    a: 1, b: 3, c: 3, d: 2, e: 1, f: 4, g: 2, h: 4, i: 1, j: 8, k: 5, l: 1, m: 3,
    n: 1, o: 1, p: 3, q: 10, r: 1, s: 1, t: 1, u: 1, v: 4, w: 4, x: 8, y: 4, z: 10
  };

  let score = 0;
  str = str.toLowerCase();

  for (let i = 0; i < str.length; i++) {
    const letter = str[i];
    score += letterScore[letter] || 0;
  }
  return score;
};
