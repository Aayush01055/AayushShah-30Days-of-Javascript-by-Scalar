const asyncLoop = async (arr, cb) => {
    for (let i of arr) {
        await cb(i);
    }
}

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
asyncLoop(arr, async (i) => {
    await console.log(i);
});