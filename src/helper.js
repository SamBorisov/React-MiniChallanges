var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

const newNum = numbers.map( x => x * 2)
console.log(newNum)

let newNumm = []
numbers.forEach( x => newNumm.push(x * 2))
console.log(newNumm)

//Filter - Create a new array by keeping the items that return true.

const filtered = numbers.filter( x =>  x > 10)
console.log(filtered)

let filteredArr = []
numbers.forEach( x => {
  if (x < 10){
    filteredArr.push(x);
  }
})
console.log(filteredArr)

//Reduce - Accumulate a value by doing something to each item in an array.
let reducedNum = 0;
numbers.forEach(currX => reducedNum += currX)
console.log(reducedNum)

const usingReduce = numbers.reduce( (accumulator, currX) => accumulator + currX)
console.log(usingReduce)
//Find - find the first item that matches from an array.

const findNum = numbers.find( x => x > 10)
console.log(findNum)
//FindIndex - find the index of the first item that matches.

const findINum = numbers.findIndex( x => x > 10)
console.log(findINum)




// only 60 characters for the meaning 
import emojipedia from "./emojipedia";

const text = emojipedia.map(function (x) {
  return String(x.meaning).substring(0, 60);
});

console.log(text);
