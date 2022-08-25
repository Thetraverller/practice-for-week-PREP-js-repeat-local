function divideByThree(num) {
    /* Returns the passed in number argument divided by three. */
    // Your code here
    return num / 3;
};

function averageOfTwo(num1, num2) {
    /* Returns the average of two numbers, num1 and num2. */
    // Your code here
    let sum = num1 + num2;
    let avg = sum /2;
    return avg;

};

function averageOfFour(num1, num2, num3, num4) {
    /* Takes in four numbers. The function should return the average of all of
    the numbers. */
    // Your code here
    let sum = num1 +num2 + num3 +num4 ;
    let avg = sum / 4 ;
    return avg ;
};

function doubler(nums) {
    /* Takes an array of numbers and returns a new array where every element of
    the original array is multiplied by 2. */
    // Your code here
    let dnums = []
    for (let i = 0; i < nums.length; i++) {
          let newNums =  nums[i] *= 2 ;
          dnums = dnums.concat(newNums) ;
    }
    return dnums
};

function combineArrays(arr1, arr2) {
    /* Takes in two arrays of numbers and returns the two arrays combined into
    a single array. **Hint**: Use the `Array.concat` method but be aware that
    calling this method won't permanently change, also known as **mutate**,
    either array. */
    // Your code here

    let new_Arr = arr1.concat(arr2) ;
    return new_Arr ;

};

function wordWithinArray(word, arr) {
    /* Takes in both a word and an array of words as arguments and returns a
    boolean that returns true if that string is located inside of the array, or
    false if it does not. Use `Array.indexOf`. */
    // Your code here

    // for (i = 0 ; arr.length; i++) {     ###this method works on the test but less efficient
    //     if (word === arr[i]) {
    //         return true ;
    //     }
    // }

    //     # A correct method
    //     if ( arr.indexOf(word) !== -1 ) {
    //         return true ;
    //     }
    //

        return arr.indexOf(word) !== -1 ;
};

function echo(str) {
    /* Takes in a string and returns that string "echo-ized". E.g.
    echo("Mom!"); // => returns "MOM! ... Mom! ... mom!"
    echo("hey"); // => returns "HEY ... hey ... hey"
    echo("JUMp"); // => returns "JUMP ... JUMp ... jump" */
    // Your code here

    let str_UC =  str.toUpperCase()  ;
    let str_LC =  str.toLowerCase()  ;

    return str_UC + " ... " + str + " ... " + str_LC ;

};

function fizzBuzz(max) {
    /* Takes a number, max and returns an array that contains every number from
    0 to max (not inclusive) that is divisible by either 3 or 5, **but not both**. */
    // Your code here
    let nums = [];

    for (i = 0 ; i < max; i++) {
        if ((i % 3 === 0 || i % 5 === 0) && !(i % 3 === 0 && i % 5 === 0) )
        {
            nums.push(i) ;      }
    }
        return nums ;
};

function hello(name) {
    /* Takes in a string name and returns a string saying "Hello, " to that name. */
    // Your code here
    let greet = "Hello, " + name;
    return greet

};


function goodbye(name) {
    /* Takes in a string name and returns a string saying "Bye, " to that name. */
    // Your code here
    let fw = "Bye, " + name;
    return fw;
};

function isFive(num) {
    /* Takes in a number, num, and returns `true` if a number is equal to 5 and
    `false` if it is not. */
    // Your code here
   return num === 5;
};

function isOdd(num) {
    /* Takes in a number and returns `true` if the number is odd and returns
    `false` otherwise. Try writing this with and without `if` statements */
    // Your code here
    return num % 2 !== 0;
};

function isSubString(searchString, subString) {
    /* Takes in two strings, `searchString` and `subString`. Should return
    `true` if `subString` is a part of the`searchString`, regardless of upper
    or lower case, and `false` if otherwise. */
    // Your code here
    let Lsearchs = searchString.toLowerCase() ;
    let Lsubs = subString.toLowerCase() ;

    return Lsearchs.indexOf(Lsubs) !== -1;
};

function aCounter(word) {
    /* Takes in a word and returns the number of a's within that word. Counts
    both lowercase (a) and uppercase (A). Your job is to translate the following
    function to use a `for` loop instead of the `while` loop it is currently
    using. */

    /*
    let index = 0;
    let count = 0;
    while (index < word.length) {
        let char = word[index];
        if (char === "a" || char === "A") {
        count += 1;
        }
        index++;
    }
    return count;
    */
    // Your code here
    let count = 0 ;
    for (i=0 ; i<word.length; i++) {
        let char = word[i]
        if (char === "a" || char === "A") {
            count += 1;
        }
    }
    return count;
};

module.exports = {
    divideByThree,
    averageOfTwo,
    averageOfFour,
    doubler,
    combineArrays,
    wordWithinArray,
    echo,
    fizzBuzz,
    hello,
    goodbye,
    isFive,
    isOdd,
    isSubString,
    aCounter
}
