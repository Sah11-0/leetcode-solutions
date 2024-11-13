// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

var containsDuplicate = function (nums) {
    let numsMap = {}

    for (let n of nums) {
        numsMap[n] = (numsMap[n] || 0) + 1;

        if (numsMap[n] >= 2) {
            return true;
        }
    }
    return false;
};