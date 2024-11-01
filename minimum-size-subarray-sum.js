// Given an array of positive integers nums and a positive integer target, return the minimal length of a subarray whose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

var minSubArrayLen = function (target, nums) {
    let prevTotal = 0;
    let lowestRunCount = 0;
    for (let i = 0; i < nums.length; i++) {
        prevTotal += nums[i];
        lowestRunCount++;

        if (prevTotal >= target) {
            break;
        }
    }

    if (prevTotal < target) {
        return 0;
    }
    for (let i = 1; i < nums.length; i++) {
        const currentTotal = prevTotal - nums[i - 1];
        if (currentTotal >= target) {
            lowestRunCount--;
            prevTotal = currentTotal;
        } else {
            prevTotal = currentTotal + nums[i + lowestRunCount - 1];
        }
    }
    return lowestRunCount;
};


//optimal solution
var minSubArrayLen = function (target, nums) {
    let minLength = Infinity;
    let currentSum = 0;
    let start = 0;

    for (let end = 0; end < nums.length; end++) {
        currentSum += nums[end];

        while (currentSum >= target) {
            minLength = Math.min(minLength, end - start + 1);
            currentSum -= nums[start];
            start++;
        }
    }

    return minLength === Infinity ? 0 : minLength;
};

