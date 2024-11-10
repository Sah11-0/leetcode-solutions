// Given an integer array nums sorted in non-decreasing order, return an array of the squares of each number sorted in non-decreasing order.

var sortedSquares = function (nums) {
    const sqNums = nums.map(x => x * x);
    const res = [];
    let l = 0;
    let r = sqNums.length - 1;

    while (l <= r) {
        if (sqNums[l] > sqNums[r]) {
            res.push(sqNums[l]);
            l++;
        } else {
            res.push(sqNums[r]);
            r--;
        }
    }
    return res.reverse();
};
