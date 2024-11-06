// Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// You can return the answer in any order.

var twoSum = function (nums, target) {
    const map = new Map();

    for (let i = 0; i < nums.length; i++) {
        const diff = target - nums[i];

        if (map.has(diff)) {
            return [map.get(diff), i]
        }
        map.set(nums[i], i);
    }

    return [-1, -1];
};


//Given an array of numbers, return all pairs that add up to a given sum. The numbers can be used more than once.

function twoSumPairs(arr, sum) {
    const seenNums = {};
    const pairs = [];

    for (const currentNum of arr) {
        const diff = sum - currentNum
        if (seenNums[diff]) {
            pairs.push([currentNum, diff])
        } else {
            seenNums[currentNum] = true;
        }
    }
    return pairs;
}