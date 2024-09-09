// Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.

// You must implement a solution with a linear runtime complexity and use only constant extra space.

var singleNumber = function (nums) {
    let freq = {};
    for (let num of nums) {
        freq[num] = (freq[num] || 0) + 1;
    }

    for (let num in freq) {
        if (freq[num] === 1) {
            return Number(num);
        }
    }
};