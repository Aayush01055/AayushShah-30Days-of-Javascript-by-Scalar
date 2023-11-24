function allPositive(arr){
    return arr.every(function(value){
        return value > 0;
    })
}

arr=[1,2,3,4,5,6,7,8,9,10];
console.log(allPositive(arr));

arr=[1,2,3,4,5,6,7,8,9,10,-1];
console.log(allPositive(arr));