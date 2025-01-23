//Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value.

async function sleep(millis) {
    return new Promise(resolve => {
        setTimeout(resolve, millis);
    });
}

//solution 2
async function sleep(millis) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('resolved');
        }, millis);
    });
}