// export const palin = (str: string) => {
//   const reversed = str.split('').reverse().join('')
//   return str === reversed
// }

// export const plain = (n : number) => {
//   const rev = n.toString().split('').reverse().join('')
//   if(n <0 ) return parseInt(rev) * -1
//   return parseInt(rev)
// }

// export const plain = (str : string) => {
//   const obj: any = {}
//   let max = 0;
//   let maxChr ='';
//   for (let el of str.toLowerCase().split('')) {
//     obj[el] = ++obj[el] || 1
//   }

//   for( let char in obj) {
//   }

//   return Object.values(obj)
// }

// export const plain = (arr: number[], size: number) => {
//   let oldArr = [...arr]

//   let newArr = []
//   while (oldArr.length > size) {
//     newArr.push(oldArr.splice(0, size))
//   }
//   newArr.push(oldArr)
//   return newArr
// }

// export const plain = (strA: string, strB: string) => {
//   const objStrA: any = {}
//   const objStrB: any = {}

//   for (let el of strA.toLowerCase().replace(/[^\w]/g, "")) {
//     objStrA[el] = ++objStrA[el] || 1;
//   }

//   for (let el of strB.toLowerCase().replace(/[^\w]/g, "")) {
//     objStrB[el] = ++objStrB[el] || 1;
//   }

//   console.log(Object.keys(objStrA))
//   console.log(objStrA)
//   console.log(objStrB)
//   return null
// }


// export const plain = (str: string) => {
//   const arrStr = str.toLowerCase().split(' ');
//   return arrStr.map(el => {
//     let newEl = el.split('')
//     return newEl[0].toUpperCase() + newEl.slice(1,newEl.length).join('')
//   }

//   ).join(' ')
// }


// export const plain = (str: string) => {
//   const vowels = ['a', 'e', 'i', 'o' , 'u']
//   let num = 0;
//   for(let el of str.toLowerCase()) {
//     if(vowels.includes(el)) {
//       num++
//     }
//   }

//   return num
  
export const plain = (n: number) => {
  let mainArr = []
   

}