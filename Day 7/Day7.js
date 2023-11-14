function check50(a,b)
{
    let sum = a+b;
    if(a==50 || b==50 || sum==50)
    {
        return true;
    }
    else
    {
        return false;
    }
}

console.log(check50(50,50));
console.log(check50(20,50));
console.log(check50(30,10));
