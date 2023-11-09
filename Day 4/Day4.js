function trianglearea(sidea,sideb,sidec)
{
    var s=(sidea+sideb+sidec)/2;
    var calc=s*(s-sidea)*(s-sideb)*(s-sidec);
    var area=Math.sqrt(calc).toFixed(4);
    return area;
}

var sideA=5;
var sideB=6;
var sideC=7;

console.log("Area of trinagle = "+trianglearea(sideA,sideB,sideC))