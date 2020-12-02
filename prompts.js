/*
Prompt 1: Write a function, using function keyword, named greeting. 
When invoked, greeting should print the string 'hey there'.
*/
function greeting() {
    console.log('hey there.');
}
greeting();

//Prompt 2: Write a function that can reverse a number.
function reversedNumber(num) {
    return parseFloat(num.toString().split('').reverse().join('') )
}

//Prompt 3: Write a function that checks whether the passed string is palindrome or not?
function isPalindrome(isIt) {
    isIt = isIt.toLowerCase();
    for(let i = 0; i < isIt.length; i++){
        if(isIt[i] !== isIt[isIt.length - 1 -i]){
            return false;
        } else{
            return true;
        }
    }
}

//Prompt 4: Create a function named alphaOrder that returns a passed string with letters in alphabetical order.
    function alphaOrder(alpha) {
        alpha = alpha.toLowerCase();
        return alpha.split('').sort().join('');
    }

/*
Prompt 5: Create a function named changeToLowerCase 
that accepts a string as a parameter and converts letters of each word of the string to lowercase
*/
function changeToLowerCase(){
    let words = '';
    return words.toLowerCase();
}

/*
Prompt 6: Make a function that accepts a string as a parameter 
and converts the first letter of each word of the string in uppercase.
*/
function firstLetter(firstWord) {
    let words = firstWord.split(" ")
    for (let i = 0; i < words.length; i++) {
        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
    }
   return words.join(" ")
}

//Prompt 7: Make a function that accepts a string as a parameter and find the longest word within the string.
function longestWord(text) {
    let sentence = text.split(' ');
    let maxLength = 0;
    let result = ' ';
    for(let i = 0; i <= sentence.length; i++) {
        if(sentence[i].length > maxLength){
            maxLength = sentence[i].length;
            result = sentence[i];
        }
    }
}

/*
Prompt 8: Create a function that takes two parameters: a and b. 
When called, multiply a times b. Print the answer to the console.
*/
function twoParams(a, b){
    return a*b;
}

//Prompt 9: Make an array of your choosing and write a function that returns the array.
let thisIsAnArray = [1,2,3]
function arr(thisIsAnArray){
    return thisIsAnArray;
}


//Prompt 10: Write a function to find the repeated character in a string.
function repeatedCharacter(find) {
    for(let i = 0; i <= find.length; i++){
        for(let m = i+1; m <= find.length; m++){
            if(find[m] === find[i]){
                return find[i].repeat(1);
            }
        }
    }
return false;
}

/*
Funktion- Create a Puppy Age Teller:
    Write a function named calculateDogAge that:
        takes 1 argument: your puppy's age.
        calculates your dog's age based on the conversion rate of 1 human year to 7 dog years.
        outputs the result to the screen like so: "Your doggie is _ years old in dog years!"
    Call the function three times with different sets of values.

*/
function calculateDogAge(puppyAge) {
    let question = prompt("What is your dog's age?");
    let puppyAge = question + 7;
    return 'Your doggie is ' + puppyAge + ' years old in dog years!';
}