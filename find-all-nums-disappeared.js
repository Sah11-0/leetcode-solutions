// Given an array nums of n integers where nums[i] is in the range [1, n], return an array of all the integers in the range [1, n] that do not appear in nums.

function findDisappearedNumbers(nums) {
    const setNums = new Set(nums);
    const res = [];

    for (let i = 1; i <= nums.length; i++) {
        if (!setNums.has(i)) {
            res.push(i);
        }
    }

    return res;
};