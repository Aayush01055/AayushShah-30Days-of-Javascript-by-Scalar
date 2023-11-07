
function reverseNumber(num) {
    const reversedString = num.toString().split('').reverse().join('');
    return parseInt(reversedString);
}

console.log(reverseNumber(12345));
