function getSubsets(arr, length, start = 0, currentSubset = [], result = []) 
{
    if (currentSubset.length === length) 
    {
        result.push([...currentSubset]);
        return;
    }

    for (let i = start; i < arr.length; i++) 
    {
        currentSubset.push(arr[i]);
        getSubsets(arr, length, i + 1, currentSubset, result);
        currentSubset.pop();
    }

    return result;
}

console.log(getSubsets([1, 2, 3], 2));
console.log(getSubsets([1, 2], 2));
console.log(getSubsets([1, 2, 3, 4], 2));
