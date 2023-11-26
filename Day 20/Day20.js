function findFirstNegative(arr)
{
    const firstnegative=arr.find(
        arr=>arr<0
    );
    return firstnegative;
}

const arr=[1,2,3,-4,5,6,-7,8,9];
console.log(findFirstNegative(arr));