const findSmallest = (arr: number[]): number =>{
  let smallest = arr[0]
  let smallestIndex = 0
  for (let i = 0; i< arr.length; i++) {
    if(arr[i] < smallest) {
      smallest = arr[i]
      smallestIndex = i
    }
  } 
  return smallestIndex
}
export const selectionSort = (arr: number[]): number[] => {
  const sortedArr = [];
  let container = [...arr]
  while(container.length) {
    const smallest = findSmallest(container)
    sortedArr.push(container[smallest])
    container.splice(smallest, 1)
  }
  return sortedArr
}