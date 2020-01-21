/**
Return the factorial of the provided integer.

If the integer is represented with the letter n, a factorial is the product of all positive integers less than or equal to n.

Factorials are often represented with the shorthand notation n!
 */

function factorialize(num) {
    // use recursion
    if (num < 0) return;
    if (num === 0) return 1;
    return num * factorialize(num - 1)
}

console.log(factorialize(5));
