export const salesByMatch = (n: number, arr: number[]) => {
  let pair = 0;
  const obj: {[key: string]: number} = {}

  for (let i= 0 ; i < n; i++) {
    obj[arr[i]] ? obj[arr[i]]++ : obj[arr[i]] = 1
  }
  for (let el in obj) {
    pair += Math.floor(obj[el]/2) 
  }
  return pair
}