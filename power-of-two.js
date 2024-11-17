// Given an integer n, return true if it is a power of two. Otherwise, return false.

var isPowerOfTwo = function (n) {
    return n > 0 && (n & (n - 1)) === 0;
};

//iterative
function isPowerOfTwoIterative(n) {
    if (n <= 0) return false;
    while (n > 1) {
        if (n % 2 !== 0) return false;
        n = n / 2;
    }
    return true;
}