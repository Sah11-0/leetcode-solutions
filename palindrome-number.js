// Given an integer x, return true if x is a palindrome, and false otherwise.

var isPalindrome = function (x) {
    if (x < 0) return false;

    let originalNum = x;
    let reversedNum = 0;

    while (x > 0) {
        let lastDigit = x % 10;
        reversedNum = reversedNum * 10 + lastDigit;
        x = Math.floor(x / 10);
    }
    return originalNum === reversedNum;
}