const perf = require('execution-time')();

function addToZero(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = i+1; j < array.length; j++) {
            if (array[i] + array[j] === 0) {
                return true
            }
        }
    }
    return false

    // time complexity = O(n^2), space complexity = O(1)
    // runtime = 90.7 microseconds
}

perf.start();  
addToZero([1, 2, 3, -2])
let resultone = perf.stop()
console.log("add to zero ", resultone.preciseWords);

// -----------------------------------------------------------------------------------------

function hasUniqueChars(input_string) {
for (let i = 0; i < input_string.length; i++) {
for (let j = i+1; j < input_string.length; j++) {
if (input_string.charAt(i) === input_string.charAt(j)) {
    return false
}
}
}
return true

// time complexity = O(n^2), space complexity = O(1)
// runtime = 42.8 microseconds

}

perf.start();  
hasUniqueChars("Moonday")
let resulttwo = perf.stop()
console.log("has unique chars ", resulttwo.preciseWords);

// -----------------------------------------------------------------------------------------

function isPangram(string) {
    let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

    for (let i = 0; i < string.length; i++) {
        if (alphabet.includes(string[i])) {
            let ii = alphabet.indexOf(string[i])
            alphabet.splice(ii, 1)
        }
        if (alphabet.length === 0) {
            return true
        }
    }
    return false
    // time complexity = O(n log n), space complexity = O(1)
    // runtime = 115.1 microseconds

}

perf.start();  
isPangram("The quick brown fox jumps over the lazy dog!")
let resultthree = perf.stop()
console.log("is pangram ", resultthree.preciseWords);

// -----------------------------------------------------------------------------------------

function findLongestWord(array) {
    let length = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i].length > length) {
            length = array[i].length
        }
    }
    return length
    // time complexity = O(n log n), space complexity = O(1)
    // runtime = 59.2 microseconds

}

perf.start();  
findLongestWord(["hi", "hello", "test"])
let resultfour = perf.stop()
console.log("find longest word ", resultfour.preciseWords);