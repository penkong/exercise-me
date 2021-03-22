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
// import { selectionSort } from './algos/selectionSort';
// const arr = [434,235,435,432,65,3,23,7,34,765,234,7]
// console.log(selectionSort(arr))


// ------------------------
// recursion 
// base case and recursive case 
// divide and conquer strategy
// The recursive case is when the function calls itself.
// The base case is when the function doesn’t call itself again
// Recursive functions use the call stack 
// tail recursion. That’s an advanced recursion topic that is out of the scope of this book. 


// ---------------------------
// quick sort
// quick sort use divide and conquer
// always ask “Can I solve this if I use divide and conquer?”
// D&C algorithms are recursive algorithms. 
// To solve a problem using D&C, there are two steps:
// 1.Figure out the base case. This should be the simplest possible case.
// 2.Divide or decrease your problem until it becomes the base case.
// reduce the problem to smaller chunk
// recursion keeps track of the state
// pivoting , and base on that do partitioning
// nductive proofs! Inductive proofs are one way  to  prove  that  your  algorithm  works.
import { quickSort } from "./algos/quickSort";
const arr = [434,235,435,432,65,3,23,7,34,765,234,7]
console.log(quickSort(arr))





























