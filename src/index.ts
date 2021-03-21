// An algorithm is a set of instructions for accomplishing a task.
// Big O notation tells you how fast an algorithm is.
// Big O notation lets you compare the number of operations.

// binary search
// Binary search is an algorithm; its input is a sorted list of elements
// O(log(n))
// import { binarySearch } from './algos/binarySearch';
// const el = binarySearch([1,2,3,4,5,6,7,8,9,10], 8)
// console.log(el)

// ----------------
// challenges
// import { salesByMatch } from './challenges/salesByMathc';
// console.log(salesByMatch(12, [1,2,1,2,1,3,3,4,3,3,4,3]))
// console.log(salesByMatch(23, [1,2,1,2,1,3,3,4,3,3,4,3,6,7,8,9,10,4,5,6,7,8,6]))


// --------------------
// linked list are good for insertion, bad for read
// array provide random access
// selectionSort
import { selectionSort } from './algos/selectionSort';
const arr = [434,235,435,432,65,3,23,7,34,765,234,7]
console.log(selectionSort(arr))
