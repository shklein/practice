function geometry (x, y, z) {
  var p = (x + y + z) * .5;
  console.log("Perimeter is " + p + ".");

var area = Math.sqrt(p * (p-x) * (p-y) * (p-z));

console.log("Area is " + area + ".")

}

geometry(5, 6, 7);
geometry(2, 3, 4);
