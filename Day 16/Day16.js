function sumArray(arr) 
{
    return arr.reduce((acc, curr) => acc + curr, 0);
}
let arr=[1,2,5,7,88,99];

console.log(sumArray(arr))
