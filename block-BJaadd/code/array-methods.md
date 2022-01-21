Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

## Getting To Know Array Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (2-3 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your words what this method does.
6. Does it mutate the original value or not (check https://doesitmutate.xyz)

Example:

1. `concat`

   - Parameter: n (any) number of values (number, string, boolean, array, null, undefined, object and function etc)
   - Return: a single Array consisting of by all the values passed as parameters in the same order.
   - Example:
     ```js
     let numbers = [1, 2, 3];
     numbers.concat(4); //[1,2,3,4]
     let sentanceArray = 'A quick brown fox jumped over a lazy'.split(' ');
     sentanceArray.concat('dog').join(' '); //"A quick brown fox jumped over a lazy dog"
     let colors = ['red', 'green', 'blue'];
     colors.concat('black', 'red', 21, true); // ['red','green','blue','black', 'red', 21, true]
     ```
   - `concat` accepts n number of values and returns one array with all the values in same order. It does not change the original array.
   - No it does not mutate the original array

2. `join`
 The join method creates and returns a new string by concatenating all of the elements in an array seperated by commas or a specified seperator string.If the array has only one item it will be returned without seperator.
 ```js
 let fruits = ['apple','mango','banana'];
 fruits.join();
'apple,mango,banana'
fruits.join('');
'applemangobanana'
fruits.join(' ');
'apple mango banana'
fruits.join('@');
'apple@mango@banana'

 ```
3. `flat`
Flat method creates a new array with all sub arrays concatenated into it recursively with specified depth.
```js
numbers.flat();
(5) [1, 2, 3, 4, Array(3)]
numbers.flat(2);
(7) [1, 2, 3, 4, 5, 6, Array(2)]
numbers;
(3) [1, 2, Array(3)]
numbers.flat(Infinity);
(8) [1, 2, 3, 4, 5, 6, 7, 8]
```
4. `push`
Push is used to insert elements in array from the last index. It is a mutating method.
```js
let numbers=[1,2,3,4,5];
undefined
numbers.push(12);
6
numbers
(6) [1, 2, 3, 4, 5, 12]
fruits.push("strawbwrry")
4
fruits
(4) ['apple', 'mango', 'banana', 'strawbwrry']
```
5. `indexOf`
Gives the index of a specified element if it is present in the array. If it is not present it gives -1.
```js  
let text = "lorem ipsum lorem ipsum";
text.indexOf("lorem");
0
text.indexOf("ipsum");
6
text.indexOf("ipsu");
6
text.indexOf("u");
9
text.indexOf(" ");
5
```
6. `lastIndexOf`
Lastindexof gives the index of an element present in the array but it starts checking the value from back of the array.
```js 
text.lastIndexOf(" ");
17
text.lastIndexOf("um");
21
text.lastIndexOf("lorem");
12
```
7. `includes`
Checks if a particular string or elemnt is present in the array or not.
```js
numbers.includes(4)
true
text.includes("lore");
true 
```
8. `reverse`
Reverse is used to reverse an array, where the first eleemnt becomes the last and vice versa.
```js
numbers.reverse()
(6) [12, 5, 4, 3, 2, 1]
fruits.reverse()
(4) ['strawbwrry', 'banana', 'mango', 'apple']
```
9. `every`
Every method tests whether each and every elements of the array pass the test or not. A function is passed in the every() and parameter.
```js 
numbers
(6) [12, 5, 4, 3, 2, 1]
let isGreater = (para) => para > 0;
undefined
numbers.every(isGreater)
true
```
10. `shift`
Shift is used when we need to remove elements from the beginning of the the array. 
```js
numbers.shift(32)
12
numbers
(5) [5, 4, 3, 2, 1]0: 51: 42: 33: 24: 1length: 5[[Prototype]]: Array(0)
let flowers = ["rose","lily"]
undefined
flowers.shift()
'rose'
flowers
['lily']
```
11. `splice`
Splice is used to cut array from inbetween when the starting index is given also the number of elements to be sliced can be given or else all the elements till end wwill be cut.
```js
numbers.splice(3,2)
(2) [3, 2]
numbers
(4) [32, 5, 4, 1]
flowers.splice(0)
(2) ['marigold', 'lily']
flowers
[]
```
12. `find`
Find method returns the first value in the array that satisfies the condition of the function.
```js
let numbers=[1,2,3,4,5];
undefined
numbers.find(4)
VM164:1 Uncaught TypeError: 4 is not a function
    at Array.find (<anonymous>)
    at <anonymous>:1:9
(anonymous) @ VM164:1
// hence find always takes a function to check condition 
let gretaer=(para) => para>0;
undefined
numbers.find(gretaer)
1
```
13. `unshift`
Unshift is used when we want to add eleemnts to the array from index 0.
```js
numbers.unshift(32)
6
numbers
(6) [32, 5, 4, 3, 2, 1]
flowers.unshift("marigold")
2
flowers
(2) ['marigold', 'lily']
```
14. `findIndex`
Is used to findIndex of an element present in array , it can also be a part ot the element.
```js
flowers.indexOf("lily")
1
flowers.indexOf("lil")
-1 // when not present
```
15. `filter`
filter is the method which creates a new array with all the elements which pass the test . 
```js

```
16. `flat`
flat is used to put the elements from the nested arrays to the main array.
```js
arr.flat()
(7) [1, 3, 4, 4, 56, 67, Array(4)]
arr.flat(2)
(10) [1, 3, 4, 4, 56, 67, 5, 6, 7, 8]
arr.flat(1)
(7) [1, 3, 4, 4, 56, 67, Array(4)]
```
17. `forEach`
foreach is a method which executes a function for each provided element in the array.
```js
function check(para){
   console.log(para);
}
undefined
arr.forEach(check)
VM1536:2 1
VM1536:2 2
VM1536:2 3
VM1536:2 4
VM1536:2 5
2VM1536:2 6
VM1536:2 7
```
18. `map`

19. `pop`
pops out array elements from back of array
20. `reduce`
reduces the array with all its elements to a value. 
21. `slice`
22. `some`
