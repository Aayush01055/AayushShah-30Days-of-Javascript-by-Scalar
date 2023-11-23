function doubleValues(arr) {
    return arr.map(function(val) {
        return val * 2;
    });
}

arr=[1,2,3,4,5,6,7,8,9,10];
console.log(doubleValues(arr));