// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

var maxProfit = function (prices) {
    let sellIdx = prices.length - 1;
    let profit = 0;

    for (let buyIdx = prices.length - 1; buyIdx >= 0; buyIdx--) {
        let buyVal = prices[buyIdx];
        let sellVal = prices[sellIdx];

        if (buyVal - sellVal >= 0) {
            sellIdx = buyIdx;
        } else {
            let price = sellVal - buyVal;
            profit = Math.max(profit, price);
        }
    }
    return profit;
};