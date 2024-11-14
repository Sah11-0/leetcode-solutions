//Given two integers a and b, return the sum of the two integers without using the operators + and -.

var getSum = function (a, b) {
    while (b !== 0) {
        let sum = a ^ b;

        let carry = (a & b) << 1;

        a = sum;
        b = carry;
    }
    return a;

};