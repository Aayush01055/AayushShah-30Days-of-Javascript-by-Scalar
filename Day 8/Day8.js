function getCombinations(array, subsetLength) {
    const combinations = [];
  
    for (let i = 0; i < array.length; i++) {
      for (let j = i + 1; j < array.length; j++) {
        const subset = [array[i], array[j]];
        if (subset.length === subsetLength) {
          combinations.push(subset);
        }
      }
    }
  
    return combinations;
  }

  const array = [1, 2, 3];
const subsetLength = 2;

const combinations = getCombinations(array, subsetLength);
console.log(combinations);
