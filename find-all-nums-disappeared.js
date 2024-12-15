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

//solution 2
function findDisappearedNumbers(nums) {
    for (let num of nums) {
        const index = Math.abs(num) - 1;
        nums[index] = -Math.abs(nums[index]);
    }

    const res = [];
    for (let i = 0; i < nums.length; i++) {
        if (nums[i] > 0) {
            res.push(i + 1);
        }
    }

    return res;
};