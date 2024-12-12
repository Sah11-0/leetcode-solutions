// Given an array nums containing n distinct numbers in the range [0, n], return the only number in the range that is missing from the array.

var missingNumber = function (nums) {
    const n = nums.length;
    const expectedSum = (n * (n + 1)) / 2;
    const actualSum = nums.reduce((a, b) => a + b, 0);
    return expectedSum - actualSum;
};