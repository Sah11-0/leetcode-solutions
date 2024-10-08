// Given an integer array nums, return true if any value appears more than once in the array, otherwise return false.

class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        let count = {}
        nums.forEach(i => {
            count[i] = (count[i] || 0) + 1;
        })
        if (count[i] > 1) {
            return i;
        }
    }
}