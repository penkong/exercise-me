
export const countingValley = (steps: number, path: string) => {
  let count = 0
  let lvl = 0
  const strArr = path.split('');
  for (let i= 0;i < steps; i++) {
    if(strArr[i] == strArr[i+1]) {
      count++
      lvl--
    } else {
      lvl++
      count++
    }
  }
  console.log(count)
  return lvl;
}