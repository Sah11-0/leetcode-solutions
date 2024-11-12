// The Fibonacci numbers, commonly denoted F(n) form a sequence, called the Fibonacci sequence, such that each number is the sum of the two preceding ones, starting from 0 and 1. That is,

// F(0) = 0, F(1) = 1
// F(n) = F(n - 1) + F(n - 2), for n > 1.
// Given n, calculate F(n).

//recursive
const fib = (function () {
    const memo = {};
    return function (n) {
        if (n <= 0) return 0;
        if (n <= 1) return 1;

        if (memo[n]) return memo[n];

        memo[n] = fib(n - 1) + fib(n - 2);
        return memo[n];
    };
})();


//iterative
var fib = function (n) {
    if (n <= 0) return 0;
    if (n === 1) return 1;

    let a = 0, b = 1, sum = 0;
    for (let i = 2; i <= n; i++) {
        sum = a + b;
        a = b;
        b = sum;
    }
    return b;
};
