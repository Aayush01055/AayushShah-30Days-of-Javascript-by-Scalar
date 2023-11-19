function memoize(func)
{
    const cache = {};

    return function(...args)
    {
        const key = JSON.stringify(args);

        if (!(key in cache))
        {
            cache[key] = func.apply(this,args);
        }
        return cache[key];
    };
}

function add(a,b)
{

    return a+b;
}

const memoizedAdd = memoize(add);
const result1=memoizedAdd(1,2);
console.log("Result 1 : ",result1);
const result2=memoizedAdd(1,2);
console.log("Result 2 : ",result2);
const result3=memoizedAdd(2,3);
console.log("Result 3 : ",result3);