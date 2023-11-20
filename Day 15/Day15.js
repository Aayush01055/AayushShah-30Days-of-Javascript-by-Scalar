function string_chop(str, size=str.length)
{
    let arr=[];

    for(let i=0;i<str.length;i=i+size)
    {
        let a=str.slice(i,i+size);
        arr.push(a);
    }
    return arr;
}
console.log(string_chop('Scaler'));
console.log(string_chop('Scaler',2));
