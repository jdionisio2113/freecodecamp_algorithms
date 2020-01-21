/**
 Return the length of the longest word in the provided sentence.

Your response should be a number.
 */

function findLongestWordLength(str) {
    var result = str.split(' ');
    var maxLength = 0;

    for (var i = 0; i < result.length; i++) {
        if (result[i].length > maxLength) {
            maxLength = result[i].length;
        }
    }

    return maxLength

}

console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"));