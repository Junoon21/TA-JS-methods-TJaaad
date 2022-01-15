let message = 'If you are still thinking the answer is no!';

// Log the length of the variable message like `The length of [message] is [length]`
console.log(`The length of "${message}" is ${message.length}`);
// Log the character at index 0 of the variable message like `The first character of [message] is [character]`
`The first character of "${message}" is ${message.charAt(0)}`
// Log the last character of message using length like `The last character of [message] is [character]`
`The last character of ${message} is ${message.charAt(40)}`;
// Log the index of word "you" in message
`The last character of ${message} is ${message.charAt(3)}`;
// Log the index of word "still" in message
`The last character of ${message} is ${message.charAt(11)}`;
// Log the index of word "answers" in message

// Log true or false based on whether the word "answers" exist in message or not

// Log true or false based on whether the word "they" exist in message or not

// Log true or false based on whether the word "is" exist in message or not

// Log true or false based on whether the word "Is" exist in message or not

// Check and log whether the word from index 3 to 6 is "you" or not (use slice)

// Check and log whether the word from index 7 to 8 is "a" or not

// Check and log whether the last 3 character in message is "no!" or not (you can use -3 in slice)

// Check and log whether the last 5 character in message is "no!" or not

// Log the message variable, all in lowecase

// Log the message variable, all in uppercase

// Replace the word "are" to "can't", store it in a new variable named `newMessage` and log it.

// Replace the word "still" to "" (empty) using newMessage variable, and re-assign the output to the variable `newMessage` and log it.

// Replace the word "thinking" to "decide" using newMessage variable, and re-assign the output to the variable `newMessage` and log it.

// Log all the characters from the message variable (you can user for..of loop on string)

// Split all the words in message (split by " " space) and store it in a variable messageArray

// Log all the words of messageArray
    //1st     2nd       4th
for(let i=0;i <= Number;i++){
    //3rd
    numb+=i;
}
numb=6;
Number=4;
i=2;
// while
let i=0; //1st
        //2nd
while(i) <= Number){
    let i=0;
    numb+=i;
    i++;
}

////
function sumOrProductOfN(numb, operation) {
    if (operation == "sum") {
        let sum = 0;
        for (let i = 5; i <= numb; i++) {
            sum += i;
        }
        return sum;
    } else if (operation == "product") {
        let product = 1;
        for (let i = 1; i <= numb; i++) {
            product *= i;
        }
        return product;
    } else alert(`Not a valid Input`);
}
sumOrProductOfN(4,"sum"); //1st
sum=10;