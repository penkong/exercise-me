export const quickSort = (arr: number[]): number[] => {
  // base case 
  if (arr.length < 2) return arr

  const lesser = []
  const greater = []

  const pivot = arr[Math.floor((0 + arr.length) /2)]

  for(let i = 1; i <arr.length; i++){
    if(arr[i] <= pivot) lesser.push(arr[i])
    else greater.push(arr[i])
  }
  

  return [...quickSort(lesser), pivot, ...quickSort(greater)]
}