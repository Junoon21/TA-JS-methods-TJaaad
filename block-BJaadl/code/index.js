let words = [
  'mystery',
  'brother',
  'aviator',
  'crocodile',
  'pearl',
  'orchard',
  'crackpot',
  'rhythm',
];

// - Write a function findLongestWord that takes an array of words and returns the longest word from the array. (Use above array "words" to test it). If there are 2 with the same length, it should return the first occurrence.
// function findLongestWord(arr){
//   var longestWord = arr[0];
//  for(let element of arr){
//    if(longestWord.length > arr[element].length){
//      continue;
//    }
//    else {
//      longestWord = arr[element];
//    }
   
//  }
//  return longestWord;
// }

//let longFinal = findLongestWord(words);
function findLongestWord(array){
  return [...array].sort((a,b) => a.length - b.length).pop();
}
findLongestWord(words);
// - Convert the above array "words" into an array of length of word instead of word.
let lengthWord = words.map( (word) => word.length);

// - Create a new array that only contains word with atleast one vowel.
let newArr = words.filter(checkVovel);

function checkVovel(word){
  return word.toLowerCase().includes("a") || word.toLowerCase().includes("e") || word.toLowerCase().includes("i")  || word.toLowerCase().includes("o") || word.toLowerCase().includes("u");
}
// - Find the index of the word "rhythm"
let index = words.indexOf("rhythm");
//console.log(words.indexOf((w) => w == "rhythm"));
// - Create a new array that contians words not starting with vowel.
let notStarting = words.filter((w) => !checkVovel(w[0]));
// - Create a new array that contianse words not ending with vowel
let notEnding = words.filter((w) => !checkVovel(w[w.length - 1])) ;


let numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

// - Create a sumArray function that takes an array of number as a parameter, and calculate the sum of all its numbers
function sumArray(arr){
  var sum =0;
  for(let element of arr){
    sum += element;
  }
  return sum;
}
function sumArray(arr){
  arr.reduce ((acc,cv) => {
    acc += cv;
   return acc;
  },0);
}
// - Make a new array that contains number multiplied by 3 like [6, 18, 27 ...]
// function multiplyByThree(num){
//   let newArray = [];
  
// }
let newArray = numbers.map((val) => val*3);
// - Create a new array that contains only even numbers
let onlyEven = numbers.filter((val) => val % 2 == 0);
// - Create  a new array that contains only odd numbers.
let onlyOdd = numbers.filter( (val) => val % 2 );
// - Create a new array that should have true for even number and false for odd numbers.
let trueOrFalse = numbers.map( (val) => val % 2 ? "true" :  "false");
// - Sort the above number in assending order.
let sortedAscending = [...numbers].sort( (a,b) => a-b);
// - Does sort mutate the original array?
//yes sort mutates the original array so we use spread operator to clone the array before sorting .
// - Find the sum of the numbers in the array.
let sumOfSorted = numbers.reduce( (acc,cv) => {
  acc += cv;
  return acc;
},0);
//- Write a function averageNumbers that receives an array of numbers and calculate the average of the numbers
function averageNumbers(arr){
  let averageNum = arr.reduce((acc,cv) => {
    acc += cv;
    return acc;
  },0)/arr.length;
} 

let strings = [
  'seat',
  'correspond',
  'linen',
  'motif',
  'hole',
  'smell',
  'smart',
  'chaos',
  'fuel',
  'palace',
];

// - Write a function averageWordLength that receives an array of words2 and calculate the average length of the words.
function averageWordLength(words2){
  let ans = words2.map((word) => word.length).reduce( (acc,cv) => {
    acc = acc + cv;
    return acc;
  },"")/words2.length;
}