// Write an algorithm to determine if a number n is happy.
// A happy number is a number defined by the following process: Starting with any positive integer, replace the number by the sum of the squares of its digits. Repeat the process until the number equals 1 (where it will stay), or it loops endlessly in a cycle which does not include 1. Those numbers for which this process ends in 1 are happy. Return true if n is a happy number, and false if not.

function isHappy(n) {
    const seen = new Set();

    while (n !== 1) {
        if (seen.has(n)) return false;
        seen.add(n);

        n = n.toString().split('').reduce((sum, digit) => {
            return sum + Math.pow(Number(digit), 2);
        }, 0);
    }

    return true;
}

//Floyd's Cycle Detection Algorithm
function isHappy(n) {
    const getSumOfSquares = (num) => {
        let sum = 0;
        while (num > 0) {
            let digit = num % 10;
            sum += digit * digit;
            num = Math.floor(num / 10);
        }
        return sum;
    };

    let slow = n, fast = n;

    do {
        slow = getSumOfSquares(slow);
        fast = getSumOfSquares(getSumOfSquares(fast));
    } while (slow !== fast);

    return slow === 1;
};