function getfileext(FileName)
{
    return FileName.split('.').pop();
}

console.log(getfileext('abc.js'));
console.log(getfileext('abc.png'));