// # Given the array nums, for each nums[i] find out how many numbers in the array are smaller than it.That is, for each nums[i] you have to count the number of valid j's such that j != i and nums[j] < nums[i]. Return the answer in an array.

var smallerNumbersThanCurrent = function (nums) {
    let sorted = [...nums].sort((a, b) => a - b);

    let map = {};
    sorted.forEach((num, index) => {
        if (map[num] === undefined) {
            map[num] = index;
        }
    });

    return nums.map(num => map[num]);
};
