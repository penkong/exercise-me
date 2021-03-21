///////////////////////////
//frequency counters
// is sec arr power of first arr?

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  for (let i = 0; i < arr1.length; i++) {
    let correctIndex = arr2.indexOf(arr1[i] ** 2)
    if (correctIndex === -1) {
      return false;
    }
    arr2.splice(correctIndex, 1)
  }
  return true;
}
same([1, 2, 3, 2], [9, 1, 4, 4])

function same(arr1, arr2) {
  if (arr1.length !== arr2.length) {
    return false;
  }
  let frequencyCounter1 = {}
  let frequencyCounter2 = {}
  for (let val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1
  }
  for (let val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1
  }
  for (let key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false
    }
    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false
    }
  }
  return true
}
same([1, 2, 3, 2, 5], [9, 1, 4, 4, 11])

function validAnagram(first, second) {
  if (first.length !== second.length) {
    return false;
  }
  const lookup = {};
  for (let i = 0; i < first.length; i++) {
    let letter = first[i];
    // if letter exists, increment, otherwise set to 1
    lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
  }
  // console.log(lookup)
  for (let i = 0; i < second.length; i++) {
    let letter = second[i];
    // can't find letter or letter is zero then it's not an anagram
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}
// {a: 0, n: 0, g: 0, r: 0, m: 0,s:1}
validAnagram('anagrams', 'nagaramm')
//----------------------------------------------------------------------
// multiple pointers
function sumZero(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === 0) {
        return [arr[i], arr[j]];
      }
    }
  }
}

sumZero([-4, -3, -2, -1, 0, 1, 2, 5])

//better
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let sum = arr[left] + arr[right];
    if (sum === 0) {
      return [arr[left], arr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}
//count unique values in an array 

function uniqueVal(arr) {
  let count = 0;
  let mySet = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (mySet.has(arr[i])) {
      continue;
    }
    mySet.add(arr[i]);
    count++;
  }
  return count;
}

function countUniqueValues(arr) {
  if (arr.length === 0) return 0;
  var i = 0;
  for (var j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j]
    }
  }
  return i + 1;
}
countUniqueValues([1, 2, 2, 5, 7, 7, 99])

//----------------------------------------
// sliding window pattern

function maxSubarraySum(arr, num) {
  if (num > arr.length) {
    return null;
  }
  var max = -Infinity;
  for (let i = 0; i < arr.length - num + 1; i++) {
    temp = 0;
    for (let j = 0; j < num; j++) {
      temp += arr[i + j];
    }
    if (temp > max) {
      max = temp;
    }
  }
  return max;
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)
// sliding window refactored
function maxSubarraySum(arr, num) {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < num) return null;
  for (let i = 0; i < num; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)

//------------------------------------------------
//divide and conquer pattern
// recursive 

// pure recursive  
function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}

collectOddValues([1, 2, 3, 4, 5])

//helpwer method pattern
function collectOddValues(arr) {

  let result = [];

  function helper(helperInput) {
    if (helperInput.length === 0) {
      return;
    }

    if (helperInput[0] % 2 !== 0) {
      result.push(helperInput[0])
    }

    helper(helperInput.slice(1))
  }

  helper(arr)

  return result;
}

collectOddValues([1, 2, 3, 4, 5, 6, 7, 8, 9])
//------------------------------------------------
//==================================



function reversing(str) {
  return str.split('').reverse().join('');
}

function reversing(str) {
  return str.split('').reduce((rev, char) => char + rev, '');
}

function reversing(str) {
  let newStr = '';
  for (let char of str) {
    newStr = char + newStr;
  }
  return newStr;
}

function reversing(str) {
  let newStr = '';
  for (let i = str.length - 1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr;
}

function reverseString(str) {
  let arrayStr = str.split("");
  let reversedArray = [];
  //We are using closure here so that we don't add the above variables to the global scope.
  function addToArray(array) {

    if (array.length > 0) {
      reversedArray.push(array.pop());
      addToArray(array);
    }
    return;
  }
  addToArray(arrayStr);
  return reversedArray.join("");
}

function reverseStringRecursive(str) {
  if (str === "") {
    return "";
  } else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
}

//---------------------------------------
//palindrome
function palindrome(str) {
  let newStr = str.split('').reverse().join('');
  return newStr === str ? true : false;
}

function palindrome(str) {
  return str.split('').every((char, i) => {
    return char === str[str.length - i - 1];
  });
}
// reverse int
function revInt(n) {
  let reversed = n.toString().split('').reverse().join('');
  return parseInt(reversed) * Math.sign(n);
}
/// max chars -----------------for anagram string
function maxChars(str) {
  let chars = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    if (chars[char]) {
      chars[char]++;
    } else {
      chars[char] = 1;
    }
  }

  for (let char in chars) {
    if (chars[char] > max) {
      max = chars[char];
      maxChar = char;
    }
  }
  return maxChar;
}
// fizbuzz
function fizzBuzz(n) {
  let fizz = 3;
  let buzz = 5;
  for (let i = 1; i <= n; i++) {
    if (i % fizz === 0 && i % buzz === 0) {
      console.log('fizzbuzz');
    } else if (i % fizz === 0) {
      console.log('fizz');
    } else if (i % buzz === 0) {
      console.log('buzz');
    } else {
      console.log(i);
    }
  }
}
//----------------------------------------------------------------------
// chuncked arrays
function chunk(array, size) {
  const chunked = [];
  for (let el of array) {
    let last = chunked[chunked.length - 1];
    if (!last || last.length === size) {
      chunked.push([el]);
    } else {
      last.push(el);
    }
  }
  return chunked;
}
//sol 2
function chunk(array, size) {
  const chunked = [];
  let index = 0;
  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}
//===========================================================================================
//anagram
//first sol 1
function mapChar(str) {
  let mapedChar = {}
  for (let char of str.replace(/[^\w]/g, '').toLowerCase()) {
    mapedChar[char] = mapedChar[char] + 1 || 1;
  }
  return mapedChar;
}

function anagram(stringA, stringB) {
  const aCharMap = mapChar(stringA);
  const bCharMap = mapChar(stringB);
  if (Object.keys(aCharMap).length !== Object.keys(bCharMap).length) {
    return false;
  }
  for (let char in aCharMap) {
    if (aCharMap[char] !== bCharMap[char]) {
      return false;
    }
  }
  return true;
}
//anagram
//first sol 2
function sorter(str) {
  return str.replace(/[^\w]/g, '').toLowerCase().split('').sort().join('');
}

function anagram(stringA, stringB) {
  return sorter(stringA) === sorter(stringB);
}
//google anagram sum
function hasPairWithSum(arr, sum) {
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === sum) {
        return true;
      }
    }
  }
  return false;
}

function hasPairWithSum(arr, sum) {
  let mySet = new Set();
  for (let i = 0; i < arr.length; i++) {
    if (mySet.has(arr[i])) {
      return true;
    }
    mySet.add(sum - arr[i]);
  }
  return false;
}
//=============================================================================================
//capitalize every word
//sol 1
function capitalized(str) {
  const words = []
  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  return words.join(' ');
}
//sol 2
function capitalized(str) {
  const result = str[0].toUpperCase();
  for (let i = 1; i < str.length; i++) {
    if (str[i - 1] === ' ') {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  return result;
}
//======================================
// find vowels or specific string
function vowels(str) {
  let count = 0;
  let checker = ['a', 'e', 'i', 'o', 'u'];
  for (let char of str.toLowerCase()) {
    if (checker.includes(char)) {
      count++
    }
  }
  return count;
}
//sol2
function vowels(str) {
  let matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}
//=================================================================
// steps ### #### #####
//sol 2
function steps(n) {
  for (let row = 0; row < n; row++) {
    let stair = '';
    for (let col = 0; col < n; col++) {
      if (col <= row) {
        stair += '#';
      } else {
        stair += ' ';
      }
    }
    console.log(stair);
  }
}
// sol3 
function steps(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1);
  }

  const add = stair.length <= row ? '#' : ' ';
  steps(n, row, stair + add);
}
//===============================================
// pyramid 
// sol 1 
function pyramid(n) {
  let midPoint = Math.floor((2 * n - 1) / 2);
  for (let row = 0; row < n; row++) {
    let lvl = '';
    for (let col = 0; col < 2 * n - 1; col++) {
      if (midPoint - row <= col && midPoint + row >= col) {
        lvl += '#';
      } else {
        lvl += ' ';
      }
    }
    console.log(lvl);
  }
}
//sol 2
function pyramid(n, row = 0, level = '') {
  if (row === n) {
    return;
  }

  if (level.length === 2 * n - 1) {
    console.log(level);
    return pyramid(n, row + 1);
  }

  const midpoint = Math.floor((2 * n - 1) / 2);
  let add;
  if (midpoint - row <= level.length && midpoint + row >= level.length) {
    add = '#';
  } else {
    add = ' ';
  }
  pyramid(n, row, level + add);
}

//========================================================
//spiral matrix 
function matrix(n) {
  const results = [];
  for (let i = 0; i < n; i++) {
    results.push([]);
  }
  let counter = 1;
  let startColumn = 0;
  let endColumn = n - 1;
  let startRow = 0;
  let endRow = n - 1;
  while (startColumn <= endColumn && startRow <= endRow) {
    for (let i = startColumn; i <= endColumn; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;

    for (let i = startRow; i <= endRow; i++) {
      results[i][endColumn] = counter;
      counter++;
    }
    endColumn--;

    for (let i = endColumn; i >= startColumn; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;

    for (let i = endRow; i >= startRow; i--) {
      results[i][startColumn] = counter;
      counter++;
    }
    startColumn++;

  }
  return results;
}
//=====================================================
//fibonacci
function fib(n) {
  const result = [0, 1];
  for (let i = 2; i <= n; i++) {
    const a = result[i - 1];
    const b = result[i - 2];
    result.push(a + b);
  }
  return result[n];
}
//sol 2
function fib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}
//========================================
//memoize
function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  }
}

function slowFib(n) {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2)
}
fib = memoize(slowFib);
// algo s recursive 
// factorial
function findFactorialIterative(number) {
  let answer = 1;
  // you actually no longer need the if statement because of the for loop
  // if (number === 2) {
  //   answer = 2;
  // }
  for (let i = 2; i <= number; i++) {
    answer = answer * i;
  }
  return answer;
}

function findFactorialRecursive(number) {

  if (number === 2 || number === 1) {
    return number;
  }
  return number * findFactorialRecursive(number - 1)
}
///================================================
//arr
function firstDuplicate(a) {
  var store = new Set();
  for (var i = 0; i < a.length; i++) {
    if (store.has(a[i])) {
      return a[i];
    } else {
      store.add(a[i])
    }
  }

  return -1;

}

//======================
class Events {
  constructor() {
    this.events = {};
  }
  on(eventName, callback) {
    if (this.events[eventName]) {
      this.events[eventName].push(callback);
    } else {
      this.events[eventName] = [callback];
    }
  }
  trigger(eventName) {
    if (this.events[eventName]) {
      for (let cb of this.events[eventName]) {
        cb();
      }
    }
  }
  off(eventName) {
    delete this.events[eventName];
  }
}