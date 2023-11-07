
function capitalizeFirstLetters(inputString) {
    // Get the input string from the input field
    // Capitalize the first letter of each word
    const capitalizedString = inputString.split(' ')
        .map(word => word[0].toUpperCase() + word.slice(1))
        .join(' ');

    return words.join(' ');
}

console.log(capitalizeFirstLetters('hello world'));
