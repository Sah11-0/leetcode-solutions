// You are visiting a farm that has a single row of fruit trees arranged from left to right. The trees are represented by an integer array fruits where fruits[i] is the type of fruit the ith tree produces.
// You want to collect as much fruit as possible. However, the owner has some strict rules that you must follow:
// You only have two baskets, and each basket can only hold a single type of fruit. There is no limit on the amount of fruit each basket can hold.
// Starting from any tree of your choice, you must pick exactly one fruit from every tree (including the start tree) while moving to the right. The picked fruits must fit in one of your baskets.
// Once you reach a tree with fruit that cannot fit in your baskets, you must stop.
// Given the integer array fruits, return the maximum number of fruits you can pick.

var totalFruit = function (fruits) {
    let start = 0;
    let maxLength = 0;
    let fruitCount = {};

    for (let end = 0; end < fruits.length; end++) {
        let fruit = fruits[end];
        fruitCount[fruit] = (fruitCount[fruit] || 0) + 1;

        while (Object.keys(fruitCount).length > 2) {
            let fruitAtStart = fruits[start];
            fruitCount[fruitAtStart]--;

            if (fruitCount[fruitAtStart] === 0) {
                delete fruitCount[fruitAtStart];
            }
            start++
        }
        maxLength = Math.max(maxLength, end - start + 1);

    }
    return maxLength;

};