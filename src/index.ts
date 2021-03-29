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
// O(n2) worst case , best case O(nlog n)
// import { quickSort } from "./algos/quickSort";
// const arr = [434,235,435,432,65,3,23,7,34,765,234,7]
// console.log(quickSort(arr))

// But sometimes the constant can make a difference. Quicksort versus merge sort is one example.
// AVERAGE CASE VERSUS WORST CASE


// -----------------------------------
// Hash function
// In technical terminology, we’d say that a hash function “maps strings to numbers.”
// Put a hash function and an array together, and you get a data structure called a hash table.
// Arrays and lists map straight to memory, but hash tables are smarter.


// collisions two keys have been assigned the same slot.
// if multiple keys map to the same slot, start a linked list at that slot.
// A good hash function will give you very few collisions. 
// To avoid collisions, you need
// • A low load factor (number of items in hash table) / total numbers of slots
//   Once the load factor starts to grow, you need to add more slots to your hash table. 
//   this is called resizing.
//   You need to resize this hash table. First you create a new array that’s bigger. 
//   The rule of thumb is to make an array that is twice the size.
// • A good hash function


// -----------------------------
// graph
// use to model a network
// breadth-first search algorith on graph help find shortest path.
// directed / undirected graph
// topological sort , exposes dependencies between nodes

// Breadth-first search allows you to find the shortest distance between two things.

// A graph models a set of connections.
// Graphs are made up of nodes and edges.
// directly connected nodes called neighbors

// A tree is a special type of graph, where no edges ever point back. 


// weighted graphs:
// Dijkstra’s algorithm , which lets you answer “What’s the shortest path to X?” for weighted graphs.
// with Dijkestra you find the fastest not shortest

// To calculate the shortest path in an unweighted graph, use breadth-first search. 
// To calculate the shortest path in a weighted graph, use Dijkstra’s algorithm.

// undirected graph means cycle graph


// To recap, Dijkstra’s algorithm has four steps:
// 1.Find the cheapest node. This is the node you can get to in the least amount of time.
// 2.Check whether there’s a cheaper path to the neighbors of this node. If so, update their costs.
// 3.Repeat until you’ve done this for every node in the graph.
// 4.Calculate the final path. (Coming up in the next section!)


// If you want to find the shortest path in a graph that has negative-weight edges, 
// there’s an algorithm for that! It’s called the Bellman-Ford algorithm.

// import { plain } from './challenges/step';
// // console.log(plain('Hi there', 'by there'))
// console.log(plain('hamid mamid'))


import {countingValley} from './challenges/countingValleys'
console.log(countingValley(8,'UDDDUDUU'))