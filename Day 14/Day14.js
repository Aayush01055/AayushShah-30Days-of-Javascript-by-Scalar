function repeat(str, n=1)
{
    let temp=str;
    for(let i=0;i<n-1;i++)
    {
        str=str+temp;
    }
    return str;
}

console.log(repeat("Ha!"));
console.log(repeat("Ha!",2));
console.log(repeat("Ha!",3));