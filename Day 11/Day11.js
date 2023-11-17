var student=
{
    name:"David Rayy",
    sclass:"VI",
    rollno:12
};

function properties(obj)
{
    return Object.keys(obj).join(",");
}

console.log(properties(student));   