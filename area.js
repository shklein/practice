function geometry (x, y, z) {
  var p = (x + y + z) * .5;
  console.log("Perimeter is " + p + ".");

var a = (p-x);
var b = (p-y);
var c = (p-z);

var area = Math.sqrt(p * a * b * c);

console.log("Area is " + area + ".")

}

geometry(5, 6, 7);
