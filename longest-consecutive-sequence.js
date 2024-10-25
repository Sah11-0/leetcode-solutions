// Given an array of integers nums, return the length of the longest consecutive sequence of elements.

// A consecutive sequence is a sequence of elements in which each element is exactly 1 greater than the previous element.

// You must write an algorithm that runs in O(n) time.

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        let res = 0;
        const store = new Set(nums);

        for (let num of nums) {
            if (!store.has(num - 1)) {
                let streak = 1;
                let curr = num;

                while (store.has(curr + 1)) {
                    curr++;
                    streak++;
                }
                res = Math.max(res, streak);
            }
        }
        return res;
    }
}