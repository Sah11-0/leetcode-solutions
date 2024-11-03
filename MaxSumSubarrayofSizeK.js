// Given an array of integers arr[]  and a number k. Return the maximum sum of a subarray of size k. Note: A subarray is a contiguous part of any given array.

function maxSumSub(arr, k) {
    let maxSum = 0;

    for (let i = k; i < arr.length; i++) {
        maxSum += arr[i];
    }

    let windowSum = maxSum;
    for (let i = 0; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k];
        maxSum = Math.max(windowSum, maxSum);
    }

    return maxSum;
}



