Watch this video to understand what to do in this exercise block [link](https://www.youtube.com/watch?v=zGpplZj4zY0&feature=youtu.be)

#### Getting To Know String Methods

Go to this [link](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) and look for the name of method to learn about it.

**Write in your own way of understanding (don't copy paste)**

Only if you are done with step 1 you should go ahead.

1. Practice it by yourself in console (4-5 times to understand)
2. Data types of parameters
3. Return value type
4. Write three examples
5. In your own words and one sentence explain what this method does.

Example:

1. `charAt`

   - Parameter: (index) defaults to 0 - (number data type)
   - Return: character at specific index in the string (string data type)
   - Example:
     ```js
     let name = 'Arya Stark';
     name.charAt(2); //"y"
     let sentance = 'A quick brown fox jumped over a lazy dog';
     sentance(4); // "i"
     let houseName = 'Starks';
     houseName.charAt(0); // "S"
     ```
   - `charAt` accepts a index (number data type) and return the character on that index in the string.

2. `toUpperCase`
```js
`toUpperCase`- is used to convert a string to uppercase.
let name = 'Arya Stark';
name.toUpperCase();
'ARYA STARK'

```
3. `toLowerCase`
```js
`toLowerCase`- is used to convert string to lower case.
let name = "myName";
name.toLowerCase();
myname
```
4. `trim`
```js
`trim`- is used to remove all the white spaces.
let flower = "  jasmine   ";
flower.trim();
'jasmine'

```
5. `trimEnd`
```js 
`trimEnd`- is used to trim the whitespaces present at the end.
let flower = "  jasmine   ";
flower.trimEnd();
'  jasmine'

```

6. `trimStart`
```js
`trimStart`- is used to trim the whitespaces only from the start.
let flower = "  jasmine   ";
flower.trimStart();
'jasmine  '
```
7. `concat`
```js
`concat`- is used for concatenation or joining many strings together.
let flower = "jasmine";
let text ="is a flower";
flower.concat(text);
'jasmineis a flower'
flower.concat(' ' ,text);
'jasmine is a flower'
```
8. `endsWith`
```js
`endsWith`-checks if a string ends with a particular letter/character.
flower.endsWith('ne');
true
flower.endsWith('xvr');
false
```
9. `includes`
```js
`includes`- to check if it includes a particular string/ letter .
let flower ="jasmine";
flower.includes('jas');
true
```
10. `indexOf`
```js
`indexOf`- tells the index or position of an element or letter .
let text="lorem ipsum dolar sit amet consecture";
text.indexOf('dolar');
12
```

11. `lastIndexOf`
```js
`lastIndexOf`- is used to find the index of the last such element.
let text = "lorem ipsum dola lorem ipsum dol";
text.lastIndexOf('lorem');
17.

```
12. `padEnd`
```js
`padEnd`- is used to insert elements at last.
flower.padEnd('10','.');
'jasmine...'
```
13. `padStart`
```js
`padStart`- is used to insert elements at start.
flower.padStart('10','.');
'...jasmine'

```
14. `repeat`
```js
`repeat`- used to repeat strings.
flower.repeat(2);
'jasminejasmine'
```
15. `replace`
```js 
`replace`- used to replace string.
let text = "lorem ipsum lorem ipsum";
text.replace('ipsum','lorem');
'lorem lorem lorem ipsum'
text.replace('ipsum');
'lorem undefined lorem ipsum'
fruit.replace('a','🍎')
'🍎pple'

`replaceAll`- used to replace all the strings with the given new string.
let text = "lorem ipsum lorem ipsum";
text.replace('ipsum','lorem');
'lorem lorem lorem lorem'
```
16. `slice`
```js
`slice`- is used to cut the strings , it has two parameters , firstindex and last index. The new string includes firstindex and the strings till the last index.
flower.slice(0,3);
'jas'
```
17. `split`
```js
`split`- is used to split strings with the given element.
flower.split('m');
(2))['jas','ine']
let text="abcmabcmabc";
text.split('m');
['abc', 'abc', 'abc']
```
18. `substring`
```js
`substring`- is used to cut the strings , it has two parameters, firstindex and lastindex are the two parameters it accepts. The difference from slice is that it reverses the values if they are given in descending.
let text="abcmabcmabc";
text.substring(5,0)
'abcma'
text.substring(0,5)
'abcma'
text.substring(5,Nan))
'abcma'
flower.substring(2,Nan)
'ja'

```
